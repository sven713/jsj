import React, { Component } from 'react'
import './index.css'

export default class List extends Component {



  render() {
    const { userArr } = this.props
    return (
      <div className="row">

        {
          userArr.map((item) => {
            return (<div className="card" key={item.id}>
              <a href={item.html_url} target="_blank">
                <img src={item.avatar_url} style={{ width: '100px' }} />
              </a>
              <p className="card-text">{item.login}</p>
            </div>)
          })
        }

        {/* <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div>
          <div className="card">
            <a href="https://github.com/reactjs" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/6412038?v=3" style={{width: '100px'}}/>
            </a>
            <p className="card-text">reactjs</p>
          </div> */}
      </div>
    )
  }
}
