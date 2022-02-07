import { RESTART_GAME } from "../reducer/store"

export default function EndGameStep({dispatch, state}) {
  const handleRestart = () => dispatch({type: RESTART_GAME})
  const headerText = state.end === 'success' 
    ? 'Grogu se ha comido todo!'
    : 'Mando completa la misión'
  return <>
    <h1>{headerText}</h1>
    <button onClick={handleRestart}>Empezar de nuevo</button>
  </>
}