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
            optional: {
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
    getBalance: {
        codeExample: `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "getBalance",
          "params": [
            "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri"
          ]
        }
      '`,
        description: "Returns the balance of the account of provided Pubkey",
        parameters: {
            optional: {
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        commitment: {
                            description: "commitment",
                            type: "string",
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
            description: "getBalance response",
            fields: {
                RpcResponse: {
                    description:
                        "RpcResponse JSON object with value field set to the balance",
                    type: "u64",
                },
            },
        },
    },
    getBlock: {
        codeExample: `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0","id":1,
          "method":"getBlock",
          "params": [
            430,
            {
              "encoding": "json",
              "maxSupportedTransactionVersion":0,
              "transactionDetails":"full",
              "rewards":false
            }
          ]
        }
      '`,
        description: "slot number, as u64 integer",
        parameters: {
            optional: {
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        commitment: {
                            description: "commitment level",
                            type: "string",
                        },
                        encoding: {
                            description:
                                "encoding format for each returned Transaction",
                            type: "string",
                        },
                        maxSupportedTransactionVersion: {
                            description:
                                "the max transaction version to return in responses.",
                            type: "number",
                        },
                        rewards: {
                            description:
                                "whether to populate the `rewards` array. If parameter not provided, the default includes rewards.",
                            type: "bool",
                        },
                        transactionDetails: {
                            description:
                                "level of transaction detail to return",
                            type: "string",
                        },
                    },
                    required: {
                        slotNumber: {
                            description: "slot number, as u64 integer",
                            type: "u64",
                        },
                    },
                    type: "object",
                },
            },

            result: {
                description:
                    "The result field will be an object with the following fields:",
                fields: {
                    null: {
                        description: "if specified block is not confirmed",
                        type: "null",
                    },
                    object: {
                        description:
                            "if block is confirmed, an object with the following fields:",
                        fields: {
                            blockhash: {
                                description:
                                    "the blockhash of this block, as base-58 encoded string",
                                type: "string",
                            },
                            parentSlot: {
                                description:
                                    "the slot index of this block's parent",
                                type: "u64",
                            },
                            previousBlockhash: {
                                description:
                                    "the blockhash of this block's parent, as base-58 encoded string; if the parent block is not available due to ledger cleanup, this field will return 11111111111111111111111111111111",
                                type: "string",
                            },
                            transactions: {
                                description:
                                    "present if full transaction details are requested; an array of JSON objects containing:",
                                fields: {
                                    blockHeight: {
                                        description:
                                            "the number of blocks beneath this block",
                                        type: "u64|null",
                                    },
                                    blockTime: {
                                        description:
                                            "estimated production time, as Unix timestamp (seconds since the Unix epoch). null if not available",
                                        type: "i64|null",
                                    },
                                    meta: {
                                        description:
                                            "transaction status metadata object, containing null or:",
                                        fields: {
                                            computeUnitsConsumed: {
                                                description:
                                                    "number of compute units consumed by the transaction",
                                                type: "u64|undefined",
                                            },
                                            err: {
                                                description:
                                                    "Error if transaction failed, null if transaction succeeded. TransactionError definitions",
                                                type: "object|null",
                                            },
                                            fee: {
                                                description:
                                                    "fee this transaction was charged, as u64 integer",
                                                type: "u64",
                                            },
                                            innerInstructions: {
                                                description:
                                                    "List of inner instructions or null if inner instruction recording was not enabled during this transaction",
                                                type: "array|null",
                                            },
                                            loadedAddresses: {
                                                description:
                                                    "Transaction addresses loaded from address lookup tables. Undefined if maxSupportedTransactionVersion is not set in request params, or if jsonParsed encoding is set in request params.",
                                                fields: {
                                                    readonly: {
                                                        description:
                                                            "Ordered list of base-58 encoded addresses for readonly loaded accounts",
                                                        type: "array[string]",
                                                    },
                                                    writable: {
                                                        description:
                                                            "Ordered list of base-58 encoded addresses for writable loaded accounts",
                                                        type: "array[string]",
                                                    },
                                                },
                                                type: "object|undefined",
                                            },
                                            logMessages: {
                                                description:
                                                    "array of string log messages or null if log message recording was not enabled during this transaction",
                                                type: "array|null",
                                            },
                                            postBalances: {
                                                description:
                                                    "array of u64 account balances after the transaction was processed",
                                                type: "array",
                                            },
                                            postTokenBalances: {
                                                description:
                                                    "List of token balances from after the transaction was processed or omitted if token balance recording was not yet enabled during this transaction",
                                                type: "array|undefined",
                                            },
                                            preBalances: {
                                                description:
                                                    "array of u64 account balances from before the transaction was processed",
                                                type: "array",
                                            },
                                            preTokenBalances: {
                                                description:
                                                    "List of token balances from before the transaction was processed or omitted if token balance recording was not yet enabled during this transaction",
                                                type: "array|undefined",
                                            },

                                            returnData: {
                                                description:
                                                    "the most-recent return data generated by an instruction in the transaction, with the following fields:",
                                                fields: {
                                                    data: {
                                                        description:
                                                            "the return data itself, as base-64 encoded binary data",
                                                        type: "[string, encoding]",
                                                    },
                                                    programId: {
                                                        description:
                                                            "the program that generated the return data, as base-58 encoded Pubkey",
                                                        type: "string",
                                                    },
                                                },
                                                type: "object|undefined",
                                            },
                                            rewards: {
                                                description:
                                                    "transaction-level rewards, populated if rewards are requested; an array of JSON objects containing:",
                                                fields: {
                                                    commission: {
                                                        description:
                                                            "vote account commission when the reward was credited, only present for voting and staking rewards",
                                                        type: "u8|undefined",
                                                    },
                                                    lamports: {
                                                        description:
                                                            "number of reward lamports credited or debited by the account, as a i64",
                                                        type: "i64",
                                                    },
                                                    postBalance: {
                                                        description:
                                                            "account balance in lamports after the reward was applied",
                                                        type: "u64",
                                                    },
                                                    pubkey: {
                                                        description:
                                                            "The public key, as base-58 encoded string, of the account that received the reward",
                                                        type: "string",
                                                    },
                                                    rewardType: {
                                                        description:
                                                            "type of reward: fee, rent, voting, staking",
                                                        type: "string|undefined",
                                                    },
                                                },
                                                type: "array|null",
                                            },
                                            status: {
                                                description:
                                                    "Transaction status",
                                                fields: {
                                                    Err: {
                                                        description:
                                                            "Transaction failed with TransactionError",
                                                        type: "ERR",
                                                    },
                                                    Ok: {
                                                        description:
                                                            "Transaction was successful",
                                                        type: "null",
                                                    },
                                                },
                                                type: "object",
                                            },
                                            version: {
                                                description:
                                                    "Transaction version. Undefined if maxSupportedTransactionVersion is not set in request params.",
                                                type: "legacy|number|undefined",
                                            },
                                        },
                                        type: "object",
                                    },
                                    rewards: {
                                        description:
                                            "block-level rewards, present if rewards are requested; an array of JSON objects containing:",
                                        fields: {
                                            commission: {
                                                description:
                                                    "vote account commission when the reward was credited, only present for voting and staking rewards",
                                                type: "u8|undefined",
                                            },
                                            lamports: {
                                                description:
                                                    "number of reward lamports credited or debited by the account, as a i64",
                                                type: "i64",
                                            },
                                            postBalance: {
                                                description:
                                                    "account balance in lamports after the reward was applied",
                                                type: "u64",
                                            },
                                            pubkey: {
                                                description:
                                                    "The public key, as base-58 encoded string, of the account that received the reward",
                                                type: "string",
                                            },
                                            rewardType: {
                                                description:
                                                    "type of reward: fee, rent, voting, staking",
                                                type: "string|undefined",
                                            },
                                        },
                                        type: "array|undefined",
                                    },
                                    signatures: {
                                        description:
                                            "present if signatures are requested for transaction details; an array of signatures strings, corresponding to the transaction order in the block",
                                        type: "array",
                                    },
                                    transaction: {
                                        description:
                                            "Transaction object, either in JSON format or encoded binary data, depending on encoding parameter",
                                        type: "object|[string,encoding]",
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
    },
    getBlockCommitment: {
        codeExample: `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "getBlockCommitment",
          "params":[5]
        }
      '`,
        description: "Returns commitment for particular block",
        parameters: {
            optional: {},
            required: {
                blockNumber: {
                    description: "Block number, identified by Slot",
                    type: "u64",
                },
            },
        },
        result: {
            description: "The result field will be a JSON object containing:",
            fields: {
                commitment: {
                    description: "commitment, comprising either",
                    fields: {
                        commitmentArray: {
                            description:
                                "commitment, array of u64 integers logging the amount of cluster stake in lamports that has voted on the block at each depth from 0 to MAX_LOCKOUT_HISTORY + 1",
                            type: "array",
                        },
                        null: {
                            description: "unknown block",
                            type: "null",
                        },
                    },
                    type: "object",
                },
                totalStake: {
                    description:
                        "total active stake, in lamports, of the current epoch",
                    type: "u64",
                },
            },
        },
    },
    getBlockHeight: {
        codeExample: `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc":"2.0","id":1,
          "method":"getBlockHeight"
        }
      '`,
        description: "Returns the current block height of the node",
        parameters: {
            optional: {
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        commitment: {
                            description: "commitment",
                            type: "string",
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
            required: {},
        },
        result: {
            description: "getBlockHeight response",
            fields: {
                blockHeight: {
                    description: "Current block height",
                    type: "u64",
                },
            },
        },
    },
    getBlockProduction: {
        codeExample: `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getBlockProduction"}
      '`,
        description:
            "Returns recent block production information from the current or previous epoch.",
        parameters: {
            optional: {
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        commitment: {
                            description: "commitment",
                            type: "string",
                        },
                        identity: {
                            description:
                                "Only return results for this validator identity (base-58 encoded)",
                            type: "string",
                        },
                        range: {
                            description:
                                "Slot range to return block production for. If parameter not provided, defaults to current epoch.",
                            fields: {
                                firstSlot: {
                                    description:
                                        "First slot to return block production for (inclusive).",
                                    type: "u64",
                                },
                                lastSlot: {
                                    description:
                                        "Last slot to return block production information for (inclusive). If parameter not provided, defaults to the highest slot",
                                    type: "u64",
                                },
                            },
                            type: "object",
                        },
                    },
                    type: "object",
                },
            },
            required: {},
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to:",
            fields: {
                blockProductionObject: {
                    description:
                        " information from the current or previous epoch",
                    fields: {
                        byIdentity: {
                            description:
                                "a dictionary of validator identities, as base-58 encoded strings. Value is a two element array containing the number of leader slots and the number of blocks produced.",
                            type: "object",
                        },
                        range: {
                            description: "Block production slot range",
                            fields: {
                                firstSlot: {
                                    description:
                                        "first slot of the block production information (inclusive)",
                                    type: "u64",
                                },
                                lastSlot: {
                                    description:
                                        "last slot of the block production information (inclusive)",
                                    type: "u64",
                                },
                            },
                        },
                    },
                    type: "object",
                },
            },
        },
    },
    getBlocks: {
        codeExample: `curl http://localhost:8899 -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "getBlocks",
          "params": [
            5, 10
          ]
        }
      '`,
        description: "Returns a list of confirmed blocks between two slots",
        parameters: {
            optional: {
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        commitment: {
                            description: "commitment level",
                            type: "string",
                        },
                    },
                },
                endSlot: {
                    description:
                        "Ending slot (must be no more than 500,000 blocks higher than the `start_slot`)",

                    type: "u64",
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
                "The result field will be an array of u64 integers listing confirmed blocks between start_slot and either end_slot - if provided, or latest confirmed block, inclusive. Max range allowed is 500,000 slots.",
            fields: {
                RpcResponse: {
                    description:
                        "RpcResponse JSON object with value field set to the balance",
                    type: "array",
                },
            },
        },
    },
};
