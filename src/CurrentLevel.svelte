<script>
  import HoverableMenu from "./HoverableMenu.svelte";
  import MenuItem from "./MenuItem.svelte";

  import {
    currentLayout,
    currentLevel,
    fullSentenceModeEnabled,
    letterSetsForCurrentLayout,
  } from "./persistentStore";
  import { lettersInLevel } from "./volatileStore";

  $: levelLetters =
    $currentLevel === 7 && $currentLayout !== "custom"
      ? "all letters"
      : $letterSetsForCurrentLayout[$currentLevel - 1];

  $: allLevels = $letterSetsForCurrentLayout.map((el, idx) => {
    if (idx === 6 && $currentLayout !== "custom") {
      return { level: 7, letters: "all letters" };
    } else {
      return { level: idx + 1, letters: el };
    }
  });

  let unplayableColor = "text-red-400";
  let customLayoutColor = "text-blue-400";
  let standardHoverColor = "text-yellow-400";

  $: custom = $currentLayout === "custom";
  $: playable = $lettersInLevel.length > 0;

  $: color = !playable
    ? unplayableColor
    : custom
    ? customLayoutColor
    : "inherit";
  $: hoverColor = !playable
    ? unplayableColor
    : custom
    ? customLayoutColor
    : standardHoverColor;
</script>

<div>
  <HoverableMenu let:hovering let:transitionDuration>
    <span
      class={`title ${hovering ? hoverColor : color}`}
      style={`transition: all ${transitionDuration}`}
      title={"Click to choose a level" +
        ($fullSentenceModeEnabled
          ? ". This will exit Full Sentences mode."
          : "")}
    >
      {#if $fullSentenceModeEnabled}
        Full Sentences
      {:else}
        level {$currentLevel}
        <span class="text-white">{levelLetters}</span>
        <!-- There are corner cases where the toggles below -->
        <!-- don't quite make perfect sense, but under "normal"-->
        <!-- conditions I think this should work perfectly -->
        <!-- (at least for now). -->
        {#if $currentLayout === "custom" && levelLetters === ""}
          {#if $currentLevel === 1}
            <span class="text-red-400 text-2xl">⇐ select a level to edit…</span>
          {:else}
            <span class="text-red-400 text-2xl">empty level</span>
          {/if}
        {/if}
      {/if}
    </span>

    <span slot="menu-indicator">
      <span
        class="chevron"
        class:hovering
        style={`transition: all ${transitionDuration}`}
      >
        ﹀
      </span>
    </span>

    <span slot="menu" let:reset>
      {#each allLevels as level}
        <span class={`menu-item ${hoverColor}`}>
          <MenuItem
            shortcut={`⌃${level.level}`}
            callback={() => {
              $currentLevel = level.level;
              $fullSentenceModeEnabled = false;
              reset();
            }}
            selected={level.level === $currentLevel}
          >
            {level.level}
            {level.letters}
          </MenuItem>
        </span>
      {/each}
    </span>
  </HoverableMenu>
</div>

<style lang="postcss">
  div {
    /* Min. needed to prevent "all letters" menu from wrapping ↓ */
    min-width: 19rem;
  }

  .chevron {
    @apply text-3xl font-black;
  }

  .menu-item {
    @apply text-3xl;
  }
</style>
