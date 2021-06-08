import { masterList } from "./tenThousandWords.js";

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

const uniformColor = (word, color) => {
  return [...word].map((char) => {
    return {
      char: char,
      color: color,
    };
  });
};

const checkAttempt = (attempt, challenge) => {
  return challenge.split("").reduce(
    (acc, curr, i) => {
      const userChar = attempt[i];
      const match = userChar === curr;
      const attempted = userChar !== undefined;
      const errorDetected = acc.errorDetected || (attempted && !match);

      let color;

      if (!attempted) {
        color = "";
      } else {
        color = match ? "green" : "red";
      }

      return {
        errorDetected: errorDetected,
        comps: [
          ...acc.comps,
          {
            char: curr,
            user: userChar,
            color: color,
          },
        ],
      };
    },
    { errorDetected: false, comps: [] }
  );
};

export const prepModel = (promptLines) => {
  // Note: Sometimes $promptLines gets an empty string on its own line.
  //       I'm not gonna track that down right now, and this is not
  //       some massive array we're talking about here, so I'm using
  //       the "code golf" solution from this StackOverflow answer
  //
  // https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
  //
  //       to filter out that little weird blip…for now. ¯\_(ツ)_/¯
  const [firstLine, ...remainingLines] = promptLines.filter(arr => arr.join() != [""].join());
  const [firstWord, ...restOfLine] = firstLine;

  return {
    hidden: [],// ['test', 'hidden'],
    locked: [],// ['test', 'green'],
    challenge: firstWord,
    restOfLine: restOfLine,
    remainingLines: remainingLines.filter(line => line !== [""]),
    userText: ""
  };
};

export const prepView = (userInput, wordModel) => {
  const locked = wordModel.locked.map(word => uniformColor(word, 'green'))
  const { errorDetected, comps } = checkAttempt(userInput, wordModel.challenge)
  const rest = wordModel.restOfLine.map(word => uniformColor(word, ""))
  const otherLines = wordModel.remainingLines.map(line => line.map(word => uniformColor(word, "")))

  let view = {
    errorDetected: errorDetected,
    lines: [
      [...locked, [...comps], ...rest],
      ...otherLines
    ]
  }
  return view
}