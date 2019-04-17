import HTTP from '../utils/http'

class SearchModel extends HTTP {
  getSearchHot() {
    return this.request('/search/hot')
  }
}

export default SearchModel