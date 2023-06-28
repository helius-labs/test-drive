<script>
    let code = `{
  "jsonrpc": "2.0",
  "result": {
    "meta": {
      "err": null,
      "fee": 5000,
      "innerInstructions": [],
      "postBalances": [499998932500, 26858640, 1, 1, 1],
      "postTokenBalances": [],
      "preBalances": [499998937500, 26858640, 1, 1, 1],
      "preTokenBalances": [],
      "rewards": [],
      "status": {
        "Ok": null
      }
    }
  }
 }`;
</script>

<div class="m-5 p-2 text-black">
    <h1 class=" text-2xl font-semibold">Response</h1>
    <div class=" rounded border">
        <h1 class=" rounded-t bg-[#929498] p-2 text-lg font-semibold">JSON:</h1>
        <div class=" bg-[#282935] text-white ">
            <pre><code style="white-space: pre-wrap;">{code}</code></pre>
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
