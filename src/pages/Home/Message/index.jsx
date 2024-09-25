import React, { Component } from 'react'
import {Link, Route} from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {


  state = {
    msgArr:[
      {
        id:'01',
        title:'消息1'
      },
      {
        id:'02',
        title:'消息2'
      },
      {
        id:'03',
        title:'消息3'
      },
    ]
  }

  replaceShow = (id, title)=> {
    console.log('ddddd',id,title)
    // this.props.history.replace(`/home/message/detail/${id}/${title}`)

    // this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)
    this.props.history.replace(`/home/message/detail`,{id,title})


  }

  pushShow = (id, title)=> {
    // console.log('ddddd',id,title)
    // this.props.history.push(`/home/message/detail/${id}/${title}`)
    // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    this.props.history.push(`/home/message/detail`,{id,title})

  }

  goback = ()=> {
    this.props.history.goBack()
  }

  foward = ()=> {
    this.props.history.goForward()
  }
  
  goMethod = ()=> {
    this.props.history.go(-2)
  }

  render() {
    const {msgArr} = this.state
    return (
      <div>
        <ul>
         
          {
            msgArr.map((msg)=> {
              return (
                <li key={msg.id}>
                 
                  {/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}
                  {/* <Link to={`/home/message/detail?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link> */}
                  <Link replace={false} to={{pathname:'/home/message/detail', state:{id:msg.id, title:msg.title}}}>{msg.title}</Link>

                  &nbsp;<button onClick={()=>this.pushShow(msg.id, msg.title)}>push查看</button>
                  &nbsp;<button onClick={()=>this.replaceShow(msg.id, msg.title)}>replace查看</button>
                </li>
              )
            })
          }
        </ul>
        {/* <Route path='/home/message/detail/:id/:title' component={Detail}></Route> */}
        <Route path='/home/message/detail' component={Detail}></Route>

        <button onClick={this.goback}>后退</button>
        <button onClick={this.foward}>前进</button>
        <button onClick={this.goMethod}>GO</button>
      </div>
    )
  }
}
