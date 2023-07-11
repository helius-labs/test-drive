import { writable } from "svelte/store";

export const currentMethod = writable("");
export const currentRPC = writable("");
export const noParams = writable(false);
