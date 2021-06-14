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
  import {
    gameState,
    secondsSinceStart,
    emptyBaseModel,
    baseModel,
    userText,
  } from "./volatileStore.js";

  $: if ($timeLimitModeEnabled && $secondsSinceStart >= $maxSeconds) {
    $gameState = "over";
    wrongCharacterTyped = false;
  }

  $: if ($gameState === "ready") {
    // Temporary word list generator…keeps things simple for now.
    const phrase = ["the", "shit", "hits", "the", "fan"];
    const list = JSON.parse(JSON.stringify(Array(5).fill(phrase).flat(1)));
    const [first, ...rest] = list;

    $baseModel = {
      ...emptyBaseModel,
      challenge: first,
      restOfLine: rest,
    };
  }

  let wrongCharacterTyped = false;

  $: if ($gameState === "on") {
    const goal = $baseModel.challenge;
    const attempt = $userText.split("");
    const soFar = matchState(attempt, goal);

    wrongCharacterTyped = soFar === "failed";

    // Whichever prompt is currently live will do the actual advancing
    if (soFar === "whole word match") {
      $baseModel = {
        ...$baseModel,
        advancePrompt: true,
        clearInput: true,
      };
    }
  }

  const matchState = (attempt, goal) => {
    if (!attempt.length) return { prognosis: "attempt not yet made" };

    return attempt.reduce((prognosis, curr, i) => {
      if (curr === " ") {
        return prognosis === "good so far" ? "whole word match" : "failed";
      } else {
        return goal[i] === curr ? "good so far" : "failed";
      }
    }, "unknown");
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
  <UserInput failed={wrongCharacterTyped} />
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
