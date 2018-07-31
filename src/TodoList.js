import React,{ Component, Fragment } from 'react'
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
      this.setState({
          inputValue: e.target.value
      })
    }

    handleBtnClick() {
      this.setState({
          list: [this.state.inputValue, ...this.state.list],
          inputValue: '',
      })
    }

    handleItemDel(itemIndex) {
      const list = [...this.state.list]
      list.splice(itemIndex, 1)
      this.setState({
          list: list
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
                        this.state.list.map((item, index) => {
                            return <li key={index} 
                                      onClick={() => this.handleItemDel(index)}
                                      dangerouslySetInnerHTML={{__html: item}} />
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}

export default TodoList

