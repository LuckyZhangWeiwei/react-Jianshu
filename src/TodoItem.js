import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
      return (
        <li onClick={this.props.handleItemDel}
            dangerouslySetInnerHTML={{__html: this.props.content}} />
      )
    }
}