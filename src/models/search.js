import HTTP from '../utils/http'
import {__SEARCH_HIS__} from '../utils/storageKeys'
const MAX_HIS = 10
class SearchModel extends HTTP {
  getSearchHot() {
    return this.request('/search/hot')
  }

  getSearchSuggest (q) {
    return this.request(`/search/suggest?keywords=${q}`)
  }

  clearHis() {
    localStorage.setItem(__SEARCH_HIS__, JSON.stringify([]))
  }

  delHis(idx) {
    const arr = this.getHis()
    arr.splice(idx, 1)
    localStorage.setItem(__SEARCH_HIS__, JSON.stringify(arr))
  }

  getHis() {
    return JSON.parse(localStorage.getItem(__SEARCH_HIS__))
  }

  setHis(value) {
    const arr = this.getHis()

    if (!arr) {
      localStorage.setItem(__SEARCH_HIS__, JSON.stringify([value]))
    }
    if (arr.includes(value)) {
      return
    }
    if (arr.length >= MAX_HIS) {
      arr.pop()
    }
    arr.unshift(value)

    localStorage.setItem(__SEARCH_HIS__, JSON.stringify(arr))
  }
}

export default SearchModel