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


  render() {
    const {msgArr} = this.state
    return (
      <div>
        <ul>
         
          {
            msgArr.map((msg)=> {
              return (
                <li key={msg.id}>
                  {/* param传参: */}
                  {/* <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link> */}
                  <Link to={`/home/message/detail/?id=${msg.id}&title=${msg.title}`}>{msg.title}</Link>

                </li>
              )
            })
          }
        </ul>
        <Route path='/home/message/detail/' component={Detail}></Route>

      </div>
    )
  }
}
