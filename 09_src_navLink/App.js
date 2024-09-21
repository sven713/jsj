import React, { Component } from 'react'
import {NavLink ,Route} from 'react-router-dom'

import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'

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
              {/* <a className="list-group-item active" href="./about.html">About</a>
              <a className="list-group-item" href="./home.html">Home</a> */}
              {/* <BrowserRouter> */}
                <NavLink activeClassName='aClass' className='list-group-item' to='/about'>about</NavLink>
                <NavLink activeClassName='aClass' className='list-group-item' to='/home'>home</NavLink>
              {/* </BrowserRouter> */}

            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Route path='/about' component={About}></Route>
                <Route path='/home' component={Home}></Route>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
