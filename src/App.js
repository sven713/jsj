
import React, { Component } from "react";

import Header from './components/Header'
import Footer from "./components/Footer";
import List from "./components/List";
import './App.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <div class="todo-container">
                    <div class="todo-wrap">
                        <Header></Header>
                        <List></List>
                        <Footer></Footer>
                    </div>
                </div>
            </div>
        )
    }
}

