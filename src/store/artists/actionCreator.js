import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'

import ArtistsModel from '../../models/artists'
const artistsModel = new ArtistsModel()

export const setArtists = artists => ({
  type: actionTypes.SET_SINGER,
  artists: fromJS(artists)
})

export const getArtists = () => {
  return dispatch => {
    artistsModel.getArtists().then(res=>{
      const artists = res.artists
      dispatch(setArtists(artists))
    })
  }
}