<script>
  import PrettyPrint from "./PrettyPrint.svelte";
  import { gameState, secondsSinceStart } from "./volatileStore.js";

  export let model;

  let foo;
  $: if (model?.gameState === "over") foo = model;

  $: locked = model.locked ?? [];
  $: acceptedWords = model.hidden;
  $: totalKeyPresses = model.totalKeyPresses;
  $: accurateKeyPresses = acceptedWords.join("").length;
  $: rawAccuracy = (100 * accurateKeyPresses) / totalKeyPresses;
  $: rawWpm = (totalKeyPresses / 5 / ($secondsSinceStart / 60)).toFixed(2);
  $: percentAccuracy = `${rawAccuracy.toFixed(1)}%`;
  $: accuracy =
    percentAccuracy === "100.0%" ? "Perfect Accuracy!" : percentAccuracy;

  // If Word Limit is set to 1, it's possible to complete a game
  // in under 1 second, resulting in a WPM == x/0 → Infinity.
  $: wpm = isFinite(rawWpm)
    ? rawWpm
    : "Not enough data. Try a longer time limit! 😎";
</script>

<PrettyPrint javascript={foo} />

{#if $gameState === "over"}
  {#if accuracy === "Perfect Accuracy!"}
    <div><span>Perfect Accuracy!</span></div>
  {:else}
    <div>accuracy this run <span>{accuracy}</span></div>
    <!-- <div>WPM: {wpm}</div> -->
    <div>locked: {model.locked}</div>
    <div>hidden: {model.hidden}</div>
    <div>acceptedWords: [{acceptedWords}]</div>
    <div>total: {totalKeyPresses}</div>
    <div>accurate: {accurateKeyPresses}</div>
    <div>rawAccuracy: {rawAccuracy}</div>
    <div>percentAccuracy: {percentAccuracy}</div>
  {/if}
{/if}

<style lang="postcss">
  div {
    @apply text-coolGray-400 font-sans text-sm p-2;
  }
  span {
    @apply text-green-500 text-5xl;
  }
</style>
