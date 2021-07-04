<script>
  import GameEngine from "./GameEngine.svelte";
  import Display from "./Display.svelte";
  import Input from "./Input.svelte";

  let model;
  let redden = false;
  let text = "";

  $: if (model) {
    redden =
      model.gameState !== "on" ||
      model.challengeView.overallVerdict === "error";

    text =
      model.gameState === "ready"
        ? "start typing to play"
        : model.gameState === "over"
        ? "press enter to reset"
        : model.userText;
  }
</script>

<GameEngine bind:model />

<Display {model} />
<Input {redden} {text} />
