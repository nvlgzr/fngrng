<script>
  import { currentLayout } from "./persistentStore.js";
  import CheatSheet from "./CheatSheet.svelte";
  import GameZone from "./GameZone.svelte";
  import BottomText from "./BottomText.svelte";
</script>

<section>
  <h1>{$currentLayout} Club</h1>

  <GameZone />
  <CheatSheet />
  <BottomText />
</section>

<style>
  section {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 90%;
    margin-right: 10vmax;
    margin-bottom: 3vh;
    -webkit-box-flex: 2;
    -ms-flex: 2 1 1000px;
    flex: 2 1 1000px;
  }
</style>
