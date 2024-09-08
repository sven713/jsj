
import React, { Component } from "react";

import axios from "axios";

export default class App extends Component {

    getStudentData =()=>{
        console.log(111111)

        // 前端3000    后端5000
    
        axios.get('http://localhost:3000/index1.html').then(
            response => {
                console.log('成功了',response.data)
            },
            error =>{
                console.log('失败了',error )
            }
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
            </div>
        )
    }
}

