<script>
  import Hoverable from "./Hoverable.svelte";
  import ClickToClose from "./ClickToClose.svelte";
  import { gameState } from "./volatileStore";

  let showMenu = false;
  let hovering;
  let transitionDuration;

  const handleClick = (e) => {
    showMenu = !showMenu;
  };

  // Dismiss menu on game start
  $: if ($gameState === "on") showMenu = false;

  /* A Word About The "reset" Slot Prop */
  // The menu interferes with Hoverable's mouseleave detection.
  // If there's a more robust way to implement Hoverable, or a
  // more elegant overall design pattern I should be using, maybe
  // I'll come back to this. This seems pretty good…but also overkill
  // at the moment:
  //   https://imfeld.dev/writing/nested_popups
</script>

<Hoverable let:reset bind:hovering bind:transitionDuration>
  <button class:hovering on:click={handleClick}>
    <div class="anchor" class:show-menu={showMenu}>
      <slot {hovering} {transitionDuration} />

      <span class:hovering style={`transition: all ${transitionDuration}`}>
        <slot name="menu-indicator" {hovering} />
      </span>
    </div>
    {#if showMenu}
      <div class="menu">
        <slot name="menu" {reset} />
      </div>
    {/if}
  </button>
  <ClickToClose
    bind:falseToClose={showMenu}
    callback={() => reset()}
    transparent={true}
  />
</Hoverable>

<style lang="postcss">
  button {
    @apply relative;
  }
  span {
    @apply opacity-0 align-bottom;
  }
  .hovering {
    @apply cursor-pointer opacity-100;
  }
  .show-menu {
    @apply filter brightness-90;
  }
  .menu {
    @apply absolute z-50;
    @apply p-6 rounded-b-sm shadow-lg;
    @apply bg-coolGray-100;
    @apply top-16;
  }
</style>
