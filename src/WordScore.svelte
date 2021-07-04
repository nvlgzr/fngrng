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
  <div class="w-32">
    <span class="float-right">{score}/{maxScore}</span>
  </div>
{/if}
