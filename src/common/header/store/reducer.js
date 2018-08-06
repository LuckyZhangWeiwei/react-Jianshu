import { fromJS } from 'immutable'
import {SEARCH_FOCUS, SEARCH_BLUR} from './constants'

const defaultState = fromJS({
    focus: false,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
           return state.set('focus', true)
        case SEARCH_BLUR:
           return state.set('focus', false)
        default:
           return state
    }
}