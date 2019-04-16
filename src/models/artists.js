import HTTP from '../utils/http'

class ArtistsModel extends HTTP {
  getArtists() {
    return this.request('/top/artists?limit=100')
  }
}

export default ArtistsModel