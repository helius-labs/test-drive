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
        copyResponse,
        isLoading,
    } from "$lib/stores/response-store.js";
    import { currentMethod } from "$lib/stores/current-method.js";
    import formatHighlight from "json-format-highlight";
    import { fly } from "svelte/transition";
    import { badgeClicked } from "$lib/stores/current-method";
    function handleClick() {
        badgeClicked.set(true);
    }
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
        copyToClipboard($copyResponse);
    }
    let responseStatus;
    let selectedMethod;
    let data;
    $: {
        selectedMethod = $currentMethod;
        responseStatus = $isResponse;
        data = $responseStore;
    }

    $: metadataHTML = formatHighlight(
        "\n  " + JSON.stringify(data || {}, null, 2),
        {
            keyColor: "#a5a3a3",
            numberColor: "#e8a034",
            stringColor: "#24ae67",
        }
    );
</script>

{#if $isLoading == true}
    <img
        class="m-auto w-20 justify-center"
        src="spinner.svg"
        alt=""
    />
{/if}
{#if selectedMethod && responseStatus == "true" && $isLoading == false}
    <div class="max-h-100 p-2 text-white opacity-80">
        <div
            class="max-h-100 rounded-xl border border-zinc-900 border-opacity-50 p-4 shadow-lg"
        >
            <div class="flex items-center justify-between">
                <h1 class="rounded-t p-2 text-xl font-semibold">Output</h1>
                <div class="badge-outline badge mx-2 flex h-8 flex-row">
                    Time {$responseTime} MS
                </div>
            </div>
            {#if $responseStore !== ""}
                <div
                    class="relative mt-2 flex max-h-96 flex-col overflow-y-auto rounded-lg bg-black p-4 text-white"
                >
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <div
                        class="clipboard-icon absolute top-2 right-2 flex h-6 w-6 cursor-pointer rounded-full bg-gray-800 transition duration-300"
                        on:click={handleCopy}
                    >
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
                    </div>
                    <pre>
                    <code class="code bordered whitespace-pre text-xs">
                        {@html metadataHTML}
                    </code>
                </pre>
                </div>
            {/if}
        </div>
    </div>
{/if}
{#if selectedMethod && responseStatus == "false"}
    <div
        class="min-h-96 z-1 relative p-2 text-white opacity-90"
        transition:fly={{ y: 200, duration: 1500 }}
    >
        <div
            class="min-h-100 rounded-xl border border-zinc-900 border-opacity-80 p-4 opacity-50 shadow-lg"
        >
            <div class="flex justify-between">
                <h1 class="rounded-t p-2 text-xl font-semibold">Output</h1>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <div
                    class="badge-outline badge mx-2 flex h-8 flex-row"
                    on:click={handleClick}
                >
                    No response
                </div>
            </div>
            <div class="alert mt-5 justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="h-6 w-6 shrink-0 stroke-info"
                    ><path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    /></svg
                >
                <span
                    >Pick an RPC method and click Run to get a response.
                </span>
            </div>
        </div>
    </div>
{/if}
