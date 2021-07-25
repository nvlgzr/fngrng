<script>
  import Keystroke from "./Keystroke.svelte";
  import randomPassage from "./randomPassage.js";
  import {
    uppercaseAllowed,
    fullSentenceModeEnabled,
    wordScrollingModeEnabled,
    timeLimitModeEnabled,
    maxSeconds,
    maxWords,
    punctuationToInclude,
    keyRemapping,
    keyMap,
    currentLevel,
    currentLayout,
  } from "./persistentStore.js";
  import {
    gameState,
    secondsSinceStart,
    lettersInLevel,
    isEditingCustomKeyMap,
    isEditingTimeLimit,
    isEditingWordLimit,
  } from "./volatileStore.js";
  import {
    addSymbol,
    backspace,
    gameover,
    initModel,
  } from "./modelTransformations.js";
  import { filterWordList, shuffle, remap } from "./pureFunctions";
  import { masterList } from "./tenThousandWords";

  const freshModel = () => {
    let allValidLetters =
      $lettersInLevel +
      ($currentLayout === "custom" ? "" : $punctuationToInclude);
    if ($uppercaseAllowed) {
      allValidLetters += $lettersInLevel.toUpperCase();
    }
    const wordLimit = $timeLimitModeEnabled ? $maxSeconds * 4 : $maxWords;
    const targetString = $fullSentenceModeEnabled
      ? randomPassage()
      : shuffle(filterWordList(masterList, allValidLetters)).join(" ");

    return initModel(targetString, wordLimit, $wordScrollingModeEnabled);
  };

  export let model = freshModel();

  $: if ($isEditingCustomKeyMap) {
    model = freshModel();
  }

  $: {
    // Reset when any of these settings change
    $uppercaseAllowed;
    $punctuationToInclude;
    $wordScrollingModeEnabled;
    $fullSentenceModeEnabled;
    $timeLimitModeEnabled;
    $maxSeconds;
    $maxWords;
    $lettersInLevel;
    $currentLevel;
    $currentLayout;
    $keyRemapping;
    model = freshModel();
  }

  $: $gameState = model.gameState;

  $: if (
    $timeLimitModeEnabled &&
    model.gameState === "on" &&
    $secondsSinceStart >= $maxSeconds
  ) {
    model = gameover(model);
  }

  const handleKey = ({ detail }) => {
    if ($isEditingCustomKeyMap || $isEditingWordLimit || $isEditingTimeLimit) {
      return;
    }

    if (detail.length === 1) {
      const letter = $keyRemapping ? remap(detail, $keyMap) : detail;
      model = addSymbol(model, letter);
    }
  };

  const maybeReset = () => {
    if (model.gameState === "over") model = freshModel();
  };
</script>

<Keystroke
  on:stroke={handleKey}
  on:Enter={maybeReset}
  on:Backspace={() => (model = backspace(model))}
/>
