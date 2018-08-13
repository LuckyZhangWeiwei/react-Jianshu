import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_CHANGE_LIST } from './constants'
import { changeList } from './actionCreators'

function* getList() {
    try{
       const res = yield axios.get('/api/headerList.json')
       const action = changeList(res.data)
       yield put(action) 
    } catch(e) {
        alert(e)
    }
} 

function* headerSaga() {
    yield takeEvery(GET_CHANGE_LIST, getList)
}

export default headerSaga

