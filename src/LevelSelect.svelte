<nav>
  <button class="currentLevel lvl1">Level 1</button>
  <button class="lvl2">Level 2</button>
  <button class="lvl3">Level 3</button>
  <button class="lvl4">Level 4</button>
  <button class="lvl5">Level 5</button>
  <button class="lvl6">Level 6</button>
  <button class="lvl7">All Words</button>
  <button class="lvl8">Full Sentences</button>
</nav>

<style>
  nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    width: 10vw;
    height: 84vh;
    margin-left: 4vmin;
  }

  nav button {
    -webkit-box-flex: 1;
    -ms-flex: 1 1 11vh;
    flex: 1 1 11vh;
    margin: 0.5vh auto;
    width: 11vh;
    font-size: 1.5vh;
    color: var(--text-color);
  }

  nav button:hover {
    font-weight: bold;
    border-color: var(--accent-color);
  }

  .lvl8 {
    display: none;
    font-size: 1.1vh;

    color: orange;
    border-color: orange;
  }
</style>
