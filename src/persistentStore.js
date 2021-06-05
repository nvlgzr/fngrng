import { derived, writable } from "svelte/store";
import { defaultLevelDictionaries, allLayoutMaps } from "./levelMappings.js";

const storedCurrentLayout = localStorage.getItem("currentLayout") || "colemak";
export const currentLayout = writable(storedCurrentLayout);
currentLayout.subscribe(value => {
  localStorage.setItem("currentLayout", value);
});

const storedLevelDictionaries = JSON.parse(localStorage.getItem("levelDictionaries")) || defaultLevelDictionaries;
export const levelDictionaries = writable(storedLevelDictionaries);
levelDictionaries.subscribe(value => {
  localStorage.setItem("levelDictionaries", JSON.stringify(value));
});

export const levelDictionary = derived(
  [levelDictionaries, currentLayout],
  ([$levelDictionaries, $currentLayout]) => $levelDictionaries[$currentLayout]
)

const storedLayoutMaps = JSON.parse(localStorage.getItem("layoutMaps")) || allLayoutMaps;
export const layoutMaps = writable(storedLayoutMaps);
layoutMaps.subscribe(value => {
  localStorage.setItem("layoutMaps", JSON.stringify(value));
});

const storedCurrentLevel = localStorage.getItem("currentLevel") || 1
export const currentLevel = writable(Number.parseInt(storedCurrentLevel));
currentLevel.subscribe(value => {
  localStorage.setItem("currentLevel", value)
})

export const layoutMap = derived(
  [layoutMaps, currentLayout],
  ([$layoutMaps, $currentLayout]) => {
    return $layoutMaps[$currentLayout]
  }
);

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

const storedFullSentenceMode = localStorage.getItem("fullSentenceModeEnabled");
export const fullSentenceModeEnabled = writable(storedFullSentenceMode === "true")
fullSentenceModeEnabled.subscribe(value => {
  localStorage.setItem("fullSentenceModeEnabled", value)
})

const storedTimeLimitMode = localStorage.getItem("timeLimitMode");
export const timeLimitModeEnabled = writable(storedTimeLimitMode === "true")
timeLimitModeEnabled.subscribe(value => {
  localStorage.setItem("timeLimitMode", value)
})

const storedWordScrollingMode = localStorage.getItem("wordScrollingMode") || "true";
export const wordScrollingModeEnabled = writable(storedWordScrollingMode === "true")
wordScrollingModeEnabled.subscribe(value => {
  localStorage.setItem("wordScrollingMode", value)
})

const storedPunctuation = localStorage.getItem("punctuation");
export const punctuationToInclude = writable(storedPunctuation || "")
punctuationToInclude.subscribe(value => {
  localStorage.setItem("punctuation", value)
})
