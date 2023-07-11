import { writable } from "svelte/store";

export const responseStore = writable("");
export const isResponse = writable("false");
export const responseTime = writable("");
