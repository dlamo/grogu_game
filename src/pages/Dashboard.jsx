import { useReducer } from "react"

import reducer, { initialState } from "../reducer/store"

import BoardGameStep from "./BoardGameStep"
import EndFailureStep from "./EndFailureStep"
import EndSuccessStep from "./EndSuccessStep"
import StartGameStep from "./StartGameStep"

export default function Dashboard() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const showStep = (step) => {
    const stepHashMap = {
      0: <StartGameStep />,
      1: <BoardGameStep />,
      2: <EndSuccessStep />,
      3: <EndFailureStep />
    }
    return stepHashMap[step]
  }

  return <div className="container">
    {showStep(state.step)}
  </div>
}