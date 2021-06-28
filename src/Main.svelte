<script>
  import { currentLayout } from "./persistentStore.js";
  import VisualKeyboard from "./VisualKeyboard.svelte";
  import GameZone from "./GameZone.svelte";
  import BottomText from "./BottomText.svelte";
</script>

<section>
  <h1>{$currentLayout} fngrng</h1>

  <GameZone />
  <VisualKeyboard />
  <BottomText />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90%;
    margin-right: 10vmax;
    margin-bottom: 3vh;
    flex: 2 1 1000px;
  }

  h1 {
    font-size: 3.5vmax;
    text-transform: uppercase;
    letter-spacing: 1vw;
  }
</style>
