import React, { Component } from 'react'
import { Route, Router,Switch } from 'react-router-dom/cjs/react-router-dom.min'

import MyNavLink from '../../components/MyNavLink/MyNavLink'

import News from './News'
import Message from './Message'

export default class Home extends Component {
  render() {
    console.log('路由组件接收', this.props)
    return (
      <div>主页组件!!


        <ul className="nav nav-tabs">
          <li>
            {/* <a className="list-group-item" href="./home-news.html">News</a> */}
            <MyNavLink to='/home/news'>News</MyNavLink>
          </li>
          <li>
            {/* <a className="list-group-item" href="./home-message.html">Message</a> */}
            <MyNavLink to='/home/message'>Message</MyNavLink>
          </li>

          
        </ul>


        {/* <News></News>
        <Message></Message> */}
        <Switch>
          <Route path='/home/news' component={News}></Route>
          <Route path='/home/message' component={Message}></Route>
        </Switch>
      </div>
    )
  }
}
