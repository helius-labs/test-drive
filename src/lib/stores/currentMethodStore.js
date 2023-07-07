import { writable } from "svelte/store";

export const currentMethod = writable("getAsset");
export const currentRPC = writable("");
