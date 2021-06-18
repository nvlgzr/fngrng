<script>
  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
  import CustomInput from "./CustomInput.svelte";
  import Main from "./Main.svelte";
  import MappingToggle from "./MappingToggle.svelte";
  import Playground from "./Playground.svelte";

  let test = true;
</script>

{#if test}
  <Playground />
{/if}

<TopNav />
<LevelSelect />
<CustomInput />
<Main />
<MappingToggle />
