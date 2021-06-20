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
 * @param {boolean} isScrollingMode 
 * @param {string | function} targetStringOrFunction 
 * @param {number} repeats 
 * @returns 
 */
export const initForScrolling = (isScrollingMode = true, targetStringOrFunction, repeats = 1) => {
  let emptyBaseModel = {
    isLineByLineMode: !isScrollingMode,
    target: "",
    gameState: "ready",
    totalKeyPresses: 0,
    userText: "",
    hidden: [],
    // locked: [], 👈 Added in line-by-line mode
    challenge: "",
    challengeView: { overallVerdict: "not yet attempted", charSpecs: [] },
    restOfLine: [],
    // remainingLines: [], 👈 Added in line-by-line mode
  };

  if (!isScrollingMode) {
    emptyBaseModel = {
      ...emptyBaseModel,
      locked: [],
      remainingLines: []
    }
  }

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

export const addSymbol = (model, sym) => {
  if (model.gameState === "over") return model

  if (sym === " ") {
    if (model.userText === model.challenge) {
      const [next, ...rest] = model.restOfLine
      const newChallenge = next ?? ""

      const updated = {
        ...model,
        totalKeyPresses: model.totalKeyPresses + 1,
        userText: "",
        hidden: [...model.hidden, model.challenge],
        challenge: newChallenge,
        challengeView: evaluate(newChallenge, ""),
        restOfLine: rest
      }

      return updated.challenge.length ? updated : gameover(model)
    }
  }

  const userText = model.userText + sym
  return {
    ...model,
    gameState: "on",
    totalKeyPresses: model.totalKeyPresses + 1,
    userText: userText,
    challengeView: evaluate(model.challenge, userText)
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
    totalKeyPresses: model.totalKeyPresses + 1,
    userText: userText,
    challengeView: {
      overallVerdict: updatedVerdict,
      charSpecs: updatedCharSpecs
    }
  }
}

export const reset = (model) => {
  return model.gameState !== "over" ? model : initForScrolling(true, model.target)
}

export const gameover = model => {
  let hidden = model.hidden
  if (model.userText === model.challenge) {
    hidden = [...hidden, model.challenge]
  }

  return {
    ...model,
    gameState: "over",
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
  return result
}