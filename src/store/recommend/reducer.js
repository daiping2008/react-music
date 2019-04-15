import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  username:'Susan'
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_USERNAME:
      return state.set('username', action.username)
    default: return state
  }
}