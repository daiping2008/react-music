import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  artists:[]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_SINGER:
      return state.set('artists', action.artists)  
    default:
      return state
  }
}
