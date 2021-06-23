<script>
  import Keydown from "svelte-keydown";
  import ResetButton from "./ResetButton.svelte";
  import ScrollingPrompt from "./ScrollingPrompt.svelte";
  import LineByLinePrompt from "./LineByLinePrompt.svelte";
  import UserInput from "./UserInput.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import phrase from "./gettysburg.js";
  import {
    uppercaseAllowed,
    fullSentenceModeEnabled,
    wordScrollingModeEnabled,
    timeLimitModeEnabled,
    maxSeconds,
    maxWords,
    punctuationToInclude,
    prefsOpen,
  } from "./persistentStore.js";
  import { gameState, secondsSinceStart } from "./volatileStore.js";
  import {
    addSymbol,
    backspace,
    gameover,
    initModel,
  } from "./modelTransformations.js";

  const freshModel = () => {
    const wordLimit = $timeLimitModeEnabled ? $maxSeconds * 4 : $maxWords;
    return initModel(phrase, wordLimit, $wordScrollingModeEnabled);
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

  const handleKeydown = ({ detail }) => {
    if ($prefsOpen) return;

    if (detail.length === 1) {
      model = addSymbol(model, detail);
    } else {
      switch (detail) {
        case "Backspace":
          model = backspace(model);
          break;

        case "Enter":
          model = freshModel();
          break;

        default:
          // Just let the browser handle it
          break;
      }
    }
  };
</script>

<Keydown on:key={handleKeydown} />

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
