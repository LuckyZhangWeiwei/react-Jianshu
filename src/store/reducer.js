const defaultState = {
    inputValue: '',
    list: [],
}

export default (state = defaultState, action) => {
    let newState = {}
    switch (action.type) {
        case 'change_input_value':
           newState = JSON.parse(JSON.stringify(state))
           newState.inputValue = action.value
           return newState
        case 'add_item':
           newState = JSON.parse(JSON.stringify(state))
           newState.list= [newState.inputValue, ...newState.list]
           newState.inputValue = ''
           return newState
        default:
           return state
    }
    return state
}