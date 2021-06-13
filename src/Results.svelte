<script>
  import {
    gameState,
    secondsSinceStart,
    totalKeyPresses,
  } from "./volatileStore.js";

  export let acceptedWords = [];

  $: accurateKeyPresses = acceptedWords.join(" ").length;
  $: rawAccuracy = (100 * accurateKeyPresses) / $totalKeyPresses;
  $: rawWpm = ($totalKeyPresses / 5 / ($secondsSinceStart / 60)).toFixed(2);

  $: accuracy = `${rawAccuracy.toFixed(2)}%`;

  // If Word Limit is set to 1, it's possible to complete a game
  // in under 1 second, resulting in a WPM == x/0 → Infinity.
  $: wpm = isFinite(rawWpm)
    ? rawWpm
    : "Not enough data. Try a longer time limit! 😎";
</script>

{#if $gameState === "over"}
  <div>Accuracy: {accuracy}</div>
  <div>WPM: {wpm}</div>
{/if}
