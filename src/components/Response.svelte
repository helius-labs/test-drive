<script>
    // @ts-nocheck

    import {
        responseStore,
        responseStatus,
        responseTime,
    } from "$lib/stores/responseStore.js";
    import { currentMethod } from "$lib/stores/currentMethodStore.js";

    let selectedMethod;
    $: {
        selectedMethod = $currentMethod;
    }
</script>

{#if selectedMethod}
    <div class="my-5 min-h-full p-2 text-white">
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
                <button class="btn-success btn text-white"
                    >{$responseStatus}</button
                >
                <button
                    class="btn flex h-min flex-col border-gray-500 bg-gray-500 text-white"
                    ><h1 class="font-semibold">Time</h1>
                    <h1 class="text-sm">{$responseTime} MS</h1></button
                >
            </div>
        </div>
    </div>
{/if}
