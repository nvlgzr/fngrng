<script>
  import { prefsOpen } from "./persistentStore";
</script>

{#if $prefsOpen}
  <div>&nbsp;</div>
{/if}

<style>
  div {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: hsl(0deg 0% 0% / 50%);
    z-index: 1;
  }
</style>
