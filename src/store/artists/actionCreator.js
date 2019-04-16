import {fromJS} from 'immutable'
import pinyin from 'pinyin'
import * as actionTypes from './actionTypes'

import ArtistsModel from '../../models/artists'
const artistsModel = new ArtistsModel()
const TOP_HOT = 10
const HOT_NAME = '热门'
export const setArtists = artists => ({
  type: actionTypes.SET_SINGER,
  artists: fromJS(artists)
})

export const setLetters = letters => ({
  type: actionTypes.SET_LETTERS,
  letters: fromJS(letters)
})

export const getArtists = () => {
  return dispatch => {
    artistsModel.getArtists().then(res=>{
      const artists = _normalizeArtists(res.artists, dispatch)
      dispatch(setArtists(artists))
    })
  }
}
// 对artists进行处理
const _normalizeArtists = (artists, dispatch) => {
  const map = {}
  // 先获得TOP10
  map['top'] = {
    title: HOT_NAME,
    items:[]
  }
  for (let i = 0; i < TOP_HOT; i++) {
    map['top'].items.push(artists[i])
  }
  // 按字母
  artists.forEach(ele => {
    const key = pinyin(ele.name)[0][0].charAt(0).toUpperCase()
    if (!map[key]) {
      map[key] = {
        title: key,
        items:[]
      }
    }
    map[key].items.push(ele)
  })
  const res = []
  const hot = []
  for (const key in map) {
    if (map[key].title.match(/[A-Z]/)) {
      res.push(map[key])
    }
    if (map[key].title === HOT_NAME) {
      hot.push(map[key])
    }
  }
  res.sort(function (a, b) {
    return a.title.charCodeAt(0) - b.title.charCodeAt(0)
  })

  const newArtists = hot.concat(res)
  // 标题存储到redux
  const letters = []
  newArtists.forEach(ele => {
    letters.push(ele.title)
  })

  dispatch(setLetters(letters))

  return newArtists
}