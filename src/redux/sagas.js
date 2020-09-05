import { all } from 'redux-saga/effects'
import sample from './sample/sagas'

export default function* rootSaga() {
  yield all([
    sample(),
  ])
}
