<script>
  import SingleWord from "./SingleWord.svelte";

  export let line;

  $: preppedLine = typeof line === "string" ? line.split(" ") : line;
</script>

<span class="line">
  {#each preppedLine as word}
    <SingleWord {word} />
  {/each}
</span>

<style>
  .line {
    white-space: nowrap;
    /* }

  .paragraph .line { */
    margin-left: 1.6vmin;
    display: block;
  }
</style>
