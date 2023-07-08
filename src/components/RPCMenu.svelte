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

<div class="my-2 flex justify-center">
    <form class="flex w-full justify-center">
        <div
            class="m-3 flex w-3/4 items-center justify-center rounded p-2 hover:shadow-lg "
        >
            <div class="m-1 w-2/5">
                <select
                    class="select-error select select-md w-full max-w-lg bg-HeliusGray text-sm text-black"
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
                    placeholder="Drop a Solana endpoint here"
                    class="input-bordered input-error input w-full bg-HeliusGray text-black"
                />
            </div>
        </div>
    </form>
</div>
<div class="alert m-auto my-1 h-1/4 w-1/4 justify-center text-center">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="h-6 w-6 shrink-0 stroke-info"
        ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        /></svg
    >
    <span class="justify-center text-sm"
        >Don't have an RPC? Get one for free <a
            class="underline"
            href="https://dev.helius.xyz/dashboard/app"
            target="_blank"
            rel="noreferrer"
        >
            here
        </a></span
    >
</div>
