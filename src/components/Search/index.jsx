import React, { Component } from 'react'
import axios from 'axios'
export default class Search extends Component {


  state = {
    inputStr:''
  }

  search = ()=>{
    // 获取input值
    const { inputStr } = this.state

    console.log('!!!!',inputStr)
    // https://api.github.com/search/users?q=xxxxxx
    // http://localhost:5000/search/users2
    axios.get(`http://localhost:3000/search/users?q=${inputStr}`).then(
      response => {
        console.log('成功了',response.data)
        this.props.showList(response.data.items)
      },
      error =>{
          console.log('失败了',error )
      }
    )

  }

  handleInput = (e)=> {
    
    this.setState({
      inputStr:e.target.value
    })
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input onChange={this.handleInput} type="text" placeholder="enter the name you search" />&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
