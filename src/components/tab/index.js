import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import './index.scss'

class Tab extends Component {
  render() {
    return (
      <div className="tab-container">
        {this.renderTab()}
      </div>
    )
  }

  renderTab() {
    return (
      this.props.tabs.map(item => (
        <NavLink activeClassName="active" key={item.name} to={item.path} className="tab-item">
          <div className="tab-name">{item.name}</div>
        </NavLink>
      ))
    )
  }
}

const mapStateToProps = state => {
  return {
    tabs: state.get('tab').get('tabs').toJS()
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tab)