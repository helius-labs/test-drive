export const methods = {
    getAsset: {
        name: "getAsset",
        defaultParams: {
            id: "F9Lw3ki3hJ7PF9HQXsBzoY8GyE6sPoEZZdXJBsTTD2rk",
        },
    },
    getAssetProof: {
        name: "getAssetProof",
        defaultParams: {
            id: "Bu1DEKeawy7txbnCEJE4BU3BKLXaNAKCYcHR4XhndGss",
        },
    },
    getAssetsByGroup: {
        name: "getAssetsByGroup",
        defaultParams: {
            groupKey: "collection",
            groupValue: "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
            page: 1,
        },
        optionalParams: {
            limit: 1,
            sortBy: { sortBy: "created", field: "asc" },
            before: "",
            after: "",
        },
    },
    getAssetsByCreator: {
        name: "getAssetsByCreator",
        defaultParams: {
            creatorAddress: "D3XrkNZz6wx6cofot7Zohsf2KSsu2ArngNk8VqU9cTY3",
            page: 1,
        },
        optionalParams: {
            limit: 1,
            sortBy: { sortBy: "created", field: "asc" },
            before: "",
            after: "",
        },
    },
    getAssetsByOwner: {
        name: "getAssetsByOwner",
        defaultParams: {
            ownerAddress: "86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY",
            page: 1,
        },
        optionalParams: {
            limit: 1,
            sortBy: { sortBy: "created", field: "asc" },
            before: "",
            after: "",
        },
    },
    getAssetsByAuthority: {
        name: "getAssetsByAuthority",
        defaultParams: {
            authorityAddress: "2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW",
            page: 1,
        },
        optionalParams: {
            limit: 1,
            sortBy: { sortBy: "created", field: "asc" },
            before: "",
            after: "",
        },
    },
    searchAssets: {
        name: "searchAssets",
        defaultParams: {
            ownerAddress: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
            grouping: [
                "collection",
                "DRiP2Pn2K6fuMLKQmt5rZWyHiUZ6WK3GChEySUpHSS4x",
            ],
            page: 1,
            compressed: true,
        },
        optionalParams: {
            limit: 1,
            sortBy: { sortBy: "created", field: "asc" },
            authorityAddress: "publicKey",
            creatorAddress: "publicKey",
            grouping: ["collection", "key"],
            before: "",
            after: "",
        },
    },
    getBalance: {
        name: "getBalance",
        defaultParams: {
            pubkey: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
        },
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
        },
    },
    getBlock: {
        name: "getBlock",
        defaultParams: {
            slot: 430,
        },
        optionalParams: {
            commitment: "confirmed",
            encoding: "json",
            transactionDetails: "full",
            maxSupportedTransactionVersion: "",
            rewards: "",
        },
    },
    getBlockHeight: {
        name: "getBlockHeight",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
    },
    getBlockProduction: {
        name: "getBlockProduction",
        defaultParams: {},
        optionalParams: {
            commitment: "confirmed",
            identity: "",
            range: "",
        },
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
            blocks: 5,
        },
        optionalParams: {
            commitment: "confirmed",
        },
    },
    getBlocksWithLimit_NW: {
        name: "getBlocksWithLimit",
        defaultParams: [5, 3],
        optionalParams: { commitment: "confirmed" },
    },
    getBlockTime: {
        name: "getBlockTime",
        defaultParams: {
            block: 203422040,
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
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
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
        },
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
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
        optionalParams: { commitment: "confirmed" },
    },
    getInflationRate: {
        name: "getInflationRate",
        defaultParams: {},
        optionalParams: [],
    },
    getInflationReward_NW: {
        name: "getInflationReward",
        defaultParams: {
            addresses: [
                "6dmNQ5jwLeLk5REvio1JcMshcbvkYMwy26sJ8pbkvStu",
                "BGsqMegLpV6n6Ve146sSX2dTjUMj3M92HnU8BbNRMhF2",
            ],
            epoch: 2,
        },
        optionalParams: {
            commitment: "confirmed",
            epoch: 2,
            minContextSlot: 0,
        },
    },
    getLargestAccounts: {
        name: "getLargestAccounts",
        defaultParams: {},
        optionalParams: {
            commitment: "confirmed",
            filter: "none",
        },
    },
    getLatestBlockhash: {
        name: "getLatestBlockhash",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
    },
    getLeaderSchedule: {
        name: "getLeaderSchedule",
        defaultParams: {},
        optionalParams: {
            epoch: 0,
            commitment: "confirmed",
            identity: "base58",
        },
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
        optionalParams: { commitment: "confirmed" },
    },
    getMultipleAccounts_NW: {
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
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
            dataSlice: 0,
            encoding: "json",
        },
    },
    getProgramAccounts_NW: {
        name: "getProgramAccounts",
        defaultParams: {
            pubkey: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
            withContext: "",
            encoding: "json",
            dataSlice: 0,
            filters: "",
        },
    },
    getRecentPerformanceSamples: {
        name: "getRecentPerformanceSamples",
        defaultParams: { limit: 4 },
        optionalParams: { limit: 100 },
    },
    getRecentPrioritizationFees: {
        name: "getRecentPrioritizationFees",
        defaultParams: {
            addresses: ["CxELquR1gPP8wHe33gZ4QxqGB3sZ9RSwsJ2KshVewkFY"],
        },
        optionalParams: { addresses: "" },
    },
    getSignaturesForAddress: {
        name: "getSignaturesForAddress",
        defaultParams: {
            address: "Vote111111111111111111111111111111111111111",
        },
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
            before: "",
            until: "",
            limit: 0,
        },
    },
    getSignatureStatuses_NW: {
        name: "getSignatureStatuses",
        defaultParams: {
            signatures: [
                "3bWQUKetZ48rJHvU6CxB3LqxSUiqr5U3Noh5NYmZkKcqSZHbaDE8Ys4Ye8tVNHDS537uR7qCGPRx7BSm1fFCzeJb",
            ],
            options: { searchTransactionHistory: true },
        },
        optionalParams: ["searchTransactionHistory"],
    },
    getSlot: {
        name: "getSlot",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
    },
    getSlotLeader: {
        name: "getSlotLeader",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
    },
    getSlotLeaders_NW: {
        name: "getSlotLeaders",
        defaultParams: { startSlot: 100, limit: 10 },
        optionalParams: {
            startSlot: 100,
            limit: 10,
        },
    },
    getStakeActivation: {
        name: "getStakeActivation",
        defaultParams: {
            stakeAccount: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
        },
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
            epoch: 0,
        },
    },
    getStakeMinimumDelegation: {
        name: "getStakeMinimumDelegation",
        defaultParams: {},
        optionalParams: { commitment: "confirmed" },
    },
    getSupply: {
        name: "getSupply",
        defaultParams: {},
        optionalParams: {
            commitment: "confirmed",
            excludeNonCirculatingAccountsList: false,
        },
    },
    getTokenAccountBalance: {
        name: "getTokenAccountBalance",
        defaultParams: {
            account: "Bwum3pnrPH4vqAc9ow4ShBA5N1niAsmrgtVZZga6wxf8",
        },
        optionalParams: { commitment: "confirmed" },
    },
    getTokenAccountsByDelegate_NW: {
        name: "getTokenAccountsByDelegate",
        defaultParams: {
            delegate: "4Nd1mBQtrMJVYVfKf2PJy9NZUZdTAsp7D4xWLs4gDB4T",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
            encoding: "jsonParsed",
        },
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
            dataSlice: 0,
            encoding: "jsonParsed",
        },
    },
    getTokenAccountsByOwner_NW: {
        name: "getTokenAccountsByOwner",
        defaultParams: {
            owner: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
            encoding: "jsonParsed",
        },
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
            dataSlice: 0,
            encoding: "jsonParsed",
        },
    },
    getTokenLargestAccounts: {
        name: "getTokenLargestAccounts",
        defaultParams: {
            mint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        },
        optionalParams: {
            commitment: "confirmed",
        },
    },
    getTokenSupply: {
        name: "getTokenSupply",
        defaultParams: {
            mint: "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
        },
        optionalParams: { commitment: "confirmed" },
    },
    getTransaction: {
        name: "getTransaction",
        defaultParams: {
            signature:
                "3MDdKBrsEK8GKHdKYvhmpd7syVDb5YJSye1etBZbRt4WtCfcXwuWsnRaVZAtwA5Jk1mE4Fe9nwEDa3ieiocbLyAn",
        },
        optionalParams: {
            commitment: "confirmed",
            maxSupportedTransactionVersion: 0,
            encoding: "jsonParsed",
        },
    },
    getTransactionCount: {
        name: "getTransactionCount",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
    },
    getVersion: {
        name: "getVersion",
        defaultParams: {},
        optionalParams: [],
    },
    getVoteAccounts: {
        name: "getVoteAccounts",
        defaultParams: {},
        optionalParams: {
            commitment: "confirmed",
            votePubkey: "",
            keepUnstakedDelinquents: false,
            delinquentSlotDistance: 0,
        },
    },
    isBlockhashValid: {
        name: "isBlockhashValid",
        defaultParams: {
            blockhash: "J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW",
        },
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
    },
    minimumLedgerSlot: {
        name: "minimumLedgerSlot",
        defaultParams: {},
        optionalParams: [],
    },
};
