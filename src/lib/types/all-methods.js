export const methods = {
    getAsset: {
        name: "getAsset",
        defaultParams: {
            id: "F9Lw3ki3hJ7PF9HQXsBzoY8GyE6sPoEZZdXJBsTTD2rk",
        },
        paramsFormat: "object",
    },
    getAssetProof: {
        name: "getAssetProof",
        defaultParams: {
            id: "Bu1DEKeawy7txbnCEJE4BU3BKLXaNAKCYcHR4XhndGss",
        },
        paramsFormat: "object",
    },
    getAssetsByGroup: {
        name: "getAssetsByGroup",
        defaultParams: {
            groupKey: "collection",
            groupValue: "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
            page: 1,
        },
        optionalParams: {
            limit: 1000,
            before: "",
            after: "",
        },
        paramsFormat: "object",
    },

    getAssetsByCreator: {
        name: "getAssetsByCreator",
        defaultParams: {
            creatorAddress: "D3XrkNZz6wx6cofot7Zohsf2KSsu2ArngNk8VqU9cTY3",
            page: 1,
        },
        optionalParams: {
            limit: 1000,
            before: null,
            after: null,
        },
        paramsFormat: "object",
    },
    getAssetsByOwner: {
        name: "getAssetsByOwner",
        defaultParams: {
            ownerAddress: "86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY",
            page: 1,
        },
        optionalParams: {
            limit: 1000,
            before: null,
            after: null,
        },
        paramsFormat: "object",
    },
    getAssetsByAuthority: {
        name: "getAssetsByAuthority",
        defaultParams: {
            authorityAddress: "2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW",
            page: 1,
        },
        optionalParams: {
            limit: 1000,
            before: null,
            after: null,
        },
        paramsFormat: "object",
    },
    getSignaturesForAsset: {
        name: "getSignaturesForAsset",
        defaultParams: {
            id: "FNt6A9Mfnqbwc1tY7uwAguKQ1JcpBrxmhczDgbdJy5AC",
            page: 1,
        },
        optionalParams: {
            limit: 1000,
            before: null,
            after: null,
        },
        paramsFormat: "object",
    },
    // searchAssets is a pretty dynamic method, so we will add specific handling for this method in the future.

    /* searchAssets: {
        name: "searchAssets",
        defaultParams: {
            grouping: [
                "collection",
                "DRiP2Pn2K6fuMLKQmt5rZWyHiUZ6WK3GChEySUpHSS4x",
            ],
            ownerAddress: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
        },
        optionalParams: {
            limit: 1000,
            authorityAddress: "",
            creatorAddress: "",
            grouping: [
                "collection",
                "DRiP2Pn2K6fuMLKQmt5rZWyHiUZ6WK3GChEySUpHSS4x",
            ],
            page: 1,
            compressed: true,
            before: null,
            after: null,
        },
    },*/

    getBalance: {
        name: "getBalance",
        defaultParams: {
            pubkey: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
        },
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
        },
        paramsFormat: "array",
        paramsStructure: ["pubkey"], // the order of parameters matters if it's array type
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
            commitment: "",
            identity: "",
            range: "",
        },
        paramsFormat: "none",
    },
    getBlockCommitment: {
        name: "getBlockCommitment",
        defaultParams: {
            block: 5,
        },
        optionalParams: [],
        paramsFormat: "array",
    },
    getBlocks: {
        name: "getBlocks",
        defaultParams: {
            blocks: [5, 10],
        },
        optionalParams: {
            commitment: "confirmed",
        },
        paramsFormat: "array",
    },
    getBlockTime: {
        name: "getBlockTime",
        defaultParams: {
            block: 203422040,
        },
        optionalParams: [],
        paramsFormat: "array",
    },
    getClusterNodes: {
        name: "getClusterNodes",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getEpochInfo: {
        name: "getEpochInfo",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getEpochSchedule: {
        name: "getEpochSchedule",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getFeeForMessage: {
        name: "getFeeForMessage",
        defaultParams: {
            message:
                "AQABAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAA",
        },
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getFirstAvailableBlock: {
        name: "getFirstAvailableBlock",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getGenesisHash: {
        name: "getGenesisHash",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getHealth: {
        name: "getHealth",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getHighestSnapshotSlot: {
        name: "getHighestSnapshotSlot",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getIdentity: {
        name: "getIdentity",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getInflationGovernor: {
        name: "getInflationGovernor",
        defaultParams: {},
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
    },
    getInflationRate: {
        name: "getInflationRate",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getLargestAccounts: {
        name: "getLargestAccounts",
        defaultParams: {},
        optionalParams: {
            commitment: "confirmed",
            filter: "circulating",
        },
        paramsFormat: "array",
    },
    getLatestBlockhash: {
        name: "getLatestBlockhash",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getLeaderSchedule: {
        name: "getLeaderSchedule",
        defaultParams: {},
        optionalParams: {
            epoch: 0,
            commitment: "confirmed",
            identity: "7Gjec4iDbTxLvVYNsRbZrrHdtyLByzdDJ1C5BmcMMBks",
        },
        paramsFormat: "array",
    },
    getMaxRetransmitSlot: {
        name: "getMaxRetransmitSlot",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getMaxShredInsertSlot: {
        name: "getMaxShredInsertSlot",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getMinimumBalanceForRentExemption: {
        name: "getMinimumBalanceForRentExemption",
        defaultParams: { dataSize: [50] },
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
    },
    getProgramAccounts: {
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
        paramsFormat: "array",
    },
    getRecentPerformanceSamples: {
        name: "getRecentPerformanceSamples",
        defaultParams: {},
        optionalParams: {},
        paramsFormat: "none",
    },
    getSignaturesForAddress: {
        name: "getSignaturesForAddress",
        defaultParams: {
            address: "Vote111111111111111111111111111111111111111",
        },
        optionalParams: {
            commitment: "finalized",
            minContextSlot: 0,
            before: "",
            until: "",
            limit: 0,
        },
        paramsFormat: "array",
    },
    getSlot: {
        name: "getSlot",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getSlotLeader: {
        name: "getSlotLeader",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getStakeActivation: {
        name: "getStakeActivation",
        defaultParams: {
            stakeAccount: "CAf8jfgqhia5VNrEF4A7Y9VLD3numMq9DVSceq7cPhNY",
        },
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
            epoch: 0,
        },
        paramsFormat: "array",
    },
    getStakeMinimumDelegation: {
        name: "getStakeMinimumDelegation",
        defaultParams: {},
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
    },
    getSupply: {
        name: "getSupply",
        defaultParams: {},
        optionalParams: {
            commitment: "confirmed",
            excludeNonCirculatingAccountsList: false,
        },
        paramsFormat: "array",
    },
    getTokenAccountBalance: {
        name: "getTokenAccountBalance",
        defaultParams: {
            account: "Bwum3pnrPH4vqAc9ow4ShBA5N1niAsmrgtVZZga6wxf8",
        },
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
    },
    getTokenLargestAccounts: {
        name: "getTokenLargestAccounts",
        defaultParams: {
            mint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        },
        optionalParams: {
            commitment: "confirmed",
        },
        paramsFormat: "array",
    },
    getTokenSupply: {
        name: "getTokenSupply",
        defaultParams: {
            mint: "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
        },
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
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
            encoding: "json",
        },
        paramsFormat: "array",
    },
    getTransactionCount: {
        name: "getTransactionCount",
        defaultParams: {},
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getVersion: {
        name: "getVersion",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
    getVoteAccounts: {
        name: "getVoteAccounts",
        defaultParams: {},
        optionalParams: {
            commitment: "confirmed",
            votePubkey: "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw",
            keepUnstakedDelinquents: false,
            delinquentSlotDistance: 0,
        },
        paramsFormat: "array",
    },
    isBlockhashValid: {
        name: "isBlockhashValid",
        defaultParams: {
            blockhash: "J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW",
        },
        optionalParams: { commitment: "processed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    minimumLedgerSlot: {
        name: "minimumLedgerSlot",
        defaultParams: {},
        optionalParams: [],
        paramsFormat: "none",
    },
};
