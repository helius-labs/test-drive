<style>
    .text-color.orange {
        color: rgb(247, 187, 75);
    }

    .text-color.green {
        color: rgb(62, 224, 62);
    }

    .text-color.blue {
        color: rgb(70, 131, 229);
    }
</style>

<script>
    // @ts-nocheck
    import { methods } from "$lib/types/all-methods.js";
    import { currentMethod } from "$lib/stores/current-method.js";
    import { currentRPC } from "$lib/stores/current-method.js";
    import { fly } from "svelte/transition";
    import capitalize from "$lib/utils/utils";
    import { updateParams } from "$lib/utils/params";
    import { handleRun } from "$lib/utils/handle-run";

    let selectedMethod;
    let rpcError = false;
    let params = updateParams($currentMethod, methods);

    $: {
        selectedMethod = $currentMethod;
        params = updateParams(selectedMethod, methods);
    }

    async function runMethod() {
        const { rpcError: error, result } = await handleRun(
            selectedMethod,
            params,
            $currentRPC
        );
        rpcError = error;
    }
</script>

{#if selectedMethod}
    <div
        class="min-h-100 my-1 p-2 text-white"
        transition:fly={{ y: 200, duration: 1600 }}
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
                                <td
                                    class="flex items-center justify-between p-1"
                                >
                                    <div
                                        class="mt-2 -mb-1 flex flex-row items-center"
                                    >
                                        <h1
                                            class="mx-2 text-base font-semibold text-white"
                                        >
                                            {param.name}
                                        </h1>
                                    </div>
                                    <div
                                        class="mt-2 -mb-1 flex flex-row items-center"
                                    >
                                        <div
                                            class="text-color badge-outline badge badge mx-2 p-2"
                                            class:orange={typeof param.value ===
                                                "string"}
                                            class:green={typeof param.value ===
                                                "number"}
                                            class:blue={typeof param.value ===
                                                "boolean"}
                                        >
                                            {capitalize(typeof param.value)}
                                        </div>
                                        {#if param.isOptional}
                                            <div
                                                class="badge-outline badge badge mx-2 p-2 text-gray-300"
                                            >
                                                <h1
                                                    class="text-xs font-semibold italic text-gray-500"
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
                                                class="input-bordered input min-w-full max-w-md border-gray-500 bg-transparent text-white"
                                            />
                                        {:else if param.type === "boolean"}
                                            <select
                                                bind:value={param.value}
                                                class="input-bordered input min-w-full rounded border-gray-500 bg-transparent p-2 text-white"
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
                                                class="input-bordered input input-md min-w-full max-w-md border-gray-500 bg-transparent text-white"
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
                    on:click={runMethod}
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
