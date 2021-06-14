<script>
  import SingleCharacter from "./SingleCharacter.svelte";

  export let word;
</script>

{#each word as charSpec}
  <SingleCharacter {charSpec} />
{/each}
<span comment="creates gap between words" />
