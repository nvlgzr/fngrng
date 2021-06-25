<script>
  import { addSymbol, initModel } from "./modelTransformations.js";
  import phrase from "./gettysburg.js";
  import LineByLinePrompt from "./LineByLinePrompt.svelte";
  import { onMount } from "svelte";
  import { getNotificationsContext } from "svelte-notifications";

  let model = initModel(phrase, 15, false);

  for (let char of "Four score and seven years ago our") {
    model = addSymbol(model, char);
  }
  model = addSymbol(model, " ");
  model = addSymbol(model, "f");

  const { addNotification } = getNotificationsContext();

  setTimeout(() => {
    addNotification({
      text: "Capital Letters Allowed ✅",
      position: "top-left",
      removeAfter: 2500,
    });
  }, 2000);
</script>

<button
  on:click={() =>
    addNotification({
      text: "Cupital Letters Allowed ✅",
      position: "top-center",
      removeAfter: 2500,
    })}
>
  Add notification
</button>

<LineByLinePrompt {model} />
