import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Input, Button, List } from 'antd'
import TodoItem from './TodoItem'
import 'antd/dist/antd.css'

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

    componentDidMount() {
      axios.get('/api/todolist')
        .then((res) => {
            this.setState(() => ({
              list:[...res.data]
            }))
         }).catch(() => {
            alert('error')
        })
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
        }))
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
         return (
           <CSSTransition
             key={item} 
             timeout={1000}
             classNames='fade'
             onEntering={(el) => {el.style.color='red'}}
             onEntered={(el) => {setTimeout(() => {el.style.color='black'},500) }}
           >
             <TodoItem key={item} content={item} handleItemDel={() => this.handleItemDel(index)} />
           </CSSTransition>
         )
      })
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
                  renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoList

