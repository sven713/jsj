import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Footer extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired
      }


    ifSelectAll = (e)=> {
        const check = e.target.checked
        console.log('ddd//',e)
        this.props.ifAllSelect(check)
    }
    
    deleteDone =(e)=>{
        const {todos} = this.props
        const doneCount = todos.reduce((pre, item)=>{
            return item.done ? pre + 1 : pre
        }, 0)
        if(doneCount == 0){
            alert('没有可以删除的项目')
            return
        }
        this.props.doneDelete()
    }

    render() {
        
        const {todos} = this.props
        const doneArr = todos.filter((item)=>{
            return item.done
        })

        // reduce: js+es6基础
        const doneCount = todos.reduce((pre, item)=>{
            return item.done ? pre + 1 : pre
        }, 0)

        return (

            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.ifSelectAll} checked={doneArr.length === todos.length && todos.length > 0}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.deleteDone}>清除已完成任务</button>
            </div>

        )
    }
}
