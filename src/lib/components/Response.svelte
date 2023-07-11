<style>
    .clipboard-icon:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .clipboard-icon svg {
        width: 1.5rem;
        height: 1.5rem;
        color: white;
    }
</style>

<script>
    // @ts-nocheck
    import {
        responseStore,
        isResponse,
        responseTime,
    } from "$lib/stores/response-store.js";
    import { currentMethod } from "$lib/stores/current-method.js";
    import { fly } from "svelte/transition";

    let isHovered = false;

    function copyToClipboard(text) {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                return;
            })
            .catch((error) => {
                throw error;
            });
    }

    function handleCopy() {
        copyToClipboard($responseStore);
    }
    let responseStatus;
    let selectedMethod;
    $: {
        selectedMethod = $currentMethod;
        responseStatus = $isResponse;
    }
</script>

{#if selectedMethod && responseStatus == "true"}
    <div class="max-h-100 p-2 text-white">
        <div
            class="max-h-100 rounded-xl border-2 border-gray-500 border-opacity-80 p-4 shadow-lg"
        >
            <div class="flex items-center justify-between">
                <h1 class="rounded-t p-2 text-xl font-semibold">Response</h1>
                <div class="badge-outline badge mx-2 flex h-8 flex-row">
                    Time {$responseTime} MS
                </div>
            </div>
            {#if $responseStore !== ""}
                <div
                    class="relative mt-2 flex max-h-96 flex-col overflow-y-auto rounded-lg bg-[#191d24] p-4 text-left text-white"
                    on:mouseenter={() => (isHovered = true)}
                    on:mouseleave={() => (isHovered = false)}
                >
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        class="clipboard-icon absolute top-2 right-2 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-gray-800 transition duration-300"
                        on:click={handleCopy}
                    >
                        {#if isHovered}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <rect
                                    x="9"
                                    y="9"
                                    width="13"
                                    height="13"
                                    rx="2"
                                    ry="2"
                                />
                                <path d="M5 15V5H9M19 15V5H9" />
                            </svg>
                        {/if}
                    </div>
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
        class="min-h-96 p-2 text-white opacity-50"
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
