import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { GET_LOGIN } from './constants'
import { changeLogin } from './actionCreators'

function* login() {
    try{
       const res = yield axios.get('/api/login.json')
       const result =res.data.data
       if(result) {
         yield put(changeLogin())
       } else {
         alert('failure')
       }
    } catch(e) {
        alert(e)
    }
} 

function* loginSaga() {
    yield takeEvery(GET_LOGIN, login)
}

export default loginSaga