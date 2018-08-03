import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import {getInputChangeAction, getAddItemAction, getDelItemAction, getTodoList} from './store/actionCreators'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
    constructor(props) {
        super(props)
       
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleItemDel = this.handleItemDel.bind(this)
        this.handleStoreChange = this.handleStoreChange.bind(this)

        this.state = store.getState()
        store.subscribe(this.handleStoreChange)
    }
  
    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action)
    }

    handleBtnClick() {
        const action = getAddItemAction()
        store.dispatch(action)
    }

    handleItemDel(itemIndex) {
        console.log(itemIndex)
        const action = getDelItemAction(itemIndex)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    componentDidMount() {
        const action = getTodoList()
        store.dispatch(action)
    }

    render() {
        return (
           <TodoListUI 
             inputValue={this.state.inputValue}
             handleInputChange={this.handleInputChange}
             handleItemDel={this.handleItemDel}
             handleBtnClick = {this.handleBtnClick}
             list={this.state.list}
           />
        )
    }
}

export default TodoList

