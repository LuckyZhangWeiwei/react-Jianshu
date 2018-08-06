import { fromJS } from 'immutable'
import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSEENTRY, MOUSEOUT, CHANGE_PAGE} from './constants'

const defaultState = fromJS({
    focus: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1,
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH_FOCUS:
           return state.set('focus', true)
        case SEARCH_BLUR:
           return state.set('focus', false)
        case CHANGE_LIST:
        return state.merge({
            list: action.data,
            totalPage: action.totalPage,
        })
        //    return state.set('list', action.data).set('totalPage', action.totalPage)
        case MOUSEENTRY:
           return state.set('mouseIn', true)
        case MOUSEOUT:
           return state.set('mouseIn', false)
        case CHANGE_PAGE:
           return state.set('page', action.page)
        default:
           return state
    }
}