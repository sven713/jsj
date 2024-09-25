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

    // const {search} = this.props.location
    // const resultT= qs.parse(search.slice(1))
    // const {id, title} = resultT
    // console.log('res--',resultT)

    // const {id, title} = this.props.match.params

    const {id, title} = this.props.location.state

    const result = detailData.find((msg)=> {
      return msg.id === id
      // return msg.id === resultT.id

    })

    return (
      <div>
        <li>ID:{id}</li>
        <li>Title:{title}</li>
        <li>Content:{result.content}</li>
      </div>
    )
  }
}
