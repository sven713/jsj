import React, { Component } from 'react'
import Search from './components/Search'
import List from './components/List'

export default class gitDemo extends Component {

  state = {
    userArr:[]
  }

  showList = (arr)=> {
    console.log('aapp',arr)
    this.setState({
      userArr: arr
    })
  }

  render() {
    const {userArr} = this.state
    return (
        <div className="container">
        
            <Search showList={this.showList}></Search>
            <List userArr={userArr}></List>
        
      </div>
    )
  }
}
