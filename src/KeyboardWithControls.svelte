<script>
  import HoverableControls from "./HoverableControls.svelte";
  import Outline from "./Outline.svelte";
  import Keyboard from "./Keyboard.svelte";
  import Toggle from "./Toggle.svelte";
  import {
    currentFixedLayout,
    currentLayout,
    rotePracticeOn,
    fullSentenceModeEnabled,
    keyRemapping,
    useColumnarLayout,
    useCustomLayout,
  } from "./persistentStore";
  import {
    isEditingCustomKeyMap,
    lettersInLevel,
    displayAllGameControls,
  } from "./volatileStore";

  $: custom = $currentLayout === "custom";
  $: playable = $lettersInLevel.length > 0;

  let unplayableColor = "red-400";
  let customLayoutColor = "blue-400";
  let standardHoverColor = "purple-400";
  let standardColor = "coolGray-400";

  $: color = !playable
    ? unplayableColor
    : custom
    ? customLayoutColor
    : standardColor;
  $: hoverColor = !playable
    ? unplayableColor
    : custom
    ? customLayoutColor
    : standardHoverColor;

  $: textHoverClass = `text-${hoverColor}`;
  $: borderClass = `border-${color}`;
  $: borderHoverClass = `border-${hoverColor}`;

  const toggleCustomLayout = () => {
    $useCustomLayout = !$useCustomLayout;
  };
</script>

<HoverableControls class={textHoverClass} let:transitionDuration>
  <span
    slot="anchor"
    let:hovering
    style={`transition: all ${transitionDuration}`}
  >
    {#if $keyRemapping}
      <Outline
        class={hovering || $displayAllGameControls
          ? borderHoverClass
          : borderClass}
      >
        <div
          class={hovering || $displayAllGameControls
            ? borderHoverClass
            : borderClass}
        >
          <Keyboard />
          {#if custom}
            {#if playable}
              <p>
                <em>click</em> + type to remap 𐏐 <em>click</em> + backspace to clear
                𐏐 esc to cancel
              </p>
            {:else if $isEditingCustomKeyMap}
              <p>type a letter from 'a' to 'z', or ".", "'", or "-"</p>
            {:else}
              <p>…then <em>click</em> any key to edit</p>
            {/if}
          {/if}
        </div>
      </Outline>
    {:else}
      <div class="remapping-off">Layout Imitation Off</div>
    {/if}
  </span>

  <span slot="above">
    {#if $lettersInLevel.length}
      <Toggle
        bind:on={$keyRemapping}
        disabled={$currentLayout === "custom"}
        tooltip={$currentLayout === "custom"
          ? "Layout Imitation cannot be turned off in Custom layout mode"
          : $keyRemapping}
      >
        Imitate Layout ⌃I
      </Toggle>

      <Toggle
        bind:on={$useColumnarLayout}
        tooltip={$useColumnarLayout
          ? "Click to arrange keys in 'standard' diaglonal layout"
          : "Click to arrange keys in split-hand grid layout"}
      >
        Keys in Columns ⌃K
      </Toggle>

      <Toggle
        action={toggleCustomLayout}
        on={$currentLayout === "custom"}
        disabled={$fullSentenceModeEnabled || $rotePracticeOn}
        tooltip={$fullSentenceModeEnabled
          ? "Turn off Full Sentence mode (⌃F) to enable Custom layout"
          : $rotePracticeOn
          ? "Turn off Rote Practice mode (⌃R) to enable Custom layout"
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
    @apply grid;
  }

  p {
    @apply text-xl text-center;
  }

  .remapping-off {
    @apply text-5xl text-red-300;
    display: flex;
    height: 20vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
  }
</style>
