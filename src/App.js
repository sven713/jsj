
import React, { Component } from "react";

import Header from './components/Header'
import Footer from "./components/Footer";
import List from "./components/List";
import './App.css'
export default class App extends Component {

    // const todos = [
    //     {
    //         id:'001',
    //         name:'吃饭'
    //     },
    //     {
    //         id:'002',
    //         name:'睡觉'
    //     }
    // ]

    state = {
        todos:[
            {
                id:'001',
                name:'吃饭',
                done:true
            },
            {
                id:'002',
                name:'睡觉',
                done:false
            },
            {
                id:'003',
                name:'写代码',
                done:false
            },{
                id:'004',
                name:'逛街',
                done:false
            }
        ]
    }

    addTodos = (todoObj)=>{
        console.log('1app-',todoObj)
        const {todos} = this.state
        const newTodos = [todoObj,...todos]
        // let arr = this.state.todos.push(todoObj)
        this.setState({
            todos:newTodos
        })
    }

    checkedChanged = (itemObj)=> {
        console.log('appChecked-',itemObj)

        // #waring!!!!! 使用map实现一下 ...
        // let todos = this.state.todos
        // for(const item of todos){
        //     if(item.id === itemObj.id){
        //         item.done = itemObj.select
        //         break
        //     }
        // }


        const todos = this.state.todos
        const newTodos = todos.map((item)=> {
            if(item.id === itemObj.id){
                return {...item, done: itemObj.select}
            }else {
                return item
            }
        })

        console.log('ttttt')
        this.setState({
            todos : newTodos
        })
    }

    // a = (todoObj)=>{
    //     console.log('app-',todoObj)
    // }

    render() {
        const {todos} = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodos={this.addTodos}></Header>
                        <List todos={todos} checkedChanged={this.checkedChanged}></List>
                        <Footer todos={todos}></Footer>
                    </div>
                </div>
            </div>
        )
    }
}

