import { RESTART_GAME } from "../reducer/store"

export default function EndSuccessStep({dispatch}) {
  const handleRestart = () => dispatch({type: RESTART_GAME})
  return <>
    <h1>Grogu se ha comido todo!</h1>
    <button onClick={handleRestart}>Empezar de nuevo</button>
  </>
}