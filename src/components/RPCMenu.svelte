<script>
    // @ts-nocheck
    import { methods } from "$lib/api/methods.js";
    import { currentMethod } from "$lib/stores/currentMethodStore.js";
    import { responseStore } from "$lib/stores/responseStore.js";

    let selected;

    let questions = Object.keys(methods).map((method, index) => {
        return { id: index + 1, text: method };
    });
    export let answer = "";

    async function handleSubmit() {
        const methodData = methods[$currentMethod];

        if (methodData) {
            const params = { ...methodData.defaultParams };

            if (answer && Object.keys(params).length > 0) {
                const paramName = Object.keys(params)[0];
                params[paramName] = answer;
            }

            try {
                const result = await callRPC($currentMethod, params);
            } catch (error) {
                console.error("Error calling RPC:", error);
            }
        } else {
            console.warn("Method not found:", $currentMethod);
        }
    }
    async function callRPC(method, params) {
        let body = {
            id: 1,
            jsonrpc: "2.0",
            method,
        };

        if (params && Object.keys(params).length > 0) {
            // If params only contains a single property, set params to that property value
            if (Object.keys(params).length === 1) {
                body.params = [params[Object.keys(params)[0]]];
            } else {
                body.params = [params];
            }
        }

        const response = await fetch(answer, {
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const data = await response.json();
        console.log(data);
        responseStore.set(JSON.stringify(data));
        return data.result;
    }
</script>

<div class="flex justify-center">
    <form
        on:submit|preventDefault={handleSubmit}
        class="flex w-full justify-center"
    >
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
            <div class="m-3">
                <button
                    disabled={!answer}
                    type="submit"
                    class=" rounded bg-green-500 p-2 text-black"
                >
                    Submit
                </button>
            </div>
        </div>
    </form>
</div>
