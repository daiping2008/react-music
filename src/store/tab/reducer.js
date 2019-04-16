import {fromJS} from 'immutable'

const defaultState = fromJS({
  tabs:[
    {
      name:'推荐',
      path:'/',
      icon:''
    },
    {
      name:'歌手',
      path:'/artists',
      icon:''
    },
    {
      name:'排行榜',
      path:'/rank',
      icon:''
    },
    {
      name:'搜索',
      path:'/search',
      icon:''
    }
  ]
})

export default (state = defaultState, action) => {
  switch(action.type) {
    default: return state
  }
}