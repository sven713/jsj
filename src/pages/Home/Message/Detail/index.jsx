import React, { Component } from 'react'
import qs from 'qs'

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

    console.log('detail接--,',this.props)
    const {search} = this.props.location
    const resultT = qs.parse(search.slice(1))
    console.log('res--',resultT)
    // const {params} = this.props.match

    const result = detailData.find((msg)=> {
      return msg.id == resultT.id
    })

    return (
      <div>
        <li>ID:{result.id}</li>
        <li>Title:{resultT.title}</li>
        <li>Content:{result.content}</li>
      </div>
    )
  }
}
