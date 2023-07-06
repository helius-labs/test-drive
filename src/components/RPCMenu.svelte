<script>
    // @ts-nocheck
    import { methods } from "$lib/api/allMethods.js";
    import {
        currentMethod,
        currentRPC,
    } from "$lib/stores/currentMethodStore.js";
    import {
        responseStatus,
        responseStore,
        responseTime,
    } from "$lib/stores/responseStore.js";

    let questions = Object.keys(methods).map((method, index) => {
        return { id: index + 1, text: method };
    });
    export let answer = "";

    async function handleSubmit() {
        const methodData = methods[$currentMethod];

        if (methodData) {
            const params = { ...methodData.defaultParams };

            if (answer && Object.keys(params).length > 0) {
                // Iterate over the answer and assign it to the respective parameter in params
                for (const paramName in answer) {
                    if (params.hasOwnProperty(paramName)) {
                        const paramType = typeof params[paramName];
                        if (paramType === "object") {
                            // If the parameter is an object, parse the answer as JSON
                            params[paramName] = JSON.parse(answer[paramName]);
                        } else if (paramType === "number") {
                            // If the parameter is a number, parse the answer as a float
                            params[paramName] = parseFloat(answer[paramName]);
                        } else {
                            // For other types (e.g., string), use the answer as is
                            params[paramName] = answer[paramName];
                        }
                    }
                }
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
        if (params) {
            if (
                Object.keys(methods[method].defaultParams).length === 0 &&
                methods[method].optionalParams.length === 0
            ) {
                // This method does not expect any parameters, so do not include the 'params' field in the body
            } else {
                let primaryParams = {};
                let optionalParams = {};

                let defaultParams = methods[method].defaultParams;
                let optionalParamsList = methods[method].optionalParams;

                for (let key in params) {
                    if (defaultParams.hasOwnProperty(key)) {
                        primaryParams[key] = params[key];
                    } else if (optionalParamsList.includes(key)) {
                        optionalParams[key] = params[key];
                    }
                }

                for (let key in primaryParams) {
                    if (!primaryParams[key]) {
                        throw new Error(`Required parameter ${key} is empty`);
                    }
                }
                // If the method only has one parameter and it's not an object, pass it as a simple string.
                if (
                    Object.keys(primaryParams).length === 1 &&
                    typeof primaryParams[Object.keys(primaryParams)[0]] !==
                        "object"
                ) {
                    // This method has a single non-object parameter, so pass it as a simple string.
                    body.params = [
                        primaryParams[Object.keys(primaryParams)[0]],
                    ];
                }
                // If there are optional parameters or more than one primary parameter, put them into an object.
                else if (
                    Object.keys(optionalParams).length > 0 ||
                    Object.keys(primaryParams).length > 1
                ) {
                    body.params = { ...primaryParams, ...optionalParams };
                }
            }
        }
        const startTime = performance.now();
        const response = await fetch(answer, {
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const data = await response.json();
        const endTime = performance.now();
        const duration = endTime - startTime;
        console.log(data);
        responseStatus.set(response.status);
        responseStore.set(JSON.stringify(data, null, 2));
        responseTime.set(duration.toFixed(2));
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
                    class=" rounded bg-HeliusOrange p-2 text-white"
                >
                    Submit
                </button>
            </div>
        </div>
    </form>
</div>
