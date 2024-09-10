import React, { Component } from 'react'
import axios from 'axios'

import PubSub from 'pubsub-js'

export default class Search extends Component {


  state = {
    inputStr:''
  }

  search = ()=>{
    // 获取input值
    const { inputStr } = this.state    

    PubSub.publish('kUpdata',{isLoading:true})
    

    axios.get(`http://localhost:3000/search/users?q=${inputStr}`).then(
      response => {
        console.log('成功了',response.data)
        

        PubSub.publish('kUpdata',{
          userArr: response.data.items,
          isFirst:false,
          isLoading:false
        })
      },
      error =>{
          console.log('失败了',error )
          
          PubSub.publish('kUpdata',{
            err:error.message,
            isLoading:false,
            isFirst:false,
          })
      }
    )

  }


  //todo:使用ref
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
