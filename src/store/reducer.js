import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer} from './recommend'
import { reducer as tabReducer} from './tab'

export default combineReducers({
  recommend: recommendReducer,
  tab: tabReducer
})