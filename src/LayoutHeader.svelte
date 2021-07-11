<script>
  import Hoverable from "./Hoverable.svelte";
  import MenuItem from "./MenuItem.svelte";
  import ClickToClose from "./ClickToClose.svelte";
  import { currentLayout } from "./persistentStore";

  let showMenu = false;
  const handleClick = (e) => {
    showMenu = !showMenu;
  };

  const layouts = [
    { title: "colemak", shortcut: "1" },
    { title: "colemakdh", shortcut: "2" },
  ];
</script>

<Hoverable let:hovering>
  <section class:hovering on:click={handleClick}>
    <div class="anchor" class:show-menu={showMenu}>
      {$currentLayout}
      <span class:hovering>﹀</span>
    </div>
    {#if showMenu}
      <div class="menu">
        {#each layouts as layout}
          <MenuItem
            shortcut={`⇧⌃${layout.shortcut}`}
            callback={() => {
              console.log(layout.title);
            }}>{layout.title}</MenuItem
          >
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
    @apply cursor-pointer;
  }

  .hovering {
    @apply text-green-400 opacity-100;
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
