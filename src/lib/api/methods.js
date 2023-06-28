export const methods = {
    getBalance: {
        name: "getBalance",
        defaultParams: {
            pubkey: "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
        },
        optionalParams: ["commitment", "minContextSlot"],
    },
    getBlock: {
        name: "getBlock",
        defaultParams: {
            slot: 430,
            options: {
                encoding: "json",
                maxSupportedTransactionVersion: 0,
                transactionDetails: "full",
                rewards: false,
            },
        },
        optionalParams: [
            "commitment",
            "encoding",
            "transactionDetails",
            "maxSupportedTransactionVersion",
            "rewards",
        ],
    },
    getBlockHeight: {
        name: "getBlockHeight",
        defaultParams: {},
        optionalParams: ["commitment", "minContextSlot"],
    },
    getBlockProduction: {
        name: "getBlockProduction",
        defaultParams: {},
        optionalParams: ["commitment", "identity", "range"],
    },
    getBlockCommitment: {
        name: "getBlockCommitment",
        defaultParams: {
            block: 5,
        },
        optionalParams: [],
    },
    getBlocks: {
        name: "getBlocks",
        defaultParams: {
            start_slot: 5,
            end_slot: 10,
        },
        optionalParams: ["commitment"],
    },
    getBlocksWithLimit: {
        name: "getBlocksWithLimit",
        defaultParams: {
            start_slot: 5,
            limit: 3,
        },
        optionalParams: ["commitment"],
    },
    getBlockTime: {
        name: "getBlockTime",
        defaultParams: {
            block: 5,
        },
        optionalParams: [],
    },
    getClusterNodes: {
        name: "getClusterNodes",
        defaultParams: {},
        optionalParams: [],
    },
    getEpochInfo: {
        name: "getEpochInfo",
        defaultParams: {},
        optionalParams: ["commitment", "minContextSlot"],
    },
    getEpochSchedule: {
        name: "getEpochSchedule",
        defaultParams: {},
        optionalParams: [],
    },
    getFeeForMessage: {
        name: "getFeeForMessage",
        defaultParams: {
            message:
                "AQABAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAA",
            options: {
                commitment: "processed",
            },
        },
        optionalParams: ["commitment", "minContextSlot"],
    },
    getFirstAvailableBlock: {
        name: "getFirstAvailableBlock",
        defaultParams: {},
        optionalParams: [],
    },
    getGenesisHash: {
        name: "getGenesisHash",
        defaultParams: {},
        optionalParams: [],
    },
    getHealth: {
        name: "getHealth",
        defaultParams: {},
        optionalParams: [],
    },
    getHighestSnapshotSlot: {
        name: "getHighestSnapshotSlot",
        defaultParams: {},
        optionalParams: [],
    },
    getIdentity: {
        name: "getIdentity",
        defaultParams: {},
        optionalParams: [],
    },
    getInflationGovernor: {
        name: "getInflationGovernor",
        defaultParams: {},
        optionalParams: ["commitment"],
    },
    getInflationRate: {
        name: "getInflationRate",
        defaultParams: {},
        optionalParams: [],
    },
    getInflationReward: {
        name: "getInflationReward",
        defaultParams: {
            addresses: [
                "6dmNQ5jwLeLk5REvio1JcMshcbvkYMwy26sJ8pbkvStu",
                "BGsqMegLpV6n6Ve146sSX2dTjUMj3M92HnU8BbNRMhF2",
            ],
            options: {
                epoch: 2,
            },
        },
        optionalParams: ["commitment", "epoch", "minContextSlot"],
    },
    getLargestAccounts: {
        name: "getLargestAccounts",
        defaultParams: {},
        optionalParams: ["commitment", "filter"],
    },
    getLatestBlockhash: {
        name: "getLatestBlockhash",
        defaultParams: {},
        optionalParams: ["commitment", "minContextSlot"],
    },
    getLeaderSchedule: {
        name: "getLeaderSchedule",
        defaultParams: {},
        optionalParams: ["epoch", "commitment", "identity"],
    },
    getMaxRetransmitSlot: {
        name: "getMaxRetransmitSlot",
        defaultParams: {},
        optionalParams: [],
    },
    getMaxShredInsertSlot: {
        name: "getMaxShredInsertSlot",
        defaultParams: {},
        optionalParams: [],
    },
    getMinimumBalanceForRentExemption: {
        name: "getMinimumBalanceForRentExemption",
        defaultParams: { dataSize: 50 },
        optionalParams: ["commitment"],
    },
    getMultipleAccounts: {
        name: "getMultipleAccounts",
        defaultParams: {
            pubkeys: [
                "vines1vzrYbzLMRdu58ou5XTby4qAqVRLmqo36NKPTg",
                "4fYNw3dojWmQ4dXtSGE9epjRGy9pFSx62YypT7avPYvA",
            ],
            options: {
                encoding: "base58",
            },
        },
        optionalParams: [
            "commitment",
            "minContextSlot",
            "dataSlice",
            "encoding",
        ],
    },
    getProgramAccounts: {
        name: "getProgramAccounts",
        defaultParams: {
            pubkey: "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
            options: {
                filters: [
                    {
                        dataSize: 17,
                    },
                    {
                        memcmp: {
                            offset: 4,
                            bytes: "3Mc6vR",
                        },
                    },
                ],
            },
        },
        optionalParams: [
            "commitment",
            "minContextSlot",
            "withContext",
            "encoding",
            "dataSlice",
            "filters",
        ],
    },
    getRecentPerformanceSamples: {
        name: "getRecentPerformanceSamples",
        defaultParams: { limit: 4 },
        optionalParams: ["limit"],
    },
    getRecentPrioritizationFees: {
        name: "getRecentPrioritizationFees",
        defaultParams: {
            addresses: ["CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY"],
        },
        optionalParams: ["addresses"],
    },
    getSignaturesForAddress: {
        name: "getSignaturesForAddress",
        defaultParams: {
            address: "Vote111111111111111111111111111111111111111",
            options: { limit: 1 },
        },
        optionalParams: [
            "commitment",
            "minContextSlot",
            "limit",
            "before",
            "until",
        ],
    },
    getSignatureStatuses: {
        name: "getSignatureStatuses",
        defaultParams: {
            signatures: [
                "5VERv8NMvzbJMEkV8xnrLkEaWRtSz9CosKDYjCJjBRnbJLgp8uirBgmQpjKhoR4tjF3ZpRzrFmBV6UjKdiSZkQUW",
            ],
            options: { searchTransactionHistory: true },
        },
        optionalParams: ["searchTransactionHistory"],
    },
    getSlot: {
        name: "getSlot",
        defaultParams: {},
        optionalParams: ["commitment", "minContextSlot"],
    },
    getSlotLeader: {
        name: "getSlotLeader",
        defaultParams: {},
        optionalParams: ["commitment", "minContextSlot"],
    },
    getSlotLeaders: {
        name: "getSlotLeaders",
        defaultParams: { startSlot: 100, limit: 10 },
        optionalParams: ["startSlot", "limit"],
    },
    getStakeActivation: {
        name: "getStakeActivation",
        defaultParams: {
            stakeAccount: "CYRJWqiSjLitBAcRxPvWpgX3s5TvmN2SuRY3eEYypFvT",
            options: { epoch: 4 },
        },
        optionalParams: ["commitment", "minContextSlot", "epoch"],
    },
    getStakeMinimumDelegation: {
        name: "getStakeMinimumDelegation",
        defaultParams: {},
        optionalParams: ["commitment"],
    },
    getSupply: {
        name: "getSupply",
        defaultParams: {},
        optionalParams: ["commitment", "excludeNonCirculatingAccountsList"],
    },
    getTokenAccountBalance: {
        name: "getTokenAccountBalance",
        defaultParams: {
            account: "7fUAJdStEuGbc3sM84cKRL6yYaaSstyLSU4ve5oovLS7",
        },
        optionalParams: ["commitment"],
    },
    getTokenAccountsByDelegate: {
        name: "getTokenAccountsByDelegate",
        defaultParams: {
            delegate: "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            encoding: "jsonParsed",
        },
        optionalParams: [
            "commitment",
            "minContextSlot",
            "dataSlice",
            "encoding",
        ],
    },
    getTokenAccountsByOwner: {
        name: "getTokenAccountsByOwner",
        defaultParams: {
            owner: "4Qkev8aNZcqFNSRhQzwyLMFSsi94jHqE8WNVTJzTP99F",
            mint: "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E",
            encoding: "jsonParsed",
        },
        optionalParams: [
            "commitment",
            "minContextSlot",
            "dataSlice",
            "encoding",
        ],
    },
    getTokenLargestAccounts: {
        name: "getTokenLargestAccounts",
        defaultParams: {
            mint: "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E",
        },
        optionalParams: ["commitment"],
    },
    getTokenSupply: {
        name: "getTokenSupply",
        defaultParams: {
            mint: "3wyAj7Rt1TWVPZVteFJPLa26JmLvdb1CAKEFZm3NY75E",
        },
        optionalParams: ["commitment"],
    },
    getTransaction: {
        name: "getTransaction",
        defaultParams: {
            signature:
                "2nBhEBYYvfaAe16UMNqRHre4YNSskvuYgx3M6E4JP1oDYvZEJHvoPzyUidNgNX5r9sTyN1J9UxtbCXy2rqYcuyuv",
            encoding: "json",
        },
        optionalParams: [
            "commitment",
            "maxSupportedTransactionVersion",
            "encoding",
        ],
    },
    getTransactionCount: {
        name: "getTransactionCount",
        defaultParams: {},
        optionalParams: ["commitment", "minContextSlot"],
    },
    getVersion: {
        name: "getVersion",
        defaultParams: {},
        optionalParams: [],
    },
    getVoteAccounts: {
        name: "getVoteAccounts",
        defaultParams: {
            votePubkey: "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw",
        },
        optionalParams: [
            "commitment",
            "votePubkey",
            "keepUnstakedDelinquents",
            "delinquentSlotDistance",
        ],
    },
    isBlockhashValid: {
        name: "isBlockhashValid",
        defaultParams: {
            blockhash: "J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW",
            commitment: "processed",
        },
        optionalParams: ["commitment", "minContextSlot"],
    },
    minimumLedgerSlot: {
        name: "minimumLedgerSlot",
        defaultParams: {},
        optionalParams: [],
    },
    requestAirdrop: {
        name: "requestAirdrop",
        defaultParams: {
            account: "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
            lamports: 1000000000,
        },
        optionalParams: ["commitment"],
    },
    sendTransaction: {
        name: "sendTransaction",
        defaultParams: {
            transaction:
                "4hXTCkRzt9WyecNzV1XPgCDfGAZzQKNxLXgynz5QDuWWPSAZBZSHptvWRL3BjCvzUXRdKvHL2b7yGrRQcWyaqsaBCncVG7BFggS8w9snUts67BSh3EqKpXLUm5UMHfD7ZBe9GhARjbNQMLJ1QD3Spr6oMTBU6EhdB4RD8CP2xUxr2u3d6fos36PD98XS6oX8TQjLpsMwncs5DAMiD4nNnR8NBfyghGCWvCVifVwvA8B8TJxE1aiyiv2L429BCWfyzAme5sZW8rDb14NeCQHhZbtNqfXhcp2tAnaAT",
        },
        optionalParams: [
            "encoding",
            "skipPreflight",
            "preflightCommitment",
            "maxRetries",
            "minContextSlot",
        ],
    },
    simulateTransaction: {
        name: "simulateTransaction",
        defaultParams: {
            transaction:
                "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEDArczbMia1tLmq7zz4DinMNN0pJ1JtLdqIJPUw3YrGCzYAMHBsgN27lcgB6H2WQvFgyZuJYHa46puOQo9yQ8CVQbd9uHXZaGT2cvhRs7reawctIXtX1s3kTqM9YV+/wCp20C7Wj2aiuk5TReAXo+VTVg8QTHjs0UjNMMKCvpzZ+ABAgEBARU=",
        },
        optionalParams: [
            "commitment",
            "sigVerify",
            "replaceRecentBlockhash",
            "minContextSlot",
            "encoding",
            "accounts",
        ],
    },
};
