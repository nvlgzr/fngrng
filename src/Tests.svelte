<script>
  import { onMount } from "svelte";
  import {
    initForScrolling,
    initForLineByLine,
    addSymbol,
    backspace,
    reset,
    gameover,
  } from "./modelTransformations.js";
  import { cutOrFill, lineify } from "./pureFunctions.js";
  import gettysburg from "./gettysburg.js";

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
      ],
      [
        "or repeats it to reach the target length",
        filled ===
          "Give your hungry tongue the sweet crunch of a dozen stunned honey bees. Give your hungry tongue the sweet crunch",
      ],
    ];
  });

  test("The 'lineify' function", () => {
    const noParams = lineify(gettysburg);
    const longestLine = noParams.reduce(
      (longest, curr) => Math.max(longest, curr.length),
      0
    );
    const wordCount = noParams.reduce((wordCount, line) => {
      return (wordCount += line.split(" ").length);
    }, 0);

    const deefault = [
      [
        "limits line length to a default max of 35 characters",
        longestLine <= 35,
      ],
      ["and limits results to 70 words by default", wordCount === 70],
      [
        "using (duh) the phrase provided.",
        noParams[0] === "Four score and seven years ago our",
      ],
    ];

    return [...deefault];
  });

  // ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ pureFunctions ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑
  // ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ modelTransformations ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓

  group("Scrolling Mode", () => {
    test("When I initialize the model with 'Just three words.'", () => {
      const i = initForScrolling("Just three words.");
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
        [
          "and the overallVerdict is 'error'",
          m.challengeView.overallVerdict === "error",
        ],
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
      let m = initForScrolling(phrase);
      for (const char of phrase) {
        m = addSymbol(m, char);
      }
      m = addSymbol(m, " "); // Submits the last match
      return [
        ["the game's over", m.gameState === "over"],
        ["the userText is empty", m.userText === ""],
        [
          "and all the matched words are in 'hidden'",
          JSON.stringify(m.hidden) ===
            JSON.stringify(["very", "short", "game"]),
        ],
      ];
    });

    test("Pressing 'return/enter'", () => {
      const phraseFunction = () => "even shorter";
      let m = initForScrolling(phraseFunction);
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
        JSON.stringify(m) === JSON.stringify(initForScrolling(phraseFunction)),
      ];
      return [ready, on, over];
    });

    test("The game tracks 'totalKeyPresses'", () => {
      let m = initForScrolling("123 4");
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
      let m = initForScrolling("finish on the letter s");
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
      let m = initForScrolling("done on first e");
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
  });

  group("Line-by-Line Mode", () => {
    test("When I initialize the model with 'Just three words.'", () => {
      const i = initForLineByLine(["Just three words."]);
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

    // test("When I initialize the model with a long passage", () => {
    //   const long = initForLineByLine(gettysburg);
    //   return [["", false]];
    // });

    test("When the user types a correct character", () => {
      let m = initForLineByLine(["just one line to start"]);
      m = addSymbol(m, "j");
      const justLikeScrollingModeSoFar = [
        [
          "the 'overallVerdict' is 'no errors'",
          m.challengeView.overallVerdict === "no errors",
        ],
        [
          "the first character is green",
          m.challengeView.charSpecs[0].color === "green",
        ],
      ];
      return justLikeScrollingModeSoFar;
    });

    test("When the user types an incorrect character", () => {
      let m = initForLineByLine(["Four score and seven years"]);
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
      let m = initForLineByLine(["Oops!"]);
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
      let m = initForLineByLine(["1 2 3"]);
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
          "but if the whole word has been matched, the userText resets,",
          m.userText === "",
        ],
        [
          "the matched word gets moved to the 'locked' array,",
          JSON.stringify(m.locked) === JSON.stringify(["1"]),
        ],
        [
          "the next word moves to 'challenge,",
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
      let m = initForLineByLine(["foo"]);
      return m.gameState === "ready";
    });

    test("When the user starts typing", () => {
      let m = initForLineByLine(["foo"]);
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

    test("When the user matches a word", () => {
      let m = initForLineByLine(["a b c"]);
      m = addSymbol(m, "a");
      m = addSymbol(m, " ");
      const firstMatch = [
        "the matched word moves from 'challenge' to 'locked'",
        JSON.stringify(m.locked) === JSON.stringify(["a"]) &&
          m.challenge === "b",
      ];
      m = addSymbol(m, "b");
      m = addSymbol(m, " ");
      const secondMatch = [
        "which is true, also, for the next matched word",
        JSON.stringify(m.locked) === JSON.stringify(["a", "b"]) &&
          m.challenge === "c",
      ];
      m = addSymbol(m, "c");
      m = addSymbol(m, " ");
      const lastMatch = [
        "but the last match on this line moves everything to 'hidden'",
        JSON.stringify(m.hidden) === JSON.stringify(["a", "b", "c"]),
      ];
      return [firstMatch, secondMatch, lastMatch];
    });

    test("If we run out of words to match", () => {
      const phrase = "very short game";
      let m = initForLineByLine([phrase]);
      for (const char of phrase) {
        m = addSymbol(m, char);
      }
      m = addSymbol(m, " "); // Submits the last match
      return [
        ["the game's over", m.gameState === "over"],
        ["the userText is empty", m.userText === ""],
        [
          "and all the matched words are in 'hidden'",
          JSON.stringify(m.hidden) ===
            JSON.stringify(["very", "short", "game"]),
        ],
      ];
    });
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
        if (asrtn.length === 3)
          results.push(`&nbsp;&nbsp;&nbsp;⚠️→${JSON.stringify(asrtn[2])}`);
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
