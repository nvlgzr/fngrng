<script>
  import ResetButton from "./ResetButton.svelte";
  import ScrollingPrompt from "./ScrollingPrompt.svelte";
  import LineByLinePrompt from "./LineByLinePrompt.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import { wordScrollingModeEnabled } from "./persistentStore.js";
  import {
    gameState,
    promptLines,
    userText,
    scoreBoard,
  } from "./volatileStore.js";

  const handleInputChange = (input, promptArray) => {
    // NYI
    return input;
  };

  $: console.log(JSON.stringify($userText));

  $: startTrial = (e) => {
    $gameState = "on";
    $userText = handleInputChange(e.target.value, $promptLines);
  };
</script>

<div>
  {#if $gameState === "over"}
    <ResetButton />
  {:else if $wordScrollingModeEnabled}
    <ScrollingPrompt />
  {:else}
    <LineByLinePrompt />
  {/if}
  <input
    on:input={startTrial}
    value={$userText}
    id="userInput"
    type="text"
    spellcheck="false"
  />
  <ScoreBoard model={$scoreBoard} />
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
