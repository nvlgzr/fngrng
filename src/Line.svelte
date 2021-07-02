<script>
  import SingleWord from "./SingleWord.svelte";

  export let line;

  $: preppedLine = typeof line === "string" ? line.split(" ") : line;
</script>

<div class="line">
  {#each preppedLine as word}
    <SingleWord {word} />
  {/each}
</div>

<style lang="postcss">
  div {
    /* white-space: nowrap; */
    @apply col-start-3 col-span-6;
    @apply text-left;
  }
</style>
