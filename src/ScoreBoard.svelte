<script>
  import {
    score,
    scoreMax,
    clock,
    results,
    showScore,
  } from "./volatileStore.js";
</script>

<div class="scoreAndClock">
  {#if $showScore}
    <span class="scoreText">{$score}/{$scoreMax}</span>
  {/if}
  <span class="timeText">{$clock.mins}m :{$clock.secs}s</span>
</div>

{#if $results.ready > 0}
  <div class="testResults">
    <div>Accuracy: {$results.accuracy}</div>
    <div>WPM: {$results.wpm}</div>
  </div>
{/if}

<style>
  .scoreAndClock {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    font-size: 5vmin;
  }

  .scoreText,
  .timeText {
    font-family: "Verdana", sans-serif;
  }

  .testResults {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 8vh;
    flex: 0.8 1 7vh;
  }
</style>
