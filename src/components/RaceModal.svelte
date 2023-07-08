<script>
    // @ts-nocheck
    import { raceMethods } from "$lib/types/raceMethods.js";

    let isOpen = false;
    let rpcUrl1 = "";
    let rpcUrl2 = "";
    let result = "";
    let methodToTest = ""; // New variable to hold the selected method
    let progress1 = 0;
    let progress2 = 0;
    let errorCount1 = 0;
    let errorCount2 = 0;
    let totalTime1 = 0;
    let totalTime2 = 0;
    let successfulRequests1 = 0;
    let successfulRequests2 = 0;
    let failedRequests1 = 0;
    let failedRequests2 = 0;
    let urlError = false;
    let raceSuccess = false;

    function open() {
        isOpen = true;
    }

    function close() {
        isOpen = false;
    }

    async function runSingleTest(rpcUrl, methodToTest, urlIndex) {
        let requestData = {
            id: "test-drive",
            jsonrpc: "2.0",
            method: methodToTest,
        };

        const startTime = performance.now();
        const response = await raceRPC(requestData, rpcUrl); // Use your raceRPC function here

        if (response.status !== 200) {
            if (urlIndex === 1) errorCount1++;
            else if (urlIndex === 2) errorCount2++;
        }

        const endTime = performance.now();

        return endTime - startTime; // returns time taken for the RPC call
    }

    async function raceRPC(requestData, rpcUrl) {
        const response = await fetch(rpcUrl, {
            body: JSON.stringify(requestData),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        const data = await response.json();

        return response; // return response instead of result
    }

    async function runSpeedTest() {
        raceSuccess = false;
        totalTime1 = 0;
        totalTime2 = 0;
        errorCount1 = 0;
        errorCount2 = 0;
        successfulRequests1 = 0;
        successfulRequests2 = 0;
        failedRequests1 = 0;
        failedRequests2 = 0;
        if (rpcUrl1 === "" || rpcUrl2 === "") {
            urlError = true;
            return;
        }
        urlError = false;
        for (let i = 0; i < 100; i++) {
            totalTime1 += await runSingleTest(rpcUrl1, methodToTest, 1);
            successfulRequests1++;
            progress1 = ((successfulRequests1 + errorCount1) / 100) * 100;

            totalTime2 += await runSingleTest(rpcUrl2, methodToTest, 2);
            successfulRequests2++;
            progress2 = ((successfulRequests2 + errorCount2) / 100) * 100;
        }

        failedRequests1 = 100 - successfulRequests1;
        failedRequests2 = 100 - successfulRequests2;

        const avgTime1 = totalTime1 / 100;
        const avgTime2 = totalTime2 / 100;

        if (avgTime1 < avgTime2) {
            result = `RPC URL 1 is faster. Average time: ${avgTime1.toFixed(
                2
            )} ms`;
            raceSuccess = true;
        } else if (avgTime1 > avgTime2) {
            result = `RPC URL 2 is faster. Average time: ${avgTime2.toFixed(
                2
            )} ms`;
            raceSuccess = true;
        } else {
            result = "Both RPC URLs have similar speed.";
            raceSuccess = true;
        }
    }
</script>

<div class="flex items-center justify-center">
    <button
        class="btn bg-gradient-to-r from-orange-400 to-orange-600 p-2 text-white shadow-sm"
        on:click={open}
    >
        Race RPCs
    </button>
</div>

{#if isOpen}
    <div
        class="fixed inset-0 z-10 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
    >
        <div
            class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
        >
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-hidden="true"
            />
            <div
                class="inline-block transform overflow-hidden rounded-lg bg-HeliusGray text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
            >
                <div
                    class="justify-center bg-[#242934] px-4 py-3 text-left sm:flex sm:flex-row-reverse sm:px-6"
                >
                    <h3
                        class="text-left text-xl font-bold leading-6 text-white"
                        id="modal-title"
                    >
                        RPC Speed Test
                    </h3>
                </div>
                <div class="bg-[#242934] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="mt-2">
                        <h3 class="text-lg font-bold text-white">RPC URL 1</h3>
                        <input
                            type="text"
                            class="input-bordered input-error input w-full max-w-lg bg-HeliusGray text-black"
                            bind:value={rpcUrl1}
                            placeholder="RPC URL 1"
                        />
                        <h3 class="text-lg font-bold text-white">RPC URL 2</h3>
                        <input
                            type="text"
                            class="input-bordered input-error input w-full max-w-lg bg-HeliusGray text-black"
                            bind:value={rpcUrl2}
                            placeholder="RPC URL 2"
                        />

                        <h3 class="text-lg font-bold text-white">Method</h3>

                        <select
                            class="select-error select w-full max-w-lg bg-HeliusGray text-black"
                            bind:value={methodToTest}
                        >
                            <option
                                disabled
                                selected
                                value="">Select a method</option
                            >
                            {#each Object.keys(raceMethods) as method}
                                <option value={method}>{method}</option>
                            {/each}
                        </select>
                    </div>
                    <div class="flex justify-center">
                        <button
                            class="btn btn my-4 w-20 border-none bg-gradient-to-r from-orange-400 to-orange-600 p-2 text-white shadow-md"
                            on:click={runSpeedTest}>Start</button
                        >
                    </div>
                    <div class="mt-3 flex">
                        <div class="w-1/2 pr-2">
                            <h4
                                class="text-bold text-lg font-bold leading-6 text-white"
                            >
                                RPC URL 1
                            </h4>

                            <div class="mt-2 h-4 rounded-full bg-gray-200">
                                <div
                                    class="h-full bg-orange-500 text-center text-xs text-white"
                                    style="width: {progress1}%"
                                />
                            </div>
                            <div class="text-white-900 italic">
                                Successful Requests: {successfulRequests1}
                            </div>
                            <div class="text-white-900 italic">
                                Failed Requests: {failedRequests1}
                            </div>
                            <div class="text-white-900 italic">
                                Average Time: {(totalTime1 / 100).toFixed(2)} ms
                            </div>
                            <div class="text-white-900 italic">
                                Total Time: {totalTime1.toFixed(2)} ms
                            </div>
                        </div>
                        <div class="w-1/2 pl-2">
                            <h4 class="text-lg font-bold leading-6 text-white">
                                RPC URL 2
                            </h4>
                            <div class="mt-2 h-4 rounded-full bg-gray-200">
                                <div
                                    class="h-full bg-blue-500 text-center text-xs text-white"
                                    style="width: {progress2}%"
                                />
                            </div>
                            <div class="text-white-900 italic">
                                Successful Requests: {successfulRequests2}
                            </div>
                            <div class="text-white-900 italic">
                                Failed Requests: {failedRequests2}
                            </div>
                            <div class="text-white-900 italic">
                                Average Time: {(totalTime2 / 100).toFixed(2)} ms
                            </div>
                            <div class="text-white-900 italic">
                                Total Time: {totalTime2.toFixed(2)} ms
                            </div>
                        </div>
                    </div>
                    {#if raceSuccess}
                        <div class="mt-3">
                            <div
                                class="alert alert-success my-2 justify-center text-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    ><path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    /></svg
                                >
                                <span>{result}</span>
                            </div>
                        </div>
                    {/if}
                    {#if urlError}
                        <div class="alert alert-error my-4 justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-6 w-6 shrink-0 stroke-current"
                                fill="none"
                                viewBox="0 0 24 24"
                                ><path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                /></svg
                            >
                            <span>Please enter 2 RPCs to continue</span>
                        </div>
                    {/if}
                </div>
                <div
                    class="bg-[#242934] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                >
                    <button
                        type="button"
                        class="btn btn w-20 border-none bg-gradient-to-r from-orange-400 to-orange-600 p-2 text-white shadow-md"
                        on:click={close}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
{/if}
