/**
 * @typedef {{
 *     name: string;
 *     defaultParams: Record<string, string | number | object>;
 *     optionalParams?: [] | Record<string, string | number | boolean | null>;
 *     paramsFormat: "object" | "array" | "none";
 *     paramsStructure?: string[];
 * }} RpcMethod
 */

/** @type Record<string, RpcMethod> */
export const methods = {
    getAccountInfo: {
        defaultParams: {
            pubkey: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
        },
        name: "getAccountInfo",
        optionalParams: {
            commitment: "confirmed",
            encoding: "base58",
            minContextSlot: 0,
        },
        paramsFormat: "array",
    },
    getAsset: {
        defaultParams: {
            id: "F9Lw3ki3hJ7PF9HQXsBzoY8GyE6sPoEZZdXJBsTTD2rk",
        },
        name: "getAsset",
        paramsFormat: "object",
    },
    getAssetProof: {
        defaultParams: {
            id: "Bu1DEKeawy7txbnCEJE4BU3BKLXaNAKCYcHR4XhndGss",
        },
        name: "getAssetProof",
        paramsFormat: "object",
    },
    getAssetsByAuthority: {
        defaultParams: {
            authorityAddress: "2RtGg6fsFiiF1EQzHqbd66AhW7R5bWeQGpTbv2UMkCdW",
            page: 1,
        },
        name: "getAssetsByAuthority",
        optionalParams: {
            after: null,
            before: null,
            limit: 1000,
        },
        paramsFormat: "object",
    },

    getAssetsByCreator: {
        defaultParams: {
            creatorAddress: "D3XrkNZz6wx6cofot7Zohsf2KSsu2ArngNk8VqU9cTY3",
            page: 1,
        },
        name: "getAssetsByCreator",
        optionalParams: {
            after: null,
            before: null,
            limit: 1000,
        },
        paramsFormat: "object",
    },
    getAssetsByGroup: {
        defaultParams: {
            groupKey: "collection",
            groupValue: "J1S9H3QjnRtBbbuD4HjPV6RpRhwuk4zKbxsnCHuTgh9w",
            page: 1,
        },
        name: "getAssetsByGroup",
        optionalParams: {
            after: "",
            before: "",
            limit: 1000,
        },
        paramsFormat: "object",
    },
    getAssetsByOwner: {
        defaultParams: {
            ownerAddress: "86xCnPeV69n6t3DnyGvkKobf9FdN2H9oiVDdaMpo2MMY",
            page: 1,
        },
        name: "getAssetsByOwner",
        optionalParams: {
            after: "",
            before: "",
            limit: 1000,
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
        defaultParams: {
            pubkey: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
        },
        name: "getBalance",
        optionalParams: {
            commitment: "confirmed",
            minContextSlot: 0,
        },
        paramsFormat: "array",
        paramsStructure: ["pubkey"], // the order of parameters matters if it's array type
    },

    getBlockCommitment: {
        defaultParams: {
            block: 5,
        },
        name: "getBlockCommitment",
        optionalParams: [],
        paramsFormat: "array",
    },
    getBlockHeight: {
        defaultParams: {},
        name: "getBlockHeight",
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getBlockProduction: {
        defaultParams: {},
        name: "getBlockProduction",
        optionalParams: {
            commitment: "",
            identity: "",
            range: "",
        },
        paramsFormat: "none",
    },
    getBlockTime: {
        defaultParams: {
            block: 203422040,
        },
        name: "getBlockTime",
        optionalParams: [],
        paramsFormat: "array",
    },
    getBlocks: {
        defaultParams: {
            blocks: [5, 10],
        },
        name: "getBlocks",
        optionalParams: {
            commitment: "confirmed",
        },
        paramsFormat: "array",
    },
    getClusterNodes: {
        defaultParams: {},
        name: "getClusterNodes",
        optionalParams: [],
        paramsFormat: "none",
    },
    getEpochInfo: {
        defaultParams: {},
        name: "getEpochInfo",
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getEpochSchedule: {
        defaultParams: {},
        name: "getEpochSchedule",
        optionalParams: [],
        paramsFormat: "none",
    },
    getFeeForMessage: {
        defaultParams: {
            message:
                "AQABAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAA",
        },
        name: "getFeeForMessage",
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getFirstAvailableBlock: {
        defaultParams: {},
        name: "getFirstAvailableBlock",
        optionalParams: [],
        paramsFormat: "none",
    },
    getGenesisHash: {
        defaultParams: {},
        name: "getGenesisHash",
        optionalParams: [],
        paramsFormat: "none",
    },
    getHealth: {
        defaultParams: {},
        name: "getHealth",
        optionalParams: [],
        paramsFormat: "none",
    },
    getHighestSnapshotSlot: {
        defaultParams: {},
        name: "getHighestSnapshotSlot",
        optionalParams: [],
        paramsFormat: "none",
    },
    getIdentity: {
        defaultParams: {},
        name: "getIdentity",
        optionalParams: [],
        paramsFormat: "none",
    },
    getInflationGovernor: {
        defaultParams: {},
        name: "getInflationGovernor",
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
    },
    getInflationRate: {
        defaultParams: {},
        name: "getInflationRate",
        optionalParams: [],
        paramsFormat: "none",
    },
    getLargestAccounts: {
        defaultParams: {},
        name: "getLargestAccounts",
        optionalParams: {
            commitment: "confirmed",
            filter: "circulating",
        },
        paramsFormat: "array",
    },
    getLatestBlockhash: {
        defaultParams: {},
        name: "getLatestBlockhash",
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getLeaderSchedule: {
        defaultParams: {},
        name: "getLeaderSchedule",
        optionalParams: {
            commitment: "confirmed",
            epoch: 0,
            identity: "7Gjec4iDbTxLvVYNsRbZrrHdtyLByzdDJ1C5BmcMMBks",
        },
        paramsFormat: "array",
    },
    getMaxRetransmitSlot: {
        defaultParams: {},
        name: "getMaxRetransmitSlot",
        optionalParams: [],
        paramsFormat: "none",
    },
    getMaxShredInsertSlot: {
        defaultParams: {},
        name: "getMaxShredInsertSlot",
        optionalParams: [],
        paramsFormat: "none",
    },
    getMinimumBalanceForRentExemption: {
        defaultParams: { dataSize: [50] },
        name: "getMinimumBalanceForRentExemption",
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
    },
    getProgramAccounts: {
        defaultParams: {
            pubkey: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        name: "getProgramAccounts",
        optionalParams: {
            commitment: "confirmed",
            dataSlice: 0,
            encoding: "json",
            filters: "",
            minContextSlot: 0,
            withContext: "",
        },
        paramsFormat: "array",
    },
    getRecentPerformanceSamples: {
        defaultParams: {},
        name: "getRecentPerformanceSamples",
        optionalParams: {},
        paramsFormat: "none",
    },
    getSignaturesForAddress: {
        defaultParams: {
            address: "Vote111111111111111111111111111111111111111",
        },
        name: "getSignaturesForAddress",
        optionalParams: {
            before: "",
            commitment: "finalized",
            limit: 0,
            minContextSlot: 0,
            until: "",
        },
        paramsFormat: "array",
    },
    getSignaturesForAsset: {
        defaultParams: {
            id: "FNt6A9Mfnqbwc1tY7uwAguKQ1JcpBrxmhczDgbdJy5AC",
            page: 1,
        },
        name: "getSignaturesForAsset",
        optionalParams: {
            after: null,
            before: null,
            limit: 1000,
        },
        paramsFormat: "object",
    },
    getSlot: {
        defaultParams: {},
        name: "getSlot",
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getSlotLeader: {
        defaultParams: {},
        name: "getSlotLeader",
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getStakeActivation: {
        defaultParams: {
            stakeAccount: "CAf8jfgqhia5VNrEF4A7Y9VLD3numMq9DVSceq7cPhNY",
        },
        name: "getStakeActivation",
        optionalParams: {
            commitment: "confirmed",
            epoch: 0,
            minContextSlot: 0,
        },
        paramsFormat: "array",
    },
    getStakeMinimumDelegation: {
        defaultParams: {},
        name: "getStakeMinimumDelegation",
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
    },
    getSupply: {
        defaultParams: {},
        name: "getSupply",
        optionalParams: {
            commitment: "confirmed",
            excludeNonCirculatingAccountsList: false,
        },
        paramsFormat: "array",
    },
    getTokenAccountBalance: {
        defaultParams: {
            account: "Bwum3pnrPH4vqAc9ow4ShBA5N1niAsmrgtVZZga6wxf8",
        },
        name: "getTokenAccountBalance",
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
    },
    getTokenAccountsByOwner: {
        defaultParams: {
            owner: "2k5AXX4guW9XwRQ1AKCpAuUqgWDpQpwFfpVFh3hnm2Ha",
        },
        name: "getTokenAccountsByOwner",
        optionalParams: {
            commitment: "confirmed",
            dataSlice: 0,
            encoding: "jsonParsed",
            minContextSlot: 0,
            mint: "",
            programId: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        paramsFormat: "array",
    },
    getTokenLargestAccounts: {
        defaultParams: {
            mint: "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        },
        name: "getTokenLargestAccounts",
        optionalParams: {
            commitment: "confirmed",
        },
        paramsFormat: "array",
    },
    getTokenSupply: {
        defaultParams: {
            mint: "DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
        },
        name: "getTokenSupply",
        optionalParams: { commitment: "confirmed" },
        paramsFormat: "array",
    },
    getTransaction: {
        defaultParams: {
            signature:
                "3MDdKBrsEK8GKHdKYvhmpd7syVDb5YJSye1etBZbRt4WtCfcXwuWsnRaVZAtwA5Jk1mE4Fe9nwEDa3ieiocbLyAn",
        },
        name: "getTransaction",
        optionalParams: {
            commitment: "confirmed",
            encoding: "json",
            maxSupportedTransactionVersion: 0,
        },
        paramsFormat: "array",
    },
    getTransactionCount: {
        defaultParams: {},
        name: "getTransactionCount",
        optionalParams: { commitment: "confirmed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    getVersion: {
        defaultParams: {},
        name: "getVersion",
        optionalParams: [],
        paramsFormat: "none",
    },
    getVoteAccounts: {
        defaultParams: {},
        name: "getVoteAccounts",
        optionalParams: {
            commitment: "confirmed",
            delinquentSlotDistance: 0,
            keepUnstakedDelinquents: false,
            votePubkey: "3ZT31jkAGhUaw8jsy4bTknwBMP8i4Eueh52By4zXcsVw",
        },
        paramsFormat: "array",
    },
    isBlockhashValid: {
        defaultParams: {
            blockhash: "J7rBdM6AecPDEZp8aPq5iPSNKVkU5Q76F3oAV4eW5wsW",
        },
        name: "isBlockhashValid",
        optionalParams: { commitment: "processed", minContextSlot: 0 },
        paramsFormat: "array",
    },
    minimumLedgerSlot: {
        defaultParams: {},
        name: "minimumLedgerSlot",
        optionalParams: [],
        paramsFormat: "none",
    },
};
