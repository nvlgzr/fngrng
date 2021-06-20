<script>
  import { onMount } from "svelte";
  import {
    initForScrolling,
    addSymbol,
    backspace,
    reset,
    gameover,
  } from "./modelTransformations.js";
  import { cutOrFill } from "./pureFunctions.js";

  const results = [];
  let scrollTarget; // Binds to first failed test which will get auto-scrolled!

  test("The cutOrFill function", () => {
    const thirteenWords =
      "Give your hungry tongue the sweet crunch of a dozen stunned honey bees.";
    const cut = cutOrFill(thirteenWords, 4);
    const filled = cutOrFill(thirteenWords, 20);
    return [
      [
        "shortens a phrase to the target length",
        cut === "Give your hungry tongue",
        cut,
      ],
      [
        "or repeats it to reach the target length",
        filled ===
          "Give your hungry tongue the sweet crunch of a dozen stunned honey bees. Give your hungry tongue the sweet crunch",
        filled,
      ],
    ];
  });

  // ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ pureFunctions ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
  // ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ modelTransformations ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓

  group("Line-by-Line Mode", () => {
    test("When I initialize the model with 'Just three words.'", () => {
      const i = initForScrolling(false, "Just three words.");
      return [
        ["the first is 'Just'", i.challenge === "Just"],
        [
          "the challengeView starts with 'J'",
          i.challengeView.charSpecs[0]?.char === "J",
        ],
        [
          "the remaining words are arrayed in 'restOfLine'",
          JSON.stringify(i.restOfLine) === JSON.stringify(["three", "words."]),
        ],
        ["the locked array is empty", i.locked.length === 0],
        [
          "and there are no remaining lines (because lines have max 35?) characters",
          i.remainingLines.length === 0,
        ],
      ];
    });
  });

  group("Scrolling Mode", () => {
    test("When I initialize the model with 'Just three words.'", () => {
      const i = initForScrolling(true, "Just three words.");
      return [
        ["the first is 'Just'", i.challenge === "Just"],
        [
          "the challengeView starts with 'J'",
          i.challengeView.charSpecs[0].char === "J",
        ],
        [
          "the remaining words are arrayed in 'restOfLine'",
          JSON.stringify(i.restOfLine) === JSON.stringify(["three", "words."]),
        ],
      ];
    });
  });

  test("When the user types a correct character", () => {
    let m = initForScrolling(true, "word");
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
    let m = initForScrolling(true, "Four score and seven years");
    m = addSymbol(m, "F");
    m = addSymbol(m, "o");
    m = addSymbol(m, "i");
    return [
      [
        "the incorrect character is red",
        m.challengeView.charSpecs[2].color === "red",
      ],
      ["the userText reflects the incorrect character", m.userText === "Foi"],
      [
        "and the overallVerdict is 'error'",
        m.challengeView.overallVerdict === "error",
      ],
    ];
  });

  test("The user can correct mistakes with 'backspace'", () => {
    let m = initForScrolling(true, "Oops!");
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
    let m = initForScrolling(true, "1 2 3");
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
    let m = initForScrolling(true, "foo");
    return m.gameState === "ready";
  });

  test("When the user starts typing", () => {
    let m = initForScrolling(true, "foo");
    m = addSymbol(m, "f");
    const gameStart = ["the gameState turns 'on'", m.gameState === "on"];
    m = addSymbol(m, "o");
    const gameContinue = ["and stays 'on'", m.gameState === "on"];
    m = addSymbol(m, "o");
    m = addSymbol(m, " ");
    m = addSymbol(m, "a");
    const gameOver = [
      "when the game is over, then symbol entry's a no-op",
      m.gameState === "over",
    ];
    return [gameStart, gameContinue, gameOver];
  });

  test("If we run out of words to match", () => {
    const phrase = "very short game";
    let m = initForScrolling(true, phrase);
    for (const char of phrase) {
      m = addSymbol(m, char);
    }
    m = addSymbol(m, " "); // Submits the last match
    return [
      ["the game's over", m.gameState === "over"],
      ["the userText is empty", m.userText === ""],
      [
        "and all the matched words are in 'hidden'",
        JSON.stringify(m.hidden) === JSON.stringify(["very", "short", "game"]),
      ],
    ];
  });

  test("Pressing 'return/enter'", () => {
    const phraseFunction = () => "even shorter";
    let m = initForScrolling(true, phraseFunction);
    const n = reset(m);
    const ready = [
      "at game-ready is a no-op",
      JSON.stringify(m) === JSON.stringify(n),
    ];
    for (const char of phraseFunction()) {
      m = addSymbol(m, char);
    }
    const o = reset(m);
    const on = [
      "and is also a no-op during game-on",
      JSON.stringify(m) === JSON.stringify(o),
    ];
    m = addSymbol(m, " "); // Submits the last match
    m = reset(m);
    const over = [
      "but, if it's game-over, 'return/enter' resets the game",
      JSON.stringify(m) ===
        JSON.stringify(initForScrolling(true, phraseFunction)),
    ];
    return [ready, on, over];
  });

  test("The game tracks 'totalKeyPresses'", () => {
    let m = initForScrolling(true, "123 4");
    const init = ["which starts at 0", m.totalKeyPresses === 0];
    m = addSymbol(m, " ");
    const sym = ["is incremented by spaces", m.totalKeyPresses === 1];
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
    const syms = [
      "and by every regular symbol typed.",
      m.totalKeyPresses === 5,
    ];
    m = addSymbol(m, " ");
    const matching = [
      "Spaces that trigger a word match count toward the total",
      m.totalKeyPresses === 6,
    ];
    m = addSymbol(m, "4");
    m = addSymbol(m, " ");
    const gameover = [
      "except for the game-ending space.",
      m.totalKeyPresses === 7,
    ];
    m = reset(m);
    const resetted = [
      "Finally, 'totalKeyPresses' resets when the game resets",
      m.totalKeyPresses === 0,
    ];
    return [init, sym, bckspc1, bckspc2, syms, matching, gameover, resetted];
  });

  test("When the game is ended midstream (by, say, hitting the time limit)", () => {
    let m = initForScrolling(true, "finish on the letter s");
    m = addSymbol(m, "f");
    m = addSymbol(m, "i");
    m = addSymbol(m, "n");
    m = addSymbol(m, "i");
    m = addSymbol(m, "s");
    m = gameover(m);
    return [
      [
        "the userText gets cleared without counting the word",
        m.userText === "" && m.hidden.length === 0,
      ],
      ["and, of course, gameState goes to 'over'", m.gameState === "over"],
    ];
  });

  test("When the game is ended midstream at the end of a fully-matched word", () => {
    let m = initForScrolling(true, "done on first e");
    m = addSymbol(m, "d");
    m = addSymbol(m, "o");
    m = addSymbol(m, "n");
    m = addSymbol(m, "e");
    m = gameover(m);
    return [
      ["the userText gets cleared", m.userText === ""],
      ["gameState goes to 'over'", m.gameState === "over"],
      [
        "and the word gets moved to hidden (so it counts toward the score)",
        JSON.stringify(m.hidden) === JSON.stringify(["done"]),
      ],
    ];
  });

  //↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Your Tests Here ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑

  function x() {
    test("", () => false);
  }

  function group(description, g) {
    results.push("");
    results.push(`🔻 🔻 ${description} 🔻 🔻`);
    g();
    results.push(`🔺 🔺 ${description} 🔺 🔺`);
    results.push("");
  }

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
