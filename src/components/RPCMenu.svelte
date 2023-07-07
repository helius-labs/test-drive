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
            class="m-3 flex w-3/4 items-center justify-center rounded p-2 hover:shadow-lg "
        >
            <div class="m-1 w-1/3">
                <select
                    class="select-error select w-full max-w-xs bg-HeliusGray text-black"
                    bind:value={$currentMethod}
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
                    placeholder="Drop a Solana endpoint here"
                    class="input-bordered input-error input w-full bg-HeliusGray text-black"
                />
            </div>
        </div>
    </form>
</div>
