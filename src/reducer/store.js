export const initialState = {
  step: 0,
  position: 0,
  cupboard: {
    cookies: 3,
    eggs: 3,
    frogs: 3
  },
  end: 'failure'
}

export const NEXT_STEP = 'NEXT_STEP'
export const TAKE_CUPBOARD_ELEMENT = 'TAKE_CUPBOARD_ELEMENT'
export const ADVANCE_POSITION = 'ADVANCE_POSITION'
export const END_GAME = 'END_GAME'
export const RESTART_GAME = 'RESTART_GAME'

export default function reducer(state, action) {
  switch (action.type) {
    case NEXT_STEP:
      return {...state, step: state.step + 1}
    case TAKE_CUPBOARD_ELEMENT:
      return {...state, cupboard: {...state.cupboard, [action.payload]: state.cupboard[action.payload] > 0 ? state.cupboard[action.payload] - 1 : 0}}
    case ADVANCE_POSITION:
      return {...state, position: state.position + 1}
    case END_GAME:
      return {...state, step: 2, end: action.payload}
    case RESTART_GAME: {
      return {...initialState}
    }
    default:
      return state
  }
}