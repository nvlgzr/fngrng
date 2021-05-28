import { writable } from "svelte/store";

const storedCurrentLayout = localStorage.getItem("currentLayout") || "colemak";
export const currentLayout = writable(storedCurrentLayout);
currentLayout.subscribe(value => {
  localStorage.setItem("currentLayout", value);
});

const storedCurrentLevel = localStorage.getItem("currentLevel") || 1
export const currentLevel = writable(storedCurrentLevel);
currentLevel.subscribe(value => {
  localStorage.setItem("currentLevel", value)
})

const storedKeyRemapping = localStorage.getItem("keyRemapping");
export const keyRemapping = writable(storedKeyRemapping === "true")
keyRemapping.subscribe(value => {
  localStorage.setItem("keyRemapping", value)
})

const storedPrefsOpen = localStorage.getItem("preferenceMenuOpen")
export const prefsOpen = writable(storedPrefsOpen === "true")
prefsOpen.subscribe(value => {
  localStorage.setItem("preferenceMenuOpen", value)
})

const storedLowercaseOnly = localStorage.getItem("onlyLower") || "true";
export const lowercaseOnly = writable(storedLowercaseOnly === "true")
lowercaseOnly.subscribe(value => {
  localStorage.setItem("onlyLower", value)
})