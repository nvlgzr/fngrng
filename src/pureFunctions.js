import { masterList } from "./tenThousandWords.js";

export const objectize = (wordOrWords, color = "") => {
  if (!wordOrWords) return wordOrWords

  if (typeof wordOrWords === "string")
    return wordOrWords.split("").map((char => {
      return color ? { char: char, color: color } : { char: char }
    })
    )

  return wordOrWords.map(w => {
    return [...w].map((char) => {
      return color ? { char: char, color: color } : { char: char }
    })
  })
}

export const cutOrFill = (phrase, targetNumber) => {
  let sliced = phrase.split(" ")
  while (sliced.length < targetNumber)
    sliced = [...sliced, ...sliced]
  return sliced.slice(0, targetNumber).join(' ')
}

export const lineify = (phrase, maxWords = 70, maxLettersPerLine = 35) => {
  const resized = cutOrFill(phrase, maxWords)

  const adjustedMax = maxLettersPerLine + 1 // + 1 grabs trailing " "
  const phraseWithTerminalSpace = resized + " "
  let i = 0
  let j = i + adjustedMax
  let candidate = ""
  let lines = []
  let wordCount = 0

  while ((candidate = phraseWithTerminalSpace.slice(i, j)) && wordCount <= maxWords) {
    const lastSpaceInCandidate = candidate.lastIndexOf(" ")
    j = i + lastSpaceInCandidate + 1 // + 1 discards trailing " "

    let words = resized.slice(i, j).split(" ").filter(w => w.length)

    wordCount += words.length

    if (wordCount > maxWords) {
      const overage = wordCount - maxWords
      words = words.slice(0, words.length - overage)
    }

    i = j
    j = i + adjustedMax

    lines.push(words.join(" "))
  }
  return lines
}

export const leftMinusRight = (left, right) =>
  [...(new Set(left))].filter(el => !(new Set(right).has(el)))

export function filterWordList(wordList, lettersToInclude) {
  const allValidLetters = (l, r) => leftMinusRight(l, r).length === 0

  return wordList.filter((word) => allValidLetters(word, lettersToInclude))
}

// Fisher-Yates shuffle: https://bost.ocks.org/mike/shuffle/
export function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

export function remap(letter, mapping) {
  let mapped = mapping[letter]

  if (!mapped && mapping.shiftLayer)
    mapped = mapping.shiftLayer[letter]

  if (!mapped && /[A-Z]/.test(letter))
    mapped = mapping[letter.toLowerCase()].toUpperCase()

  return mapped ?? letter
}
