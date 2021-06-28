<script>
  import Clock from "./Clock.svelte";
  import WordScore from "./WordScore.svelte";
  import Results from "./Results.svelte";

  export let model;

  $: locked = model.locked ?? [];
  $: acceptedWords = [...model.hidden, ...locked];
  $: totalKeyPresses = model.totalKeyPresses;
</script>

<div class="scoreAndClock">
  <WordScore {acceptedWords} />
  <Clock />
</div>

<div class="testResults">
  <Results {acceptedWords} {totalKeyPresses} />
</div>

<style>
  .scoreAndClock {
    display: flex;
    justify-content: space-around;
    font-size: 5vmin;
  }

  .testResults {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0.8 1 7vh;
  }
</style>
