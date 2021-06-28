<script>
  import { addSymbol, initModel } from "./modelTransformations.js";
  import phrase from "./gettysburg.js";
  import LineByLinePrompt from "./LineByLinePrompt.svelte";

  let model = initModel(phrase, 15, false);

  for (let char of "Four score and seven years ago our") {
    model = addSymbol(model, char);
  }
</script>

<LineByLinePrompt {model} />
