import { useEffect, useReducer } from "react"

import reducer, { END_GAME, initialState } from "../reducer/store"

import StartGameStep from "./StartGameStep"
import BoardGameStep from "./BoardGameStep"
import EndGameStep from "./EndGameStep"

export default function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    if (state.step === 1) {
      const isEmptyCupboard = Object.values(state.cupboard).every(e => e === 0)
      if (isEmptyCupboard) {
        dispatch({type: END_GAME, payload: 'failure'})
      }
      if (state.position === 6) {
        dispatch({type: END_GAME, payload: 'success'})
      }
    }
  }, [state])

  const showStep = (step) => {
    const stepHashMap = {
      0: <StartGameStep {...{dispatch}} />,
      1: <BoardGameStep {...{state, dispatch}} />,
      2: <EndGameStep {...{state, dispatch}} />,
    }
    return stepHashMap[step]
  }

  return <div className="container">
    {showStep(state.step)}
  </div>
}