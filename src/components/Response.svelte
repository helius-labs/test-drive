<script>
    // @ts-nocheck

    import {
        responseStore,
        responseStatus,
        responseTime,
    } from "$lib/stores/responseStore.js";
    import { currentMethod } from "$lib/stores/currentMethodStore.js";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";
    let isVisible = false;

    onMount(() => {
        setTimeout(() => {
            isVisible = true;
        }, 100);
    });
    let selectedMethod;
    $: {
        selectedMethod = $currentMethod;
    }
</script>

{#if selectedMethod}
    <div
        class="my-1 min-h-full p-2 text-white"
        transition:fly={{ y: 200, duration: 2200 }}
    >
        <div class="rounded  shadow-lg">
            <h1 class="rounded-t bg-[#242934] p-2 text-lg font-semibold">
                JSON:
            </h1>
            <div
                class="flex max-h-96 flex-col overflow-y-auto bg-[#191d24] p-4 text-white"
            >
                <pre><code
                        class="text-xs"
                        style="word-break: break-all;">{$responseStore}</code
                    ></pre>
            </div>
            <div class="flex items-center justify-between p-2">
                <button
                    class="btn-disabled btn-success btn bg-gradient-to-r from-green-400 to-green-500 text-white"
                    >{$responseStatus}</button
                >
                <button
                    class="btn-disabled btn flex h-min flex-col border-gray-500 bg-gradient-to-r from-gray-500 to-gray-700 text-white"
                    ><h1 class="font-semibold">Time</h1>
                    <h1 class="text-sm">{$responseTime} MS</h1></button
                >
            </div>
        </div>
    </div>
{/if}
