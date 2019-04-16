import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  username:'Susan',
  banners:[],
  recommendList:[]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.SET_USERNAME:
      return state.set('username', action.username)
    case actionTypes.SET_BANNER:
      return state.set('banners', action.banners)
    case actionTypes.SET_RECOMMENDLIST:
      return state.set('recommendList', action.recommendList)
    default: return state
  }
}
