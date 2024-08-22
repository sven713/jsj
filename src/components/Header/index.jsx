import React, { Component } from 'react'
import './index.css'
export default class Header extends Component {

  handleKeyUp(e){
    console.log('2222',e)
    if(e.code === "Enter"){
      //TODO: 去掉handleChange  在这里就能取得已经输入的值
    }
  }

  handleChange(e){
    console.log('输入结果',e.target.value)
  }

  render() {
    return (
        <div className="todo-header">
            <input onKeyUp={this.handleKeyUp} onChange={this.handleChange} type="text" placeholder="请输入你的任务名称，按回车键确认" />
        </div>

    )
  }
}
