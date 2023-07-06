<script>
    // @ts-nocheck
    import { methods } from "$lib/api/allMethods.js";
    import { currentMethod } from "$lib/stores/currentMethodStore.js";
    import { onMount } from "svelte";

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

    function handleRun() {
        const requestData = {
            jsonrpc: "2.0",
            id: 1,
            method: selectedMethod,
            params: params.map((param) => param.value),
        };

        console.log(requestData);
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
