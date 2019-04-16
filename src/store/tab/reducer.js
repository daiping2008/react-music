import {fromJS} from 'immutable'

const defaultState = fromJS({
  tabs:[
    {
      name:'推荐',
      path:'/recommend',
      icon:''
    },
    {
      name:'歌手',
      path:'/singer',
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