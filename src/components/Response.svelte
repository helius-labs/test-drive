<script>
    import {
        responseStore,
        responseStatus,
        responseTime,
    } from "$lib/stores/responseStore.js";
</script>

<div class="my-5 min-h-full p-2 text-white">
    <div class="rounded  shadow-lg">
        <h1 class="rounded-t bg-HeliusBlack p-2 text-lg font-semibold">
            JSON:
        </h1>
        <div
            class="flex max-h-96 flex-col overflow-y-auto bg-[#282935] p-4 text-white"
        >
            <pre><code
                    class="text-xs"
                    style="word-break: break-all;">{$responseStore}</code
                ></pre>
        </div>
        <div class="flex items-center justify-between  p-2">
            <div class="h-min rounded bg-green-500 p-2 text-center text-white">
                {$responseStatus}
            </div>
            <div class="h-min rounded  p-2 px-5 text-black">
                <h1 class="font-semibold">Time</h1>
                <h1 class="text-sm">{$responseTime} MS</h1>
            </div>
        </div>
    </div>
</div>
