import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
export default class Footer extends Component {

    static propTypes = {
        todos: PropTypes.array.isRequired
      }

    render() {
        const {todos} = this.props
        return (

            <div className="todo-footer">
                <label>
                    <input type="checkbox" />
                </label>
                <span>
                    <span>已完成0</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger">清除已完成任务</button>
            </div>

        )
    }
}
