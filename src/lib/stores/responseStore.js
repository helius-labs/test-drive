import { writable } from "svelte/store";

export const responseStore = writable("{response}");
export const responseStatus = writable("Status");
export const responseTime = writable("");
