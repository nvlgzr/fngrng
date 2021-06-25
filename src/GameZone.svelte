<script>
  import Keydown from "svelte-keydown";
  import ResetButton from "./ResetButton.svelte";
  import ScrollingPrompt from "./ScrollingPrompt.svelte";
  import LineByLinePrompt from "./LineByLinePrompt.svelte";
  import UserInput from "./UserInput.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import randomPassage from "./randomPassage.js";
  import {
    uppercaseAllowed,
    fullSentenceModeEnabled,
    wordScrollingModeEnabled,
    timeLimitModeEnabled,
    maxSeconds,
    maxWords,
    punctuationToInclude,
    prefsOpen,
    keyRemapping,
    layoutMap,
  } from "./persistentStore.js";
  import {
    gameState,
    secondsSinceStart,
    lettersInLevel,
    isEditingCustomKeyMap,
  } from "./volatileStore.js";
  import {
    addSymbol,
    backspace,
    gameover,
    initModel,
  } from "./modelTransformations.js";
  import { filterWordList, shuffle, remap } from "./pureFunctions";
  import { masterList } from "./tenThousandWords";
  import VisualKeyboard from "./VisualKeyboard.svelte";

  const freshModel = () => {
    let allValidLetters = $lettersInLevel + $punctuationToInclude;
    if ($uppercaseAllowed) {
      allValidLetters += $lettersInLevel.toUpperCase();
    }
    const wordLimit = $timeLimitModeEnabled ? $maxSeconds * 4 : $maxWords;
    const targetString = $fullSentenceModeEnabled
      ? randomPassage()
      : shuffle(filterWordList(masterList, allValidLetters)).join(" ");

    return initModel(targetString, wordLimit, $wordScrollingModeEnabled);
  };

  let model = freshModel();

  $: {
    // Reset when any of these prefs change
    $uppercaseAllowed;
    $punctuationToInclude;
    $wordScrollingModeEnabled;
    $fullSentenceModeEnabled;
    $timeLimitModeEnabled;
    $maxSeconds;
    $maxWords;
    $lettersInLevel;
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
    if ($prefsOpen) return;

    if (detail.length === 1) {
      const letter = $keyRemapping ? remap(detail, $layoutMap) : detail;
      model = addSymbol(model, letter);
    }
  };

  const handleCombo = ({ detail }) => {
    // All keyboard shortcuts use Control-<key>
    const regExResult = /^Control-(.)$/.exec(detail);
    const controlKey = regExResult && regExResult[1];

    switch (controlKey) {
      case "c":
        $uppercaseAllowed = !$uppercaseAllowed;
        break;

      case "p":
        // ↓ ⚠️ Hack alert! This lazily duplicates toggle in
        //      PreferenceMenu, rather than properly refactoring.
        $punctuationToInclude = $punctuationToInclude === "" ? "'.-" : "";
        break;

      case "f":
        $fullSentenceModeEnabled = !$fullSentenceModeEnabled;
        break;

      case "s":
        $wordScrollingModeEnabled = !$wordScrollingModeEnabled;
        break;

      case "k":
        $keyRemapping = !$keyRemapping;
        break;

      default:
        break;
    }
  };

  const maybeReset = () => {
    if (model.gameState === "over") model = freshModel();
  };
</script>

<!-- Mutually exclusive to Keydown in VisualKeyboard -->
{#if !$isEditingCustomKeyMap}
  <Keydown
    on:key={handleKey}
    on:combo={handleCombo}
    on:Enter={maybeReset}
    on:Backspace={() => (model = backspace(model))}
  />
{/if}

<div>
  {#if model.gameState === "over"}
    <ResetButton on:reset={() => (model = freshModel())} />
  {:else if $wordScrollingModeEnabled}
    <ScrollingPrompt {model} />
  {:else}
    <LineByLinePrompt {model} />
  {/if}
  <UserInput
    failed={model.challengeView.overallVerdict === "error"}
    userText={model.userText}
  />
  <ScoreBoard {model} />
</div>

<style>
  div {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 67vmin;
  }
</style>
