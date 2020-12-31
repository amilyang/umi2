import React, { Component } from 'react'
import { List } from 'antd-mobile'
import SearchContext from './searchContext'
export default class Lists extends Component {
  static contextType = SearchContext
  render () {
    const { text, lists } = this.context.state
    console.log(lists);
    return (
      <div>
        <h1>text:{text}</h1>
        <List>
          {lists.map((item, index) => (
            <List.Item key={index}>{item}</List.Item>
          ))}
        </List>
      </div>
    )
  }
}

