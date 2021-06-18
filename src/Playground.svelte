<script>
  import {
    initForScrolling,
    addSymbol,
    backspace,
  } from "./modelTransformations.js";
  import phrase from "./gettysburg.js";

  let model = initForScrolling(phrase);

  model = addSymbol(model, "F");
  model = addSymbol(model, "o");
  model = addSymbol(model, "i");
  model = backspace(model);
  model = addSymbol(model, "u");
  model = addSymbol(model, "r");
  model = addSymbol(model, " ");
  model = backspace(model);
  model = backspace(model);
  model = backspace(model);
  model = addSymbol(model, "d");
  model = addSymbol(model, "c");
  model = addSymbol(model, "o");
  model = backspace(model);
</script>

<div>
  {JSON.stringify(model.challengeView)}
  <hr />
  <div>[{model.userText}]</div>
  <hr />
  {model.challenge}
  {model.restOfLine.slice(0, 5).join(" ")}
</div>

<style>
  div {
    color: white;
    max-width: 80vw;
  }
</style>
