export const initForScrolling = (targetStringOrFunction, repeats = 1) => {
  const emptyBaseModel = {
    target: "",
    gameState: "ready",
    totalKeyPresses: 0,
    userText: "",
    hidden: [],
    // locked: [],
    challenge: "",
    challengeView: {},
    restOfLine: [],
    // remainingLines: [],
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

export const addSymbol = (model, sym) => {
  if (sym === " ") {
    if (model.userText === model.challenge) {
      const [next, ...rest] = model.restOfLine
      const newChallenge = next ?? ""
      const gameState = rest.length ? model.gameState : "over"

      return {
        ...model,
        gameState: gameState,
        userText: "",
        hidden: [...model.hidden, model.challenge],
        challenge: newChallenge,
        challengeView: evaluate(newChallenge, ""),
        restOfLine: rest
      }
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
    // console.log(i, charSpec)
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

export const handleReturn = (model) => {
  return model.gameState !== "over" ? model : initForScrolling(model.target)
}

export const gameover = model => {
  let hidden = model.hidden
  let challenge = model.challenge
  if (model.userText === challenge) {
    hidden = [...hidden, challenge]
  }

  return {
    ...model,
    gameState: "over",
    userText: "",
    hidden: hidden
  }
}

const objectize = (wordOrWords) => {
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