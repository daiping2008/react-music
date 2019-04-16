import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  artists:[],
  letters: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_SINGER:
      return state.set('artists', action.artists)
    case actionTypes.SET_LETTERS:
      return state.set('letters', action.letters)
    default:
      return state
  }
}
