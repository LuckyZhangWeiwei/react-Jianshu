import { fromJS } from 'immutable'
import { constants } from './index'

export const getHomeInfo = () => ({
    type: constants.GET_HOME_DATA,
})

export const getMoreList = (page) => ({
    type: constants.GET_MORE_DATA,
    page,
})

export const toggleTopShow = isShow => ({
   type:constants.TOGGLE_TOP_SHOW,
   isShow: fromJS(isShow),
})

export const getHomeData = result => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
}) 

export const getMoreData = (result, page)=> ({
    type: constants.LOAD_MORE_DATA,
    articleList: fromJS(result),
    articlePage: fromJS(page + 1),
})