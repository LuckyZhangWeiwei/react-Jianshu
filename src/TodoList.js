import React, { Component, Fragment } from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: [],
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
    }

    handleInputChange(e) {
        const value = e.target.value
        this.setState(() => ({
            inputValue: value
         })
        )
    }

    handleBtnClick() {
        this.setState((preState) => ({
            list: [preState.inputValue, ...preState.list],
            inputValue: '',
        })
      )
    }

    handleItemDel(itemIndex) {
      this.setState((preState) => {
            const list = [...preState.list]
            list.splice(itemIndex, 1)
            return {list}
        }
      ) 
    }

    getTodoItem() {
      return this.state.list.map((item, index) => {
         return <TodoItem key={index} content={item} handleItemDel={() => this.handleItemDel(index)} />
      })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">输入内容</label>
                    <input 
                      id="insertArea"
                      className="input" 
                      onChange={this.handleInputChange} 
                      value={this.state.inputValue} 
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul>
                    {
                       this.getTodoItem()
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList

