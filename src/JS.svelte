<script>
  import { onMount } from "svelte";
  import {
    currentLayout,
    layoutMaps,
    currentLevel,
    layoutMap,
    levelDictionaries,
    levelDictionary,
    keyRemapping,
    prefsOpen,
    fullSentenceModeEnabled,
    timeLimitModeEnabled,
    wordScrollingModeEnabled,
    punctuationToInclude,
  } from "./persistentStore.js";
  import {
    gameOn,
    correctAnswer,
    seconds,
    minutes,
    score,
    correct,
    errors,
    scoreMax,
    clock,
    results,
    promptOffset,
    letterIndex,
    sentenceStartIndex,
  } from "./volatileStore.js";
  import JS2 from "./JS2.svelte";

  let js2;

  onMount(async () => {
    /*_____________dom elements_________*/

    // the string of text that shows the words for the user to type
    var prompt = document.querySelector(".prompt");
    var resetButton = document.querySelector("#resetButton");
    var input = document.querySelector("#userInput");
    var customInput = document.querySelector(".customInput");
    var buttons = document.querySelector("nav").children;
    var select = document.querySelector("select");
    var saveButton = document.querySelector(".saveButton");
    var discardButton = document.querySelector(".discardButton");
    var openUIButton = document.querySelector(".openUIButton");
    var customUIKeyInput = document.querySelector("#customUIKeyInput");
    var shiftDown = false; // tracks whether the shift key is currently being pushed
    var fullSentenceMode = false; // if true, all prompts will be replace with sentences
    var timeLimitMode = $timeLimitModeEnabled;
    var deleteLatestWord = false; // if true, delete last word typed. Set to true whenever a word is finished
    var lineIndex = 0; // tracks which line of the prompt we are currently on
    var wordIndex = 0; // tracks which word you are on (ONLY IN PARAGRAPH MODE)
    var idCount = 0;
    var answerWordArray = [];
    var specialKeyCodes = [
      27, 9, 20, 17, 18, 93, 36, 37, 38, 39, 40, 144, 36, 8, 16, 30, 32, 13,
      224,
    ]; // list of all keycodes for keys we typically want to ignore
    /*
    27  - esc
    9   - tab
    20  - capslock
    17  - ctrl
    18  - alt
    93  - ]
    36  - home
    37  - ←
    38  - ↑
    39  - →
    40  - ↓
    144 - numlock
    36  - $
    8   - backspace
    16  - shift
    30  - <can't find a reference for this!>
    32  - space
    13  - return/enter
    8   - backspace
    224 - meta (e.g.,)
    */
    var requiredLetters = ""; //$levelDictionaries[$currentLayout]['lvl'+level]+punctuation;; // keeps track of letters that still need to be used in the current level
    var initialCustomKeyboardState = ""; // saves a temporary copy of a keyboard layout that a user can return to by discarding changes
    var initialCustomLevelsState = ""; // saves a temporary copy of custom levels that a user can return to by discarding changes

    // preference menu dom elements
    var fullSentenceModeToggle = document.querySelector(".fullSentenceMode"),
      fullSentenceModeLevelButton = document.querySelector(".lvl8"),
      wordLimitModeButton = document.querySelector(".wordLimitModeButton"),
      wordLimitModeInput = document.querySelector(".wordLimitModeInput"),
      timeLimitModeButton = document.querySelector(".timeLimitModeButton"),
      timeLimitModeInput = document.querySelector(".timeLimitModeInput"),
      wordScrollingModeButton = document.querySelector(
        ".wordScrollingModeButton"
      );

    start();
    init();

    // this is the true init, which is only called once. Init will have to be renamed
    // Call to initialize
    function start() {
      if (!$wordScrollingModeEnabled) {
        toggleWordScrollingModeUI();
      }

      if ($fullSentenceModeEnabled) {
        toggleFullSentenceModeUI();
      }

      if (timeLimitMode) {
        toggleTimeLimitModeUI();
      }

      wordScrollingModeButton.checked = $wordScrollingModeEnabled;
      timeLimitModeButton.checked = timeLimitMode;
      wordLimitModeButton.checked = !timeLimitMode;

      switchLevel($currentLevel);

      updateLayoutUI();
    }

    // some of the stuff in this function should probably be put into reset and we should examine when reset is called
    // the rest should be in start(), which works like an actual init function should
    // RENAME AND REFACTOR THIS PLEASE
    function init() {
      js2.createTestSets();
      reset();
    }

    /*________________Timers and Listeners___________________*/

    // makes the clock tic
    setInterval(() => {
      if ($gameOn == "on") {
        if (!timeLimitMode) {
          $seconds++;
          if ($seconds >= 60) {
            $seconds = 0;
            $minutes++;
          }
        } else {
          // clock counting down
          $seconds = $seconds - 1;
          if ($seconds <= 0 && $minutes <= 0) {
            endGame();
          }
          if ($seconds < 0) {
            $seconds = 59;
            $minutes--;
          }
        }
        setClock();
      }
    }, 1000);

    /*___________________________________________________________*/
    /*____________________preference menu________________________*/

    // close preference menu on escape key. While we're at it, also close custom
    // ui menu
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27) {
        // close custom ui menu
        if (customInput.style.transform != "scaleX(0)") {
          customInput.style.transform = "scaleX(0)";
          // remove active class from current key
          clearSelectedInput();
          init();
        }
      }
    });

    // capital letters allowed
    document
      .querySelector(".capitalLettersAllowed")
      .addEventListener("click", () => {
        reset();
      });

    // full sentence mode
    function toggleFullSentenceModeUI() {
      fullSentenceModeLevelButton.classList.toggle("visible");
    }

    fullSentenceModeToggle.addEventListener("click", () => {
      $fullSentenceModeEnabled = !$fullSentenceModeEnabled;
      toggleFullSentenceModeUI();
      if ($fullSentenceModeEnabled) {
        switchLevel(8);
      } else {
        switchLevel(1);
      }
      reset();
    });

    // Toggle display of time limit mode input field
    function toggleTimeLimitModeUI() {
      $seconds = timeLimitModeInput.value % 60;
      $minutes = Math.floor(timeLimitModeInput.value / 60);

      // make the word list long enough so that no human typer can reach the end
      $scoreMax = timeLimitModeInput.value * 4;

      // toggle value of word limit mode button
      wordLimitModeButton.checked = !wordLimitModeButton.checked;

      // toggle display of input fields
      timeLimitModeInput.classList.toggle("noDisplay");
      wordLimitModeInput.classList.toggle("noDisplay");
    }

    // time limit mode button; if this is checked, uncheck button for word limit and vice versa
    timeLimitModeButton.addEventListener("click", () => {
      if (timeLimitMode == true) {
        timeLimitModeButton.checked = true;
      } else {
        // change mode logic here
        timeLimitMode = true;
        toggleTimeLimitModeUI();

        $timeLimitModeEnabled = timeLimitMode;

        reset();
      }
    });

    // time limit mode field
    timeLimitModeInput.addEventListener("change", () => {
      let wholeSecond = Math.floor(timeLimitModeInput.value);

      $scoreMax = wholeSecond * 10;

      if (wholeSecond < 1 || wholeSecond > 10000) {
        wholeSecond = 60;
      }

      // set the dom element to a whole number (in case the user puts in a decimal)
      timeLimitModeInput.value = wholeSecond;

      $seconds = wholeSecond % 60;
      $minutes = Math.floor(wholeSecond / 60);

      $gameOn = "ready";
      setClock();
    });

    // word Limit mode butto; if this is checked, uncheck button for time limit and vice versa
    // Toggle display of word limit mode input field
    wordLimitModeButton.addEventListener("click", () => {
      if (timeLimitMode == false) {
        wordLimitModeButton.checked = true;
      } else {
        // change mode logic here
        timeLimitMode = false;
        $seconds = 0;
        $minutes = 0;

        // set score max back to the chosen value
        $scoreMax = wordLimitModeInput.value;

        // toggle value of time limit mode button
        timeLimitModeButton.checked = !timeLimitModeButton.checked;

        // toggle display of input fields
        timeLimitModeInput.classList.toggle("noDisplay");
        wordLimitModeInput.classList.toggle("noDisplay");

        $timeLimitModeEnabled = timeLimitMode;

        reset();
      }
    });

    // word Limit input field
    wordLimitModeInput.addEventListener("change", () => {
      if (wordLimitModeInput.value > 10 && wordLimitModeInput.value <= 500) {
        wordLimitModeInput.value =
          Math.ceil(wordLimitModeInput.value / 10) * 10;
        $scoreMax = wordLimitModeInput.value;
      } else if (wordLimitModeInput.value > 500) {
        $scoreMax = 500;
        wordLimitModeInput.value = 500;
      } else {
        $scoreMax = 10;
        wordLimitModeInput.value = 10;
      }

      reset();
    });

    function toggleWordScrollingModeUI() {
      prompt.classList.toggle("paragraph");
      // remove fade from parent
      document.querySelector("#fadeElement").classList.toggle("fade");
    }

    wordScrollingModeButton.addEventListener("click", () => {
      $wordScrollingModeEnabled = !$wordScrollingModeEnabled;
      toggleWordScrollingModeUI();
      reset();
    });

    document
      .querySelector(".punctuationModeButton")
      .addEventListener("click", () => {
        // Temporary hack: wait till the next cycle to update the UI
        // So that these functions have access to the updated
        // value of $punctuationToInclude
        setTimeout(() => {
          js2.createTestSets();
          reset();
        }, 250);
      });

    function updateLayoutUI() {
      // if custom input is selected, show the ui for custom keyboards
      if ($currentLayout == "custom") {
        openUIButton.style.display = "block";
        startCustomKeyboardEditing();
      } else {
        customInput.style.transform = "scaleX(0)";
        openUIButton.style.display = "none";
      }

      if ($currentLayout == "custom") {
        customUIKeyInput.focus();
      }
    }

    select.addEventListener("change", (e) => {
      $currentLayout = select.value;
      updateLayoutUI();
      // reset everything
      init();
    });

    openUIButton.addEventListener("click", () => {
      startCustomKeyboardEditing();
    });

    // called whenever a user opens the custom editor. Sets correct displays and saves an initial state
    // of the keyboard to refer back to if the user wants to discard changes
    function startCustomKeyboardEditing() {
      initialCustomKeyboardState = Object.assign({}, $layoutMap);
      initialCustomLevelsState = Object.assign(
        {},
        $levelDictionaries["custom"]
      );
      // customInput.style.display = 'flex';
      customInput.style.transform = "scaleX(1)";
      let k = document.querySelector(".defaultSelectedKey");
      selectInputKey(k);
    }

    // selects an input key on the custom keyboard and applies the correct styling
    function selectInputKey(k) {
      // clear previous styling
      clearSelectedInput();

      k.classList.add("selectedInputKey");
      if (k.children[0].innerHTML == "") {
        k.children[0].innerHTML = "_";
      }
      k.children[0].classList.add("pulse");
      customUIKeyInput.focus();
    }

    saveButton.addEventListener("click", () => {
      customInput.style.transform = "scaleX(0)";
      // remove active class from current key
      clearSelectedInput();
      init();
    });

    discardButton.addEventListener("click", () => {
      customInput.style.transform = "scaleX(0)";
      // remove active class from current key
      clearSelectedInput();

      // load the old layout to revert changes, aka discard changes
      loadCustomLayout(initialCustomKeyboardState);
      loadCustomLevels(initialCustomLevelsState);

      init();
    });

    // general click listener
    document.addEventListener(
      "click",
      function (e) {
        // close preference menu if click is anywhere other than the preference menu
        let k = e.target.closest(".preferenceMenu");
        if (!k) {
          k = e.target.closest(".preferenceButton");
        }
        if (!k) {
          $prefsOpen = false;
        }

        // add key listeners for each of the keys the custom input ui
        // When clicked, a key becomes 'selectedInputKey' and all others lose
        // this class.
        k = e.target.closest(".cKey");
        if (k) {
          // change focus to the customUIKeyInput field
          customUIKeyInput.focus();

          // remove 'selectedInputKey' from any keys previously clicked
          clearSelectedInput();

          k.classList.add("selectedInputKey");
          if (k.children[0].innerHTML == "") {
            k.children[0].innerHTML = "_";
          }
          k.children[0].classList.add("pulse");
        }

        k = e.target.closest(".customUILevelButton");

        // listener for customUILevelButtons
        if (k) {
          // remove styling from other buttons
          let currentSelectedLevel = document.querySelector(
            ".currentCustomUILevel"
          );
          if (currentSelectedLevel) {
            currentSelectedLevel.classList.remove("currentCustomUILevel");
          }

          // add styling to selected button
          customUIKeyInput.focus();
          k.classList.add("currentCustomUILevel");
          // set new dom element
          currentSelectedLevel = document.querySelector(
            ".currentCustomUILevel"
          );

          // remove styling from all keys that don't correspond with selected level button
          // add styling to keys that correspond with selected level button
          let allCKeys = document.querySelectorAll(".cKey");
          for (let n of allCKeys) {
            if (
              n.children[0].innerHTML != 0 &&
              $levelDictionaries["custom"][
                currentSelectedLevel.innerHTML
              ].includes(n.children[0].innerHTML)
            ) {
              n.classList.add("active");
            } else {
              n.classList.remove("active");
            }
          }
        }
      },
      false
    );

    // Updates on any input, clearing the current selected
    // input key, and setting the new value
    customUIKeyInput.addEventListener("keydown", (e) => {
      let k = document.querySelector(".selectedInputKey");

      // if there was already a value for this key, remove it from all levels
      if (k.children[0].innerHTML != "_") {
        removeKeyFromLevels(k);
      }

      // if key entered is not shift, control, space, caps, enter, backspace, escape,
      // or delete, left or right arrows, update dom element and key mapping value
      if (
        e.keyCode != 16 &&
        e.keyCode != 17 &&
        e.keyCode != 27 &&
        e.keyCode != 46 &&
        e.keyCode != 32 &&
        e.keyCode != 8 &&
        e.keyCode != 20 &&
        e.keyCode != 13 &&
        e.keyCode != 37 &&
        e.keyCode != 39 &&
        e.keyCode != 38 &&
        e.keyCode != 40
      ) {
        let currentUILev = document.querySelector(
          ".currentCustomUILevel"
        ).innerHTML;
        k.children[0].innerHTML = e.key;

        // // if we are not already on shift layer, add to dom element shift layer
        // if(!shiftDown) {
        // 	// document.querySelector('#shift' + k.id).children[0].innerHTML = e.key.toUpperCase();
        // }
        k.classList.add("active");

        // new keyMapping Data
        if (k.id) {
          let keyCode = k.id.toString().replace("custom", "");
          keyCode = keyCode.toString().replace("shift", "");

          if (!shiftDown) {
            $layoutMaps[$currentLayout][keyCode] = e.key;
          }

          $layoutMaps[$currentLayout].shiftLayer[keyCode] = e.key.toUpperCase();
        }

        //new levels data
        $levelDictionaries["custom"][currentUILev] += e.key;
        $levelDictionaries["custom"]["lvl7"] += e.key;

        switchSelectedInputKey("right");
      } else if (e.keyCode == 8 || e.keyCode == 46) {
        // if backspace, remove letter from the ui element and the keyboard map
        k.children[0].innerHTML = "_";
        k.classList.remove("active");
        $layoutMap.shiftLayer[k.id] = " ";

        // remove deleted letter from keymapping and levels
        if (k.id) {
          $layoutMaps[$currentLayout][k.id] = " ";
          removeKeyFromLevels(k);
        }
      } else if (e.keyCode == 37) {
        switchSelectedInputKey("left");
      } else if (e.keyCode == 39) {
        switchSelectedInputKey("right");
      } else if (e.keyCode == 38) {
        switchSelectedInputKey("up");
      } else if (e.keyCode == 40) {
        switchSelectedInputKey("down");
      }

      customUIKeyInput.value = "";

      $layoutMaps = $layoutMaps;
    });

    // given a key object, k, remove a value of the letter on k from all levels
    function removeKeyFromLevels(k) {
      let lvls = Object.keys($levelDictionaries["custom"]);
      for (let lvl of lvls) {
        let keyCode = k.id.toString().replace("custom", "");
        // replace any instances of letter previously found on key
        $levelDictionaries["custom"][lvl] = $levelDictionaries["custom"][
          lvl
        ].replace(k.children[0].innerHTML, "");
        // replace mapping for letter previously found on key
        $layoutMaps[$currentLayout][keyCode] = " ";
      }
    }

    // sets the custom keyboard layout to be equal to the json parameter passed in
    function loadCustomLayout() {
      let customKeys = document.querySelectorAll(".cKey");
      // load letters onto the custom ui input keyboard
      customKeys.forEach((cKey) => {
        let currentKeyName = cKey.id.substring(6);

        // if the value of the new layout key is not undefined, set it to the corresponding dom element
        if ($layoutMap[currentKeyName]) {
          // if key is blank, remove active styling
          if ($layoutMap[currentKeyName] == " ") {
            cKey.classList.remove("active");
          }
          cKey.innerHTML =
            `
				<span class='letter'>` +
            $layoutMap[currentKeyName] +
            `</span>
			`;
        }
      });
    }

    // sets the custom levels to be equal to the json parameter passed in
    function loadCustomLevels(newCustomLevels) {
      $levelDictionaries.custom = Object.assign({}, newCustomLevels);
      $levelDictionary = $levelDictionaries["custom"];
    }

    // switches the focus to the next input key, determined by the direction parameter
    // Parameter is either left, right, up, or down
    function switchSelectedInputKey(direction) {
      let k; // the key to jump to
      if (direction == "right") {
        k = document.querySelector(".selectedInputKey").nextElementSibling;
      } else if (direction == "left") {
        k = document.querySelector(".selectedInputKey").previousElementSibling;
      } else if (direction == "up") {
        let keyPosition;
        let currentKey = document.querySelector(".selectedInputKey");
        for (let i = 0; i < currentKey.parentElement.children.length; i++) {
          if (currentKey.parentElement.children[i] == currentKey) {
            keyPosition = i;
            break;
          }
        }
        k =
          document.querySelector(".selectedInputKey").parentElement
            .previousElementSibling.children[keyPosition];
      } else if (direction == "down") {
        let keyPosition;
        let currentKey = document.querySelector(".selectedInputKey");
        for (let i = 0; i < currentKey.parentElement.children.length; i++) {
          if (currentKey.parentElement.children[i] == currentKey) {
            keyPosition = i;
            break;
          }
        }
        k =
          document.querySelector(".selectedInputKey").parentElement
            .nextElementSibling.children[keyPosition];
      }

      if (k.classList.contains("finalKey")) {
        //if last valid key on keyboard, don't change keysz
        k = document.querySelector(".selectedInputKey");
      } else if (k.classList.contains("rowEnd")) {
        // if last valid key on row, move down a row
        k =
          document.querySelector(".selectedInputKey").parentElement
            .nextElementSibling.children[1];
      } else if (k.classList.contains("rowStart")) {
        // if first valid key on row, move up a row
        k =
          document.querySelector(".selectedInputKey").parentElement
            .previousElementSibling.children[11];
      }

      clearSelectedInput();
      k.classList.add("selectedInputKey");
      if (k.children[0].innerHTML == "") {
        k.children[0].innerHTML = "_";
      }
      k.children[0].classList.add("pulse");
    }

    // remove 'selectedInputKey' from any keys previously clicked
    function clearSelectedInput() {
      let k = document.querySelector(".selectedInputKey");
      if (k) {
        k.classList.remove("selectedInputKey");
        k.children[0].classList.remove("pulse");
        if (k.children[0].innerHTML == "_") {
          k.children[0].innerHTML = "";
        }
      }
    }

    input.addEventListener("keydown", (e) => {
      // removes first line on the first letter of the first word of a new line
      if (deleteLatestWord) {
        prompt.classList.remove("smoothScroll");
        // delete last line fromt prompt and set the offset back to 0
        prompt.firstChild.removeChild(prompt.firstChild.firstChild);
        if (prompt.firstChild.children.length == 0) {
          prompt.removeChild(prompt.firstChild);
        }
        $promptOffset = 0;
        prompt.style.left = "-" + $promptOffset + "px";
        deleteLatestWord = false;
      }

      // get rid of default key press. We'll handle it ourselves
      e.preventDefault();

      // this is the actual character typed by the user
      let char = e.code;

      // prevent default char from being typed and replace new char from keyboard map
      if ($keyRemapping) {
        if (char in $layoutMap && $gameOn === "on") {
          if (!e.shiftKey) {
            input.value += $layoutMap[char];
          } else {
            // if shift key is pressed, get final input from
            // keymap shift layer. If shiftlayer doesn't exist
            // use a simple toUpperCase
            if ($layoutMap.shiftLayer == "default") {
              input.value += $layoutMap[char].toUpperCase();
            } else {
              // get char from shiftLayer
              input.value += $layoutMap.shiftLayer[char];
            }
          }
        }
      } else {
        // there is a bug on firefox that occassionally reads e.key as process, hence the boolean expression below
        if (
          !specialKeyCodes.includes(e.keyCode) ||
          (e.keyCode > 48 && e.keyCode < 91 && e.key != "Process")
        ) {
          if (e.key != "Process") {
            input.value += e.key;
          } else {
            $letterIndex--;
          }
        } else {
          // console.log('special Key');
        }
        if (e.keyCode == 32) {
          //console.log('space bar');
        }
      }

      // Checks to see if input contains the
      // correct word. If yes, generate new word. If no, give user
      // negative feedback
      // if on the last word, check every letter so we don't need a space to end the game
      if (
        !timeLimitMode &&
        $score == $scoreMax - 1 &&
        checkAnswer() &&
        $gameOn === "on"
      ) {
        endGame();
      }

      if (e.keyCode === 13 || e.keyCode === 32) {
        if (checkAnswer() && $gameOn) {
          // stops a ' ' character from being put in the input bar
          // it wouldn't appear until after this function, and would
          // still be there when the user goes to type the next word
          e.preventDefault();

          handleCorrectWord();
          incrementScore();

          if ($score >= $scoreMax) {
            endGame();
          }

          // clear input field
          document.querySelector("#userInput").value = "";

          // set letter index (where in the word the user currently is)
          // to the beginning of the word
          $letterIndex = 0;
        } else {
          input.value += " ";
          $letterIndex++;
        }
      }

      /*____________________accuracy checking____________________*/

      // if we have a backspace, decrement letter index and role back the input value
      if (e.keyCode == 8) {
        input.value = input.value.substr(0, input.value.length - 1);
        $letterIndex--;
        // letter index cannot be < 0
        if ($letterIndex < 0) {
          $letterIndex = 0;
        }
      }

      // if key produces a character, (ie not shift, backspace, or another
      // utility key) increment letter index
      if (
        !specialKeyCodes.includes(e.keyCode) ||
        (e.keyCode > 48 && e.keyCode < 91)
      ) {
        $letterIndex++;
      }

      // check if answer is correct and apply the correct styling.
      // Also increment 'errors' or 'correct'
      if (checkAnswerToIndex()) {
        input.style.color = "black";
        // no points awarded for backspace
        if (e.keyCode != 8) {
          $correct++;
          // if letter (in the promp) exists, color it green
          if (
            prompt.children[0].children[wordIndex].children[$letterIndex - 1]
          ) {
            prompt.children[0].children[wordIndex].children[
              $letterIndex - 1
            ].style.color = "green";
          }
        } else {
          // if backspace, color it grey again
          if (prompt.children[0].children[wordIndex].children[$letterIndex]) {
            prompt.children[0].children[wordIndex].children[
              $letterIndex
            ].style.color = "gray";
          }
        }
      } else {
        input.style.color = "red";
        // no points awarded for backspace
        if (e.keyCode != 8) {
          $errors++;
          if (
            prompt.children[0].children[wordIndex].children[$letterIndex - 1]
          ) {
            prompt.children[0].children[wordIndex].children[
              $letterIndex - 1
            ].style.color = "red";
          }
        } else {
          // if backspace, color it grey again
          if (prompt.children[0].children[wordIndex].children[$letterIndex]) {
            prompt.children[0].children[wordIndex].children[
              $letterIndex
            ].style.color = "gray";
          }
        }
      }
    }); // end input key listner

    // returns true if the letters typed SO FAR are correct
    function checkAnswerToIndex() {
      // user input
      let inputVal = input.value;

      return (
        inputVal.slice(0, $letterIndex) == $correctAnswer.slice(0, $letterIndex)
      );
    }

    // add event listeners to level buttons
    for (let button of buttons) {
      let b = button;
      b.addEventListener("click", () => {
        let lev = b.innerHTML.replace(/ /, "").toLowerCase();
        // int representation of level we are choosing
        lev = lev[lev.length - 1];
        if (b.innerHTML == "All Words") {
          lev = 7;
        } else if (b.innerHTML == "Full Sentences") {
          lev = 8;
        }
        switchLevel(lev);
      });
    }

    // switches to level
    function switchLevel(lev) {
      $currentLevel = lev;
      // stop timer
      $gameOn = "ready";

      if (lev == 8) {
        fullSentenceMode = true;
      } else {
        fullSentenceMode = false;
      }

      if (lev == 8) {
        lev = 7;
      }
      $currentLevel = lev;

      reset();
    }

    resetButton.addEventListener("click", () => {
      reset();
    });

    // resets everything to the beginning of game state. Run when the reset
    // button is called or when a level is changed
    // Set a new prompt word and change variable text
    function reset() {
      deleteLatestWord = false;
      prompt.innerHTML = "";
      input.value = "";
      answerWordArray = [];
      idCount = 0;
      $sentenceStartIndex = -1;
      $gameOn = "ready";
      $letterIndex = 0;
      wordIndex = 0;
      lineIndex = 0;
      $promptOffset = 0;
      prompt.style.left = 0;
      $correct = 0;
      $errors = 0;
      $results = { ready: false, accuracy: "", wpm: 0 };

      // set to -1 before each game because score is incremented every time we call
      $score = -1;

      requiredLetters = (
        $levelDictionaries[$currentLayout]["lvl" + $currentLevel] +
        $punctuationToInclude
      ).split("");

      // reset clock
      if (!timeLimitMode) {
        $minutes = 0;
        $seconds = 0;
      } else {
        $seconds = timeLimitModeInput.value % 60;
        $minutes = Math.floor(timeLimitModeInput.value / 60);
      }

      setClock();
      resetButton.classList.add("noDisplay");
      prompt.classList.remove("noDisplay");

      for (let i = 1; i <= 3; i++) {
        addLineToPrompt();
        if (i == 1) {
          $correctAnswer = answerWordArray[0];
        }
      }

      incrementScore();

      input.focus();
    }

    // generates a new line, adds it to prompt, and to answerWordArray
    function addLineToPrompt() {
      const lineToGenerate = $scoreMax - $score - answerWordArray.length - 1;
      let lineToAdd = js2.generateLine(
        lineToGenerate,
        fullSentenceMode,
        requiredLetters
      );
      prompt.innerHTML += convertLineToHTML(lineToAdd);
      answerWordArray = answerWordArray.concat(lineToAdd.split(" "));
    }

    // takes an array of letter and turns them into html elements representing lines
    // and words. These will be used as the prompt, which can then be styled accordingly
    function convertLineToHTML(letters) {
      let promptString = "";

      promptString =
        "<span class='line'><span class='word' id='id" + idCount + "'>";
      // loop through all letters in prompt
      for (let i = 0; i <= letters.length; i++) {
        // if last word in the list, close out the final word span tag
        if (i == letters.length) {
          promptString += "</span> </span>";
          idCount++;
        } else if (letters[i] == " ") {
          // if letter is a space, that means we have a new word
          idCount++;
          promptString += " </span>";
          promptString += "<span class='word' id='id" + idCount + "'>";
        } else {
          promptString += `<span>` + letters[i] + `</span>`;
        }
      }
      return promptString;
    }

    function checkAnswer() {
      // user input
      return input.value == $correctAnswer;
    }

    function endGame() {
      // erase prompt
      prompt.classList.toggle("noDisplay");

      // make resetButton visible
      resetButton.classList.remove("noDisplay");

      // pause timer
      $gameOn = "over";

      // calculate wpm
      let wpm;
      if (!timeLimitMode) {
        wpm = (($correct + $errors) / 5 / ($minutes + $seconds / 60)).toFixed(
          2
        );
      } else {
        wpm = (
          ($correct + $errors) /
          5 /
          (timeLimitModeInput.value / 60)
        ).toFixed(2);
      }

      $results = {
        ready: true,
        accuracy: `${((100 * $correct) / ($correct + $errors)).toFixed(2)}%`,
        wpm: wpm,
      };

      $correct = 0;
      $errors = 0;

      resetButton.focus();
      incrementScore();
      // clear input field
      document.querySelector("#userInput").value = "";
      // set letter index (where in the word the user currently is)
      // to the beginning of the word
      $letterIndex = 0;
    }

    // updates the correct answer and manipulates the dom
    // called every time a correct word is typed
    function handleCorrectWord() {
      // make sure no 'incorrect' styling still exists
      input.style.color = "black";

      //remove the first word from the answer string
      answerWordArray.shift();

      if (
        prompt.children[0].children.length - 1 == 0 ||
        wordIndex >= prompt.children[0].children.length - 1
      ) {
        lineIndex++;

        // when we reach the end of a line, generate a new one IF
        // we are more than  2 lines from from the end. This ensures that
        // no extra words are generated when we near the end of the test

        addLineToPrompt();

        //make the first line of the prompt transparent
        if (!$wordScrollingModeEnabled) {
          prompt.removeChild(prompt.children[0]);
          wordIndex = -1;
        }
      }

      let cur = document.querySelector("#id" + ($score + 1));

      if ($wordScrollingModeEnabled) {
        deleteLatestWord = true;
        prompt.classList.add("smoothScroll");
        // set the offset value of the next word
        $promptOffset += prompt.children[0].children[0].offsetWidth;
        // move prompt left
        prompt.style.left = "-" + $promptOffset + "px";
        // make already typed words transparent
        prompt.children[0].firstChild.style.opacity = 0;
      } else {
        // if in paragraph mode, increase word index
        wordIndex++;
      }

      // save the correct answer to a variable before removing it
      // from the answer string
      $correctAnswer = answerWordArray[0];
    }

    function incrementScore() {
      $score = $score + 1;
    }

    function setClock() {
      $clock = {
        mins: $minutes,
        secs: $seconds,
      };
    }

    // fixes a small bug in mozilla
    document.addEventListener("keyup", (e) => {
      e.preventDefault();
    });
  });
</script>

<JS2 bind:this={js2} />
