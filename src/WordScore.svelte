<script>
  import { timeLimitModeEnabled, maxWords } from "./persistentStore.js";

  export let acceptedWords = [];

  $: score = acceptedWords.length;
  $: maxScore = $maxWords;
</script>

{#if !$timeLimitModeEnabled}
  <span class="scoreText">{score}/{maxScore}</span>
{/if}

<style>
  span {
    font-family: "Verdana", sans-serif;
  }
</style>
