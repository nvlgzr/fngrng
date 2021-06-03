import { derived, writable } from "svelte/store";
import { timeLimitModeEnabled } from "./persistentStore.js"

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

export const score = writable(0)
export const errors = writable(0)
export const scoreMax = writable(50)
export const clock = writable({ mins: 0, secs: 0 })
export const results = writable({ ready: false, accuracy: "", wpm: 0 })
export const showScore = derived(
  timeLimitModeEnabled,
  $timeLimitModeEnabled => !$timeLimitModeEnabled
)
