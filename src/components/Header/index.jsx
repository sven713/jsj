import React, { Component } from 'react'

import {nanoid} from 'nanoid'

import './index.css'

// console.log(nanoid())

export default class Header extends Component {

  // handleKeyUp(e){ 不行,赋值语句+箭头函数
  handleKeyUp=(e)=>{
    const {target} = e
    console.log('2222',target.value)
    if(e.code === "Enter" && target.value.trim()=== ''){
      alert('输入不能为空')
      return
    }
    if(e.code === "Enter" && target.value){
      // 去掉handleChange  在这里就能取得已经输入的值
      const todo = {
        name:target.value,
        done:false,
        id : nanoid()
      }
      this.props.addTodos(todo)

      target.value = ''
    }
  }

  // handleChange(e){
  //   console.log('输入结果',e.target.value)
  // }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp}  type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>

    )
  }
}
