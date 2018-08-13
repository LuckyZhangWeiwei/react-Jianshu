import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { constants } from './index'
import { getHomeData, getMoreData } from './actionCreators'

function* homeData() {
    try{
      const res = yield axios.get('/api/home.json')
      const action = getHomeData(res.data.data)
      yield put(action)
    } catch(e) {
        alert(e)
    }
} 

function* moreData({page}) {
    try{
        const res = yield axios.get(`/api/homeList.json?pageIndex=${page}`)
        const action = getMoreData(res.data.data, page)
        yield put(action)
    } catch(e) {
        alert(e)
    }
}


export function* sagaHomeData() {
    yield takeEvery(constants.GET_HOME_DATA, homeData)
}

export function* sagaMoreData() {
    yield takeEvery(constants.GET_MORE_DATA, moreData)
}
