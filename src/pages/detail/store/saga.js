import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_DETAIL } from './constants'
import { changeDetail } from './actionCreators'

function* getDetail({ id }) {
    try{
        const res = yield axios.get(`/api/detail.json?id=${id}`)
        const result =res.data.data
        const action = changeDetail(result)
        yield put(action)
    } catch(e) {
        alert(e)
    }
} 

function* detailSaga() {
    yield takeEvery(GET_DETAIL, getDetail)
}

export default detailSaga