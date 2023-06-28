<script lang="ts">
    let selected;
</script>

<div class="flex justify-center">
    <div class="m-3 w-10/12  p-2 text-black">
        <div class=" rounded border">
            <h1 class=" rounded-t bg-[#929498] p-2 text-lg font-semibold">
                Docs:
            </h1>
            <div class="flex">
                <div class="w-1/2">
                    <div class="m-2">
                        <h1 class="font-semibold underline">Parameters:</h1>
                        <p>{selected}</p>
                    </div>
                    <div class="m-2 ">
                        <h1 class="font-semibold underline">Code Sample:</h1>
                        <div class="mockup-code m-2">
                            <pre><code>curl etc</code></pre>
                        </div>
                    </div>
                </div>
                <div class="m-2 ">
                    <h1 class="font-semibold underline">Response:</h1>
                </div>
            </div>
        </div>
    </div>
</div>
