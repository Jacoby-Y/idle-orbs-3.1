import { writable } from "svelte/store";

/** @type {CanvasRenderingContext2D} */
const _ctx = null;

export const fg = writable(_ctx);
export const bg = writable(_ctx);