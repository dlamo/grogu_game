import Cell from "../components/Cell"
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
    <div className="board">
      <div className="cells">
        {[...Array(7)].map((_, i) => <Cell key={i} {...{state, idx: i}} />)}
      </div>
      <div className="right-board">
        <button onClick={handleClickDice}>Tira el dado</button>
        <p>Galletas: {state.cupboard.cookies}</p>
        <p>Huevos: {state.cupboard.eggs}</p>
        <p>Ranas: {state.cupboard.frogs}</p>
      </div>
    </div>
  )
}