import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_INIT_LIST} from './actionTypes'
import {initListAction} from './actionCreators'

function* getInitList() {
    try{
        const res = yield axios.get('/api/todolist')
        const action = initListAction(res.data)
        yield put(action) 
    } catch(e) {
        alert(e)
    }
}

function*  todoSagas() {
  yield takeEvery(GET_INIT_LIST, getInitList)
}
export default todoSagas