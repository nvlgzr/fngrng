import { derived, readable, writable } from "svelte/store";
import {
  alphabet,
  columnarKeyboard,
  standardKeyboard,
} from "./levelMappings.js";
import {
  letterSetsForCurrentLayout,
  currentLevel,
  keyMap,
  punctuationToInclude,
  rotePracticeOn,
  fullSentenceModeEnabled,
  useColumnarLayout,
  keyRemapping,
  currentLayout,
} from "./persistentStore.js";

export const gameState = writable("ready"); // 'ready' → 'on' → 'over' ↵

const time = readable(new Date(), function start(set) {
  const interval = setInterval(() => {
    set(new Date());
  }, 1000);

  return function stop() {
    clearInterval(interval);
  };
});

let startTime = new Date();
export const secondsSinceStart = derived(
  [time, gameState],
  ([$time, $gameState], set) => {
    switch ($gameState) {
      case "ready":
        startTime = $time;
        set(0);
        break;

      case "on":
        const milliSecsElapsed = $time - startTime;
        set(Math.round(milliSecsElapsed / 1000));
        break;

      default: // over
        break;
    }
  },
  0
);

export const isEditingCustomKeyMap = writable(false);
export const isEditingWordLimit = writable(false);
export const isEditingTimeLimit = writable(false);

export const lettersInLevel = derived(
  [letterSetsForCurrentLayout, currentLevel],
  ([$letterSetsForCurrentLayout, $currentLevel]) => {
    // If this is a bit crazy, it's just because I don't feel like
    // doing an if/else just for Level 7, wherein suddenly the
    // list of additional letters includes duplicates from previous
    // levels (because Level 7's set is the entire alphabet)
    //
    // All this does is combines all the letters into a single array,
    // uses a set to remove duplicates, then sorts them back into
    // a sorted string (via another array).
    return Array.from(
      new Set(
        $letterSetsForCurrentLayout
          .slice(0, $currentLevel)
          .reduce((l, r) => l + r)
          .split("")
      )
    )
      .sort()
      .join("");
  }
);

export const configuredRows = derived(
  [
    currentLevel,
    currentLayout,
    keyMap,
    useColumnarLayout,
    punctuationToInclude,
    letterSetsForCurrentLayout,
    lettersInLevel,
    fullSentenceModeEnabled,
    keyRemapping,
  ],
  ([
    $currentLevel,
    $currentLayout,
    $keyMap,
    $useColumnarLayout,
    $punctuationToInclude,
    $letterSetsForCurrentLayout,
    $lettersInLevel,
    $rotePracticeOn,
    $fullSentenceModeEnabled,
    $keyRemapping,
  ]) => {
    const activeCharacters =
      $fullSentenceModeEnabled || $rotePracticeOn
        ? alphabet + $punctuationToInclude
        : $lettersInLevel + $punctuationToInclude;

    function letterLevelIndex(letter) {
      const levels = $letterSetsForCurrentLayout;
      const foundIndex = levels.findIndex((letters) =>
        letters.includes(letter)
      );
      return foundIndex;
    }

    function nonLetter(letter) {
      return letter === "_" || /\W/.test(letter);
    }

    function activeClassFor(letter) {
      if (!letter || !activeCharacters.includes(letter)) return "inactive";

      if (nonLetter(letter)) return "punctuation";

      const levelIndex = letterLevelIndex(letter);
      if (!$fullSentenceModeEnabled && levelIndex === $currentLevel - 1)
        return "newInThisLevel";

      return "active";
    }

    const baseLayout = $useColumnarLayout ? columnarKeyboard : standardKeyboard;
    const mapped = baseLayout.map((row) => {
      // Ignore initial undefined state
      if (!$keyMap) return row;

      // https://stackoverflow.com/a/37616104
      const activeMap = Object.fromEntries(
        Object.entries($keyMap).filter((keyConfig) => {
          const letter = keyConfig[1];
          return letter && activeCharacters.includes(letter);
        })
      );

      return row.map((letterConfig) => {
        if (letterConfig.id === "mapping-status" && !$keyRemapping)
          return {
            ...letterConfig,
            letter: $currentLayout !== "custom" ? `Layout Imitation Off` : "",
          };
        else if (!letterConfig.id || !activeMap[letterConfig.id])
          return {
            ...letterConfig,
            letter: "",
          };
        else
          return {
            ...letterConfig,
            letter: activeMap[letterConfig.id],
          };
      });
    });

    const levelled = mapped.map((row) =>
      row.map((letterConfig) => {
        return {
          ...letterConfig,
          class: `${letterConfig.class} ${activeClassFor(letterConfig.letter)}`,
        };
      })
    );

    return levelled;
  }
);
