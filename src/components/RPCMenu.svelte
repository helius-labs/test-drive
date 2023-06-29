<script>
    import { methods } from "$lib/api/methods.js";
    import { currentMethod } from "$lib/stores/currentMethodStore.js";
    let selected;

    let questions = Object.keys(methods).map((method, index) => {
        return { id: index + 1, text: method };
    });
    export let answer = "";

    // How do we handle the form submission? The run button is in a different component
    async function handleSubmit() {
        if (methods[selected.text]) {
            const params = methods[selected.text].defaultParams;

            if (answer) {
                const paramName = Object.keys(params)[0];
                params[paramName] = answer;
            }

            try {
                const result = await callRPC(selected.text, [params]);
            } catch (error) {}
        } else {
        }
    }
    async function callRPC(method, params) {
        const response = await fetch(answer, {
            body: JSON.stringify({
                id: 1,
                jsonrpc: "2.0",
                method,
                params,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const data = await response.json();
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
                    on:change={() => (answer = "")}
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
                    class="w-full rounded bg-white p-2 text-[#D3D6DC]"
                    placeholder="Drop a Solana endpoint here"
                />
            </div>
            <!-- <div class="m-3">
                <button
                    disabled={!answer}
                    type="submit"
                    class=" rounded bg-green-500 p-2 text-black"
                >
                    Submit
                </button>
            </div> -->
        </div>
    </form>
</div>
