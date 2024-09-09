import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class gitDemo extends Component {

  state = {
    userArr:[],
    isFirst: true,
    isLoading:false,
    err:''
  }

  updataState = (stateObj)=> {
    console.log('aapp',stateObj)
    this.setState(stateObj)
  }

  render() {
    const {userArr} = this.state
    return (
        <div className="container">
        
            <Search updataState={this.updataState}></Search>
            <List {...this.state}></List>
        
      </div>
    )
  }
}
