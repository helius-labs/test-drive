import { writable } from "svelte/store";

export const responseStore = writable("{response}");
export const responseStatus = writable("None");
export const responseTime = writable("");
