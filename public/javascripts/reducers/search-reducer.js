import {
  UPDATE
 } from '../actions'

const searchReducer = (state='', action) => {
  // Declare a shallow copy of the state
  const newState = state
  // Choose which action is run
  switch (action.type) {
    case UPDATE:
      return newState
    default:
      return newState
  }
}

export default searchReducer
