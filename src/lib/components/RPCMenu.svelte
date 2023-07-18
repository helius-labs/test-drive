<script>
    // @ts-nocheck
    import { methods } from "$lib/types/all-methods.js";
    import { currentMethod, currentRPC } from "$lib/stores/current-method.js";
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    $: label = $currentMethod ?$currentMethod : "Select a method";

    let questions = Object.keys(methods).map((method, index) => {
        return { id: index + 1, text: method };
    });
    let rpcUrlValue = "";
    $: {
        rpcUrlValue = answer;
        if (!rpcUrlValue) {
            currentRPC.set("https://api.mainnet-beta.solana.com");
        }
        // Check if the URL starts with "https://"
        if (!rpcUrlValue.startsWith("https://") && rpcUrlValue !== "") {
            rpcUrlValue = "https://" + rpcUrlValue;
        }
        currentRPC.set(rpcUrlValue);
    }

    export let answer = "";
    let isVisible = false;

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
                <div class="m-1 w-full md:w-2/6">
                    <div class="dropdown w-full">
                        <label tabIndex="0" class="justify-start btn m-1 w-full bg-zinc-900 hover:bg-zinc-800 normal-case">
                            {label} 
                        </label>                        
                        <ul tabIndex="0" class="w-full bg-zinc-900 border border-zinc-900 dropdown-content z-[1] menu p-2 shadow rounded-box">
                            {#each questions as question}
                            <li class="w-full bg-zinc-900">
                                <a class="active:bg-zinc-700" value={question.text} on:click={() => $currentMethod = question.text}>{question.text}</a>
                            </li>
                        {/each}
                        </ul>
                      </div>
                </div>
                <div class="m-1 w-full">
                    <input
                        type="text"
                        bind:value={answer}
                        placeholder="Drop a Solana RPC endpoint here"
                        class="input-bordered input input w-full border-zinc-900 bg-transparent text-gray-300"
                    />
                </div>
            </div>
        </form>
    </div>
{/if}
