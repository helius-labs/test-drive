<script>
    // @ts-nocheck
    import { methods } from "$lib/types/all-methods.js";
    import { currentMethod } from "$lib/stores/current-method.js";
    import { onMount } from "svelte";
    import { currentRPC } from "$lib/stores/current-method.js";
    import {
        isResponse,
        responseStore,
        responseTime,
    } from "$lib/stores/response-store.js";
    import { methodParamMap } from "$lib/types/method-params.js";
    import { fly } from "svelte/transition";

    let responseStatus;
    let selectedMethod;
    let params = [];
    let rpcError = false;

    function updateParams() {
        if (selectedMethod in methods) {
            const method = methods[selectedMethod];
            params = Object.keys(method.defaultParams).map((param) => {
                return {
                    isOptional: false,
                    name: param,
                    type: typeof method.defaultParams[param],
                    value: method.defaultParams[param],
                };
            });

            if (method.optionalParams) {
                const optionalParams = method.optionalParams;
                for (const param in optionalParams) {
                    if (!(param in method.defaultParams)) {
                        params.push({
                            isOptional: true,
                            name: param,
                            type: typeof optionalParams[param],
                            value: optionalParams[param],
                        });
                    }
                }
            }
        } else {
            params = [];
        }
    }
    onMount(updateParams);

    $: {
        selectedMethod = $currentMethod;
        updateParams();
    }

    async function handleRun() {
        const rpcUrlValue = $currentRPC; // Access the value from the rpcUrl store
        const methodData = methods[selectedMethod];
        let requestData = {
            id: "test-drive",
            jsonrpc: "2.0",
            method: selectedMethod,
            params: [],
        };
        if (rpcUrlValue === "") {
            rpcError = true;
            return;
        }
        rpcError = false;
        const requestParams = {};
        params.forEach((param) => {
            if (param.value !== "") {
                requestParams[param.name] = param.value;
            }
        });

        if (methodData.optionalParams) {
            const optionalParams = methodData.optionalParams;
            for (const param in optionalParams) {
                const defaultValue = optionalParams[param];
                if (!requestParams[param]) {
                    requestParams[param] = defaultValue;
                }
            }
        }
        if (methodData.paramsFormat === "array") {
            if (Object.keys(requestParams).length > 0) {
                requestData.params = [requestParams];
            }
            const paramName = methodParamMap[methodData.name];
            if (paramName) {
                let paramValue = requestParams[paramName];
                // Convert the param to int if needed
                const methodsNeedConverting = [
                    "getBlocks",
                    "getBlockCommitment",
                    "getBlockTime",
                    "getSlotLeaders",
                    "getMinimumBalanceForRentExemption",
                ];
                if (methodsNeedConverting.includes(methodData.name)) {
                    paramValue = parseInt(paramValue);
                }

                requestData.params = [paramValue];
            }
        } else if (methodData.paramsFormat === "object") {
            requestData.params = requestParams;
        } else if (methodData.paramsFormat === "none") {
            delete requestData.params;
        }

        console.log(requestData); // Log the requestData object for debugging

        const result = await callRPC(requestData, rpcUrlValue);
        // Handle the result as needed
    }

    async function callRPC(requestData, rpcUrl) {
        const startTime = performance.now();
        const response = await fetch(rpcUrl, {
            body: JSON.stringify(requestData),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        const data = await response.json();
        const endTime = performance.now();
        const duration = endTime - startTime;
        console.log(data);
        isResponse.set("true");
        responseStore.set(JSON.stringify(data, null, 2));
        responseTime.set(duration.toFixed(2));
        return data.result;
    }
</script>

{#if selectedMethod}
    <div
        class="min-h-100 my-1 p-2 text-white"
        transition:fly={{ y: 200, duration: 1500 }}
    >
        <div
            class="rounded rounded-xl border-2 border-gray-500 border-opacity-80 p-4 shadow-lg"
        >
            <h1 class="sp-2 mb-2 rounded-t text-xl font-semibold">
                Parameters
            </h1>
            <div class="max-h-96 overflow-y-auto">
                <table class="w-full overflow-y-scroll">
                    <thead>
                        <!-- header row -->
                    </thead>
                    <tbody class="text-black">
                        {#each params as param}
                            <tr class="border-gray-500">
                                <td class="flex flex-row p-1">
                                    <div class="flex flex-row items-center">
                                        <h1
                                            class="mx-2 text-base font-semibold text-white"
                                        >
                                            {param.name}
                                        </h1>
                                        <div
                                            class="badge-outline badge badge mx-2 p-2 text-gray-300"
                                        >
                                            {typeof param.value}
                                        </div>

                                        {#if param.isOptional}
                                            <div
                                                class="badge-outline badge badge mx-2 p-2 text-gray-300"
                                            >
                                                <h1
                                                    class="text-xs font-semibold italic text-gray-400"
                                                >
                                                    Optional
                                                </h1>
                                            </div>
                                        {/if}
                                    </div>
                                </td>
                                <td class="flex w-full flex-row p-1">
                                    <div class="m-1 w-full">
                                        {#if param.type === "number"}
                                            <input
                                                type="number"
                                                bind:value={param.value}
                                                placeholder="input here"
                                                class="input-bordered input w-full max-w-md border-gray-500 bg-transparent text-white"
                                            />
                                        {:else if param.type === "boolean"}
                                            <select
                                                bind:value={param.value}
                                                class="input-bordered input w-full rounded border-gray-500 bg-transparent p-2 text-white"
                                            >
                                                <option value={true}
                                                    >True</option
                                                >
                                                <option value={false}
                                                    >False</option
                                                >
                                            </select>
                                        {:else}
                                            <input
                                                type="text"
                                                bind:value={param.value}
                                                placeholder="input here"
                                                class="input-bordered input w-full max-w-md border-gray-500 bg-transparent text-white"
                                            />
                                        {/if}
                                    </div>
                                </td>
                            </tr>
                        {/each}
                    </tbody>
                </table>
                <tfoot><tr /></tfoot>
            </div>
            <div class="flex justify-end  p-2">
                <button
                    class="btn btn w-full border-none bg-gradient-to-r from-orange-400 to-orange-600 p-2 text-white shadow-md"
                    on:click={handleRun}
                >
                    Run
                </button>
            </div>
        </div>
        {#if rpcError}
            <div class="alert alert-error my-4 justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    /></svg
                >
                <span>Please submit a RPC URL above.</span>
            </div>
        {/if}
    </div>
{/if}
