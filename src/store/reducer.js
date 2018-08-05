const defaultState = {
    focus: false,
}

export default (state = defaultState, action) => {
    let newState = {}
    switch (action.type) {
        case 'search_focus':
           newState = JSON.parse(JSON.stringify(state))
           newState.focus = true
           return newState
        case 'search_blur':
            newState = JSON.parse(JSON.stringify(state))
            newState.focus = false
            return newState
        default:
           return state
    }
}