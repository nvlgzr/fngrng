<script>
  import TopNav from "./TopNav.svelte";
  import LevelSelect from "./LevelSelect.svelte";
  import CustomInput from "./CustomInput.svelte";
  import Main from "./Main.svelte";
  import MappingToggle from "./MappingToggle.svelte";
  import { gameState, emptyBaseModel, baseModel } from "./volatileStore.js";

  $: if ($gameState === "ready") {
    // Temporary word list generator…keeps things simple for now.
    const phrase = ["the", "shit", "hits", "the", "fan"];
    const list = JSON.parse(JSON.stringify(Array(5).fill(phrase).flat(1)));
    const [first, ...rest] = list;

    $baseModel = {
      ...emptyBaseModel,
      challenge: first,
      restOfLine: rest,
    };
  }
</script>

<TopNav />
<LevelSelect />
<CustomInput />
<Main />
<MappingToggle />
