import {fromJS} from 'immutable'
import { actionTypes } from '.';

const defaultState = fromJS({
  rankList:[]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_RANK:
      return state.update('rankList', item => item.concat([action.rankList]))
    default:
      return state
  }
}