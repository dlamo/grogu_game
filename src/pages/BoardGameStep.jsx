import { ADVANCE_POSITION, TAKE_CUPBOARD_ELEMENT } from "../reducer/store"

export default function BoardGameStep({state, dispatch}) {
  const handleClickDice = () => {
    const diceValue = Math.ceil(4 * Math.random())
    const diceActions = {
      1: 'cookies',
      2: 'eggs',
      3: 'frogs',
    }
    diceValue < 4
      ? dispatch({type: TAKE_CUPBOARD_ELEMENT, payload: diceActions[diceValue.toString()]})
      : dispatch({type: ADVANCE_POSITION}) 
  }
  
  return (
    <div>
      <p>Cookies: {state.cupboard.cookies}</p>
      <p>Eggs: {state.cupboard.eggs}</p>
      <p>Frogs: {state.cupboard.frogs}</p>
      <p>Position: {state.position}</p>
      <button onClick={handleClickDice}>Tira el dado</button>
    </div>
  )
}