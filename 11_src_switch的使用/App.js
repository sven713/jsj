import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Test from './pages/Test'
import MyNavLink from './components/MyNavLink/MyNavLink'

export default class gitDemo extends Component {
  

  render() {

    return (
      <div id="root">
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            
            <Header></Header>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              
                {/* <NavLink activeClassName='aClass' className='list-group-item' to='/about'>about</NavLink>
                <NavLink activeClassName='aClass' className='list-group-item' to='/home'>home</NavLink> */}
                <MyNavLink to='/about' title='about' children='about!'/>
                <MyNavLink to='/home' title='home' children='home!!'/>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                <Route path='/about' component={About}></Route>
                <Route path='/home' component={Home}></Route>
                <Route path='/home' component={Test}></Route>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
