<script>
    // @ts-nocheck
    import { currentMethod } from "$lib/stores/currentMethodStore.js";
    import { methods } from "$lib/api/doc.js";
    import { onMount } from "svelte";

    let methodData = null;
    let parameters = [];
    let results = [];

    $: {
        methodData = methods[$currentMethod];
        parameters = flattenFields(methodData?.parameters?.required).concat(
            flattenFields(methodData?.parameters?.optional)
        );
        results = flattenFields(methodData?.result?.fields);
    }

    function flattenFields(obj, prefix = "") {
        let result = [];
        for (let key in obj) {
            if (obj[key].fields) {
                result = result.concat(
                    flattenFields(obj[key].fields, `${prefix}${key}.`)
                );
            } else {
                result.push({
                    description: obj[key].description,
                    name: `${prefix}${key}`,
                    type: obj[key].type,
                });
            }
        }
        return result;
    }
</script>

<div class="flex justify-center">
    <div class="m-3 w-10/12  p-2 text-black">
        <div class="rounded border">
            <h1 class="rounded-t bg-[#929498] p-2 text-lg font-semibold">
                {$currentMethod} Documentation:
            </h1>
            <div class="flex">
                <div class="w-1/2">
                    <div class="m-2">
                        <h1 class="font-semibold underline">Parameters:</h1>
                        {#each parameters as { name, description, type }}
                            <p>
                                <strong>{name}</strong>: {description} ({type})
                            </p>
                        {/each}
                    </div>
                    <div class="m-2 ">
                        <h1 class="font-semibold underline">Code Sample:</h1>
                        <div class="mockup-code m-2">
                            <pre><code>{methodData?.codeExample}</code></pre>
                        </div>
                    </div>
                </div>
                <div class="m-2 ">
                    <h1 class="font-semibold underline">Result:</h1>
                    <p>{methodData?.result.description}</p>
                    {#each results as { name, description, type }}
                        <p><strong>{name}</strong>: {description} ({type})</p>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
