import { masterList } from "./tenThousandWords.js";

export const objectize = (wordOrWords) => {
  if (!wordOrWords) return wordOrWords

  if (typeof wordOrWords === "string")
    return wordOrWords.split("").map((char => {
      return { char: char }
    })
    )

  return wordOrWords.map(w => {
    return [...w].map((char) => {
      return { char: char };
    })
  })
}

///////////////////////////// ↓ /////////////////////////////////

// returns the index of the nth occurance of a char or string
export function getPosition(target, subString, n) {
  return target.split(subString, n).join(subString).length;
}

// returns true if target (a string) contains at least one letter from
// pattern (an array of chars)
export function contains(target, pattern) {
  let value = 0;
  pattern.forEach(function (letter) {
    value = value + target.includes(letter);
  });
  return value >= 1;
}

// generates a list of words containing only the given letters
export function generateList(lettersToInclude, requiredLetters) {
  let excludes = [];

  // create the list of letters to exclude from final list so
  // at the end you have only desired letters
  "abcdefghijklmnopqrstuvwxyz',.-".split("").forEach((l) => {
    if (!lettersToInclude.includes(l)) {
      excludes.push(l);
    }
  });

  let wordList = [];

  masterList.forEach((word) => {
    if (
      !contains(word.toLowerCase(), excludes) &&
      contains(word, requiredLetters.split(""))
    ) {
      wordList.push(word);
    }
  });

  return wordList;
}
