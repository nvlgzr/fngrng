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
  <p>
    <slot />
  </p>
  <p class="shortcut">
    ⌃{level}
  </p>
</button>

<style>
  button {
    flex: 1 1 11vh;
    background-color: transparent;
    border: 0.2vmax solid var(--text-color);
    color: var(--text-color);
    cursor: pointer;
    letter-spacing: 3px;
    font-size: 1.3vh;
    margin: 0.5vh auto;
    width: 11vh;
    border-radius: 0.45rem;
  }

  button:focus {
    outline: none;
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

  .shortcut {
    position: absolute;
    color: gray;
    margin: 1vh auto;
    font-family: "Verdana", sans-serif;
    letter-spacing: -0.05rem;
  }
</style>
