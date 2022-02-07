export const initialState = {
  step: 0,
  position: 0,
  cupboard: {
    cookies: 3,
    eggs: 3,
    frogs: 3
  }
}

export const NEXT_STEP = 'NEXT_STEP'

export default function reducer(state, action) {
  switch (action.type) {
    case NEXT_STEP:
      return {...state, step: state.step + 1}
    default:
      return state
  }
}