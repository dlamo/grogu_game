import { NEXT_STEP } from "../reducer/store"

export default function StartGameStep({dispatch}) {
  const handleClick = () => dispatch({type: NEXT_STEP})
  return <button onClick={handleClick}>Empezar la partida</button>
}