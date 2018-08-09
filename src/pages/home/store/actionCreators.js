import axios from 'axios'
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

const getHomeData = result => ({
    type: constants.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
}) 