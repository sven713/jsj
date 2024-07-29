
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
                name:'吃饭'
            },
            {
                id:'002',
                name:'睡觉'
            },
            {
                id:'002',
                name:'写代码'
            }
            
        ]
    }

    render() {
        const {todos} = this.state
        return (
            <div>
                <div class="todo-container">
                    <div class="todo-wrap">
                        <Header></Header>
                        <List todos={todos}></List>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        )
    }
}

