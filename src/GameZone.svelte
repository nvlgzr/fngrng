<script>
  import Keydown from "svelte-keydown";
  import ResetButton from "./ResetButton.svelte";
  import ScrollingPrompt from "./ScrollingPrompt.svelte";
  import LineByLinePrompt from "./LineByLinePrompt.svelte";
  import UserInput from "./UserInput.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import phrase from "./gettysburg.js";
  import {
    timeLimitModeEnabled,
    maxSeconds,
    wordScrollingModeEnabled,
  } from "./persistentStore.js";
  import { gameState, secondsSinceStart } from "./volatileStore.js";
  import {
    initForScrolling,
    addSymbol,
    backspace,
    reset,
    gameover,
  } from "./modelTransformations.js";

  let model = initForScrolling(phrase);

  $: $gameState = model.gameState;

  $: if (
    $timeLimitModeEnabled &&
    model.gameState === "on" &&
    $secondsSinceStart >= $maxSeconds
  ) {
    model = gameover(model);
  }

  const handleKeydown = ({ detail }) => {
    if (detail.length === 1) {
      model = addSymbol(model, detail);
    } else {
      switch (detail) {
        case "Backspace":
          model = backspace(model);
          break;

        case "Enter":
          model = reset(model);
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
    <ResetButton bind:model />
  {:else if $wordScrollingModeEnabled}
    <ScrollingPrompt {model} />
  {:else}
    <LineByLinePrompt />
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
