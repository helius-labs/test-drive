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
    <form on:submit|preventDefault={handleSubmit}>
        <div class="flex items-center justify-center rounded bg-[#929498] p-3">
            <div>
                <select
                    bind:value={selected}
                    on:change={() => (answer = "")}
                    class="m-2 rounded bg-white p-2 text-black"
                >
                    {#each questions as question}
                        <option value={question}>
                            {question.text}
                        </option>
                    {/each}
                </select>
            </div>
            <div class=" w-80">
                <input
                    bind:value={answer}
                    class="m-1 w-full rounded bg-white p-2"
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
