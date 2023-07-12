import {
    copyResponse,
    isResponse,
    responseStore,
    responseTime,
} from "$lib/stores/response-store";

// THIS IS FOR RPC REQUEST COMPONENT.
/**
 * @param {any} requestData
 * @param {RequestInfo | URL} rpcUrl
 */
export default async function callRPC(requestData, rpcUrl) {
    const startTime = performance.now();
    const response = await fetch(rpcUrl, {
        body: JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });
    const data = await response.json();
    const endTime = performance.now();
    const duration = endTime - startTime;
    isResponse.set("true");
    responseStore.set(data);
    responseTime.set(duration.toFixed(2));
    copyResponse.set(JSON.stringify(data, null, 2));
    return data.result;
}

// THIS IS IN RPC RACE FEATURE
/**
 * @param {any} requestData
 * @param {RequestInfo | URL} rpcUrl
 */
export async function raceRPC(requestData, rpcUrl) {
    const response = await fetch(rpcUrl, {
        body: JSON.stringify(requestData),
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
    });
    const data = await response.json();

    return response;
}
