<script>
    // @ts-nocheck
    import { currentMethod } from "$lib/stores/current-method.js";
    import { methods } from "$lib/types/doc.js";
    import { fly } from "svelte/transition";

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
    let selectedMethod;
    $: {
        selectedMethod = $currentMethod;
    }
</script>

{#if selectedMethod}
    <div
        class="drop-shadow-1xl flex justify-center"
        transition:fly={{ y: 200, duration: 1600 }}
    >
        <div
            class="m-3 w-3/4 rounded-xl border-2 border-gray-500 border-opacity-80 p-4"
        >
            <div class="rounded  shadow-lg">
                <div class="flex text-white">
                    <div class="w-1/2">
                        <div class="m-2">
                            <h1 class="my-2 text-xl font-bold">Parameters</h1>
                            {#each parameters as { name, description, type }}
                                <ul class="text-gray-300">
                                    {name}: {description} ({type})
                                </ul>
                            {/each}
                        </div>
                        <div class="m-2">
                            <h1 class="my-2 text-xl font-bold">Code Sample</h1>
                            <div class="mockup-code m-2 text-sm text-white">
                                <pre><code>{methodData?.codeExample}</code
                                    ></pre>
                            </div>
                        </div>
                    </div>
                    <div class="m-2 ">
                        <h1 class="my-2 my-2 text-xl font-bold">Result</h1>
                        <p>{methodData?.result.description}</p>
                        {#each results as { name, description, type }}
                            <ul class="text-gray-300">
                                {name}: {description} ({type})
                            </ul>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
