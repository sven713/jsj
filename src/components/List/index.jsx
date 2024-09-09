import React, { Component } from 'react'
import './index.css'

export default class List extends Component {

  // state = {
  //   userArr:[],
  //   isFirst: true,
  //   isLoading:false,
  //   err:''
  // }

  render() {
    const { userArr,isFirst,isLoading,err } = this.props
    return (
      <div className="row">

        {

          isFirst ? <h2>欢迎,请输入搜索内容</h2> :
          isLoading ? <h3>加载中....</h3> :
          err ? <h1>{err}</h1> :

          userArr.map((item) => {
            return (<div className="card" key={item.id}>
              <a href={item.html_url} target="_blank">
                <img src={item.avatar_url} style={{ width: '100px' }} />
              </a>
              <p className="card-text">{item.login}</p>
            </div>)
          })
        }

        
      </div>
    )
  }
}
