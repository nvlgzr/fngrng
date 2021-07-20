<script>
  import HoverableControls from "./HoverableControls.svelte";
  import Outline from "./Outline.svelte";
  import Keyboard from "./Keyboard.svelte";
  import Toggle from "./Toggle.svelte";
  import {
    currentFixedLayout,
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

<HoverableControls controlColor={hoverColor} let:transitionDuration>
  <span
    slot="anchor"
    let:hovering
    style={`transition: all ${transitionDuration}`}
  >
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
      <Toggle
        bind:on={$keyRemapping}
        tooltip={$keyRemapping
          ? `Click to turn off key remapping`
          : `Click to map from qwerty to ${$currentLayout}`}
      >
        Keyboard Remapping ⌃K
      </Toggle>

      <Toggle
        bind:on={$useColumnarLayout}
        tooltip={$useColumnarLayout
          ? "Click to arrange keys in 'standard' diaglonal layout"
          : "Click to arrange keys in split-hand grid layout"}
      >
        Ortholinear Layout ⌃L
      </Toggle>

      <Toggle
        action={toggleCustomLayout}
        on={$currentLayout === "custom"}
        disabled={$fullSentenceModeEnabled}
        tooltip={$fullSentenceModeEnabled
          ? "Turn off Full Sentence mode to enable Custom layout"
          : $currentLayout === "custom"
          ? `Click to return to ${$currentFixedLayout} layout`
          : "Click to create your own keyboard layout"}
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
