<script>
    import { methods } from "$lib/types/all-methods.js";
    import { currentMethod, currentRPC } from "$lib/stores/current-method.js";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    let questions = Object.keys(methods).map((method, index) => {
        return { id: index + 1, text: method };
    });
    
    export let answer = "";
    
    if (typeof window !== 'undefined') {
        // Initialize from localStorage
        answer = localStorage.getItem('rpcUrl') || "";
    }
    
    let isVisible = false;

    $: {
        if (!answer && typeof window !== 'undefined') {
            answer = localStorage.getItem('rpcUrl') || "";
        }

        let rpcUrlValue = answer;
        
        if (!rpcUrlValue) {
            currentRPC.set("https://api.mainnet-beta.solana.com");
        }
        if (!rpcUrlValue.startsWith("https://") && rpcUrlValue !== "") {
            rpcUrlValue = "https://" + rpcUrlValue;
        }
        currentRPC.set(rpcUrlValue);

        if (typeof window !== 'undefined') {
            localStorage.setItem('rpcUrl', rpcUrlValue); // Save to localStorage
        }
    }

    onMount(() => {
        setTimeout(() => {
            isVisible = true;
        }, 100);
    });
</script>

{#if isVisible}
    <div
        class="my-2 flex justify-center"
        transition:fly={{ y: 200, duration: 1800 }}
    >
        <form class="flex w-full justify-center">
            <div
                class="m-3 w-full items-center justify-center rounded p-2 hover:shadow-lg md:flex md:w-3/4"
            >
                <div class="m-1 w-full md:w-2/6 ">
                    <select
                        class="select-bordered select select-md w-full max-w-lg border-zinc-900 bg-zinc-900 text-sm text-gray-300"
                        bind:value={$currentMethod}
                    >
                        <option
                            disabled
                            selected
                            value="">Select a method</option
                        >
                        {#each questions as question}
                            <option value={question.text}>
                                {question.text}
                            </option>
                        {/each}
                    </select>
                </div>
                <div class="m-1 w-full">
                    <input
                        type="text"
                        bind:value={answer}
                        placeholder="Drop a Solana RPC endpoint here"
                        class="input-bordered input w-full border-zinc-900 bg-transparent text-gray-300"
                    />
                </div>
            </div>
        </form>
    </div>
{/if}
