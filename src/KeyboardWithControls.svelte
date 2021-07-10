<script>
  import HoverableControls from "./HoverableControls.svelte";
  import Keyboard from "./Keyboard.svelte";
  import Toggle from "./Toggle.svelte";
  import {
    currentLayout,
    keyRemapping,
    useColumnarLayout,
    useCustomLayout,
  } from "./persistentStore";
  import { lettersInLevel } from "./volatileStore";

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

<HoverableControls {color} {hoverColor} outline="color-and-hover">
  <span slot="anchor">
    <Keyboard />
    {#if custom && playable}
      <p class="playable">
        click + type to remap a key | click + backspace to delete | esc to
        cancel
      </p>
    {:else if custom}
      <p>…then click any key to edit</p>
    {/if}
  </span>

  <span slot="above">
    <Toggle bind:on={$keyRemapping}>Keyboard Remapping ⌃K</Toggle>

    <Toggle bind:on={$useColumnarLayout}>Ortholiniear Layout ⌃O</Toggle>

    <Toggle action={toggleCustomLayout} on={$currentLayout === "custom"}>
      Custom Layout ⇧⌃C
    </Toggle>
  </span>
</HoverableControls>
