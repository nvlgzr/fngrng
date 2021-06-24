import { derived, writable } from "svelte/store";
import { levelLetterSets, allLayoutMaps, emptyCustomKeyMap } from "./levelMappings.js";

const storedCurrentLayout = localStorage.getItem("currentLayout") || "colemak";
export const currentLayout = writable(storedCurrentLayout);
currentLayout.subscribe(value => {
  localStorage.setItem("currentLayout", value);
});

const storedCurrentLevel = localStorage.getItem("currentLevel") || 1
export const currentLevel = writable(Number.parseInt(storedCurrentLevel));
currentLevel.subscribe(value => {
  localStorage.setItem("currentLevel", value)
})

const storedLevelMaps = JSON.parse(localStorage.getItem("levelMaps")) || levelLetterSets;
export const levelMaps = writable(storedLevelMaps);
levelMaps.subscribe(value => {
  localStorage.setItem("levelMaps", JSON.stringify(value));
});

export const letterSetsForCurrentLayout = derived(
  [levelMaps, currentLayout],
  ([$levelMaps, $currentLayout]) => $levelMaps[$currentLayout]
)

export const storedCustomKeyMap = JSON.parse(localStorage.getItem("customKeyMap")) || emptyCustomKeyMap;
export const customKeyMap = writable(storedCustomKeyMap);
customKeyMap.subscribe(value => {
  localStorage.setItem("customKeyMap", JSON.stringify(value));
});

export const layoutMaps = derived(customKeyMap, ($customKeyMap) => {
  return { ...allLayoutMaps, custom: $customKeyMap }
});

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

const storedUppercaseAllowed = localStorage.getItem("uppercaseAllowed") || "false";
export const uppercaseAllowed = writable(storedUppercaseAllowed === "true")
uppercaseAllowed.subscribe(value => {
  localStorage.setItem("uppercaseAllowed", value)
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

const storedTimeLimit = localStorage.getItem('timeLimitInSeconds') || 60;
export const maxSeconds = writable(storedTimeLimit)
maxSeconds.subscribe(value => {
  localStorage.setItem("timeLimitInSeconds", value)
})

const storedWordLimit = localStorage.getItem('wordLimit') || 60;
export const maxWords = writable(storedWordLimit)
maxWords.subscribe(value => {
  localStorage.setItem("wordLimit", value)
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

const storedTestMode = localStorage.getItem("testModeEnabled");
export const testModeEnabled = writable(storedTestMode === "true")
testModeEnabled.subscribe(value => {
  localStorage.setItem("testModeEnabled", value)
})
