<script>
    import { responseStore } from "$lib/stores/responseStore.js";
</script>

<div class="m-5 p-2 text-black">
    <h1 class=" text-2xl font-semibold">Response</h1>
    <div class=" rounded border">
        <h1 class=" rounded-t bg-[#929498] p-2 text-lg font-semibold">JSON:</h1>
        <div class=" bg-[#282935] p-4 text-white">
            <pre><code style="word-break: break-all;">{$responseStore}</code
                ></pre>
        </div>
        <div class=" flex items-center justify-between border p-2">
            <div class=" h-min rounded bg-green-500 p-2 text-center text-white">
                200 OK
            </div>
            <div class=" h-min rounded bg-[#D9D9D9] p-2 px-5 text-black">
                <h1 class="font-semibold">Time</h1>
                <h1 class="text-sm">12000 MS</h1>
            </div>
        </div>
    </div>
</div>
