import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer} from './recommend'
import { reducer as tabReducer} from './tab'
import { reducer as artistsReducer} from './artists'

export default combineReducers({
  recommend: recommendReducer,
  tab: tabReducer,
  artists: artistsReducer
})