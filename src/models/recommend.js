import HTTP from '../utils/http'

class RecommendModel extends HTTP {
  getBanner() {
    return this.request('/banner')
  }
}

export default RecommendModel