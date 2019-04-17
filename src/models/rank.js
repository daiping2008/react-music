import HTTP from '../utils/http'

class RankModel extends HTTP{
  getTop(idx) {
    return this.request(`/top/list?idx=${idx}`)
  }
}

export default RankModel