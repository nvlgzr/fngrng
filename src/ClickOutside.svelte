<script>
  // Can delete in favor of svelte-click-outside once my pull request
  // gets accepted:
  //
  // https://github.com/joeattardi/svelte-click-outside/pull/4

  import { createEventDispatcher } from "svelte";

  export let exclude = [];

  let child;

  const dispatch = createEventDispatcher();

  function isExcluded(target) {
    var parent = target;

    while (parent) {
      if (exclude.indexOf(parent) >= 0 || parent === child) {
        return true;
      }

      parent = parent.parentNode;
    }

    return false;
  }

  function onClickOutside(event) {
    if (!isExcluded(event.target)) {
      dispatch("clickoutside");
    }
  }
</script>

<svelte:body on:click={onClickOutside} />
<div bind:this={child}>
  <slot />
</div>

<style>
  div {
    display: contents;
  }
</style>
