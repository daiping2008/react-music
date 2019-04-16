import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'
import RecommendModel from '../../models/recommend'
const recommendModel = new RecommendModel()

export const setUsername = username => ({
  type: actionTypes.SET_USERNAME,
  username
})

export const setBanners = banners => ({
  type: actionTypes.SET_BANNER,
  banners:fromJS(banners)
})

export const setRecommendList = list => ({
  type: actionTypes.SET_RECOMMENDLIST,
  recommendList: fromJS(list)
})

export const getBanners = () => {
  return dispatch => {
    recommendModel.getBanner()
      .then(res=>{
        const banners = res.banners
        dispatch(setBanners(banners))
      })
  }
}

export const getList = () => {
  return dispatch => {
    recommendModel.getList()
      .then(res=>{
        const list = res.result
        dispatch(setRecommendList(list))
      })
  }
}