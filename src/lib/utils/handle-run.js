// @ts-nocheck
import { noParams } from "$lib/stores/current-method.js";
import { methods } from "../types/all-methods.js";
import { methodParamMap } from "../types/method-params.js";
import callRPC from "./rpc.js";

/**
 * @param {string | number} selectedMethod
 * @param {any[]} params
 * @param {any} currentRPC
 */
export async function handleRun(selectedMethod, params, currentRPC) {
    noParams.set(false);
    let rpcError = false;
    const rpcUrlValue = currentRPC;
    const methodData = methods[selectedMethod];
    let requestData = {
        id: "test-drive",
        jsonrpc: "2.0",
        method: selectedMethod,
        params: [],
    };
    if (rpcUrlValue === "") {
        rpcError = true;
        return { rpcError };
    }
    rpcError = false;
    const requestParams = {};
    params.forEach(
        (/** @type {{ value: string; name: string | number }} */ param) => {
            if (param.value !== "") {
                requestParams[param.name] = param.value;
            }
        }
    );
    if (methodData.optionalParams) {
        const optionalParams = methodData.optionalParams;
        for (const param in optionalParams) {
            const defaultValue = optionalParams[param];
            if (!requestParams[param]) {
                requestParams[param] = defaultValue;
            }
        }
    }
    if (methodData.paramsFormat === "array") {
        if (Object.keys(requestParams).length > 0) {
            requestData.params = [requestParams];
        }
        const paramName = methodParamMap[methodData.name];
        if (paramName) {
            let paramValue = requestParams[paramName];
            // Convert the param to int if needed
            const methodsNeedConverting = [
                "getBlocks",
                "getBlockCommitment",
                "getBlockTime",
                "getSlotLeaders",
                "getMinimumBalanceForRentExemption",
            ];
            if (methodsNeedConverting.includes(methodData.name)) {
                paramValue = parseInt(paramValue);
            }

            requestData.params = [paramValue];
        }
    } else if (methodData.paramsFormat === "object") {
        requestData.params = requestParams;
    } else if (methodData.paramsFormat === "none") {
        noParams.set(true);
        delete requestData.params;
    }

    const result = await callRPC(requestData, rpcUrlValue);

    return { rpcError, result };
}
