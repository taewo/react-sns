import { all, fork, takeLatest, call, put, take } from 'redux-saga/effects'
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user'

function loginAPI() {

}

function* login() {
  try {
    yield call(loginAPI)
    yield call({
      type: LOG_IN_SUCCESS
    })
  } catch (e) {
    console.error(e)
    yield put({
      type: LOG_IN_FAILURE
    })
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login)
}

const HELLO_SAGA = 'HELLO_SAGA'

function* helloSaga() {
  console.log('before')
  while (true) {
    yield take(HELLO_SAGA)
    console.log('after')
  }
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    helloSaga()
  ])
}