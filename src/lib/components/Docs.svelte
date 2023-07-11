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
    import { currentMethod } from "$lib/stores/current-method.js";
    import { methods } from "$lib/types/doc.js";
    import { fly } from "svelte/transition";

    let methodData = null;
    let parameters = [];
    let results = [];

    // Hovered status for copy button.
    let isHovered = false;

    // Handle copy for code sample
    function handleCopy() {
        const codeExample = methodData?.codeExample;
        if (codeExample) {
            const el = document.createElement("textarea");
            el.value = codeExample;
            document.body.appendChild(el);
            el.select();
            document.execCommand("copy");
            document.body.removeChild(el);
        }
    }

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
                        <div class="relative m-2">
                            <h1 class="my-2 text-xl font-bold">Code Sample</h1>
                            <div
                                class="mockup-code relative m-2 text-sm text-white"
                                on:mouseenter={() => (isHovered = true)}
                                on:mouseleave={() => (isHovered = false)}
                            >
                                <!-- svelte-ignore a11y-click-events-have-key-events -->
                                <div
                                    class="clipboard-icon absolute top-1 right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-800 bg-opacity-20 transition duration-300"
                                    on:click={handleCopy}
                                >
                                    {#if isHovered}
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
                                    {/if}
                                </div>
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
