import * as constants from './constants'

export const getDetail = (id) => ({
    type: constants.GET_DETAIL,
    id,
})

export const changeDetail= data => ({
    type: constants.CHANGE_DETAIL,
    title: data.title,
    content: data.content,
})