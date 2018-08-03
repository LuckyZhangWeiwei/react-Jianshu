import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM, INIT_lIST} from './actionTypes'
const defaultState = {
    inputValue: '',
    list: [],
}

export default (state = defaultState, action) => {
    let newState = {}
    switch(action.type){
       case CHANGE_INPUT_VALUE:
          newState = JSON.parse(JSON.stringify(state))
          newState.inputValue = action.value
          return newState 
       case ADD_TODO_ITEM:
           newState = JSON.parse(JSON.stringify(state))
           newState.list = [newState.inputValue, ...newState.list]
           newState.inputValue = ''
           return newState
       case DEL_TODO_ITEM:
           newState = JSON.parse(JSON.stringify(state))
           newState.list.splice(action.index, 1)
           return newState
       case INIT_lIST:
           newState = JSON.parse(JSON.stringify(state))
           newState.list = [...action.data]
           return newState
       default :
          return state
    }
}