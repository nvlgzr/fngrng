<script>
  import HoverableMenu from "./HoverableMenu.svelte";
  import MenuItem from "./MenuItem.svelte";
  import {
    currentFixedLayout,
    currentLayout,
    useCustomLayout,
  } from "./persistentStore";

  const layouts = [
    { id: "colemakdh", title: "Colemak-DH", shortcut: "1" },
    { id: "colemak", title: "Colemak", shortcut: "2" },
    { id: "azerty", title: "AZERTY", shortcut: "A" },
    { id: "dvorak", title: "Dvorak", shortcut: "D" },
    { id: "lefthandeddvorak", title: "Left-Handed Dvorak", shortcut: "L" },
    { id: "qwerty", title: "QWERTY", shortcut: "Q" },
    { id: "tarmak", title: "Tarmak", shortcut: "T" },
    { id: "workman", title: "Workman", shortcut: "W" },
    { id: "custom", title: "Custom", shortcut: "C" },
  ];

  $: title = layouts.filter((l) => l.id === $currentLayout)[0].title;
</script>

<div>
  <HoverableMenu let:hovering let:transitionDuration>
    <span
      class="title"
      class:hovering
      style={`transition: all ${transitionDuration}`}
      title={"Click to choose a keyboard layout"}
    >
      {title.toLowerCase()}
    </span>

    <span slot="menu-indicator">
      <span
        class="chevron"
        class:hovering
        style={`transition: all ${transitionDuration}`}>﹀</span
      >
    </span>

    <span slot="menu" let:reset>
      {#each layouts as layout}
        <span class="menu-item">
          <MenuItem
            shortcut={`⇧⌃${layout.shortcut}`}
            callback={() => {
              if (layout.id === "custom") {
                $useCustomLayout = true;
              } else {
                $useCustomLayout = false;
                $currentFixedLayout = layout.id;
              }
              reset();
            }}
            selected={layout.id === $currentLayout}
          >
            {layout.title}
          </MenuItem>
        </span>
      {/each}
    </span>
  </HoverableMenu>
</div>

<style lang="postcss">
  div {
    @apply mx-auto;
    @apply text-center;
    @apply pt-6 pb-6;

    /* Prevent "left-handed dvorak" from wrapping ↓ */
    width: 37rem;
  }

  .title,
  .chevron {
    @apply text-6xl;
    @apply text-coolGray-400;
  }

  .chevron {
    @apply text-4xl font-black;
  }

  .hovering,
  .menu-item {
    @apply text-green-400;
  }

  .menu-item {
    @apply text-3xl;
  }
</style>
