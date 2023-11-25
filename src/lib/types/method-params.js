export const methodParamMap = {
    getBalance: "pubkey",
    getBlockCommitment: "block",
    getBlockTime: "block",
    getBlocks: "blocks",
    getFeeForMessage: "message",
    getMinimumBalanceForRentExemption: "dataSize",
    getProgramAccounts: "pubkey",
    getSignaturesForAddress: "address",
    getSlotLeaders: "startSlot",
    getStakeActivation: "stakeAccount",
    getTokenAccountBalance: "account",
    getTokenAccountsByDelegate: "delegate",
    getTokenLargestAccounts: "mint",
    getTokenSupply: "mint",
    getTransaction: "signature",
    isBlockhashValid: "blockhash",
    // Add more methods as needed
};
