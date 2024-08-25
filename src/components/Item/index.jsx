import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

    state = {
        mouse: false
    }

    handleMouse = (e)=>{
        // console.log('dddd',e)

        return ()=>{ // !!!高阶函数,因为 onMouseEnter={this.handleMouse(true)}  传了参数true
            console.log('fff',e)
            this.setState({
                mouse : e
            })
        }
    }

    render() {
        const {item} = this.props
        return (
            <li style={{'background' : this.state.mouse ? 'pink' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={item.done}/>
                    <span>{item.name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
