import axios from 'axios'
import { fromJS } from 'immutable'
import { constants } from './index'

export const getHomeInfo = () => {
    return dispatch => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data
            const action = getHomeData(result)
            dispatch(action)
        })
    }
}

export const getMoreList = (page) => {
    return dispatch => {
        axios.get(`/api/homeList.json?pageIndex=${page}`).then(res => {
            const result = res.data
            const action = getMoreData(result.data, page)
            dispatch(action)
        })
    }
}

export const toggleTopShow = isShow => ({
   type:constants.TOGGLE_TOP_SHOW,
   isShow: fromJS(isShow),
})

const getHomeData = result => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
}) 

const getMoreData = (result, page)=> ({
    type: constants.LOAD_MORE_DATA,
    articleList: fromJS(result),
    articlePage: fromJS(page + 1),
})