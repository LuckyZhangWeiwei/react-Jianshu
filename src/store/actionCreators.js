import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_lIST} from './actionTypes'
import axios from 'axios'

export const getInputChangeAction = value => (
    {
        type: CHANGE_INPUT_VALUE,
        value
    }
)

export const getAddItemAction = () => (
    {
        type: ADD_TODO_ITEM
    }
)

export const getDelItemAction = index => (
    {
        type: DEL_TODO_ITEM,
        index
    }
)

const initListAction = data => (
    {
        type: INIT_lIST,
        data
    }
)

export const getTodoList = () => {
    return (dispatch) => {
        axios.get('/api/todolist')
        .then((res) => {
            const action = initListAction(res.data)
            dispatch(action)
        })
        .catch((err) => {
            alert(err)
        })
    }
}