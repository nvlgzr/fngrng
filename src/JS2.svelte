<script>
  // Being a place to hold the less-UI-element-entangled bits of
  // the original Colemak Academy logic (for a hopefully-brief time)
  import { passage } from "./passageFromDorianGray.js";
  import { getPosition, contains, generateList } from "./pureFunctions";
  import {
    currentLayout,
    currentLevel,
    levelDictionaries,
    levelDictionary,
    uppercaseAllowed,
    punctuationToInclude,
    timeLimitModeEnabled,
  } from "./persistentStore.js";
  import { wordLists, sentenceStartIndex } from "./volatileStore.js";

  let sentenceEndIndex;

  // generates a single line to be appended to the answer array
  // if a line with a maximum number of words is desired, pass it in as a parameter
  export function generateLine(maxWords, fullSentenceMode, requiredLetters) {
    let str = "";
    const lineLength = 33;

    // In time limit mode, we need to have a word list long enough to
    // last well past even the fastest of typists. 5 w/s should do it!
    const adjustedMaxWords = $timeLimitModeEnabled ? maxWords * 5 : maxWords;

    if (fullSentenceMode) {
      // let rand = Math.floor(Math.random()*35);
      let rand = 0;
      if ($sentenceStartIndex == -1) {
        $sentenceStartIndex = getPosition(passage, ".", rand) + 1;
        sentenceEndIndex =
          passage.substring($sentenceStartIndex + lineLength + 2).indexOf(" ") +
          $sentenceStartIndex +
          lineLength +
          1;
        str = passage.substring($sentenceStartIndex, sentenceEndIndex + 1);
      } else {
        $sentenceStartIndex = sentenceEndIndex + 1;
        sentenceEndIndex =
          passage.substring($sentenceStartIndex + lineLength + 2).indexOf(" ") +
          $sentenceStartIndex +
          lineLength +
          1;
        str = passage.substring($sentenceStartIndex, sentenceEndIndex + 1);
      }
      str = str.substring(1);
      return str;
    }

    if ($wordLists["lvl" + $currentLevel].length > 0) {
      let startingLetters =
        $levelDictionaries[$currentLayout]["lvl" + $currentLevel] +
        $punctuationToInclude;

      // if this counter hits a high enough number, there are likely no words matching the search
      // criteria. If that happens, reset required letters
      let circuitBreaker = 0;
      let wordsCreated = 0;

      for (let i = 0; i < lineLength; i = i) {
        if (wordsCreated >= adjustedMaxWords) {
          break;
        }

        let rand = Math.floor(
          Math.random() * $wordLists["lvl" + $currentLevel].length
        );
        let wordToAdd = $wordLists["lvl" + $currentLevel][rand];

        //console.log('in circuit ' + circuitBreaker);
        if (circuitBreaker > 12000) {
          if (circuitBreaker > 30000) {
            str +=
              $levelDictionaries[$currentLayout]["lvl" + $currentLevel] + " ";
            i += wordToAdd.length;
            wordsCreated++;
            circuitBreaker = 0;
            requiredLetters = startingLetters.split("");
            // console.log('taking too long to find proper word');
          } else {
            requiredLetters = startingLetters.split("");
          }
        }

        // if the word does not contain any required letters, throw it out and choose again
        if (!contains(wordToAdd, requiredLetters)) {
          // console.log(wordToAdd + ' doesnt have any required letters from ' + requiredLetters);
        } else if (!$uppercaseAllowed && containsUpperCase(wordToAdd)) {
          // if only lower case is allowed and the word to add contains an uppercase,
          // throw out the word and try again
        } else {
          // if last word of the line, don't add a space
          str += wordToAdd + " ";
          i += wordToAdd.length;
          wordsCreated++;

          // remove any new key letters from our required list
          removeIncludedLetters(requiredLetters, wordToAdd);
          // if we have used all required letters, reset it
          if (requiredLetters.length == 0) {
            requiredLetters = startingLetters.split("");
          }
        }

        circuitBreaker++;
        // if we're having trouble finding a word with a require letter, reset 'required letters'
        if (circuitBreaker > 7000) {
          // console.log('couldnt find word with ' + requiredLetters);
          wordToAdd = randomLetterJumble();
          str += wordToAdd + " ";
          i += wordToAdd.length;
          wordsCreated++;
          requiredLetters = startingLetters.split("");
        }
      }
    } else {
      let startingLetters =
        $levelDictionaries[$currentLayout]["lvl" + $currentLevel] +
        $punctuationToInclude;
      // if there are no words with the required letters, all words should be set to the
      // current list of required letters
      let wordsCreated = 0;
      if (
        $levelDictionaries[$currentLayout]["lvl" + $currentLevel].length == 0
      ) {
        str = "";
      } else {
        for (let i = 0; i < lineLength; i = i) {
          const wordToAdd = randomLetterJumble();
          str += wordToAdd + " ";
          i += wordToAdd.length;
          wordsCreated++;
          if (wordsCreated >= adjustedMaxWords) {
            break;
          }
        }
      }
    }

    // line should not end in a space. Remove the final space char
    str = str.substring(0, str.length - 1);
    return str;
  }

  // creates a random jumble of letters to be used when no words are found for a target letter
  function randomLetterJumble() {
    let randWordLength = Math.floor(Math.random() * 5) + 1;
    let jumble = "";
    for (let i = 0; i < randWordLength; i++) {
      let rand = Math.floor(
        Math.random() *
          $levelDictionaries[$currentLayout]["lvl" + $currentLevel].length
      );
      jumble += $levelDictionaries[$currentLayout]["lvl" + $currentLevel][rand];
    }

    return jumble;
  }

  // takes an array and removes any required letters that are found in 'word'
  // for example, if required letters == ['a', 'b', 'c', 'd'] and word=='cat', this
  // function will turn requiredLetters into ['b', 'd']
  function removeIncludedLetters(requiredLetters, word) {
    word.split("").forEach((l) => {
      if (requiredLetters.includes(l)) {
        requiredLetters.splice(requiredLetters.indexOf(l), 1);
      }
    });
  }

  function containsUpperCase(word) {
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = false;
    word.split("").forEach((letter) => {
      if (upperCase.includes(letter)) {
        // console.log('upperCase ' + letter);
        result = true;
      }
    });
    return result;
  }

  // set the word list for each level
  export function createTestSets() {
    let objKeys = Object.keys($wordLists); // the level keys of each of the wordLists
    let includedLetters = $punctuationToInclude; // the list of letters to be included in each level

    // for each level, add new letters to the test set and create a new list
    for (let i = 0; i < objKeys.length; i++) {
      let requiredLetters;

      // if 'all words' on a custom layout, don't add letters from the dictionary, because
      // level 7 contains the whole alphabet, and the user might not have asigned every letter to
      // a key. Instead, this level should be the same as the previous, just with every letter required
      if ($currentLayout != "custom" || i != 6) {
        requiredLetters =
          $levelDictionaries[$currentLayout]["lvl" + (i + 1)] +
          $punctuationToInclude;
        includedLetters += $levelDictionary[objKeys[i]];
      } else {
        requiredLetters = includedLetters;
      }

      $wordLists[objKeys[i]] = [];
      //console.log('level ' +(i+1) + ": " + wordLists[objKeys[i]]);
      $wordLists[objKeys[i]] = generateList(includedLetters, requiredLetters);
      // if(i == 6) console.log('level ' +(i+1) + ": " + $wordLists[objKeys[i]]);
    }
  }
</script>
