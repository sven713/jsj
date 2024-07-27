import React, {Component} from "react";
// import './Hello.css'
import heCss from './Hello.module.css'


export default class Hello extends Component {
    render(){
        return (
            <h2 className={heCss.title}>hello ??</h2>
        )
    }
}