<script>
  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
  import CustomInput from "./CustomInput.svelte";
  import Main from "./Main.svelte";
  import MappingToggle from "./MappingToggle.svelte";
  import Playground from "./Playground.svelte";
  import Tests from "./Tests.svelte";

  let test = false;
</script>

{#if test}
  <div>
    <Playground />
    <Tests />
  </div>
{:else}
  <TopNav />
  <LevelSelect />
  <CustomInput />
  <Main />
  <MappingToggle />
{/if}

<style>
  div {
    display: grid;
  }
</style>
