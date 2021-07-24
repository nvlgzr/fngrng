<script>
  import Display from "./Display.svelte";
  import Input from "./Input.svelte";
  import { lettersInLevel } from "./volatileStore";

  export let model;
  let redden = false;
  let text = "";

  $: if (model) {
    redden =
      model.gameState !== "on" ||
      model.challengeView.overallVerdict === "error";

    text =
      model.gameState === "ready" && $lettersInLevel !== ""
        ? "start typing to play"
        : model.gameState === "over"
        ? "press enter to reset"
        : model.userText;
  }
</script>

<div class={$lettersInLevel.length ? "opacity-100" : "opacity-0"}>
  <Display {model} />
  <Input {redden} {text} />
</div>
