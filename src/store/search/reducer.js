import {fromJS} from 'immutable'
import { actionTypes } from '.';

const defaultState = fromJS({
  hots: [],
  his:[],
  albums:[],
  artists:[],
  songs:[],
  playlists:[],
  mvs:[],
  order:[],
  showRes:false,
  q:'',
  loading: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_HOT:
      return state.set('hots', action.hots)
    case actionTypes.SET_HIS:
      return state.set('his', action.his)
    case actionTypes.SET_RES:
      const res = action.result
      console.log(res)
      return state.merge({
        albums: fromJS(res.albums),
        artists: fromJS(res.artists),
        songs: fromJS(res.songs),
        playlists: fromJS(res.playlists),
        mvs: fromJS(res.mvs),
        order: fromJS(res.order),
        
        loading: false
      })
    case actionTypes.SET_CLEAR:
      return state.merge({
        albums: fromJS([]),
        artists: fromJS([]),
        songs: fromJS([]),
        playlists: fromJS([]),
        mvs: fromJS([]),
        order: fromJS([]),
        showRes: false,
        q:''
      })
    case actionTypes.SET_Q:
      return state.set('q', action.q)
    case actionTypes.SET_LOADING:
      return state.merge({
        'loading': true,
        showRes: true
      })
    default:
      return state
  }
}