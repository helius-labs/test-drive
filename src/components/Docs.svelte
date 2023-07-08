<script>
    // @ts-nocheck
    import { currentMethod } from "$lib/stores/currentMethodStore.js";
    import { methods } from "$lib/types/doc.js";
    import { fly } from "svelte/transition";
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
    let selectedMethod;
    $: {
        selectedMethod = $currentMethod;
    }
</script>

{#if selectedMethod}
    <div
        class="drop-shadow-1xl flex justify-center"
        transition:fly={{ y: 200, duration: 2500 }}
    >
        <div class="m-3 w-3/4  p-2">
            <div class="rounded  shadow-lg">
                <h1
                    class="rounded-t bg-[#242934] p-2 text-lg font-semibold text-white"
                >
                    {$currentMethod} Documentation:
                </h1>
                <div class="flex text-black">
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
                            <h1 class="font-semibold underline">
                                Code Sample:
                            </h1>
                            <div class="mockup-code m-2 text-white">
                                <pre><code>{methodData?.codeExample}</code
                                    ></pre>
                            </div>
                        </div>
                    </div>
                    <div class="m-2 ">
                        <h1 class="font-semibold underline">Result:</h1>
                        <p>{methodData?.result.description}</p>
                        {#each results as { name, description, type }}
                            <p>
                                <strong>{name}</strong>: {description} ({type})
                            </p>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
{/if}
