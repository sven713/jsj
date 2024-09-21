import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log('路由组件接收',this.props)
    return (
      <div>主页组件!!</div>
    )
  }
}
