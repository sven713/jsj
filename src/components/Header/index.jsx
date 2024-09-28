import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
 class Header extends Component {
  goback = ()=> {
    console.log('AAAAA',this.props)
    this.props.history.goBack()
  }
  render() {
    console.log('普通组件接收',this.props)
    return (
      <div className="page-header"><h2>??React Router Demo</h2>
      
        <button onClick={this.goback}>后退</button>
        <button onClick={this.foward}>前进</button>
        <button onClick={this.goMethod}>GO</button>
      </div>
    )
  }
}

export default withRouter(Header)