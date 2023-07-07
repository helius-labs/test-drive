<script>
    // @ts-nocheck
    import { methods } from "$lib/types/allMethods.js";
    import {
        currentMethod,
        currentRPC,
    } from "$lib/stores/currentMethodStore.js";

    let questions = Object.keys(methods).map((method, index) => {
        return { id: index + 1, text: method };
    });
    let rpcUrlValue = "";
    $: {
        rpcUrlValue = answer;
        currentRPC.set(rpcUrlValue);
        console.log(rpcUrlValue);
    }

    export let answer = "";
</script>

<div class="flex justify-center">
    <form class="flex w-full justify-center">
        <div
            class="flex w-2/3 items-center justify-center rounded bg-[#929498] p-3"
        >
            <div class="m-1 w-1/3">
                <select
                    bind:value={$currentMethod}
                    class=" w-full rounded bg-white p-2 text-black"
                >
                    {#each questions as question}
                        <option value={question.text}>
                            {question.text}
                        </option>
                    {/each}
                </select>
            </div>
            <div class="m-1 w-2/3">
                <input
                    bind:value={answer}
                    class="w-full rounded bg-white p-2 text-black"
                    placeholder="Drop a Solana endpoint here"
                />
            </div>
        </div>
    </form>
</div>
