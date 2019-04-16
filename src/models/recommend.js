import HTTP from '../utils/http'

class RecommendModel extends HTTP {
  getBanner() {
    return this.request('/banner')
  }

  getList() {
    return this.request('/personalized')
  }
}

export default RecommendModel