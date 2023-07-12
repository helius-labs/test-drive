export const methods = {
    getAccountInfo: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
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
    getAsset: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
            "jsonrpc": "2.0",
            "id": "string",
            "method": "getAsset",
            "params": {
              "id": "string"
            }
         }
      '`,
        description:
            "This method will return valuable NFT metadata. This can define compressed or standard NFTs.",
        parameters: {
            optional: {},
            required: {
                id: {
                    description: "The ID of the asset to retrieve.",
                    type: "string",
                },
            },
        },

        result: {
            description: "Asset Details",
            fields: {
                assets: {
                    description: "Information regarding the asset.",
                    fields: {
                        items: {
                            description: "An array of assets.",
                            type: "array",
                        },
                        limit: {
                            description:
                                "The maximum number of assets requested.",
                            type: "integer",
                        },
                        page: {
                            description: "The current page of results.",
                            type: "integer",
                        },
                        total: {
                            description: "The total number of assets found.",
                            type: "integer",
                        },
                    },
                    type: "object",
                },
            },
        },
    },
    getAssetProof: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
            "jsonrpc": "2.0",
            "id": "string",
            "method": "getAssetProof",
            "params": {
              "id": "string"
            }
          }
      '`,
        description:
            "This is an essential method for transactions involving a compressed asset. For instance, when you need to transfer a compressed NFT you need to return the proof and tree id for the transaction to be successful.",
        parameters: {
            optional: {},
            required: {
                id: {
                    description: "The ID of the asset to retrieve.",
                    type: "string",
                },
            },
        },

        result: {
            description: "Asset Proof Details",

            fields: {
                leaf: {
                    description: "The leaf of the merkle tree.",
                    type: "string",
                },
                nodeIndex: {
                    description: "The node index",
                    type: "integer",
                },
                proof: {
                    description: "The proof of the asset.",
                    type: "array[string]",
                },
                root: {
                    description: "The root of the merkle tree.",
                    type: "string",
                },
                treeId: {
                    description: "The ID of the merkle tree.",
                    type: "string",
                },
            },
            type: "object",
        },
    },
    getAssetsByAuthority: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
            "jsonrpc": "2.0",
            "id": "string",
            "method": "getAssetsByAuthority",
            "params": {
              "authorityAddress": "string",
              "page": 1,
              "limit": 100,
              "sortBy": {
                "sortBy": "created",
                "sortDirection": "asc"
              },
              "before": "string",
              "after": "string"
            }
          }
      '`,
        description:
            "This will return a list of assets for the given authority provided. This can define compressed or standard NFTs.",
        parameters: {
            optional: {
                limit: {
                    description: "The maximum number of assets to return.",
                    type: "integer",
                },
                before: {
                    description:
                        "The cursor for paginating backwards through the assets.",
                    type: "string",
                },
                sortBy: {
                    description:
                        "The criteria by which the retrieved assets will be sorted.",
                    type: "string",
                },
                after: {
                    description:
                        "The cursor for paginating forwards through the assets.",
                    type: "string",
                },
            },
            required: {
                authorityAddress: {
                    description:
                        "The address of the owner whose assets to retrieve.",
                    type: "string",
                },
                page: {
                    description: "The page of results to return",
                    type: "integer",
                },
            },
        },

        result: {
            assets: {
                description: "Assets from Authority",
                type: "object",
                fields: {
                    total: {
                        description: "The total number of assets found.",
                        type: "integer",
                    },
                    limit: {
                        description: "The maximum number of assets requested.",
                        type: "integer",
                    },
                    page: {
                        description: "The current page of results.",
                        type: "integer",
                    },
                    items: {
                        description: "An array of assets",
                        type: "array[object]",
                    },
                },
            },
            description: "Asset Authority Details",

            type: "object",
        },
    },
    getAssetsByOwner: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
            "jsonrpc": "2.0",
            "id": "string",
            "method": "getAssetsByOwner",
            "params": {
              "ownerAddress": "string",
              "page": 1,
              "limit": 100,
              "sortBy": {
                "sortBy": "created",
                "sortDirection": "asc"
              },
              "before": "string",
              "after": "string"
            }
          }
      '`,
        description:
            "This will return a list of assets for the given owner. This can define compressed or standard NFTs.",
        parameters: {
            optional: {
                after: {
                    description:
                        "The cursor for paginating forwards through the assets.",
                    type: "string",
                },
                before: {
                    description:
                        "The cursor for paginating backwards through the assets.",
                    type: "string",
                },
                limit: {
                    description: "The maximum number of assets to return.",
                    type: "integer",
                },
                sortBy: {
                    description:
                        "The criteria by which the retrieved assets will be sorted.",
                    type: "string",
                },
            },
            required: {
                ownerAddress: {
                    description: "The owner address key.",
                    type: "string",
                },
                page: {
                    description: "The page of results to return",
                    type: "integer",
                },
            },
        },

        result: {
            description: "Asset Owner Details",

            type: "object",
        },
    },
    getBalance: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
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
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
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
    getGenesisHash: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getGenesisHash"}
      '`,
        description: "Returns the genesis hash",

        result: {
            description: "Asset Owner Details",

            type: "object",
            fields: {
                hash: {
                    description: "a Hash as base-58 encoded string",
                    type: "string",
                },
            },
        },
    },
    getBlockCommitment: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
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
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
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
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
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
    getBlockTime: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc":"2.0", "id":1,
          "method": "getBlockTime",
          "params":[5]
        }
      '`,
        description: "Returns the estimated production time of a block.",
        parameters: {
            optional: {},
            required: {
                blockNumber: {
                    description: "block number, identified by Slot",
                    type: "u64",
                },
            },
        },
        result: {
            description:
                "The result field will be an array of u64 integers listing confirmed blocks starting at start_slot for up to limit blocks, inclusive.",
            fields: {
                estProductionTime: {
                    description:
                        "estimated production time, as Unix timestamp (seconds since the Unix epoch)",
                    type: "i64",
                },
            },
        },
    },
    getBlocks: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
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
                startSlot: {
                    description: "starting slot",
                    type: "u64",
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
    getBlocksWithLimit: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id":1,
          "method":"getBlocksWithLimit",
          "params":[5, 3]
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
                limit: {
                    description:
                        "limit, as u64 integer (must be no more than 500,000 blocks higher than the start_slot)",

                    type: "u64",
                },
            },
            required: {
                startSlot: {
                    description: "Starting slot",
                    type: "u64",
                },
            },
        },
        result: {
            description:
                "The result field will be an array of u64 integers listing confirmed blocks starting at start_slot for up to limit blocks, inclusive.",
            fields: {
                RpcResponse: {
                    description:
                        "RpcResponse JSON object with value field set to the balance",
                    type: "array",
                },
            },
        },
    },
    getClusterNodes: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "getClusterNodes"
        }
      '`,
        description:
            "Returns information about all the nodes participating in the cluster.",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description:
                "The result field will be an array of JSON objects, each with the following sub fields:",
            fields: {
                featureSet: {
                    description:
                        "The unique identifier of the node's feature set",
                    type: "u32|null",
                },
                gossip: {
                    description: "Gossip network address for the node",
                    type: "string|null",
                },
                pubKey: {
                    description: "Node public key, as base-58 encoded string",
                    type: "string",
                },
                rpc: {
                    description:
                        "JSON RPC network address for the node, or null if the JSON RPC service is not enabled",
                    type: "string|null",
                },
                shredVersion: {
                    description:
                        "The shred version the node has been configured to use",
                    type: "u16|null",
                },
                tpu: {
                    description: "TPU network address for the node",
                    type: "string|null",
                },
                version: {
                    description:
                        " The software version of the node, or null if the version information is not available",
                    type: "string|null",
                },
            },
        },
    },
    getEpochInfo: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "getEpochInfo"
        }
      '`,
        description: "Returns information about the current epoch",
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
                minContextSlot: {
                    description:
                        "The minimum slot that the request can be evaluated at",

                    type: "number",
                },
            },
            required: {},
        },
        result: {
            description:
                "The result field will be an object with the following fields:",
            fields: {
                absoluteSlot: {
                    description: "the current slot",
                    type: "u64",
                },
                blockHeight: {
                    description: " the current block height",
                    type: "u64",
                },
                epoch: {
                    description: "the current epoch",
                    type: "u64",
                },
                slotIndex: {
                    description:
                        "the current slot relative to the start of the current epoch",
                    type: "u64",
                },
                slotsInEpoch: {
                    description: "the number of slots in this epoch",
                    type: "u64",
                },
                transactionCount: {
                    description:
                        "Total number of transactions processed without error since genesis",
                    type: "u64|null",
                },
            },
        },
    },
    getEpochSchedule: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc":"2.0","id":1,
          "method":"getEpochSchedule"
        }
      '`,
        description:
            "Returns the epoch schedule information from this cluster's genesis config",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description:
                "The result field will be an object with the following fields:",
            fields: {
                epoch: {
                    description: "the current epoch",
                    type: "u64",
                },
                firstNormalEpoch: {
                    description:
                        "first normal-length epoch, log2(slotsPerEpoch) - log2(MINIMUM_SLOTS_PER_EPOCH)",
                    type: "u64",
                },
                firstNormalSlot: {
                    description:
                        "MINIMUM_SLOTS_PER_EPOCH * (2.pow(firstNormalEpoch) - 1)",
                    type: "u64",
                },
                leaderScheduleSlotOffset: {
                    description:
                        " the number of slots before beginning of an epoch to calculate a leader schedule for that epoch",
                    type: "u64",
                },
                warmup: {
                    description: "whether epochs start short and grow",
                    type: "bool",
                },
            },
        },
    },
    getFeeForMessage: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "id":1,
          "jsonrpc":"2.0",
          "method":"getFeeForMessage",
          "params":[
            "AQABAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAA",
            {
              "commitment":"processed"
            }
          ]
        }
        '`,
        description:
            "Get the fee the network will charge for a particular Message",
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
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
            },
            required: {
                encodedMessage: {
                    description: "Base-64 encoded Message",
                    type: "string",
                },
            },
        },
        result: {
            description: "The result will be the fee the network will charge.",
            fields: {
                fee: {
                    description:
                        "Fee corresponding to the message at the specified blockhash",
                    type: "u64",
                },
            },
        },
    },
    getFirstAvailableBlock: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc":"2.0","id":1,
          "method":"getFirstAvailableBlock"
        }
      '`,
        description:
            "Returns the slot of the lowest confirmed block that has not been purged from the ledger",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description: "Result is the slot of the lowest confirmed block.",
            fields: {
                slot: {
                    description: "Slot of the lowest confirmed block.",
                    type: "u64",
                },
            },
        },
    },
    getHealth: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getHealth"}
      '`,
        description: "Returns the current health of the node.",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description: "Result depends on the health of the node.",
            fields: {
                error: {
                    description:
                        "If the node is unhealthy, a JSON RPC error response is returned. The specifics of the error response are UNSTABLE and may change in the future",
                    type: "error",
                },
                ok: {
                    description: "If the node is healthy",
                    type: "string",
                },
            },
        },
    },
    getHighestSnapshotSlot: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1,"method":"getHighestSnapshotSlot"}
      '`,
        description:
            "Returns the highest slot information that the node has snapshots for. This will find the highest full snapshot slot, and the highest incremental snapshot slot based on the full snapshot slot, if there is one.",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description:
                "When the node has a snapshot, this returns a JSON object with the following fields:",
            fields: {
                full: {
                    description: "Highest full snapshot slot",
                    type: "u64",
                },
                incremental: {
                    description:
                        "Highest incremental snapshot slot based on full.",
                    type: "u64|undefined",
                },
            },
        },
    },
    getIdentity: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getIdentity"}
      '`,
        description: "Returns the identity pubkey for the current node",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description:
                "The result field will be a JSON object with the following fields:",
            fields: {
                identity: {
                    description:
                        "the identity pubkey of the current node (as a base-58 encoded string)",
                    type: "string",
                },
            },
        },
    },
    getInflationGovernor: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getInflationGovernor"}
      '`,
        description: "Returns the current inflation governor",
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
            },
            required: {},
        },
        result: {
            description:
                "The result field will be a JSON object with the following fields:",
            fields: {
                foundation: {
                    description:
                        " percentage of total inflation allocated to the foundation",
                    type: "f64",
                },
                foundationTerm: {
                    description:
                        "duration of foundation pool inflation in years",
                    type: "f64",
                },
                initial: {
                    description: "the initial inflation percentage from time 0",
                    type: "f64",
                },
                taper: {
                    description:
                        "rate per year at which inflation is lowered. (Rate reduction is derived using the target slot time in genesis config)",
                    type: "f64",
                },
                terminal: {
                    description: " terminal inflation percentage",
                    type: "f64",
                },
            },
        },
    },
    getInflationRate: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getInflationRate"}
      '`,
        description:
            "Returns the specific inflation values for the current epoch",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description:
                "The result field will be a JSON object with the following fields:",
            fields: {
                epoch: {
                    description: "epoch for which these values are valid",
                    type: "u64",
                },
                foundation: {
                    description: " inflation allocated to the foundation",
                    type: "f64",
                },
                total: {
                    description: "total inflation",
                    type: "f64",
                },
                validator: {
                    description: "inflation allocated to validators",
                    type: "f64",
                },
            },
        },
    },
    getInflationReward: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getInflationReward",
          "params": [
            [
              "6dmNQ5jwLeLk5REvio1JcMshcbvkYMwy26sJ8pbkvStu",
              "BGsqMegLpV6n6Ve146sSX2dTjUMj3M92HnU8BbNRMhF2"
            ],
            {"epoch": 2}
          ]
        }
      '`,
        description:
            "Returns the inflation / staking reward for a list of addresses for an epoch",
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
                        epoch: {
                            description:
                                "An epoch for which the reward occurs. If omitted, the previous epoch will be used",
                            type: "u64",
                        },
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
            },
            required: {
                addresses: {
                    description:
                        "An array of addresses to query, as base-58 encoded strings",
                    type: "array",
                },
            },
        },
        result: {
            description:
                "The result field will be a JSON object with the following fields:",
            fields: {
                amount: {
                    description: "reward amount in lamports",
                    type: "f64",
                },
                commission: {
                    description:
                        "vote account commission when the reward was credited",
                    type: "u8|undefined",
                },
                effectiveSlot: {
                    description: "the slot in which the rewards are effective",
                    type: "f64",
                },
                epoch: {
                    description: "epoch for which reward occured",
                    type: "u64",
                },
                postBalance: {
                    description: "post balance of the account in lamports",
                    type: "f64",
                },
            },
        },
    },
    getLargestAccounts: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getLargestAccounts"}
      '`,
        description:
            "Returns the 20 largest accounts, by lamport balance (results may be cached up to two hours)",
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
                        filters: {
                            description:
                                "Filter results by account type. Values: circulatingnonCirculating",
                            type: "u64",
                        },
                    },
                },
            },
            required: {},
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to an array of <object> containing:",
            fields: {
                address: {
                    description: " base-58 encoded address of the account",
                    type: "string",
                },
                lamports: {
                    description: "number of lamports in the account, as a u64",
                    type: "u64",
                },
            },
        },
    },
    getAssetsByCreator: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
            "jsonrpc": "2.0",
            "id": "string",
            "method": "getAssetsByCreator",
            "params": {
              "creatorAddress": "string",
              "page": 1,
              "limit": 100,
              "sortBy": {
                "sortBy": "created",
                "sortDirection": "asc"
              },
              "before": "string",
              "after": "string"
            }
          }
      '`,
        description:
            "This will return a list of assets for the given authority provided. This can define compressed or standard NFTs.",
        parameters: {
            optional: {
                limit: {
                    description: "The maximum number of assets to return.",
                    type: "integer",
                },
                sortBy: {
                    description:
                        "The criteria by which the retrieved assets will be sorted.",
                    type: "string",
                },
                before: {
                    description:
                        "The cursor for paginating backwards through the assets.",
                    type: "string",
                },
                after: {
                    description:
                        "The cursor for paginating forwards through the assets.",
                    type: "string",
                },
            },
            required: {
                creatorAddress: {
                    description: "The creator address key to return assets.",
                    type: "string",
                },
                page: {
                    description: "The page of results to return",
                    type: "integer",
                },
            },
        },

        result: {
            description: "Asset Creator Details",

            assets: {
                description: "Assets from Authority",
                type: "object",
                fields: {
                    total: {
                        description: "The total number of assets found.",
                        type: "integer",
                    },
                    limit: {
                        description: "The maximum number of assets requested.",
                        type: "integer",
                    },
                    page: {
                        description: "The current page of results.",
                        type: "integer",
                    },
                    items: {
                        description: "An array of assets",
                        type: "array[object]",
                    },
                },
            },
            type: "object",
        },
    },
    getLatestBlockhash: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "id":1,
          "jsonrpc":"2.0",
          "method":"getLatestBlockhash",
          "params":[
            {
              "commitment":"processed"
            }
          ]
        }
      '`,
        description: "Returns the latest blockhash",
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
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
            },
            required: {},
        },
        result: {
            description:
                "RpcResponse<object> - RpcResponse JSON object with value field set to a JSON object including:",
            fields: {
                blockhash: {
                    description: " a Hash as base-58 encoded string",
                    type: "string",
                },
                lastValidBlockHeight: {
                    description:
                        "last block height at which the blockhash will be valid",
                    type: "u64",
                },
            },
        },
    },
    getLeaderSchedule: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getLeaderSchedule",
          "params": [
            null,
            {
              "identity": "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F"
            }
          ]
        }
      '`,
        description: "Returns the leader schedule for an epoch",
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
                        identity: {
                            description:
                                "Only return results for this validator identity (base-58 encoded)",
                            type: "string",
                        },
                    },
                },
                epoch: {
                    description:
                        "Fetch the leader schedule for the epoch that corresponds to the provided slot. If unspecified, the leader schedule for the current epoch is fetched.",
                    type: "u64",
                },
            },
            required: {},
        },
        result: {
            description:
                "Returns a result with one of the two following values:",
            fields: {
                null: {
                    description: "if requested epoch is not found, or",
                    type: "null",
                },
                object: {
                    description:
                        " the result field will be a dictionary of validator identities, as base-58 encoded strings, and their corresponding leader slot indices as values (indices are relative to the first slot in the requested epoch)",
                    type: "object",
                },
            },
        },
    },
    getMaxRetransmitSlot: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getMaxRetransmitSlot"}
      '`,
        description: "Get the max slot seen from retransmit stage.",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description: "Max slot",
            fields: {
                slotNumber: {
                    description: "Slot number",
                    type: "u64",
                },
            },
        },
    },
    getMaxShredInsertSlot: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getMaxShredInsertSlot"}
      '`,
        description: "Get the max slot seen from after shred insert.",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description: "Max slot",
            fields: {
                slotNumber: {
                    description: "Slot number",
                    type: "u64",
                },
            },
        },
    },
    getMinimumBalanceForRentExemption: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "getMinimumBalanceForRentExemption",
          "params": [50]
        }
      '`,
        description:
            "Returns minimum balance required to make account rent exempt.",
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
                dataLength: {
                    description: "the Account's data length",
                    type: "usize",
                },
            },
            required: {},
        },
        result: {
            description: "Returns minimum balance required",
            fields: {
                minLamports: {
                    description:
                        "minimum lamports required in the Account to remain rent free",
                    type: "u64",
                },
            },
        },
    },
    getMultipleAccounts: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getMultipleAccounts",
          "params": [
            [
              "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
              "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA"
            ],
            {
              "encoding": "base58"
            }
          ]
        }
      '`,
        description: "Returns the account information for a list of Pubkeys.",
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
                        dataSlice: {
                            description:
                                "Request a slice of the account's data.",
                            fields: {
                                length: {
                                    description: "number of bytes to return",
                                    type: "usize",
                                },
                                offset: {
                                    description:
                                        " byte offset from which to start reading",
                                    type: "usize",
                                },
                            },
                            type: "object",
                        },
                        encoding: {
                            description:
                                "encoding format for the returned Account data",
                            type: "string",
                        },
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
                pubKeys: {
                    description:
                        "An array of Pubkeys to query, as base-58 encoded strings (up to a maximum of 100)",
                    type: "array",
                },
            },
            required: {},
        },
        result: {
            description:
                "The result will be a JSON object with value equal to an array of:",
            fields: {
                null: {
                    description: "If the account at that Pubkey doesn't exist",
                    type: "null",
                },
                object: {
                    description: "a JSON object containing:",
                    fields: {
                        data: {
                            description:
                                "data associated with the account, either as encoded binary data or JSON format {<program>: <state>} - depending on encoding parameter",
                            type: "[string, encoding]|object",
                        },
                        executable: {
                            description:
                                "boolean indicating if the account contains a program (and is strictly read-only)",
                            type: "bool",
                        },
                        lamports: {
                            description:
                                "number of lamports assigned to the account",
                            type: "u64",
                        },
                        owner: {
                            description:
                                "base-58 encoded Pubkey of the program this account has been assigned to",
                            type: "string",
                        },
                        rentEpoch: {
                            description:
                                "the epoch at which this account will next owe rent, as u64",
                            type: "u64",
                        },
                        size: {
                            description: " the data size of the account",
                            type: "u64",
                        },
                    },
                    type: "object",
                },
            },
        },
    },
    getProgramAccounts: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "getProgramAccounts",
            "params": [
            "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
            {
                "filters": [
                {
                    "dataSize": 17
                },
                {
                    "memcmp": {
                    "offset": 4,
                    "bytes": "3Mc6vR"
                    }
                }
                ]
            }
            ]
        }
        '`,
        description:
            "Returns all accounts owned by the provided program Pubkey",
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
                        dataSlice: {
                            description:
                                "Request a slice of the account's data.",
                            fields: {
                                length: {
                                    description: "number of bytes to return",
                                    type: "usize",
                                },
                                offset: {
                                    description:
                                        " byte offset from which to start reading",
                                    type: "usize",
                                },
                            },
                            type: "object",
                        },
                        encoding: {
                            description:
                                "encoding format for the returned Account data",
                            type: "string",
                        },
                        filters: {
                            description:
                                "filter results using up to 4 filter objects",
                            type: "array",
                        },
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                        withContext: {
                            description:
                                "wrap the result in an RpcResponse JSON object",
                            type: "bool",
                        },
                    },
                },
            },
            required: {
                pubKey: {
                    description: "Pubkey of program, as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "By default, the result field will be an array of JSON objects.",
            fields: {
                account: {
                    description:
                        "a JSON object, with the following sub fields:",
                    fields: {
                        data: {
                            description:
                                "data associated with the account, either as encoded binary data or JSON format {<program>: <state>} - depending on encoding parameter",
                            type: "[string, encoding]|object",
                        },
                        executable: {
                            description:
                                "boolean indicating if the account contains a program (and is strictly read-only)",
                            type: "bool",
                        },
                        lamports: {
                            description:
                                "number of lamports assigned to the account",
                            type: "u64",
                        },
                        owner: {
                            description:
                                "base-58 encoded Pubkey of the program this account has been assigned to",
                            type: "string",
                        },
                        rentEpoch: {
                            description:
                                "the epoch at which this account will next owe rent, as u64",
                            type: "u64",
                        },
                        size: {
                            description: " the data size of the account",
                            type: "u64",
                        },
                    },
                    type: "object",
                },
                pubKey: {
                    description: "The account Pubkey as base-58 encoded string",
                    type: "string",
                },
            },
        },
    },
    getRecentPerformanceSamples: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc":"2.0", "id":1,
          "method": "getRecentPerformanceSamples",
          "params": [4]}
      '`,
        description:
            "Returns a list of recent performance samples, in reverse slot order. Performance samples are taken every 60 seconds and include the number of transactions and slots that occur in a given time window.",
        parameters: {
            optional: {
                limit: {
                    description: "number of samples to return (maximum 720)",
                    type: "usize",
                },
            },
            required: {},
        },
        result: {
            description:
                "An array of RpcPerfSample<object> with the following fields:",
            fields: {
                numNonVoteTransaction: {
                    description:
                        "Number of non-vote transactions processed during the sample period.",
                    type: "u64",
                },
                numSlots: {
                    description:
                        "Number of slots completed during the sample period",
                    type: "u64",
                },
                numTransactions: {
                    description:
                        "Number of transactions processed during the sample period",
                    type: "u64",
                },
                samplePeriodSecs: {
                    description: "Number of seconds in a sample window",
                    type: "u16",
                },
                slot: {
                    description: "Slot in which sample was taken at.",
                    type: "u64",
                },
            },
        },
    },
    getRecentPrioritizationFees: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc":"2.0", "id":1,
          "method": "getRecentPrioritizationFees",
          "params": [
            ["CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY"]
          ]
        }
      '`,
        description:
            "Returns a list of prioritization fees from recent blocks.",
        parameters: {
            optional: {
                accountAddresses: {
                    description:
                        "An array of Account addresses (up to a maximum of 128 addresses), as base-58 encoded strings",
                    type: "array",
                },
            },
            required: {},
        },
        result: {
            description:
                "An array of RpcPrioritizationFee<object> with the following fields:",
            fields: {
                prioritizationFee: {
                    description:
                        "the per-compute-unit fee paid by at least one successfully landed transaction, specified in increments of micro-lamports (0.000001 lamports)",
                    type: "u64",
                },
                slot: {
                    description: "slot in which the fee was observed",
                    type: "u64",
                },
            },
        },
    },
    getSignaturesForAddress: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getSignaturesForAddress",
          "params": [
            "Vote111111111111111111111111111111111111111",
            {
              "limit": 1
            }
          ]
        }
      '`,
        description:
            "Returns signatures for confirmed transactions that include the given address in their accountKeys list. Returns signatures backwards in time from the provided signature or most recent confirmed block",
        parameters: {
            optional: {
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        before: {
                            description:
                                "start searching backwards from this transaction signature. If not provided the search starts from the top of the highest max confirmed block.",
                            type: "string",
                        },
                        commitment: {
                            description: "commitment level",
                            type: "string",
                        },
                        limit: {
                            description:
                                "maximum transaction signatures to return (between 1 and 1,000).",
                            type: "number",
                        },
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                        util: {
                            description:
                                "search until this transaction signature, if found before limit reached",
                            type: "string",
                        },
                    },
                },
            },
            required: {
                address: {
                    description: "Account address as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "An array of <object>, ordered from newest to oldest transaction, containing transaction signature information with the following fields:",
            fields: {
                blockTime: {
                    description:
                        "estimated production time, as Unix timestamp (seconds since the Unix epoch) of when transaction was processed. null if not available.",
                    type: "i64|null",
                },
                confirmationStatus: {
                    description:
                        "The transaction's cluster confirmation status; Either processed, confirmed, or finalized. See Commitment for more on optimistic confirmation.",
                    type: "string|null",
                },
                err: {
                    description:
                        "Error if transaction failed, null if transaction succeeded. See TransactionError definitions for more info.",
                    type: "object|null",
                },
                memo: {
                    description:
                        "Memo associated with the transaction, null if no memo is present",
                    type: "string|null",
                },
                samplePeriodSecs: {
                    description: "Number of seconds in a sample window",
                    type: "u16",
                },
                slot: {
                    description:
                        "The slot that contains the block with the transaction",
                    type: "u64",
                },
            },
        },
    },
    getSignaturesForAsset: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
            "jsonrpc": "2.0",
            "id": "string",
            "method": "getSignaturesForAsset",
            "params": {
              "id": "string",
              "page": 1,
              "limit": 100,
              "before": "string",
              "after": "string"
            }
          }
      '`,
        description:
            "This method will return the transaction signatures for a given asset. This only supports compressed assets. ",
        parameters: {
            optional: {
                after: {
                    description:
                        "The cursor for paginating forwards through the signatures.",
                    type: "string",
                },
                before: {
                    description:
                        "The cursor for paginating backwards through the signatures.",
                    type: "string",
                },
                limit: {
                    description: "The maximum number of signatures to return.",
                    type: "integer",
                },
            },
            required: {
                id: {
                    description: "The ID of the asset to retrieve.",
                    type: "string",
                },
                page: {
                    description: "The page of results to return.",
                    type: "integer",
                },
            },
        },

        result: {
            description: "Asset Signature Details",

            fields: {
                assets: {
                    description: "Information regarding the asset.",
                    fields: {
                        items: {
                            description: "An array of assets.",
                            type: "array",
                        },
                        limit: {
                            description:
                                "The maximum number of assets requested.",
                            type: "integer",
                        },
                        page: {
                            description: "The current page of results.",
                            type: "integer",
                        },
                        total: {
                            description: "The total number of assets found.",
                            type: "integer",
                        },
                    },
                    type: "object",
                },
            },
        },
    },
    getAssetsByGroup: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
            "jsonrpc": "2.0",
            "id": "string",
            "method": "getAssetsByGroup",
            "params": {
              "groupKey": "collection",
              "groupValue": "string",
              "page": 1,
              "limit": 100,
              "sortBy": {
                "sortBy": "created",
                "sortDirection": "asc"
              },
              "before": "string",
              "after": "string"
            }
          }
      '`,
        description:
            "This will return the asset information for a specific group provided (i.e Collection). This can return compressed or standard NFTs.",
        parameters: {
            optional: {
                limit: {
                    description: "The maximum number of assets to return.",
                    type: "integer",
                },
                sortBy: {
                    description:
                        "The criteria by which the retrieved assets will be sorted.",
                    type: "string",
                },
                before: {
                    description:
                        "The cursor for paginating backwards through the assets.",
                    type: "string",
                },
                after: {
                    description:
                        "The cursor for paginating forwards through the assets.",
                    type: "string",
                },
            },
            required: {
                groupValue: {
                    description: "The address value of the group.",
                    type: "string",
                },
                groupKey: {
                    description: "The group key for the asset search.",
                    type: "string",
                },
                page: {
                    description: "The page of results to return",
                    type: "integer",
                },
            },
        },

        result: {
            description: "Asset Group Details",

            assets: {
                description: "Assets from Authority",
                type: "object",
                fields: {
                    total: {
                        description: "The total number of assets found.",
                        type: "integer",
                    },
                    limit: {
                        description: "The maximum number of assets requested.",
                        type: "integer",
                    },
                    page: {
                        description: "The current page of results.",
                        type: "integer",
                    },
                    items: {
                        description: "An array of assets",
                        type: "array[object]",
                    },
                },
            },
            type: "object",
        },
    },
    getSignaturesStatuses: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getSignatureStatuses",
          "params": [
            [
              "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW"
            ],
            {
              "searchTransactionHistory": true
            }
          ]
        }
      '`,
        description:
            "Returns the statuses of a list of signatures. Each signature must be a txid, the first signature of a transaction.",
        parameters: {
            optional: {
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        searchTransactionHistory: {
                            description:
                                "if true - a Solana node will search its ledger cache for any signatures not found in the recent status cache",
                            type: "bool",
                        },
                    },
                },
                transactionSigArray: {
                    description:
                        "An array of transaction signatures to confirm, as base-58 encoded strings (up to a maximum of 256)",
                    type: "array",
                },
            },
            required: {
                address: {
                    description: "Account address as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "An array of RpcResponse<object> consisting of either:",
            fields: {
                null: {
                    description: "Unknown transaction",
                    type: "null",
                },
                object: {
                    description: "Object with response data",
                    fields: {
                        confirmationStatus: {
                            description:
                                "The transaction's cluster confirmation status; Either processed, confirmed, or finalized.",
                            type: "object",
                        },
                        confirmations: {
                            description:
                                "Number of blocks since signature confirmation, null if rooted, as well as finalized by a supermajority of the cluster",
                            type: "usize|null",
                        },
                        err: {
                            description:
                                "Error if transaction failed, null if transaction succeeded. ",
                            type: "object|null",
                        },
                        slot: {
                            description:
                                "The slot the transaction was processed",
                            type: "u64",
                        },
                    },
                    type: "object",
                },
            },
        },
    },
    getSlot: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getSlot"}
      '`,
        description:
            "Returns the slot that has reached the given or default commitment level",
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
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
            },
            required: {},
        },
        result: {
            description: "Returns a slot.",
            fields: {
                slot: {
                    description: "Current slot",
                    type: "u64",
                },
            },
        },
    },
    getSlotLeader: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getSlotLeader"}
      '`,
        description: "Returns the current slot leader",
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
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
            },
            required: {},
        },
        result: {
            description: "Returns the current leader",
            fields: {
                identityPubkey: {
                    description:
                        "Node identity Pubkey as base-58 encoded string",
                    type: "string",
                },
            },
        },
    },
    getSlotLeaders: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc":"2.0", "id": 1,
          "method": "getSlotLeaders",
          "params": [100, 10]
        }
      '`,
        description: "Returns epoch activation information for a stake account",
        parameters: {
            optional: {
                limit: {
                    description: "Limit, as u64 integer (between 1 and 5,000)",
                    type: "u64",
                },
                startSlot: {
                    description: "Start slot, as u64 integer",
                    type: "u64",
                },
            },
            required: {},
        },
        result: {
            description: "Returns the slot leaders",
            fields: {
                identityPubkeyArray: {
                    description:
                        "array of Node identity public keys as base-58 encoded strings",
                    type: "array[string]",
                },
            },
        },
    },
    getStakeActivation: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getStakeActivation",
          "params": [
            "CYRJWqiSjLitBAcRxPvWpgX3s5TvmN2SuRY3eEYypFvT",
            {
              "epoch": 4
            }
          ]
        }
      '`,
        description: "Returns the current slot leader",
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
                        epoch: {
                            description:
                                "epoch for which to calculate activation details. If parameter not provided, defaults to current epoch.",
                            type: "u64",
                        },
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
            },
            required: {
                stakeAccountPubkey: {
                    description:
                        "Stake account address as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "The result will be a JSON object with the following fields:",
            fields: {
                active: {
                    description: "stake active during the epoch",
                    type: "u64",
                },
                inactive: {
                    description: "take inactive during the epoch",
                    type: "u64",
                },
                state: {
                    description:
                        "the stake account's activation state, either: active, inactive, activating, or deactivating",
                    type: "string",
                },
            },
        },
    },
    getStakeMinimumDelegation: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc":"2.0", "id":1,
          "method": "getStakeMinimumDelegation"
        }
      '`,
        description: "Returns the stake minimum delegation, in lamports.",
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
            },
            required: {},
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to:",
            fields: {
                stakeMinimumDelegation: {
                    description: "The stake minimum delegation, in lamports",
                    type: "u64",
                },
            },
        },
    },
    getSupply: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0", "id":1, "method":"getSupply"}
      '`,
        description: "Returns information about the current supply.",
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
                        excludeNonCirculatingAccountsList: {
                            description:
                                "exclude non circulating accounts list from response",
                            type: "bool",
                        },
                    },
                },
            },
            required: {},
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to a JSON object containing:",
            fields: {
                circulating: {
                    description: "Circulating supply in lamports",
                    type: "u64",
                },
                nonCirculating: {
                    description: "Non-circulating supply in lamports",
                    type: "u64",
                },
                nonCirculatingAccounts: {
                    description:
                        "an array of account addresses of non-circulating accounts, as strings. If excludeNonCirculatingAccountsList is enabled, the returned array will be empty.",
                    type: "array",
                },
                total: {
                    description: "Total supply in lamports",
                    type: "u64",
                },
            },
        },
    },
    getTokenAccountsByDelegate: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getTokenAccountsByDelegate",
          "params": [
            "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
            {
              "programId": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
            },
            {
              "encoding": "jsonParsed"
            }
          ]
        }
      '`,
        description: "Returns all SPL Token accounts by approved Delegate.",
        parameters: {
            optional: {
                JSONObject: {
                    description:
                        "A JSON object with one of the following fields:",
                    fields: {
                        mint: {
                            description:
                                "Pubkey of the specific token Mint to limit accounts to, as base-58 encoded string",
                            type: "string",
                        },
                        programID: {
                            description:
                                "Pubkey of the Token program that owns the accounts, as base-58 encoded string",
                            type: "string",
                        },
                    },
                },
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        commitment: {
                            description: "commitment level",
                            type: "string",
                        },
                        dataSlice: {
                            description:
                                "Request a slice of the account's data.",
                            fields: {
                                length: {
                                    description: "number of bytes to return",
                                    type: "usize",
                                },
                                offset: {
                                    description:
                                        " byte offset from which to start reading",
                                    type: "usize",
                                },
                            },
                            type: "object",
                        },
                        encoding: {
                            description:
                                "encoding format for the returned Account data",
                            type: "string",
                        },
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
                tokenAccount: {
                    description:
                        "Pubkey of Token account to query, as base-58 encoded string",
                    type: "string",
                },
            },
            required: {
                accountDelegate: {
                    description:
                        "Pubkey of account delegate to query, as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to an array of JSON objects, which will contain:",
            fields: {
                account: {
                    description:
                        " a JSON object, with the following sub fields:",
                    fields: {
                        data: {
                            description:
                                "Token state data associated with the account, either as encoded binary data or in JSON format {<program>: <state>}",
                            type: "object",
                        },
                        executable: {
                            description:
                                "boolean indicating if the account contains a program (and is strictly read-only)",
                            type: "bool",
                        },
                        lamports: {
                            description:
                                "number of lamports assigned to this account, as a u64",
                            type: "u64",
                        },
                        owner: {
                            description:
                                "base-58 encoded Pubkey of the program this account has been assigned to",
                            type: "string",
                        },
                        rentEpoch: {
                            description:
                                "the epoch at which this account will next owe rent, as u64",
                            type: "u64",
                        },
                        size: {
                            description: "the data size of the account",
                            type: "u64",
                        },
                    },
                    type: "object",
                },
                pubKey: {
                    description: "the account Pubkey as base-58 encoded string",
                    type: "string",
                },
            },
        },
    },
    getTokenAccountsByOwner: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getTokenAccountsByOwner",
          "params": [
            "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F",
            {
              "mint": "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"
            },
            {
              "encoding": "jsonParsed"
            }
          ]
        }
      '`,
        description: "Returns all SPL Token accounts by token owner.",
        parameters: {
            optional: {
                JSONObject: {
                    description:
                        "A JSON object with one of the following fields:",
                    fields: {
                        mint: {
                            description:
                                "Pubkey of the specific token Mint to limit accounts to, as base-58 encoded string",
                            type: "string",
                        },
                        programID: {
                            description:
                                "Pubkey of the Token program that owns the accounts, as base-58 encoded string",
                            type: "string",
                        },
                    },
                },
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        commitment: {
                            description: "commitment level",
                            type: "string",
                        },
                        dataSlice: {
                            description:
                                "Request a slice of the account's data.",
                            fields: {
                                length: {
                                    description: "number of bytes to return",
                                    type: "usize",
                                },
                                offset: {
                                    description:
                                        " byte offset from which to start reading",
                                    type: "usize",
                                },
                            },
                            type: "object",
                        },
                        encoding: {
                            description:
                                "encoding format for the returned Account data",
                            type: "string",
                        },
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
                tokenAccount: {
                    description:
                        "Pubkey of Token account to query, as base-58 encoded string",
                    type: "string",
                },
            },
            required: {
                accountDelegate: {
                    description:
                        "Pubkey of account delegate to query, as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to an array of JSON objects, which will contain:",
            fields: {
                account: {
                    description:
                        " a JSON object, with the following sub fields:",
                    fields: {
                        data: {
                            description:
                                "Token state data associated with the account, either as encoded binary data or in JSON format {<program>: <state>}",
                            type: "object",
                        },
                        executable: {
                            description:
                                "boolean indicating if the account contains a program (and is strictly read-only)",
                            type: "bool",
                        },
                        lamports: {
                            description:
                                "number of lamports assigned to this account, as a u64",
                            type: "u64",
                        },
                        owner: {
                            description:
                                "base-58 encoded Pubkey of the program this account has been assigned to",
                            type: "string",
                        },
                        rentEpoch: {
                            description:
                                "the epoch at which this account will next owe rent, as u64",
                            type: "u64",
                        },
                        size: {
                            description: "the data size of the account",
                            type: "u64",
                        },
                    },
                    type: "object",
                },
                pubKey: {
                    description: "the account Pubkey as base-58 encoded string",
                    type: "string",
                },
            },
        },
    },
    getTokenBalance: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "getTokenAccountBalance",
          "params": [
            "7fUAJdStEuGbc3sM84cKRL6yYaaSstyLSU4ve5oovLS7"
          ]
        }
      '`,
        description: "Returns the token balance of an SPL Token account.",
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
                tokenAccount: {
                    description:
                        "Pubkey of Token account to query, as base-58 encoded string",
                    type: "string",
                },
            },
            required: {},
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to a JSON object containing:",
            fields: {
                amount: {
                    description:
                        "the raw balance without decimals, a string representation of u64",
                    type: "string",
                },
                decimals: {
                    description:
                        "number of base 10 digits to the right of the decimal place",
                    type: "u8",
                },
                uiAmountString: {
                    description:
                        "the balance as a string, using mint-prescribed decimals",
                    type: "string",
                },
            },
        },
    },
    getTokenLargestAccounts: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "getTokenLargestAccounts",
          "params": [
            "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"
          ]
        }
      '`,
        description:
            "Returns the 20 largest accounts of a particular SPL Token type.",
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
            },
            required: {
                tokenMint: {
                    description:
                        "Pubkey of the token Mint to query, as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to a JSON object containing:",
            fields: {
                address: {
                    description: " the address of the token account",
                    type: "string",
                },
                amount: {
                    description:
                        "the raw balance without decimals, a string representation of u64",
                    type: "string",
                },
                decimals: {
                    description:
                        "number of base 10 digits to the right of the decimal place",
                    type: "u8",
                },
                uiAmountString: {
                    description:
                        "the balance as a string, using mint-prescribed decimals",
                    type: "string",
                },
            },
        },
    },
    getTokenSupply: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "getTokenSupply",
          "params": [
            "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E"
          ]
        }
      '`,
        description: "Returns the total supply of an SPL Token type.",
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
            },
            required: {
                tokenMint: {
                    description:
                        "Pubkey of the token Mint to query, as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to a JSON object containing:",
            fields: {
                amount: {
                    description:
                        "the raw balance without decimals, a string representation of u64",
                    type: "string",
                },
                decimals: {
                    description:
                        "number of base 10 digits to the right of the decimal place",
                    type: "u8",
                },
                uiAmountString: {
                    description:
                        "the balance as a string, using mint-prescribed decimals",
                    type: "string",
                },
            },
        },
    },
    getTransaction: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getTransaction",
          "params": [
            "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv",
            "json"
          ]
        }
      '
      
      
      `,
        description: "Returns transaction details for a confirmed transaction",
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
            },
            required: {
                tokenMint: {
                    description:
                        "Pubkey of the token Mint to query, as base-58 encoded string",
                    type: "string",
                },
            },
        },
        result: {
            description:
                "The result will either be a null value if the transaction was not found, or a JSON object containing:",
            fields: {
                null: {
                    description: "if transaction is not found or not confirmed",
                    type: "null",
                },
                object: {
                    description:
                        "if transaction is confirmed, an object with the following fields:",
                    fields: {
                        blockTime: {
                            description:
                                "estimated production time, as Unix timestamp (seconds since the Unix epoch) of when the transaction was processed. null if not available",
                            type: "i64|null",
                        },

                        computeUnitsConsumed: {
                            description:
                                "number of compute units consumed by the transaction",
                            type: "u64|undefined",
                        },
                        innerInstructions: {
                            description:
                                "List of inner instructions or null if inner instruction recording was not enabled during this transaction",
                            type: "array|null",
                        },
                        loadedAddresses: {
                            description:
                                "Transaction addresses loaded from address lookup tables. Undefined if maxSupportedTransactionVersion is not set in request params, or if jsonParsed encoding is set in request params.",
                            type: "object|undefined",
                        },
                        logMessages: {
                            description:
                                "array of string log messages or null if log message recording was not enabled during this transaction",
                            type: "array|null",
                        },
                        meta: {
                            description: "transaction status metadata object:",
                            fields: {
                                err: {
                                    description:
                                        "Error if transaction failed, null if transaction succeeded.",
                                    type: "object|null",
                                },
                                fee: {
                                    description:
                                        "fee this transaction was charged, as u64 integer",
                                    type: "u64",
                                },
                            },
                            type: "object|null",
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
                        readonly: {
                            description:
                                "Ordered list of base-58 encoded addresses for readonly loaded accounts",
                            type: "array[string]",
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
                                        "type of reward: currently only rent, other types may be added in the future",
                                    type: "string",
                                },
                            },
                            type: "array|null",
                        },
                        slot: {
                            description:
                                "the slot this transaction was processed in",
                            type: "u64",
                        },
                        transaction: {
                            description:
                                "Transaction object, either in JSON format or encoded binary data, depending on encoding parameter",
                            type: "object|[string,encoding]",
                        },
                        version: {
                            description:
                                "Transaction version. Undefined if maxSupportedTransactionVersion is not set in request params.",
                            type: "legacy|number|undefined",
                        },
                        writable: {
                            description:
                                "Ordered list of base-58 encoded addresses for writable loaded accounts",
                            type: "array[string]",
                        },
                    },
                    type: "object",
                },
            },
        },
    },
    getTransactionCount: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getTransactionCount"}
      '
      `,
        description: "Returns the current Transaction count from the ledger",
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
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                    },
                },
            },
            required: {},
        },

        result: {
            description:
                "The result will be an RpcResponse JSON object with value equal to a JSON object containing:",
            fields: {
                transactionCount: {
                    description:
                        "the current Transaction count from the ledger",
                    type: "u64",
                },
            },
        },
    },
    getVersion: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"getVersion"}
      '
      `,
        description: "Returns the current Solana version running on the node",
        parameters: {
            optional: {},
            required: {},
        },
        result: {
            description:
                "The result field will be a JSON object with the following fields:",
            fields: {
                featureSet: {
                    description:
                        "unique identifier of the current software's feature set",
                    type: "number",
                },
                solanaCore: {
                    description: "software version of solana-core",
                    type: "string",
                },
            },
        },
    },
    getVoteAccounts: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "getVoteAccounts",
          "params": [
            {
              "votePubkey": "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw"
            }
          ]
        }
      '`,
        description:
            "Returns the account info and associated stake for all the voting accounts in the current bank.",
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
                        delinquentSlotDistance: {
                            description:
                                "Specify the number of slots behind the tip that a validator must fall to be considered delinquent. **NOTE:** For the sake of consistency between ecosystem products, _it is **not** recommended that this argument be specified.",
                            type: "u64",
                        },
                        keepUnstakedDelinquents: {
                            description:
                                "Do not filter out delinquent validators with no stake",
                            type: "bool",
                        },
                        votePubKey: {
                            description:
                                "Only return results for this validator vote address (base-58 encoded)",
                            type: "string",
                        },
                    },
                },
            },
            required: {},
        },

        result: {
            description:
                "The result field will be a JSON object of current and delinquent accounts, each containing an array of JSON objects with the following sub fields:",
            fields: {
                accountsObject: {
                    description:
                        "the current Transaction count from the ledger",
                    fields: {
                        activatedStake: {
                            description:
                                " the stake, in lamports, delegated to this vote account and active in this epoch",
                            type: "u64",
                        },
                        commission: {
                            description:
                                "percentage (0-100) of rewards payout owed to the vote account",
                            type: "number",
                        },
                        epochCredits: {
                            description:
                                "Latest history of earned credits for up to five epochs, as an array of arrays containing: [epoch, credits, previousCredits].",
                            type: "array",
                        },
                        epochVoteAccount: {
                            description:
                                "bool, whether the vote account is staked for this epoch",
                            type: "bool",
                        },
                        lastVote: {
                            description:
                                "Most recent slot voted on by this vote account",
                            type: "u64",
                        },
                        nodePubkey: {
                            description:
                                "Validator identity, as base-58 encoded string",
                            type: "string",
                        },
                        rootSlot: {
                            description:
                                "Current root slot for this vote account",
                            type: "u64",
                        },
                        votePubkey: {
                            description:
                                "Vote account address, as base-58 encoded string",
                            type: "string",
                        },
                    },
                    type: "object",
                },
            },
        },
    },
    isBlockhashValid: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "id":45,
          "jsonrpc":"2.0",
          "method":"isBlockhashValid",
          "params":[
            "J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW",
            {"commitment":"processed"}
          ]
        }
      '`,
        description: "Returns whether a blockhash is still valid or not",
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
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at.",
                            type: "u64",
                        },
                    },
                },
            },
            required: {
                blockhash: {
                    description:
                        "the blockhash of the block to evauluate, as base-58 encoded string",
                    type: "string",
                },
            },
        },

        result: {
            description: "Returns blockhash validity",
            fields: {
                blockhashValidity: {
                    description: "true if the blockhash is still valid",
                    type: "bool",
                },
            },
        },
    },
    minimumLedgerSlot: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {"jsonrpc":"2.0","id":1, "method":"minimumLedgerSlot"}
      '`,
        description:
            "Returns the lowest slot that the node has information about in its ledger.",
        parameters: {
            optional: {},
            required: {},
        },

        result: {
            description: "Returns minimum ledger slot number",
            fields: {
                minSlotNumber: {
                    description: "Minimum ledger slot number",
                    type: "u64",
                },
            },
        },
    },
    requestAirdrop: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0", "id": 1,
          "method": "requestAirdrop",
          "params": [
            "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
            1000000000
          ]
        }
      '`,
        description: "Requests an airdrop of lamports to a Pubkey",
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
            },
            required: {
                lamports: {
                    description: "lamports to airdrop, as a 'u64'",
                    type: "integer",
                },
                pubkey: {
                    description:
                        "Pubkey of account to receive lamports, as a base-58 encoded string",
                    type: "string",
                },
            },
        },

        result: {
            description:
                "If the airdrop is successful the transaction signature will be returned ",
            fields: {
                transactionSig: {
                    description:
                        "Transaction Signature of the airdrop, as a base-58 encoded string",
                    type: "string",
                },
            },
        },
    },
    searchAsset: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
            "jsonrpc": "2.0",
            "id": "string",
            "method": "getSignaturesForAsset",
            "params": {
              "id": "string",
              "page": 1,
              "limit": 100,
              "before": "string",
              "after": "string"
            }
          }
      '`,
        description:
            "This method will return assets based on the custom search criteria passed in. This can define compressed or standard NFTs.",
        parameters: {
            optional: {
                after: {
                    description:
                        "The cursor for paginating forwards through the signatures.",
                    type: "string",
                },
                authorityAddress: {
                    description:
                        "The criteria for authority address set for the asset search.",
                    type: "string",
                },
                before: {
                    description:
                        "The cursor for paginating backwards through the signatures.",
                    type: "string",
                },
                burnt: {
                    description:
                        "The criteria for whether an asset is burnt or not.",
                    type: "boolean",
                },
                compressed: {
                    description:
                        "The criteria in which an asset is compressed or not.",
                    type: "boolean",
                },
                compressible: {
                    description:
                        "The criteria in which an asset is compressible or not.",
                    type: "boolean",
                },
                creatorAddress: {
                    description: "The criteria for creator in asset search.",
                    type: "string",
                },
                creatorVerified: {
                    description:
                        "The criteria for whether a creator is verified or not.",
                    type: "boolean",
                },
                delegate: {
                    description:
                        "The criteria for delegate set for the asset search.",
                    type: "integer",
                },
                frozen: {
                    description:
                        "The criteria for whether an assets searched are frozen or not.",
                    type: "boolean",
                },
                grouping: {
                    description:
                        "The address of the owner whose assets to retrieve.",
                    type: "string",
                },
                interface: {
                    description:
                        "The criteria for interface set for the asset search.",
                    type: "string",
                },
                limit: {
                    description: "The maximum number of signatures to return.",
                    type: "integer",
                },
                ownerAddress: {
                    description:
                        "The address of the owner whose assets to retrieve.",
                    type: "string",
                },
                ownerType: {
                    description:
                        "The criteria for ownership model set for the asset search.",
                    type: "integer",
                },
                royaltyAmount: {
                    description:
                        "The criteria for royalty amount set for the asset search.",
                    type: "integer",
                },
                royaltyTarget: {
                    description:
                        "The criteria for royalty target set for the asset search.",
                    type: "integer",
                },
                royaltyTargetType: {
                    description:
                        "The criteria for royalty target type set for the asset search.",
                    type: "string",
                },
                sortBy: {
                    description:
                        "The criteria by which the retrieved assets will be sorted",
                    type: "string",
                },
                supply: {
                    description:
                        "The criteria for supply set for the asset search.",
                    type: "integer",
                },
                supplyMint: {
                    description:
                        "The criteria for supply mint set for the asset search.",
                    type: "string",
                },
            },
            required: {
                page: {
                    description: "The page of results to return.",
                    type: "integer",
                },
            },
        },

        result: {
            description: "Asset Details",
            fields: {
                assets: {
                    description: "Information regarding the asset.",
                    fields: {
                        items: {
                            description: "An array of assets.",
                            type: "array",
                        },
                        limit: {
                            description:
                                "The maximum number of assets requested.",
                            type: "integer",
                        },
                        page: {
                            description: "The current page of results.",
                            type: "integer",
                        },
                        total: {
                            description: "The total number of assets found.",
                            type: "integer",
                        },
                    },
                    type: "object",
                },
            },
        },
    },
    sendTransaction: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "sendTransaction",
          "params": [
            "4hXTCkRzt9WyecNzV1XPgCDfGAZzQKNxLXgynz5QDuWWPSAZBZSHptvWRL3BjCvzUXRdKvHL2b7yGrRQcWyaqsaBCncVG7BFggS8w9snUts67BSh3EqKpXLUm5UMHfD7ZBe9GhARjbNQMLJ1QD3Spr6oMTBU6EhdB4RD8CP2xUxr2u3d6fos36PD98XS6oX8TQjLpsMwncs5DAMiD4nNnR8NBfyghGCWvCVifVwvA8B8TJxE1aiyiv2L429BCWfyzAme5sZW8rDb14NeCQHhZbtNqfXhcp2tAnaAT"
          ]
        }
      '`,
        description:
            "Submits a signed transaction to the cluster for processing.This method does not alter the transaction in any way; it relays the transaction created by clients to the node as-is. If the node's rpc service receives the transaction, this method immediately succeeds, without waiting for any confirmations. A successful response from this method does not guarantee the transaction is processed or confirmed by the cluster. While the rpc service will reasonably retry to submit it, the transaction could be rejected if transaction's recent_blockhash expires before it lands. Use getSignatureStatuses to ensure a transaction is processed and confirmed. Before submitting, the following preflight checks are performed: The transaction signatures are verified. The transaction is simulated against the bank slot specified by the preflight commitment. On failure an error will be returned. Preflight checks may be disabled if desired. It is recommended to specify the same commitment and preflight commitment to avoid confusing behavior. The returned signature is the first signature in the transaction, which is used to identify the transaction (transaction id). This identifier can be easily extracted from the transaction data before submission.",
        parameters: {
            optional: {
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        encoding: {
                            description:
                                "Encoding used for the transaction data.",
                            type: "string",
                        },
                        maxRetries: {
                            description:
                                "Commitment level to use for preflight.",
                            type: "usize",
                        },
                        minContextSlot: {
                            description:
                                "set the minimum slot at which to perform preflight transaction checks",
                            type: "number",
                        },
                        preflightCommitment: {
                            description:
                                "Commitment level to use for preflight.",
                            type: "string",
                        },
                        skipPreflight: {
                            description:
                                "if 'true', skip the preflight transaction checks",
                            type: "bool",
                        },
                    },
                },
            },
            required: {
                signedTransaction: {
                    description: "Fully-signed Transaction, as encoded string.",
                    type: "string",
                },
            },
        },

        result: {
            description: "Returns the First Transaction Signature",
            fields: {
                transactionSig: {
                    description:
                        " First Transaction Signature embedded in the transaction, as base-58 encoded string (transaction id)",
                    type: "string",
                },
            },
        },
    },
    simulateTransaction: {
        codeExample: `curl https://api.mainnet-beta.solana.com -X POST -H "Content-Type: application/json" -d '
        {
          "jsonrpc": "2.0",
          "id": 1,
          "method": "simulateTransaction",
          "params": [
            "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEDArczbMia1tLmq7zz4DinMNN0pJ1JtLdqIJPUw3YrGCzYAMHBsgN27lcgB6H2WQvFgyZuJYHa46puOQo9yQ8CVQbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCp20C7Wj2aiuk5TReAXo+VTVg8QTHjs0UjNMMKCvpzZ+ABAgEBARU=",
            {
              "encoding":"base64",
            }
          ]
        }
      '`,
        description: "Simulate sending a transaction",
        parameters: {
            optional: {
                configObject: {
                    description:
                        "Configuration object containing the following fields:",
                    fields: {
                        accounts: {
                            description:
                                "Accounts configuration object containing the following fields:",
                            fields: {
                                addresses: {
                                    description:
                                        "An `array` of accounts to return, as base-58 encoded strings",
                                    type: "array",
                                },
                                encoding: {
                                    description:
                                        "encoding for returned Account data",
                                    type: "string",
                                },
                            },
                            type: "object",
                        },
                        encoding: {
                            description:
                                "Encoding used for the transaction data.",
                            type: "string",
                        },
                        minContextSlot: {
                            description:
                                "The minimum slot that the request can be evaluated at",
                            type: "number",
                        },
                        replaceRecentBlockhash: {
                            description:
                                "if `true` the transaction recent blockhash will be replaced with the most recent blockhash. (conflicts with `sigVerify`)",
                            type: "bool",
                        },
                        sigVerify: {
                            description:
                                "If `true` the transaction signatures will be verified (conflicts with `replaceRecentBlockhash`)",
                            type: "bool",
                        },
                    },
                },
            },
            required: {
                transaction: {
                    description: "Transaction, as an encoded string.",
                    type: "string",
                },
            },
        },

        result: {
            description:
                "The result will be an RpcResponse JSON object with value set to a JSON object with the following fields:",
            fields: {
                accounts: {
                    description:
                        "array of accounts with the same length as the accounts.addresses array in the request",
                    fields: {
                        null: {
                            description:
                                "if the account doesn't exist or if err is not null",
                            object: {
                                description:
                                    " otherwise, a JSON object containing:",
                                fields: {
                                    data: {
                                        description:
                                            "data associated with the account, either as encoded binary data or JSON format {<program>: <state>} - depending on encoding parameter",
                                        type: "[string, encoding]|object",
                                    },
                                    executable: {
                                        description:
                                            "boolean indicating if the account contains a program (and is strictly read-only)",
                                        type: "bool",
                                    },
                                    lamports: {
                                        description:
                                            "number of lamports assigned to this account, as a u64",
                                        type: "u64",
                                    },
                                    owner: {
                                        description:
                                            "base-58 encoded Pubkey of the program this account has been assigned to",
                                        type: "string",
                                    },
                                    rentEpoch: {
                                        description:
                                            "the epoch at which this account will next owe rent, as u64",
                                        type: "u64",
                                    },
                                },
                                type: "object",
                            },
                            type: "null",
                        },
                    },
                    type: "array|null",
                },
                accountsConsumed: {
                    description:
                        "The number of compute budget units consumed during the processing of this transaction",
                    type: "u64",
                },
                err: {
                    description:
                        "Error if transaction failed, null if transaction succeeded.",
                    type: "object|string|null",
                },
                logs: {
                    description:
                        "Array of log messages the transaction instructions output during execution, null if simulation failed before the transaction was able to execute (for example due to an invalid blockhash or signature verification failure)",
                    type: "array|null",
                },
                returnData: {
                    description:
                        "the most-recent return data generated by an instruction in the transaction, with the following fields:",
                    fields: {
                        data: {
                            description:
                                "The return data itself, as base-64 encoded binary data.",
                            type: "[string ,encoding]",
                        },
                        programId: {
                            description:
                                "the program that generated the return data, as base-58 encoded Pubkey",
                            type: "string",
                        },
                    },
                    type: "object|null",
                },
            },
        },
    },
};
