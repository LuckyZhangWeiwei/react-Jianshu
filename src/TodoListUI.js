import React from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
    return (
        <div style={{padding: 20}}>
            <div style={{marginBottom: 10}}>
                <Input 
                    placeholder='to do info' 
                    onChange={props.handleInputChange} 
                    value={props.inputValue}  
                    style={{width: 300, marginRight: 10}} />
                <Button type='primary' onClick={props.handleBtnClick}>提交</Button>
            </div>
            <List 
                style={{width: 300}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (<List.Item onClick={(index) => { props.handleItemDel(index) }}>{item}</List.Item>)}
            />
        </div>
    )
}

export default TodoListUI