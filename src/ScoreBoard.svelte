<script>
  import { score, scoreBoard } from "./volatileStore.js";
</script>

<div class="scoreAndClock">
  {#if $scoreBoard.showScore}
    <span class="scoreText"
      >{$scoreBoard.score}/{$scoreBoard.maxScore} | {$scoreBoard.currentScore}/{$scoreBoard.scoreMax}</span
    >
  {/if}
  <span class="timeText"
    >{$scoreBoard.minutes}:{$scoreBoard.seconds} | {$scoreBoard.mins}m :{$scoreBoard.secs}s</span
  >
</div>

<div class="testResults">
  {#if $scoreBoard.results.ready > 0}
    <div>Accuracy: {$scoreBoard.results.accuracy}</div>
    <div>WPM: {$scoreBoard.results.wpm}</div>
  {/if}
</div>

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
