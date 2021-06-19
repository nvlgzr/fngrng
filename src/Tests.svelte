<script>
  import { onMount } from "svelte";
  import {
    addSymbol,
    backspace,
    handleReturn,
    initForScrolling,
  } from "./modelTransformations.js";

  const results = [];
  let scrollTarget; // Binds to first failed test which will get auto-scrolled!

  test("When I initialize the model with 'Just three words.'", () => {
    const i = initForScrolling("Just three words.");
    return [
      ["the first is 'Just'", i.challenge === "Just"],
      ["the challengeView starts with 'J'", i.challengeView[0].char === "J"],
      [
        "the remaining words are arrayed in 'restOfLine'",
        JSON.stringify(i.restOfLine) === JSON.stringify(["three", "words."]),
      ],
    ];
  });

  test("When the user types a correct character", () => {
    let m = initForScrolling("word");
    m = addSymbol(m, "w");
    return [
      [
        "the 'overallVerdict' is 'no errors'",
        m.challengeView.overallVerdict === "no errors",
      ],
      [
        "the first character is green",
        m.challengeView.charSpecs[0].color === "green",
      ],
    ];
  });

  test("When the user types an incorrect character", () => {
    let m = initForScrolling("Four score and seven years");
    m = addSymbol(m, "F");
    m = addSymbol(m, "o");
    m = addSymbol(m, "i");
    return [
      [
        "the incorrect character is red",
        m.challengeView.charSpecs[2].color === "red",
      ],
      ["the userText reflects the incorrect character", m.userText === "Foi"],
    ];
  });

  test("The user can correct mistakes with 'backspace'", () => {
    let m = initForScrolling("Oops!");
    m = addSymbol(m, "O");
    m = addSymbol(m, "o");
    m = addSymbol(m, "o");
    const recap = [
      [
        "Before backspacing, the correct character is green",
        m.challengeView.charSpecs[1].color === "green",
      ],
      [
        "and the incorrect character is red",
        m.challengeView.charSpecs[2].color === "red",
      ],
    ];
    m = backspace(m);
    m = backspace(m);
    const tests = [
      [
        "After backspacing, the userText has been shortened",
        m.userText === "O",
      ],
      [
        "and both 'backspaced' characters are gray",
        m.challengeView.charSpecs[1].color === "gray" &&
          m.challengeView.charSpecs[2].color === "gray",
      ],
    ];
    return [...recap, ...tests];
  });

  test("When the user types a space", () => {
    let m = initForScrolling("1 2 3");
    m = addSymbol(m, " ");
    const before = [
      [
        "it's treated like a normal character by default",
        m.userText === " " &&
          m.challengeView.charSpecs[0].color === "red" &&
          JSON.stringify(m.hidden) === JSON.stringify([]),
      ],
    ];
    m = backspace(m);
    m = addSymbol(m, "1");
    m = addSymbol(m, " ");
    const after = [
      [
        "but if the whole word has been matched, the userText resets",
        m.userText === "",
      ],
      [
        "the matched word gets moved to the 'hidden' array",
        JSON.stringify(m.hidden) === JSON.stringify(["1"]),
      ],
      [
        "the next word moves to 'challenge",
        m.challenge === "2" && m.challengeView.charSpecs[0].char === "2",
      ],
      [
        "and the 'restOfLine' array gets shorter by one",
        JSON.stringify(m.restOfLine) === JSON.stringify(["3"]),
      ],
    ];
    return [...before, ...after];
  });

  test("The initial model starts with gameState: 'ready'", () => {
    let m = initForScrolling("foo");
    return m.gameState === "ready";
  });

  test("When the user starts typing", () => {
    let m = initForScrolling("foo");
    m = addSymbol(m, "f");
    const gameStart = ["the gameState turns 'on'", m.gameState === "on"];
    m = addSymbol(m, "o");
    const gameContinue = ["and stays 'on'", m.gameState === "on"];
    return [gameStart, gameContinue];
  });

  test("If we run out of words to match", () => {
    const phrase = "very short game";
    let m = initForScrolling(phrase);
    for (const char of phrase) {
      m = addSymbol(m, char);
    }
    m = addSymbol(m, " "); // Submits the last match
    return [
      ["the game's over", m.gameState === "over"],
      ["the userText is empty", m.userText === ""],
      ["the challengeView is blank", m.challengeView.charSpecs.length === 0],
      [
        "and all the matched words are in 'hidden'",
        JSON.stringify(m.hidden) === JSON.stringify(["very", "short", "game"]),
      ],
    ];
  });

  test("Pressing 'return/enter'", () => {
    const phraseFunction = () => "even shorter";
    let m = initForScrolling(phraseFunction);
    const n = handleReturn(m);
    const ready = [
      "at game-ready is a no-op",
      JSON.stringify(m) === JSON.stringify(n),
    ];
    for (const char of phraseFunction()) {
      m = addSymbol(m, char);
    }
    const o = handleReturn(m);
    const on = [
      "and is also a no-op during game-on",
      JSON.stringify(m) === JSON.stringify(o),
    ];
    m = addSymbol(m, " "); // Submits the last match
    m = handleReturn(m);
    const over = [
      "but, if it's game-over, 'return/enter' resets the game",
      JSON.stringify(m) === JSON.stringify(initForScrolling(phraseFunction)),
    ];
    return [ready, on, over];
  });

  test("The game tracks 'totalKeyPresses'", () => {
    let m = initForScrolling("123");
    const initial = ["which starts at 0", m.totalKeyPresses === 0];
    m = addSymbol(m, " ");
    const symbol = ["is incremented by spaces", m.totalKeyPresses === 1];
    // *I decided to count backspaces in order to emphasize accuracy
    //  over speed.
    m = backspace(m);
    const bckspc1 = ["as well as backspaces", m.totalKeyPresses === 2];
    m = backspace(m);
    const bckspc2 = [
      "unless there's nothing left to delete",
      m.totalKeyPresses === 2,
    ];
    m = addSymbol(m, "1");
    m = addSymbol(m, "2");
    m = addSymbol(m, "3");
    const symbols = [
      "and by every regular symbol typed",
      m.totalKeyPresses === 5,
    ];
    m = addSymbol(m, " ");
    const gameover = [
      "except for the game-ending space",
      m.totalKeyPresses === 5,
    ];
    m = handleReturn(m);
    const reset = [
      "and, finally, resets when the game resets",
      m.totalKeyPresses === 0,
    ];
    return [initial, symbol, bckspc1, bckspc2, symbols, gameover, reset];
  });

  //↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Your Tests Here ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
  function test(description, t) {
    const result = t();
    if (typeof result === "boolean") {
      results.push(`${result ? "✅" : "❌"} ${description}`);
    } else {
      results.push(`📦 ${description}…`);
      for (let asrtn of result) {
        results.push(
          `&nbsp;&nbsp;&nbsp;${asrtn[1] ? "✅" : "❌"} …${asrtn[0]}`
        );
        if (!asrtn[1] && asrtn.length === 3)
          results.push(`&nbsp;&nbsp;&nbsp;--> ${JSON.stringify(asrtn[2])}`);
      }
    }
  }

  $: markedTests = results.reduce(
    (acc, curr, i) => {
      let scrollHere = acc.scrollToSet ? false : curr.includes("❌");
      const scrollToSet = acc.scrollToSet ? true : scrollHere;

      // Scroll to the bottom if there are no errors
      if (i === results.length - 1 && !scrollToSet) scrollHere = true;

      return {
        scrollToSet: scrollToSet,
        tests: [...acc.tests, { scrollHere: scrollHere, test: curr }],
      };
    },
    { scrollToSet: false, tests: [] }
  );

  onMount(() => {
    if (scrollTarget) {
      scrollTarget.scrollIntoView();
    } else {
    }
  });
</script>

<div>
  {#each markedTests.tests as testObj}
    {#if testObj.scrollHere}
      <span bind:this={scrollTarget}>{@html testObj.test}</span>
    {:else}
      <span>{@html testObj.test}</span>
    {/if}
    <br />
  {/each}
  <hr />
</div>

<style>
  div {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-height: 30vh;
    color: black;
    background-color: floralwhite;
    padding: 1rem;
    overflow-y: scroll;
  }
</style>
