import {SEARCH_FOCUS, SEARCH_BLUR} from './constants'

const defaultState = {
    focus: false,
}

export default (state = defaultState, action) => {
    let newState = {}
    switch (action.type) {
        case SEARCH_FOCUS:
           newState = JSON.parse(JSON.stringify(state))
           newState.focus = true
           return newState
        case SEARCH_BLUR:
            newState = JSON.parse(JSON.stringify(state))
            newState.focus = false
            return newState
        default:
           return state
    }
}