<script>
  import Clock from "./Clock.svelte";
  import WordScore from "./WordScore.svelte";
  import Results from "./Results.svelte";
  import { baseModel } from "./volatileStore.js";

  $: acceptedWords = [...$baseModel.hidden, ...$baseModel.locked];
</script>

<div class="scoreAndClock">
  <WordScore {acceptedWords} />
  <Clock />
</div>

<div class="testResults">
  <Results {acceptedWords} />
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
