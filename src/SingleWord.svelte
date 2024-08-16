<script>
  import SingleCharacter from "./SingleCharacter.svelte";

  export let word;
</script>

{#each word as charSpec}
  {#if typeof charSpec === "string"}
    {charSpec}
  {:else}
    <SingleCharacter {charSpec} />
  {/if}
{/each}
<span comment="creates gap between words"></span>
