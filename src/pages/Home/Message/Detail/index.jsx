import React, { Component } from 'react'

const detailData = [
  {
    id:'01',
    content:'你好啊'
  },
  {
    id:'02',
    content:'好个屁'
  },
  {
    id:'03',
    content:'嘿嘿嘿'
  },
]

export default class Detail extends Component {
  render() {

    console.log('detail接,',this.props)
    const {params} = this.props.match

    const result = detailData.find((msg)=> {
      return msg.id == params.id
    })

    return (
      <div>
        <li>ID:{result.id}</li>
        <li>Title:{params.title2}</li>
        <li>Content:{result.content}</li>
      </div>
    )
  }
}
