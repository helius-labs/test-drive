<script>
    // @ts-nocheck
    import { methods } from "$lib/types/allMethods.js";
    import { currentMethod } from "$lib/stores/currentMethodStore.js";
    import { onMount } from "svelte";
    import { currentRPC } from "$lib/stores/currentMethodStore.js";
    import {
        responseStatus,
        responseStore,
        responseTime,
    } from "$lib/stores/responseStore.js";
    import { methodParamMap } from "$lib/types/methodParamMap";
    let selectedMethod;
    let params = [];

    function updateParams() {
        if (selectedMethod in methods) {
            const method = methods[selectedMethod];
            params = Object.keys(method.defaultParams).map((param) => {
                return {
                    name: param,
                    value: method.defaultParams[param],
                    isOptional: false,
                };
            });

            if (method.optionalParams) {
                const optionalParams = method.optionalParams;
                for (const param in optionalParams) {
                    if (!(param in method.defaultParams)) {
                        params.push({
                            name: param,
                            value: optionalParams[param],
                            isOptional: true,
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
            jsonrpc: "2.0",
            id: "test-drive",
            method: selectedMethod,
            params: [],
        };

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
        responseStatus.set(response.status);
        responseStore.set(JSON.stringify(data, null, 2));
        responseTime.set(duration.toFixed(2));
        return data.result;
    }
</script>

<div class="m-5 p-2 text-black">
    <h1 class="text-2xl font-semibold">Request</h1>
    <div class="rounded border">
        <h1 class="rounded-t bg-[#929498] p-2 text-lg font-semibold">
            Parameters for {selectedMethod}
        </h1>
        <div class="max-h-96 overflow-y-auto">
            <table class="w-full overflow-y-scroll border">
                <thead>
                    <!-- header row -->
                </thead>
                <tbody>
                    {#each params as param}
                        <tr class="border">
                            <td class="p-1">
                                <div class="flex flex-col items-center">
                                    <h1 class="text-base font-semibold italic">
                                        {param.name}
                                    </h1>
                                    <h1
                                        class="text-sm font-semibold text-red-600"
                                    >
                                        {typeof param.value}
                                    </h1>
                                    {#if param.isOptional}
                                        <h1
                                            class="text-sm font-semibold text-black"
                                        >
                                            Optional
                                        </h1>
                                    {/if}
                                </div>
                            </td>
                            <td class="p-1">
                                <div class="m-1">
                                    <input
                                        bind:value={param.value}
                                        class="w-full rounded bg-RequestInputBG p-2"
                                        placeholder="default value set here"
                                    />
                                </div>
                            </td>
                        </tr>
                    {/each}
                </tbody>
            </table>
            <tfoot><tr /></tfoot>
        </div>
        <div class="flex justify-end border p-2">
            <button
                class="w-20 rounded bg-HeliusOrange p-2 text-white"
                on:click={handleRun}
            >
                Run
            </button>
        </div>
    </div>
</div>
