<style>
    .clipboard-icon:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .clipboard-icon svg {
        width: 1.5rem;
        height: 1.5rem;
        color: white;
    }

    .dropdown-arrow {
        position: absolute;
        top: 50%;
        right: 0.75rem;
        transform: translateY(-50%);
    }

    .dropdown-arrow svg {
        width: 1rem;
        height: 1rem;
        fill: gray;
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
    <div class="drop-shadow-1xl flex justify-center">
        <div
            class="m-3 w-full rounded-xl border border-zinc-800 border-opacity-50 p-4 md:w-3/4"
        >
            <div class="rounded shadow-lg">
                <div class="flex flex-col text-white md:flex-row">
                    <div class="mx-2 w-full md:w-1/2">
                        <div
                            class="collapse my-2 rounded-xl border border-zinc-800 border-opacity-50 bg-transparent"
                        >
                            <input
                                type="checkbox"
                                id="parameters-checkbox"
                                class="collapse-toggle"
                            />
                            <div
                                class="collapse-title relative text-xl font-bold"
                            >
                                <label for="parameters-checkbox"
                                    >Parameters</label
                                >
                                <div class="dropdown-arrow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 15l-6-6h12l-6 6z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div class="collapse-content">
                                {#each parameters as { name, description, type }}
                                    <div class="flex items-center">
                                        <div class="h-full w-1 bg-gray-500" />
                                        <li class="text-gray-300">
                                            <strong>{name}</strong>: {description}
                                            ({type})
                                        </li>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                    <div class="mx-2 w-full md:w-1/2">
                        <div
                            class="collapse my-2 rounded-xl border  border-zinc-800 border-opacity-50 bg-transparent"
                        >
                            <input
                                type="checkbox"
                                id="result-checkbox"
                                class="collapse-toggle"
                            />
                            <div
                                class="collapse-title relative text-xl font-bold"
                            >
                                <label for="result-checkbox">Result</label>
                                <div class="dropdown-arrow">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            d="M12 15l-6-6h12l-6 6z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div class="collapse-content">
                                <div class="flex items-center">
                                    <div class="h-full w-1 bg-gray-500" />
                                    <p class="pl-2">
                                        {methodData?.result.description}
                                    </p>
                                </div>
                                {#each results as { name, description, type }}
                                    <div class="flex items-center">
                                        <div class="h-full w-1 bg-gray-500" />
                                        <li class="pl-2 text-gray-300">
                                            {name}: {description} ({type})
                                        </li>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-2 h-full border-l-2 border-gray-500" />
                </div>
                <div class="md:2/5 mx-2 w-full">
                    <div
                        class="collapse my-2 rounded-xl border border-zinc-800 border-opacity-50 bg-transparent"
                    >
                        <input
                            type="checkbox"
                            id="code-sample-checkbox"
                            class="collapse-toggle"
                        />
                        <div
                            class="collapse-title relative text-xl font-bold text-white"
                        >
                            <label for="code-sample-checkbox">Code Sample</label
                            >
                            <div class="dropdown-arrow">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M12 15l-6-6h12l-6 6z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div class="collapse-content">
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
                </div>
                <div class="md:hidden">
                    <div class="h-100 mt-2 border-t-2 border-gray-500" />
                </div>
            </div>
        </div>
    </div>
{/if}
