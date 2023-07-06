export const raceMethods = {
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
    getInflationRate: {
        name: "getInflationRate",
        defaultParams: {},
        optionalParams: [],
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
    minimumLedgerSlot: {
        name: "minimumLedgerSlot",
        defaultParams: {},
        optionalParams: [],
    },
};
