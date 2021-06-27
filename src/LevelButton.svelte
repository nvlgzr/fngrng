<script context="module">
  export const LEVELS = {};
</script>

<script>
  import { getContext } from "svelte";

  const { selectLevel, currentLevel } = getContext(LEVELS);

  export let level = -1;

  $: selected = $currentLevel === level;
</script>

<button on:click={() => selectLevel(level)} class:selected>
  <slot />
</button>

<style>
  button {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 11vh;
    flex: 1 1 11vh;
    margin: 0.5vh auto;
    width: 11vh;
    font-size: 1.5vh;
    color: var(--text-color);
  }

  button:hover {
    font-weight: bold;
    border-color: var(--accent-color);
  }

  .selected {
    color: var(--accent-color);
    border-color: var(--accent-color);
    font-weight: bold;
  }
</style>
