import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
        }),() => {
            // console.log(this.ul.querySelectorAll('li').length)
        })
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
                <ul ref = {(ul) => {this.ul = ul}}>
                  <TransitionGroup> 
                    { this.getTodoItem()}
                  </TransitionGroup>    
                   
                </ul>
            </Fragment>
        )
    }
}

export default TodoList

