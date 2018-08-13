import { all, fork } from 'redux-saga/effects'
import { headerSaga } from '../common/header/store'
import { homeSagas } from '../pages/home/store'
import { loginSaga } from '../pages/login/store'
import { detailSaga } from '../pages/detail/store'

export default function* rootSaga() {
    yield all([
       fork(headerSaga),
       fork(homeSagas.sagaHomeData),
       fork(homeSagas.sagaMoreData),
       fork(loginSaga),
       fork(detailSaga),
    ])
}