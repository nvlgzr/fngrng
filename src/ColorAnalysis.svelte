<h1>fngrng Color Analysis</h1>

<h2>Grouped by Color</h2>
<section>
  <div class="text-black">Clock: input</div>
  <div class="text-black">WordScore: input editing</div>
  <div id="displayBlack">Display: js var black</div>
  <div id="keyboardHomerow">Keyboard: --homerow-highlight</div>
  <div id="keyboardHomerowEditing">Keyboard: homerow + editing</div>
  <div id="keyboardEditing">Keyboard: --editing-highlight</div>
  <div class="text-gray-700 font-serif italic text-3xl">fngrng Logo</div>
  <div id="mainInfoBlur">MainInfo: most text blurred</div>
  <div id="infoSection">Info: section</div>
  <div id="keyboardActive">Keyboard: --active-keys</div>
  <div id="click-to-close-background">ClickToClose Overlay</div>
  <div id="toggle">Toggle: disabled</div>
  <div id="keyboardDefault">Keyboard: --default-key-color</div>
  <div class="text-gray-400 font-black">LayoutHeader: chevron</div>
  <div class="text-gray-400">LayoutHeader: title</div>
  <div id="endGameDiv">EndGame: div</div>
  <div class="text-gray-400">Nav: nav</div>
  <div class="bg-gray-200 text-gray-50">App: html (default background)</div>
  <div class="bg-gray-50 text-gray-300">HoverableMenu: menu (background)</div>
  <div class="text-white">CurrentLevel: levelLetters</div>
  <div id="multiLine">MulitLine: section</div>
  <div id="mainInfoControl">MainInfo: control</div>
  <div class="text-red-400">CurrentLevel: messages</div>
  <div class="text-red-400">Input: redden</div>
  <div id="clockHovering">HoverableClock: hovering</div>
  <div class="close">Info: ⌃I (to close)</div>
  <div class="text-yellow-400">CurrentLevel: hover/menu-item</div>
  <div id="wordScoreHovering">HoverableWordScore: hovering</div>
  <div id="keyboardPunctuation">Keyboard: --punctuation</div>
  <div id="displayBlue">Display: js var black</div>
  <div class="text-blue-500">Nav: Info</div>
  <div id="mainInfoShift">MainInfo: shift</div>
  <div id="keyboardNew">Keyboard: --new-in-this-level</div>
  <div id="endGameSpan">EndGame: span</div>
  <div class="text-green-400">LayoutHeader: hovering</div>
  <div class="text-green-400 bg-gray-50">LayoutHeader: menu-item</div>
  <!-- Consider moving color into Info ↑ -->
</section>

<hr />

<h2>Alphabetical by Component</h2>
<section>
  <div class="bg-gray-200">App: html</div>
  <div id="click-to-close-background">ClickToClose Overlay</div>
  <div class="text-black">Clock: input</div>
  <div class="text-white">CurrentLevel: levelLetters</div>
  <div class="text-red-400">CurrentLevel: messages</div>
  <div class="text-yellow-400">CurrentLevel: hover/menu-item</div>
  <div id="displayBlack">Display: js var black</div>
  <div id="displayBlue">Display: js var black</div>
  <div id="endGameDiv">EndGame: div</div>
  <div id="endGameSpan">EndGame: span</div>
  <div id="clockHovering">HoverableClock: hovering</div>
  <div class="bg-gray-50">HoverableMenu: menu</div>
  <div id="wordScoreHovering">HoverableWordScore: hovering</div>
  <div id="infoSection">Info: section</div>
  <div class="close">Info: ⌃I (to close)</div>
  <div class="text-red-400">Input: redden</div>
  <div id="keyboardDefault">Keyboard: --default-key-color</div>
  <div id="keyboardActive">Keyboard: --active-keys</div>
  <div id="keyboardNew">Keyboard: --new-in-this-level</div>
  <div id="keyboardEditing">Keyboard: --editing-highlight</div>
  <div id="keyboardHomerow">Keyboard: --homerow-highlight</div>
  <div id="keyboardHomerowEditing">Keyboard: homerow + editing</div>
  <div id="keyboardPunctuation">Keyboard: --punctuation</div>
  <div class="text-gray-400">LayoutHeader: title</div>
  <div class="text-gray-400 font-black">LayoutHeader: chevron</div>
  <div class="text-green-400">LayoutHeader: hovering</div>
  <div class="text-green-400 bg-gray-50">LayoutHeader: menu-item</div>
  <div class="text-gray-700 font-serif italic text-3xl">fngrng Logo</div>
  <div id="mainInfoBlur">MainInfo: most text blurred</div>
  <div id="mainInfoControl">MainInfo: control</div>
  <div id="mainInfoShift">MainInfo: shift</div>
  <div id="multiLine">MulitLine: section</div>
  <div class="text-blue-500">Nav: Info</div>
  <!-- Consider moving color into Info ↑ -->
  <div class="text-gray-400">Nav: nav</div>
  <div id="toggle">Toggle: disabled</div>
  <div class="text-black">WordScore: input editing</div>
