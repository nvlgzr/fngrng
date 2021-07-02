<script>
  import Input from "./Input.svelte";
  import Prompt from "./Prompt.svelte";
  import { gameState } from "./volatileStore";

  $: redden =
    $gameState !== "on" || model.challengeView.overallVerdict === "error";
</script>

<Prompt />
<Input {redden}>start typing to play</Input>
