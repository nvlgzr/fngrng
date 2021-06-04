import { derived, writable } from "svelte/store";
import { levelDictionaries } from "./levelMappings.js";
import { layoutMaps } from "./levelMappings.js"
import { currentLevel, timeLimitModeEnabled } from "./persistentStore.js"

export const keyboardMap = writable(layoutMaps["colemak"])
export const letterDictionary = writable(levelDictionaries["colemak"])

export const activeLevels = derived([letterDictionary, currentLevel], ([$letterDictionary, $currentLevel]) => {
  const allLevels = Object.entries($letterDictionary);
  console.log("🧧levels ", allLevels);
  return allLevels
    .filter(([level, _]) => Number.parseInt(level.slice(-1)) <= $currentLevel)
    .map(([_, letters]) => {
      // We don't really need these labels;
      // The index will suffice.
      return letters;
    });

});

// Game begins when user starts typing in input
export const gameOn = writable(false)

export const wordLists = writable({
  lvl1: [],
  lvl2: [],
  lvl3: [],
  lvl4: [],
  lvl5: [],
  lvl6: [],
  lvl7: [],
});

export const correctAnswer = writable("")

export const seconds = writable(0)
export const minutes = writable(0)

export const score = writable(0)
export const correct = writable(0)
export const errors = writable(0)
export const scoreMax = writable(50)

export const clock = writable({ mins: 0, secs: 0 })
export const results = writable({ ready: false, accuracy: "", wpm: 0 })
export const showScore = derived(
  timeLimitModeEnabled,
  $timeLimitModeEnabled => !$timeLimitModeEnabled
)

export const promptOffset = writable(0)
// Keeps track of where in a word the user is
// Increment with every keystroke except ' ', return, and backspace
// Decrement for backspace, and reset for the other 2
export const letterIndex = writable(0)