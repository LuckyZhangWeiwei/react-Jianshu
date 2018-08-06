import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSEENTRY, MOUSEOUT, CHANGE_PAGE} from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'
export const searchFocus = () => ({
    type: SEARCH_FOCUS,
})

export const searchBlur = () => ({
    type: SEARCH_BLUR,
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(res => {
            const data = res.data
            dispatch(changeList(data.data))
        }).catch(err => alert(err))
    }
}

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

const changeList = (data) => ({
    type: CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
})
