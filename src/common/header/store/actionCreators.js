import {SEARCH_FOCUS, SEARCH_BLUR, GET_CHANGE_LIST, CHANGE_LIST, MOUSEENTRY, MOUSEOUT, CHANGE_PAGE} from './constants'
import { fromJS } from 'immutable'

export const searchFocus = () => ({
    type: SEARCH_FOCUS,
})

export const searchBlur = () => ({
    type: SEARCH_BLUR,
})

export const getList = () => ({
    type: GET_CHANGE_LIST,
})

export const mouseEntry = () => ({
    type: MOUSEENTRY,
})

export const mouseOut = () => ({
    type: MOUSEOUT,
})

export const handleChangePage = (page) => ({
    type: CHANGE_PAGE,
    page,
})

export const changeList = (data) => ({
    type: CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
})