</section>

<style lang="postcss">
  :root {
    @apply bg-gray-200 h-screen;
  }
  h1 {
    @apply text-4xl pt-8 pb-4 px-8;
  }
  h2 {
    @apply text-2xl pt-4 pb-4 px-8;
  }
  hr {
    height: 0.3rem;
    background-color: hsl(0, 0%, 70%);
  }
  section {
    @apply mx-8 pb-16;
    column-gap: 3em;
    column-rule: thin solid black;
    columns: 3;
  }
  div {
    @apply p-4;
  }
  #click-to-close-background {
    background-color: hsla(0, 0%, 0%, 0.3);
    color: white;
  }
  #displayBlack {
    color: hsl(0, 0%, 20%);
  }
  #displayBlue {
    color: hsl(221, 83%, 53%);
  }
  #endGameDiv {
    @apply text-gray-400 font-sans;
  }
  #endGameSpan {
    @apply text-green-500;
  }
  #clockHovering {
    /* TBD: Eliminate duplicate magic number for purple (and others) */
    color: hsl(0, 91%, 71%);
  }
  #wordScoreHovering {
    color: hsl(255, 92%, 76%);
  }
  #infoSection {
    color: hsla(0, 0%, 20%, 0.7);
    border: 1px solid hsla(0, 0%, 100%, 0.5);
    filter: drop-shadow(-4px 4px 8px hsla(0, 0%, 0%, 0.25));
    background: url(/paper.jpg), white;
    background-size: cover;
    box-shadow: 0px 4px 15px hsla(0, 0%, 0%, 0.25);
    border-radius: 36px 0px 0px 0px;
  }
  .close {
    color: hsla(0, 79%, 63%, 0.7);
  }
  #keyboardDefault {
    --default-key-color: hsl(0, 0%, 51%);
    color: var(--default-key-color);
    background-color: transparent;
    border: 0.1rem solid var(--default-key-color);
    border-radius: 0.45rem;
  }
  #keyboardActive {
    --active-keys: hsl(0, 0%, 28%);
    border-color: var(--active-keys);
    color: var(--active-keys);
    filter: brightness(1.5);
  }
  #keyboardNew {
    --new-in-this-level: hsl(161, 94%, 30%);
    border-color: var(--new-in-this-level);
    color: var(--new-in-this-level);
    opacity: 1;
    filter: brightness(1.2);
  }
  #keyboardEditing {
    --editing-highlight: hsl(0, 0%, 100%, 0.9);
    box-shadow: 0 0 5px 4px var(--editing-highlight);
    animation: pulse 1.2s infinite;
  }
  #keyboardHomerow {
    --homerow-highlight: hsla(221, 83%, 53%, 0.3);
    box-shadow: 0 0 5px 2px var(--homerow-highlight);
  }
  #keyboardHomerowEditing {
    /* I can't seem to get this to behave the same way it does in the app.
    The pulse timing looks different, and the box-shadow seems larger. Weird. */
    --homerow-highlight: hsla(221, 83%, 53%, 0.3);
    --editing-highlight: hsl(0, 0%, 100%, 0.9);
    box-shadow: 0 0 5px 2px var(--homerow-highlight);
    box-shadow: 0 0 5px 4px var(--editing-highlight);
    animation: pulse 1.2s infinite;
  }
  #keyboardPunctuation {
    --punctuation: hsl(240, 94%, 40%);
    border: 0.1rem solid var(--default-key-color);
    border-color: var(--punctuation);
    color: var(--punctuation);
    background-color: transparent;
    border-radius: 0.45rem;
  }
  #mainInfoBlur {
    filter: blur(0.4px);
    color: hsla(0, 0%, 20%, 0.7);
    background: url(/paper.jpg), white;
    background-size: cover;
  }
  #mainInfoControl {
    color: hsla(0, 79%, 50%, 0.7);
    background: url(/paper.jpg), white;
    background-size: cover;
  }
  #mainInfoShift {
    color: hsla(221, 83%, 53%, 0.7);
    background: url(/paper.jpg), white;
    background-size: cover;
  }
  #multiLine {
    /* Not sure why this gradient's not showing. Oh well. */
    mask-image: linear-gradient(to bottom, black 75%, transparent);
    @apply text-center;
    @apply p-6;
    @apply bg-white rounded;
  }
  #toggle {
    color: gray;
    text-decoration: overline;
  }
</style>
