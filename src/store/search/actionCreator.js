import {fromJS} from 'immutable'
import SearchModel from '../../models/search'
import { actionTypes } from './';
const searchModel = new SearchModel()

export const setQ = q => ({
  type: actionTypes.SET_Q,
  q: fromJS(q)
})

export const clear = () => ({
  type: actionTypes.SET_CLEAR,
})

export const setHis = his => ({
  type: actionTypes.SET_HIS,
  his: fromJS(his)
})

export const setResult = result => ({
  type: actionTypes.SET_RES,
  result
})

export const setHots = hots => ({
  type: actionTypes.SET_HOT,
  hots: fromJS(hots)
})

export const setLoading = () => ({
  type: actionTypes.SET_LOADING
})

export const getSearchHot = () => (
  async dispatch => {
    dispatch(setHis(searchModel.getHis()))

    const res = await searchModel.getSearchHot()
    dispatch(setHots(res.result.hots))
  }
)

export const getSearchSuggest = q => (
  async dispatch => {
    searchModel.setHis(q)
    dispatch(setHis(searchModel.getHis()))
    dispatch(setQ(q))
    dispatch(setLoading())
    const res = await searchModel.getSearchSuggest(q)
    dispatch(setResult(res.result))
  }
)

export const delHis = idx => (
  dispatch => {
    searchModel.delHis(idx)
    dispatch(setHis(searchModel.getHis()))
  }
)

export const clearHis = () => {
  return dispatch => {
    searchModel.clearHis()
    dispatch(setHis(searchModel.getHis()))
  }
}