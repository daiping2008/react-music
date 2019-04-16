import React, { Component} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Recommend from './views/recommend/recommend'
import Artists from './views/artists/artists'

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Recommend} />
          <Route path="/artists" exact component={Artists} />
          {/* <Route path="/recommend" exact component={Recommend} ></Route> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default Router