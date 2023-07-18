// $lib/utils/utils.js

/**
 * @param {string} selectedMethod
 * @param {{ [x: string]: any }} methods
 */
export function updateParams(selectedMethod, methods) {
    /**
     * @type {{
     *     isOptional: boolean;
     *     name: string;
     *     type:
     *         | "string"
     *         | "number"
     *         | "bigint"
     *         | "boolean"
     *         | "symbol"
     *         | "undefined"
     *         | "object"
     *         | "function";
     *     value: any;
     * }[]}
     */
    let params = [];
    if (selectedMethod in methods) {
        const method = methods[selectedMethod];
        params = Object.keys(method.defaultParams).map((param) => {
            return {
                isOptional: false,
                name: param,
                type: typeof method.defaultParams[param],
                value: method.defaultParams[param],
            };
        });

        if (method.optionalParams) {
            const optionalParams = method.optionalParams;
            for (const param in optionalParams) {
                if (!(param in method.defaultParams)) {
                    params.push({
                        isOptional: true,
                        name: param,
                        type: typeof optionalParams[param],
                        value: optionalParams[param],
                    });
                }
            }
        }
    }
    return params;
}
