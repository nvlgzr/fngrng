<script>
  import { createEventDispatcher } from "svelte";

  /**
   * @event {string} stroke
   * @event {string} combo
   * @event {string} heldKeys
   */

  export let hasShift = false;
  export let hasControl = false;
  export let hasAlt = false;
  export let hasMeta = false;

  let heldKeys = new Set();
  let modifiers = new Set();
  let strokes = [];
  let combos = [];
  let pausedForMeta = false; // See note below re: Meta

  $: hasShift = modifiers.has("Shift");
  $: hasControl = modifiers.has("Control");
  $: hasAlt = modifiers.has("Alt");
  $: hasMeta = modifiers.has("Meta");

  $: shiftOnly = hasShift && modifiers.size === 1;
  $: altOnly = hasAlt && modifiers.size === 1;

  const dispatch = createEventDispatcher();
  const validMods = ["Shift", "Control", "Alt"];
  // ↑ "Meta" not supported because of OS issues (see links ↓).
  //   Basically, Keystroke leaves all ⌘ shortcuts to the browser.
  //   https://stackoverflow.com/a/27512489/230615
  //   https://codepen.io/alexduloz/pen/nteqG

  /*
   * 2+ held keys triggers heldKeys.
   *
   * Single character entry triggers a single stroke.
   * Single characters often come through modified by Shift or Alt.
   *
   * Such cases also get reported as combos. Combos represent any
   * keypress accompanied by still-held modifiers.
   */
  const maybeDispatch = (key) => {
    if (key.length !== 1 || pausedForMeta) return;

    if (heldKeys.size > 1) {
      dispatch("heldKeys", heldKeys);
    }

    if (shiftOnly || altOnly || !modifiers.size) {
      strokes.push(key);
      dispatch("stroke", key);
    }

    if (modifiers.size) {
      const matchValidModOrder = (l, r) =>
        validMods.indexOf(l) > validMods.indexOf(r);
      dispatch(
        "combo",
        Array.from(modifiers).sort(matchValidModOrder).join("+") + "+" + key
      );
    }
  };

  const keydown = (e) => {
    const key = e.key;
    console.log("👇", e);

    if (key === "Meta") {
      pausedForMeta = true;
    }

    if (pausedForMeta) {
      heldKeys.clear();
    } else {
      heldKeys.add(key);
    }

    if (validMods.includes(key)) {
      modifiers.add(key);
      modifiers = modifiers; // updates hasShift, et al
    }

    // Ignore "Backspace", "Delete", "F1", "F2", et al
    maybeDispatch(key);
  };

  const keyup = (e) => {
    const key = e.key;
    console.log("💥", e);

    if (key === "Meta") {
      pausedForMeta = false;
    }

    heldKeys.delete(key);
    modifiers.delete(key);

    heldKeys = heldKeys;
    modifiers = modifiers;
  };
</script>

<svelte:body on:keydown={keydown} on:keyup={keyup} />
