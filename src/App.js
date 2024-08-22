
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

    render() {
        const {todos} = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header></Header>
                        <List todos={todos}></List>
                        <Footer todos={todos}></Footer>
                    </div>
                </div>
            </div>
        )
    }
}

