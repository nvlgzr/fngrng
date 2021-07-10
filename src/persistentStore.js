import { derived, writable } from "svelte/store";
import { levelLetterSets, allLayoutMaps, emptyCustomKeyMap } from "./levelMappings.js";

const storedShowFrames = localStorage.getItem("fngrng_showWireFrames");
export const showFrames = writable(storedShowFrames === "true")
showFrames.subscribe(value => {
  localStorage.setItem("fngrng_showWireFrames", value)
})

const storedCurrentLayout = localStorage.getItem("fngrng_currentLayout") || "colemakdh";
export const currentFixedLayout = writable(storedCurrentLayout);
currentFixedLayout.subscribe(value => {
  localStorage.setItem("fngrng_currentLayout", value);
});

const storedCustomLayout = localStorage.getItem("fngrng_customLayout");
export const useCustomLayout = writable(storedCustomLayout === "true")
useCustomLayout.subscribe(value => {
  localStorage.setItem("fngrng_customLayout", value)
})

export const currentLayout = derived([currentFixedLayout, useCustomLayout], ([$currentFixedLayout, $useCustomLayout]) => $useCustomLayout ? "custom" : $currentFixedLayout);

const storedCurrentLevel = localStorage.getItem("fngrng_currentLevel") || 1
export const currentLevel = writable(Number.parseInt(storedCurrentLevel));
currentLevel.subscribe(value => {
  localStorage.setItem("fngrng_currentLevel", value)
})

const storedLevelMaps = JSON.parse(localStorage.getItem("fngrng_levelMaps")) || levelLetterSets;
export const levelMaps = writable(storedLevelMaps);
levelMaps.subscribe(value => {
  localStorage.setItem("fngrng_levelMaps", JSON.stringify(value));
});

export const letterSetsForCurrentLayout = derived(
  [levelMaps, currentLayout],
  ([$levelMaps, $currentLayout]) => $levelMaps[$currentLayout]
)

export const storedCustomKeyMap = JSON.parse(localStorage.getItem("fngrng_customKeyMap")) || emptyCustomKeyMap;
export const customKeyMap = writable(storedCustomKeyMap);
customKeyMap.subscribe(value => {
  localStorage.setItem("fngrng_customKeyMap", JSON.stringify(value));
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

const storedFngrng = localStorage.getItem("fngrng_fngrng");
export const fngrng = writable(storedFngrng === "true")
fngrng.subscribe(value => {
  localStorage.setItem("fngrng_fngrng", value)
})