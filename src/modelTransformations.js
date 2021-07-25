import { cutOrFill, lineify } from "./pureFunctions";

export const initModel = (sourceText, wordLimit, scrollingMode = true) => {
  if (scrollingMode) {
    return initForScrolling(cutOrFill(sourceText, wordLimit))
  } else {
    return initForLineByLine(lineify(sourceText, wordLimit, 40))
  }
}

/**
 * The text prompt has two mutually-exclusive modes that operate 
 * differently enough that the slightly more complex mode --
 * LineByLine -- has a slightly more complex model. The in-model
 * comments in the emptyBaseModel (in implementation) demonstrate
 * the difference.
 * 
 * The `locked` array holds words on the currently-live line that
 * have been matched and can't be deleted, though they remain visible.
 * 
 * The `remainingLines` array is like `restOfLine`, but for lines
 * instead of words. It's up to the view to determine how many of
 * these to display in advance.
 * 
 * @param {string | function} targetStringOrFunction 
 * @param {number} repeats 
 * @returns 
 */
export const initForScrolling = (targetStringOrFunction, repeats = 1) => {
  let emptyBaseModel = {
    isLineByLineMode: false,
    target: "",
    gameState: "ready",
    currentKeyPresses: 0,
    totalKeyPresses: 0,
    userText: "",
    hidden: [],
    // locked: [], 👈 Only used in line-by-line mode
    challenge: "",
    challengeView: {
      overallVerdict: "not yet attempted",
      charSpecs: []
    },
    restOfLine: [],
    // remainingLines: [], 👈 Only used in line-by-line mode
  };

  const targetString = typeof targetStringOrFunction === 'string' ? targetStringOrFunction : targetStringOrFunction()
  const wordArray = targetString.split(" ");
  const list = JSON.parse(JSON.stringify(Array(repeats).fill(wordArray).flat(1)));

  const [first, ...rest] = list;

  if (!first) return emptyBaseModel;

  return {
    ...emptyBaseModel,
    target: targetStringOrFunction,
    challenge: first,
    challengeView: objectize(first),
    restOfLine: rest,
  };
};

export const initForLineByLine = (linesOrFunction = ["Check your code", "initForLineByLine got no params"]) => {
  let emptyBaseModel = {
    isLineByLineMode: true,
    target: "",
    gameState: "ready",
    currentKeyPresses: 0,
    totalKeyPresses: 0,
    userText: "",
    hidden: [],
    locked: [], // 👈 Only used in line-by-line mode
    challenge: "",
    challengeView: {
      overallVerdict: "not yet attempted",
      charSpecs: []
    },
    restOfLine: [],
    remainingLines: [], // 👈 Only used in line-by-line mode
  };

  const lines = typeof linesOrFunction === 'function'
    ? linesOrFunction()
    : linesOrFunction

  const [first, ...rest] = lines[0].split(" ");

  if (!first) return emptyBaseModel;

  return {
    ...emptyBaseModel,
    target: linesOrFunction,
    challenge: first,
    challengeView: objectize(first),
    restOfLine: rest,
    remainingLines: lines.slice(1)
  };
}

export const addSymbol = (model, sym) => {
  if (model.gameState === "over") return model

  // Except on the very last word, a space is needed to confirm each challenge
  const challengeAchieved = sym === " " && model.userText === model.challenge
  const achievementImminent = model.userText + sym === model.challenge
  const lastLine = model.isLineByLineMode ? !model.remainingLines?.length : true
  const lastWord = model.restOfLine.length === 0 && lastLine

  const advanceCurrentWord = challengeAchieved || lastWord && achievementImminent

  if (advanceCurrentWord) {
    const lastWordKeyPress = achievementImminent ? 1 : 0;
    model = {
      ...model,
      totalKeyPresses: model.totalKeyPresses + model.currentKeyPresses + lastWordKeyPress,
      currentKeyPresses: 0
    }

    return model.isLineByLineMode ?
      addSymbolLineByLine(model)
      : addSymbolScrolling(model)
  } else {
    return addIncompleteSymbol(model, sym)
  }
}

export const addSymbolScrolling = (model) => {
  const [next, ...rest] = model.restOfLine
  const newChallenge = next ?? ""

  let updated = {
    ...model,
    userText: "",
    hidden: [...model.hidden, model.challenge],
    challenge: newChallenge,
    challengeView: evaluate(newChallenge, ""),
    restOfLine: rest
  }
  return updated.challenge.length ? updated : gameover(updated)
}

