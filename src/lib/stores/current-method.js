import { writable } from "svelte/store";

export const currentMethod = writable("");
export const currentRPC = writable("");
export const noParams = writable(0);
export const badgeClicked = writable(false);
export const isOpen = writable(false);
