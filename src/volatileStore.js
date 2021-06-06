import { derived, writable } from "svelte/store";
import { rowData } from "./levelMappings.js";
import { levelDictionary, currentLevel, layoutMap, timeLimitModeEnabled, punctuationToInclude } from "./persistentStore.js"

// Level 1 → ["arstneio"]
// Level 2 → ["arstneio", "pgjl"]
// Level 3 → ["arstneio", "dh", "pgjl"]
const activeLevels = derived([levelDictionary, currentLevel], ([$levelDictionary, $currentLevel]) => {
  const allLevels = Object.entries($levelDictionary);
  const foo = allLevels
    .filter(([level, _]) => Number.parseInt(level.slice(-1)) <= $currentLevel)
    .map(([_, letters]) => {
      // We don't really need these labels;
      // The index will suffice.
      return letters;
    });
  return foo
});

export const configuredRows = derived(
  [currentLevel, layoutMap, punctuationToInclude, activeLevels],
  ([$currentLevel, $layoutMap, $punctuationToInclude, $activeLevels]) => {

    // "arstneiodhpgjl"
    const activeLetters = $activeLevels.reduce((acc, curr) => acc + curr, "")
    const activeCharacters = activeLetters + $punctuationToInclude;

    function letterLevelIndex(letter) {
      const levels = $activeLevels;
      const foundIndex = levels.findIndex((letters) => letters.includes(letter));
      return foundIndex;
    }

    function isIncludedPunctuation(letter) {
      return letter ? $punctuationToInclude.includes(letter) : false;
    }

    function activeClassFor(letter) {
      if (!letter || !activeCharacters.includes(letter)) return "inactive";

      if (isIncludedPunctuation(letter)) return "punctuation";

      const levelIndex = letterLevelIndex(letter);
      if (levelIndex == 0) return "homeRow";
      if (levelIndex == $currentLevel - 1) return "newInThisLevel";
      return "active";
    }

    // [
    //   […],
    //   [
    //     {class: "onepointfiveu", letter: ""},
    //     {class: "", id: "keyQ", letter: "q"},
    //     …
    //   ],
    //   […],
    //   …
    // ]
    const mapped = rowData.map(row => {
      // Ignore initial undefined state
      if (!$layoutMap) return row

      // https://stackoverflow.com/a/37616104
      const activeMap = Object.fromEntries(
        Object.entries($layoutMap).filter(
          keyConfig => {
            const letter = keyConfig[1]
            return letter && activeCharacters.includes(letter)
          }
        )
      )

      return row.map(letterConfig => {

        if (!letterConfig.id || !activeMap[letterConfig.id]) return {
          ...letterConfig,
          letter: ""
        }

        return {
          ...letterConfig,
          letter: activeMap[letterConfig.id]
        }
      })
    })

    // [
    //   […],
    //   [
    //     {class: "onepointfiveu inactive", letter: ""},
    //     {class: "active", id: "keyQ", letter: "q"},
    //     …
    //   ],
    //   […],
    //   …
    // ]
    const levelled = mapped.map(row => {
      const foo = row.map(letterConfig => {
        return {
          ...letterConfig,
          class: `${letterConfig.class} ${activeClassFor(letterConfig.letter)}`
        }
      })
      return foo
    })

    return levelled
  });

// Game begins when user starts typing in input
export const gameState = writable('ready') // 'ready' → 'on' → 'over' ↵

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
export const secondsSinceStart = writable(0)

export const maxSeconds = writable(60)
export const maxWords = writable(50)

export const score = writable(0)
export const correct = writable(0)
export const errors = writable(0)
export const scoreMax = writable(50)

export const results = writable({ ready: false, accuracy: "", wpm: 0 })
export const scoreBoard = derived(
  [score, secondsSinceStart, maxSeconds, maxWords, seconds, minutes, timeLimitModeEnabled, scoreMax, results],
  ([$score, $secondsSinceStart, $maxSeconds, $maxWords, $seconds, $minutes, $timeLimitModeEnabled, $scoreMax, $results]) => {
    console.log('secsSince', $secondsSinceStart, 'maxSecs', $maxSeconds, 'maxWords', $maxWords)

    const totalSeconds = $timeLimitModeEnabled ? $maxSeconds - $secondsSinceStart : $secondsSinceStart

    return {
      minutes: Math.floor(totalSeconds / 60),
      seconds: totalSeconds % 60,
      mins: $minutes,
      secs: $seconds,
      score: $score,
      maxScore: $maxWords,
      currentScore: $score,
      scoreMax: $scoreMax,
      showScore: !$timeLimitModeEnabled,
      results: $results
    }
  }
)

export const promptOffset = writable(0)
export const sentenceStartIndex = writable(-1) // keeps track of where we are in full sentence mode
// Keeps track of where in a word the user is
// Increment with every keystroke except ' ', return, and backspace
// Decrement for backspace, and reset for the other 2
export const letterIndex = writable(0)