export const addSymbolLineByLine = (model) => {
  let updated = {
    ...model,
    userText: "",
    locked: [...model.locked, model.challenge]
  }

  let hidden = model.hidden;
  let locked = model.locked
  let challenge = model.challenge;
  let restOfLine = model.restOfLine
  let remainingLines = model.remainingLines

  const endOfTheLine = restOfLine?.length === 0

  if (endOfTheLine) {
    const [nextLine, ...otherLines] = remainingLines
    restOfLine = nextLine
    remainingLines = otherLines
    hidden = [...hidden, ...locked, challenge]
    locked = []

    if (restOfLine?.length) {
      const [nextWord, ...otherWords] = restOfLine.split(" ")
      challenge = nextWord
      restOfLine = otherWords
    } else {
      challenge = ""
    }

  } else {
    const [nextWord, ...otherWords] = restOfLine
    locked = [...locked, challenge]
    challenge = nextWord
    restOfLine = otherWords
  }

  updated = {
    ...updated,
    hidden: hidden,
    locked: locked,
    challenge: challenge,
    challengeView: evaluate(challenge ?? "", ""),
    restOfLine: restOfLine,
    remainingLines: remainingLines,
  }

  return updated.challenge?.length ? updated : gameover(updated)
}

const addIncompleteSymbol = (model, sym) => {
  const userText = model.userText + sym
  const view = evaluate(model.challenge, userText)
  return {
    ...model,
    gameState: "on", // Game begins when user starts typing in input
    currentKeyPresses: model.currentKeyPresses + 1,
    userText: userText,
    challengeView: view
  }
}

export const backspace = (model) => {
  // There's no way in the loop to distinguish between backspacing
  // over the first character vs. backspacing when nothing's yet
  // been typed, so just handle the latter case up front.
  if (!model.userText.length) {
    return model
  }

  const userText = model.userText.slice(0, -1)
  const charSpecs = model.challengeView.charSpecs
  let updatedCharSpecs = []
  let updatedVerdict = "no errors"
  for (let i = charSpecs.length - 1; i >= 0; i--) {
    const charSpec = charSpecs[i]
    const color = i === userText.length ? 'gray' : charSpec.color
    updatedCharSpecs.unshift({ ...charSpec, color: color })
    if (color === 'red') {
      updatedVerdict = "error"
    }
  }
  return {
    ...model,
    currentKeyPresses: model.currentKeyPresses + 1,
    userText: userText,
    challengeView: {
      overallVerdict: updatedVerdict,
      charSpecs: updatedCharSpecs
    }
  }
}

export const gameover = model => {
  let hidden = model.isLineByLineMode
    ? [...model.hidden, ...model.locked]
    : model.hidden

  const lastWordAchieved = model.userText && model.userText === model.challenge
  if (lastWordAchieved) {
    hidden = [...hidden, model.challenge]
  }

  let finalTotal = model.totalKeyPresses + (lastWordAchieved ? model.currentKeyPresses : 0)

  return {
    ...model,
    gameState: "over",
    totalKeyPresses: finalTotal,
    userText: "",
    hidden: hidden,
    challenge: "",
  }
}

const objectize = (wordOrWords) => {
  if (!wordOrWords) return wordOrWords

  if (typeof wordOrWords === "string")
    return {
      overallVerdict: "not yet attempted", charSpecs: wordOrWords.split("").map((char => {
        return { char: char }
      })
      )
    }

  return wordOrWords.map(w => {
    return {
      overallVerdict: "not yet attempted", charSpecs: [...w].map((char) => {
        return { char: char };
      })
    }
  })
}

const evaluate = (challenge, attempt) => {
  if (attempt === challenge + " ") {
    return { overallVerdict: "completed" }
  }

  const result = challenge.split("").reduce(
    ({ overallVerdict, charSpecs }, curr, i) => {
      const userChar = attempt[i]
      const match = userChar === curr
      const attempted = userChar !== undefined

      let verdict
      let color

      if (!attempted) {
        verdict = overallVerdict
        color = ""
      } else {

        if (overallVerdict === "error") {
          verdict = overallVerdict
        } else {
          verdict = match || !attempted ? "no errors" : "error"
        }

        if (!attempted) {
          color = ""
        } else if (verdict === "error") {
          // Once one mistake's been made, color the rest
          // of the word red
          color = "red"
        } else {
          color = match ? "green" : "red"
        }
      }

      return {
        overallVerdict: verdict,
        charSpecs: [
          ...charSpecs,
          { char: curr, color: color }
        ]
      }
    },
    { overallVerdict: "not yet attempted", charSpecs: [] }
  )

  // Correct word with incorrect suffix
  // E.g., challenge→"and", attempt→"andd"
  if (attempt.length > challenge.length) {
    result.overallVerdict = "error"
  }

  return result
}