<script>
    // @ts-nocheck

    import {
        responseStore,
        isResponse,
        responseTime,
    } from "$lib/stores/response-store.js";
    import { currentMethod } from "$lib/stores/current-method.js";
    import { fly } from "svelte/transition";

    let responseStatus;
    let selectedMethod;
    $: {
        selectedMethod = $currentMethod;
        responseStatus = $isResponse;
    }
</script>

{#if selectedMethod && responseStatus == "true"}
    <div class="min-h-100 p-2 text-white">
        <div
            class="min-h-100 rounded-xl border-2 border-gray-500 border-opacity-80 p-4 shadow-lg"
        >
            <div class="flex items-center justify-between">
                <h1 class="rounded-t p-2 text-xl font-semibold">Response</h1>
                <div class="badge-outline badge mx-2 flex h-8 flex-row">
                    Time {$responseTime} MS
                </div>
            </div>
            {#if $responseStore !== ""}
                <div
                    class="mt-2 flex max-h-96 flex-col overflow-y-auto rounded-lg bg-[#191d24] p-4 text-left text-white"
                >
                    <pre>
                    <code
                            class="bordered text-xs"
                            style="word-break: break-all;">
                        {$responseStore}
                    </code>
                </pre>
                </div>
            {/if}
        </div>
    </div>
{/if}
{#if selectedMethod && responseStatus == "false"}
    <div
        class="min-h-100 p-2 text-white opacity-50"
        transition:fly={{ y: 200, duration: 1500 }}
    >
        <div
            class="min-h-100 rounded-xl border-2 border-gray-500 border-opacity-80 p-4 opacity-50 shadow-lg"
        >
            <div class="flex items-center justify-between">
                <h1 class="rounded-t p-2 text-xl font-semibold">Response</h1>
                <div class="badge-outline badge mx-2 flex h-8 flex-row">
                    No response
                </div>
            </div>
        </div>
    </div>
{/if}
