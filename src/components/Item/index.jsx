import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

    state = {
        mouse: false
    }

    handleMouse = (e)=>{
        // console.log('dddd',e)

        return ()=>{ // !!!高阶函数,因为 onMouseEnter={this.handleMouse(true)}  传了参数true
            // console.log('fff',e)
            this.setState({
                mouse : e
            })
        }
    }

    handleChange = (e)=> {
        const select = e.target.checked
        // console.log('?????--',e)
        // console.log('!!!--',select)

        const {item} = this.props
        // console.log('aaa--',item.id)
        //todo: 回调给app,多层回调?

        const data = {
            id: item.id,
            select : select
        }
        this.props.checkedChanged(data)

        return ()=>{
            console.log('handleChange--',e)
        }
    }

    handleDelete = (e)=> {
        console.log('删除',this.props.item)
        this.props.deleteItem(this.props.item)
        // return ()=>{
        // }
    }

    render() {
        const {item} = this.props
        return (
            <li style={{'background' : this.state.mouse ? 'pink' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" defaultChecked={item.done} onChange={this.handleChange}/>
                    <span>{item.name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: this.state.mouse ? 'block' : 'none' }} onClick={this.handleDelete}>删除</button>
            </li>
        )
    }
}
