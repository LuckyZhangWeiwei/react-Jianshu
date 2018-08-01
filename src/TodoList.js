import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
import store from './store/index'
import 'antd/dist/antd.css'
import {getInputChangeAction, getAddItemAction, getDelItemAction} from './store/actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props)
       
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
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
        const action = getDelItemAction(itemIndex)
        store.dispatch(action)
    }

    handleStoreChange() {
        this.setState(store.getState())
    }

    render() {
        return (
            <div style={{padding: 20}}>
                <div style={{marginBottom: 10}}>
                    <Input 
                      placeholder='to do info' 
                      onChange={this.handleInputChange} 
                      value={this.state.inputValue}  
                      style={{width: 300, marginRight: 10}} />
                    <Button type='primary' onClick={this.handleBtnClick}>提交</Button>
                </div>
                <List 
                  style={{width: 300}}
                  bordered
                  dataSource={this.state.list}
                  renderItem={(item, index) => (<List.Item onClick={this.handleItemDel.bind(this ,index)}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList

