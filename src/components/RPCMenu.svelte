<script>
    let questions = [
        { id: 1, text: `getTransaction` },
        { id: 2, text: `GetRecentBlockhash` },
        { id: 3, text: `getAccountInfo` },
    ];

    let selected;

    let answer = "";

    function handleSubmit() {
        alert(`Chose RPC: ${selected.text} with "${answer}"`);
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
                    bind:value={selected}
                    on:change={() => (answer = "")}
                    class=" w-full rounded bg-white p-2 text-black"
                >
                    {#each questions as question}
                        <option value={question}>
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
