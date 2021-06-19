<script>
  import { addSymbol, initForScrolling } from "./modelTransformations.js";

  const tests = [];

  function test(description, t) {
    const result = t();
    if (typeof result === "boolean") {
      tests.push(`${result ? "✅" : "❌"} ${description}`);
    } else {
      tests.push(`📦 ${description}…`);
      for (let asrtn of result) {
        tests.push(`&nbsp;&nbsp;&nbsp;${asrtn[1] ? "✅" : "❌"} …${asrtn[0]}`);
        if (!asrtn[1] && asrtn.length === 3)
          tests.push(`&nbsp;&nbsp;&nbsp;--> ${JSON.stringify(asrtn[2])}`);
      }
    }
  }

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
</script>

<div>
  {#each tests as t}
    {@html t}
    <br />
  {/each}
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
