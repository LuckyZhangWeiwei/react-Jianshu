import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextstate) {
    if(nextProps.content !== this.props.content ) {
      return true
    } else {
      return false
    }
  }

  render() {
      return (
        <li onClick={this.props.handleItemDel}
            dangerouslySetInnerHTML={{__html: `${this.props.test}  ${this.props.content}`}} />
      )
    }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  handleItemDel: PropTypes.func.isRequired,
}

TodoItem.defaultProps = {
  test: 'Item'
}