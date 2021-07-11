<script>
  import Hoverable from "./Hoverable.svelte";
  import MenuItem from "./MenuItem.svelte";
  import ClickToClose from "./ClickToClose.svelte";
  import {
    currentFixedLayout,
    currentLayout,
    useCustomLayout,
  } from "./persistentStore";
  import { gameState } from "./volatileStore";

  let showMenu = false;
  const handleClick = (e) => {
    showMenu = !showMenu;
  };

  // Dismiss menu on game start
  $: showMenu = $gameState !== "on" && showMenu;

  const layouts = [
    { id: "colemak", title: "Colemak", shortcut: "1" },
    { id: "colemakdh", title: "Colemak-DH", shortcut: "2" },
    { id: "azerty", title: "AZERTY", shortcut: "A" },
    { id: "dvorak", title: "Dvorak", shortcut: "D" },
    { id: "lefthandeddvorak", title: "Left-Handed Dvorak", shortcut: "L" },
    { id: "qwerty", title: "QWERTY", shortcut: "Q" },
    { id: "tarmak", title: "Tarmak", shortcut: "T" },
    { id: "workman", title: "Workman", shortcut: "W" },
    { id: "custom", title: "Custom", shortcut: "C" },
  ];

  $: title = layouts.filter((l) => l.id === $currentLayout)[0].title;

  // The menu interferes with Hoverable's mouseleave detection.
  // If there's a more robust way to implement Hoverable, or a
  // more elegant overall design pattern I should be using, maybe
  // I'll come back to this. Current candidate:
  //   https://imfeld.dev/writing/nested_popups
  let resetHoverHack;
</script>

<Hoverable let:hovering bind:reset={resetHoverHack}>
  <section class:hovering on:click={handleClick}>
    <div class="anchor" class:show-menu={showMenu}>
      {title.toLowerCase()}
      <span class:hovering>﹀</span>
    </div>
    {#if showMenu}
      <div class="menu">
        {#each layouts as layout}
          <MenuItem
            shortcut={`⇧⌃${layout.shortcut}`}
            callback={() => {
              if (layout.id === "custom") {
                $useCustomLayout = true;
              } else {
                $useCustomLayout = false;
                $currentFixedLayout = layout.id;
              }
              resetHoverHack();
            }}
            selected={layout.id === $currentLayout}
          >
            {layout.title}
          </MenuItem>
        {/each}
      </div>
    {/if}
  </section>
  <ClickToClose bind:falseToClose={showMenu} transparent={true} />
</Hoverable>

<style lang="postcss">
  section {
    @apply relative flex justify-center;
    @apply text-center;
    @apply text-6xl;
    @apply p-6;
    @apply text-gray-400;
  }

  .hovering {
    @apply text-green-400 opacity-100;
    @apply cursor-pointer;
  }

  .show-menu {
    @apply filter brightness-90;
  }

  span {
    @apply text-4xl font-black;
    @apply opacity-0 align-bottom;
  }

  .menu {
    @apply absolute z-50;
    @apply p-6 rounded-b-sm shadow-lg;
    @apply bg-gray-50;
    @apply text-3xl;
    top: 6rem;
  }
</style>
