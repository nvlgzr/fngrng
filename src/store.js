import { writable } from "svelte/store";

const storedCurrentLayout = localStorage.getItem("currentLayout") || "colemak";
export const currentLayout = writable(storedCurrentLayout);
currentLayout.subscribe(value => {
  localStorage.setItem("currentLayout", value);
});

const storedKeyRemapping = localStorage.getItem("keyRemapping");
export const keyRemapping = writable(storedKeyRemapping === "true")
keyRemapping.subscribe(value => {
  localStorage.setItem("keyRemapping", value)
})