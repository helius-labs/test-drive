export const methods = {
    getAccountInfo: {
        codeExample: `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getAccountInfo",
          "params": [
            "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
            {
              "encoding": "base58"
            }
          ]
        }
      '`,
        description:
            "Returns all information associated with the account of provided Pubkey",
        parameters: {
            nonrequired: {
                configObject: {
                    description:
                        "Configuration object containing the following fields",
                    fields: {
                        commitment: {
                            description:
                                "Pubkey of account to query, as base-58 encoded string",
                            type: "string",
                        },
                        dataSlice: {
                            description: "Encoding format for Account data",
                            fields: {
                                length: {
                                    description: "number of bytes to return",
                                    type: "usize",
                                },
                                offset: {
                                    description:
                                        "byte offset from which to start reading",
                                    type: "usize",
                                },
                            },
                            type: "object",
                        },
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                    type: "object",
                },
            },
            required: {
                pubKey: {
                    description:
                        "Pubkey of account to query, as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to:",
            fields: {
                null: {
                    description: "if the requested account doesn't exist",
                    type: "null",
                },
                object: {
                    description: "a JSON object containing:",
                    fields: {
                        data: {
                            description:
                                " data associated with the account, either as encoded binary data or JSON format {<program>: <state>} - depending on encoding parameter",
                            type: "[string, encoding]|object",
                        },
                        executable: {
                            description:
                                "boolean indicating if the account contains a program (and is strictly read-only)",
                            type: "string",
                        },
                        lamports: {
                            description:
                                "number of lamports assigned to this account, as a u64",
                            type: "u64",
                        },
                        owner: {
                            description:
                                " base-58 encoded Pubkey of the program this account has been assigned to",
                            type: "bool",
                        },
                        rentEpoch: {
                            description:
                                " the epoch at which this account will next owe rent, as u64",
                            type: "u64",
                        },
                        size: {
                            description: "the data size of the account",
                            type: "u64",
                        },
                    },
                    type: "object",
                },
            },
        },
    },
};
