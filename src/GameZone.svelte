<script>
  import Keydown from "svelte-keydown";
  import ResetButton from "./ResetButton.svelte";
  import ScrollingPrompt from "./ScrollingPrompt.svelte";
  import LineByLinePrompt from "./LineByLinePrompt.svelte";
  import UserInput from "./UserInput.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import { specialKeyCodes } from "./specialKeyCodes.js";
  import { wordScrollingModeEnabled } from "./persistentStore.js";
  import {
    gameState,
    baseModel,
    userText,
    totalKeyPresses,
  } from "./volatileStore.js";

  let wrongCharacterTyped = false;

  const handleKeydown = ({ detail }) => {
    if (detail.length > 1) {
      handleNonCharacter(detail);
    }

    handleCharacter(detail);
  };

  const handleNonCharacter = (keyPressed) => {
    switch (keyPressed) {
      case "Backspace":
        console.log("handle backspace");
        break;

      case "Enter":
        console.log("Maybe reset");

      default:
        // Mostly just let the browser handle it
        break;
    }
  };

  $: handleCharacter = (singleCharacter) => {
    console.log("🏖", singleCharacter);
    return;
    switch ($gameState) {
      case "ready":
        $totalKeyPresses = 0;
        $gameState = "on";
        break;

      case "on":
        if (!specialKeyCodes.includes(keyCode)) {
          $totalKeyPresses++;
        }
        break;

      case "over":
        if (keyCode === 13) {
          // return/enter triggers reset
          $gameState = "ready";
        } else {
          // Let the user's input pass for this runloop, but
          // clobber it before they get a chance to see it.
          setTimeout(() => {
            // See ⚠️ #HackAlert below.
            $userText = " ";
            $userText = "";
          }, 0);
        }
        break;

      default:
        throw new Error(`Impossible gameState: ${$gameState}`);
    }
  };

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

<Keydown on:key={handleKeydown} />

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
