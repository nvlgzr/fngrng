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
    secondsSinceStart,
    totalKeyPresses,
  } from "./volatileStore.js";
  import { evaluate, objectize } from "./pureFunctions.js";
  import { emptyBaseModel } from "./baseModel.js";

  let userText = "";
  let wrongCharacterTyped = false;
  let baseModel = emptyBaseModel;
  let promptUpdater;

  $: if ($timeLimitModeEnabled && $secondsSinceStart >= $maxSeconds) {
    $gameState = "over";
    wrongCharacterTyped = false;
  }

  $: if ($gameState === "ready") {
    // Temporary word list generator…keeps things simple for now.
    const phrase = ["the", "shit", "hits", "the", "fan"];
    const list = JSON.parse(JSON.stringify(Array(5).fill(phrase).flat(1)));
    const [first, ...rest] = list;
    const objectized = objectize(first);

    baseModel = {
      ...emptyBaseModel,
      challenge: first,
      coloredChallenge: objectize(first),
      restOfLine: rest,
    };
    promptUpdater && promptUpdater(baseModel);
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
        //   One thing I like about this is that it puts a little
        //   bit more emphasis on accuracy which, imho, is more
        //   important than speed. Aiming always for high speed
        //   can develop a bad habit of leaning too hard on backspace.

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
    const attempt = userText + singleCharacter;
    const challenge = baseModel.challenge;
    const { overallVerdict, charSpecs } = evaluate(challenge, attempt);

    if (overallVerdict === "completed") {
      userText = "";
      // advance()
      const previousChallenge = baseModel.challenge;
      const [newChallenge, ...rest] = baseModel.restOfLine;
      const previouslyHidden = baseModel.hidden;
      if (!newChallenge) {
        $gameState = "over";
      }
      baseModel = {
        ...baseModel,
        hidden: [...previouslyHidden, previousChallenge],
        challenge: newChallenge,
        coloredChallenge: objectize(newChallenge),
        restOfLine: rest,
      };
    } else {
      wrongCharacterTyped = overallVerdict === "error";
      userText = userText + singleCharacter;
      baseModel = {
        ...baseModel,
        coloredChallenge: charSpecs,
      };
    }
    promptUpdater(baseModel);

    // reduce to {
    //   overallVerdict: "no errors" | "error" | "completed"
    //   firstWord: {char: X, color: "green"}
    //   longestAttempt: ""
    // }
  };

  const handleNonSymbol = (keyPressed) => {
    switch (keyPressed) {
      case "Backspace":
        userText = userText.slice(0, -1);
        handleSymbol("");
        break;

      default:
        // Mostly just let the browser handle it
        break;
    }
  };

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
    <ScrollingPrompt bind:updateModel={promptUpdater} />
  {:else}
    <LineByLinePrompt />
  {/if}
  <UserInput failed={wrongCharacterTyped} {userText} />
  <ScoreBoard {baseModel} />
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
