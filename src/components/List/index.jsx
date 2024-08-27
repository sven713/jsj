import React, { Component } from 'react'

import Item from '../Item'

import  './index.css'
export default class List extends Component {

    

  render() {
    const {todos} = this.props
    return (
        <ul className="todo-main">
        
        {/* <Item></Item>
        <Item></Item>
        <Item></Item> */}
        {
            todos.map((item)=>{
                return <Item item={item} key={item.id} checkedChanged={this.props.checkedChanged}></Item>
            })
        }
      </ul>
      
    )
  }
}
