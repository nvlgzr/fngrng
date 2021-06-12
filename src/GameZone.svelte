<script>
  import ResetButton from "./ResetButton.svelte";
  import ScrollingPrompt from "./ScrollingPrompt.svelte";
  import LineByLinePrompt from "./LineByLinePrompt.svelte";
  import UserInput from "./UserInput.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import {
    wordScrollingModeEnabled,
    timeLimitModeEnabled,
    maxSeconds,
  } from "./persistentStore.js";
  import { gameState, secondsSinceStart } from "./volatileStore.js";

  // $: console.log("$gameState", $gameState);

  $: if ($timeLimitModeEnabled && $secondsSinceStart >= $maxSeconds) {
    $gameState = "over";
  }
</script>

<div>
  {#if $gameState === "over"}
    <ResetButton />
  {:else if $wordScrollingModeEnabled}
    <ScrollingPrompt />
  {:else}
    <LineByLinePrompt />
  {/if}
  <UserInput color={$gameState === "on" ? "black" : "wheat"} />
  <ScoreBoard />
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
