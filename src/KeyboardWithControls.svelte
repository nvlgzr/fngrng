<script>
  import HoverableControls from "./HoverableControls.svelte";
  import Outline from "./Outline.svelte";
  import Keyboard from "./Keyboard.svelte";
  import Toggle from "./Toggle.svelte";
  import {
    currentLayout,
    fullSentenceModeEnabled,
    keyRemapping,
    useColumnarLayout,
    useCustomLayout,
  } from "./persistentStore";
  import { isEditingCustomKeyMap, lettersInLevel } from "./volatileStore";

  $: custom = $currentLayout === "custom";
  $: playable = $lettersInLevel.length > 0;

  $: color =
    custom && playable
      ? "hsl(213, 94%, 68%)" // Blue
      : custom
      ? "hsl(0, 79%, 63%)" // Red
      : "hsl(218, 11%, 65%)"; // Steel Gray

  let hoverColor = "hsl(255, 92%, 76%)"; // Purple

  const toggleCustomLayout = () => {
    $useCustomLayout = !$useCustomLayout;
  };
</script>

<HoverableControls controlColor={hoverColor}>
  <span slot="anchor" let:hovering>
    <Outline color={hovering ? hoverColor : color}>
      <div style={`--text-color: ${hovering ? hoverColor : color}`}>
        <Keyboard />
        {#if custom}
          {#if playable}
            <p>
              click + type to remap ፠ click + backspace to clear ፠ esc to cancel
            </p>
          {:else if $isEditingCustomKeyMap}
            <p>type a letter from 'a' to 'z', or ".", "'", or "-"</p>
          {:else}
            <p>…then click any key to edit</p>
          {/if}
        {/if}
      </div>
    </Outline>
  </span>

  <span slot="above">
    {#if $lettersInLevel.length}
      <Toggle bind:on={$keyRemapping}>Keyboard Remapping ⌃K</Toggle>

      <Toggle bind:on={$useColumnarLayout}>Ortholiniear Layout ⌃O</Toggle>
      <Toggle
        action={toggleCustomLayout}
        on={$currentLayout === "custom"}
        disabled={$fullSentenceModeEnabled}
        disabledTooltip={"Turn off Full Sentence mode to enable Custom layout"}
      >
        Custom Layout ⇧⌃C
      </Toggle>
    {/if}
  </span>
</HoverableControls>

<style lang="postcss">
  div {
    color: var(--text-color);
    @apply grid;
  }

  p {
    @apply text-xl text-center;
  }
</style>
