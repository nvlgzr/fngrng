<script>
  import { timeLimitModeEnabled, maxWords } from "./persistentStore.js";

  export let model;

  let score;
  let maxScore;

  $: if (model) {
    const locked = model.locked ?? [];
    const acceptedWords = [...model.hidden, ...locked];
    score = acceptedWords.length;
    maxScore = $maxWords;
  }
</script>

{#if !$timeLimitModeEnabled}
  <span class="scoreText">{score}/{maxScore}</span>
{/if}
