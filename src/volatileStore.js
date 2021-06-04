import { derived, writable } from "svelte/store";
import { layoutMaps } from "./levelMappings.js"
import { timeLimitModeEnabled } from "./persistentStore.js"

export const keyboardMap = writable(layoutMaps["colemak"])

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