import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class gitDemo extends Component {


  render() {
    return (
        <div className="container">
        
            <Search ></Search>
            <List></List>
      </div>
    )
  }
}
