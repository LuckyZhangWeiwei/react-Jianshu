import React from 'react'
import {connect} from 'react-redux'
import Item from '../node_modules/antd/lib/list/Item';

class TodoList extends React.Component {
    render() {
        return (
          <div>
            <div>
                <input 
                   value={this.props.inputValue}
                   onChange={this.props.handleInputChange}
                 />
                <button onClick={this.props.handleClick}>提交</button>
            </div>
            <ul>
                {
                    this.props.list.map((Item, index) => {
                       return <li key={index}>{Item}</li>
                    })
                }
            </ul>
          </div>
        )
    }
 }

 const mapStateToProps = (state) => {
   return {
      inputValue: state.inputValue,
      list: state.list,
   }
 }

 const mapDispatchToProps = (dispatch) => {
     return {
        handleInputChange(e){
           const action = {
               type: 'change_input_value',
               value: e.target.value
           }
           dispatch(action)
        },
        handleClick() {
            const action = {
                type: 'add_item',
            }
            dispatch(action)
        },
        handleDelete(itemIndex) {
            const action = {
                type: 'del_item',
                itemIndex,
            }
            dispatch(action)
        }
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(TodoList)