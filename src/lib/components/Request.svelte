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
    .scrollbar::-webkit-scrollbar {
        width: 6px;
        height: 6px;
      }
    
    .scrollbar::-webkit-scrollbar-thumb {
    background: #18181b;
    border-radius: 100vh;
    scroll-padding: 8px;
    padding: 8px;
    }
</style>

<script>
    // @ts-nocheck
    import { methods } from "$lib/types/all-methods.js";
    import {
        currentMethod,
        currentRPC,
        noParams,
    } from "$lib/stores/current-method.js";
    import { fly } from "svelte/transition";
    import capitalize from "$lib/utils/capitalize";
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
            class="rounded rounded-xl border-2 border-zinc-900 border-opacity-50 p-4 shadow-lg space-y-6"
        >
            <h1 class="sp-2 mb-2 rounded-t text-xl font-semibold text-zinc-300 tracking-widest">
                PARAMETERS
            </h1>

            {#if params.length === 0}
                <p class="text-gray-400">No custom parameters available.</p>
            {/if}
            <div class="max-h-96 overflow-y-auto scrollbar">
                <table class="w-full overflow-y-scroll">
                    <thead>
                        <!-- header row -->
                    </thead>
                    <tbody class="text-black">
                        {#each params as param}
                            <tr class="border-zinc-900 opacity-80">
                                <td
                                    class="flex items-center justify-between p-1"
                                >
                                    <div
                                        class="mt-2 -mb-1 flex flex-row items-center"
                                    >
                                        <h1
                                            class="mx-2 text-sm font-medium text-zinc-300 tracking-widest"
                                        >
                                            {param.name}
                                        </h1>
                                    </div>
                                    <div
                                        class="mt-2 -mb-1 flex flex-row items-center"
                                    >
                                        <div
                                            class="text-color badge-outline badge badge rounded-md bg-zinc-900 border-zinc-800 text-gray-400 tracking-widest font-medium text-xs mx-2 p-2"

                                        >
                                            {(typeof param.value).toUpperCase()}
                                        </div>
                                        {#if param.isOptional}
                                            <div
                                            class="text-color badge-outline badge badge rounded-md bg-zinc-900 border-zinc-800 text-gray-400 tracking-widest font-medium text-xs mx-2 p-2"
                                            >
                                                <h1
                                                    class=""
                                                >
                                                    OPTIONAL
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
                                                placeholder=""
                                                class="input-bordered input min-w-full max-w-md border-zinc-900 bg-transparent text-white"
                                            />
                                        {:else if param.type === "boolean"}
                                            <select
                                                bind:value={param.value}
                                                class="input-bordered input min-w-full rounded border-zinc-900 bg-transparent p-2 text-white"
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
                                                placeholder=""
                                                class="input-bordered input input-md min-w-full max-w-md border-zinc-900 bg-transparent text-white"
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
            <div class="flex justify-end p-2 py-8">
                <button
                    class="xl:text-md btn-sm btn w-full h-10 rounded-md border-none bg-white text-sm font-medium tracking-widest text-black shadow-md duration-200 hover:bg-zinc-200"
                    on:click={runMethod}
                >
                    Run
                </button>
            </div>
        </div>
        {#if rpcError}
            <div class="toast-center toast z-50 w-1/4 text-center">
                <div class="alert alert-error justify-center">
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
                    <span>Please submit a Solana RPC above.</span>
                </div>
            </div>
        {/if}
    </div>
{/if}
