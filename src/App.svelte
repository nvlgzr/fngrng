<script>
  import { onMount } from "svelte";

  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
  import CustomInput from "./CustomInput.svelte";
  import Main from "./Main.svelte";
  import MappingToggle from "./MappingToggle.svelte";
  import j from "./app.js";

  onMount(async () => {
    j();
  });
</script>

<TopNav />
<LevelSelect />
<CustomInput />
<Main />
<MappingToggle />
