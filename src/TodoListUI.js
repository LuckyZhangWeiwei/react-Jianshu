import React, { Component } from 'react'
import { Input, Button, List } from 'antd'
class TodoListUI extends Component {
    render() {
        return (
            <div style={{padding: 20}}>
                <div style={{marginBottom: 10}}>
                    <Input 
                        placeholder='to do info' 
                        onChange={this.props.handleInputChange} 
                        value={this.props.inputValue}  
                        style={{width: 300, marginRight: 10}} />
                    <Button type='primary' onClick={this.props.handleBtnClick}>提交</Button>
                </div>
                <List 
                    style={{width: 300}}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.handleItemDel(index) }}>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default TodoListUI