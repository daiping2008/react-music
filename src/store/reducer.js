import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer} from './recommend'
import { reducer as tabReducer} from './tab'
import { reducer as artistsReducer} from './artists'
import { reducer as rankReducer} from './rank'

export default combineReducers({
  recommend: recommendReducer,
  tab: tabReducer,
  artists: artistsReducer,
  rank: rankReducer
})