<script>
  import Keydown from "svelte-keydown";
  import ResetButton from "./ResetButton.svelte";
  import ScrollingPrompt from "./ScrollingPrompt.svelte";
  import LineByLinePrompt from "./LineByLinePrompt.svelte";
  import UserInput from "./UserInput.svelte";
  import ScoreBoard from "./ScoreBoard.svelte";
  import {
    timeLimitModeEnabled,
    maxSeconds,
    wordScrollingModeEnabled,
  } from "./persistentStore.js";
  import {
    gameState,
    baseModel,
    secondsSinceStart,
    totalKeyPresses,
  } from "./volatileStore.js";
  import { evaluate } from "./pureFunctions.js";

  let userText = "";
  let wrongCharacterTyped = false;

  $: if ($timeLimitModeEnabled && $secondsSinceStart >= $maxSeconds) {
    $gameState = "over";
    wrongCharacterTyped = false;
  }

  const handleKeydown = ({ detail }) => {
    switch ($gameState) {
      case "ready":
        if (detail.length === 1) {
          $gameState = "on";
          handleSymbol(detail);
        }
        break;

      case "on":
        $totalKeyPresses++;
        // ↑ The original code has complex rules for this, but I
        //   figure there's no "good" reason to press a key during
        //   game-on other than to attempt a match, so if you get
        //   this far, your count goes up…un point, c'est tout.

        if (detail.length > 1) {
          handleNonSymbol(detail);
        } else {
          handleSymbol(detail);
        }

        // if (!specialKeyCodes.includes(keyCode)) {
        // }
        break;

      case "over":
        if (detail === "Enter") {
          // return/enter triggers reset
          $gameState = "ready";
        } else {
          // Let the user's input pass for this runloop, but
          // clobber it before they get a chance to see it.
          setTimeout(() => {
            // See ⚠️ #HackAlert below.
            userText = " ";
            userText = "";
          }, 0);
        }
        break;

      default:
        throw new Error(`Impossible gameState: ${$gameState}`);
    }
  };

  const handleSymbol = (singleCharacter) => {
    console.log("🏖", singleCharacter);

    const attempt = userText + singleCharacter;
    const challenge = $baseModel.challenge;
    const { overallVerdict, charSpecs } = evaluate(challenge, attempt);
    console.log("overallVerdict", overallVerdict);

    if (overallVerdict === "completed") {
      userText = "";
      // advance()
    } else {
      wrongCharacterTyped = overallVerdict === "errors";
      userText = userText + singleCharacter;
    }
  };

  const handleNonSymbol = (keyPressed) => {
    switch (keyPressed) {
      case "Backspace":
        console.log("handle backspace");
        break;

      default:
        // Mostly just let the browser handle it
        break;
    }
  };

  $: if ($gameState === "on") {
    const goal = $baseModel.challenge;
    const attempt = userText.split("");
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
    <ScrollingPrompt {userText} />
  {:else}
    <LineByLinePrompt />
  {/if}
  <UserInput failed={wrongCharacterTyped} {userText} />
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
