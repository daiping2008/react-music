import RankModel from '../../models/rank'
import { actionTypes } from '.';
import { fromJS } from 'immutable';
const rankModel = new RankModel()
const CLOUD_MUSIC = [0, 1, 2, 3, 4, 15, 23]

export const setRank = list => ({
  type: actionTypes.SET_RANK,
  rankList: fromJS(list)
})

export const getTop = () => {
  return dispatch => {
    CLOUD_MUSIC.forEach(ele => {
      rankModel.getTop(ele).then(res => {
        const playlist = res.playlist
        dispatch(setRank(playlist))
      })
    })
  }
}