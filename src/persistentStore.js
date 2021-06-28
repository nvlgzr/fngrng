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

const storedKeyRemapping = localStorage.getItem("fngrng_keyRemapping");
export const keyRemapping = writable(storedKeyRemapping === "true")
keyRemapping.subscribe(value => {
  localStorage.setItem("fngrng_keyRemapping", value)
})

const storedUseColumnarLayout = localStorage.getItem("fngrng_useColumnarLayout");
export const useColumnarLayout = writable(storedUseColumnarLayout === "true")
useColumnarLayout.subscribe(value => {
  localStorage.setItem("fngrng_useColumnarLayout", value)
})

const storedPrefsOpen = localStorage.getItem("fngrng_preferenceMenuOpen")
export const prefsOpen = writable(storedPrefsOpen === "true")
prefsOpen.subscribe(value => {
  localStorage.setItem("fngrng_preferenceMenuOpen", value)
})

const storedUppercaseAllowed = localStorage.getItem("fngrng_uppercaseAllowed") || "false";
export const uppercaseAllowed = writable(storedUppercaseAllowed === "true")
uppercaseAllowed.subscribe(value => {
  localStorage.setItem("fngrng_uppercaseAllowed", value)
})

const storedFullSentenceMode = localStorage.getItem("fngrng_fullSentenceModeEnabled");
export const fullSentenceModeEnabled = writable(storedFullSentenceMode === "true")
fullSentenceModeEnabled.subscribe(value => {
  localStorage.setItem("fngrng_fullSentenceModeEnabled", value)
})

const storedTimeLimitMode = localStorage.getItem("fngrng_timeLimitMode");
export const timeLimitModeEnabled = writable(storedTimeLimitMode === "true")
timeLimitModeEnabled.subscribe(value => {
  localStorage.setItem("fngrng_timeLimitMode", value)
})

const storedTimeLimit = localStorage.getItem('fngrng_timeLimitInSeconds') || 60;
export const maxSeconds = writable(storedTimeLimit)
maxSeconds.subscribe(value => {
  localStorage.setItem("fngrng_timeLimitInSeconds", value)
})

const storedWordLimit = localStorage.getItem('fngrng_wordLimit') || 60;
export const maxWords = writable(storedWordLimit)
maxWords.subscribe(value => {
  localStorage.setItem("fngrng_wordLimit", value)
})

const storedWordScrollingMode = localStorage.getItem("fngrng_wordScrollingMode") || "true";
export const wordScrollingModeEnabled = writable(storedWordScrollingMode === "true")
wordScrollingModeEnabled.subscribe(value => {
  localStorage.setItem("fngrng_wordScrollingMode", value)
})

const storedPunctuation = localStorage.getItem("fngrng_punctuation");
export const punctuationToInclude = writable(storedPunctuation || "")
punctuationToInclude.subscribe(value => {
  localStorage.setItem("fngrng_punctuation", value)
})

const storedTestMode = localStorage.getItem("fngrng_testModeEnabled");
export const testModeEnabled = writable(storedTestMode === "true")
testModeEnabled.subscribe(value => {
  localStorage.setItem("fngrng_testModeEnabled", value)
})
