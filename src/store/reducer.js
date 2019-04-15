import { combineReducers } from 'redux'
import { reducer as recommendReducer} from './recommend'

export default combineReducers({
  recommend: recommendReducer
})