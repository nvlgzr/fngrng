<script>
  import Input from "./Input.svelte";
  import Prompt from "./Prompt.svelte";

  export let model;

  $: redden =
    model.gameState !== "on" || model.challengeView.overallVerdict === "error";

  $: text =
    model.gameState === "ready" ? "start typing to play" : model.userText;
</script>

<Prompt />
<Input {redden} {text} />
