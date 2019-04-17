import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from './recommend'
import { reducer as tabReducer } from './tab'
import { reducer as artistsReducer } from './artists'
import { reducer as rankReducer } from './rank'
import { reducer as searchReducer } from './search'

export default combineReducers({
  recommend: recommendReducer,
  tab: tabReducer,
  artists: artistsReducer,
  rank: rankReducer,
  search: searchReducer
})