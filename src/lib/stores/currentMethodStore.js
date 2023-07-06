import { writable } from "svelte/store";

export const currentMethod = writable("getBalance");
export const currentRPC = writable("");
