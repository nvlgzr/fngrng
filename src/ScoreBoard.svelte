<script>
  import Clock from "./Clock.svelte";

  export let model = {
    showScore: false,
    score: 0,
    minutes: 0,
    results: {
      accuracy: 0,
      wpm: 0,
    },
  };
</script>

<div class="scoreAndClock">
  {#if model.showScore}
    <span class="scoreText">{model.score}/{model.maxScore}</span>
  {/if}
  <Clock />
</div>

<div class="testResults">
  {#if model.results.ready > 0}
    <div>Accuracy: {model.results.accuracy}</div>
    <!-- If Word Limit is set to 1, it's possible to complete a game -->
    <!-- in under 1 second, resulting in x/0 → Infinity for WPM, -->
    <!-- hence "Not enough data"-->
    <div>
      WPM: {isFinite(model.results.wpm) ? model.results.wpm : "Not enough data"}
    </div>
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
