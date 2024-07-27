
import React,{Component} from "react";
import Hello from "./components/Hello/Hello";
import Welcom from "./components/Welcom";
export default class App extends Component{
    render(){
        return(
        <div>
        <Hello></Hello>

            <Welcom/>
            </div>
        )
    }
}

