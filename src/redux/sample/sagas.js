import { all, takeEvery, put, call } from "redux-saga/effects";
import { getSample } from "../../services/sample";
import { setAsyncSample } from "./actions";
import actions from "./actions";

export function* GET_SAMPLE() {
  const success = yield call(getSample);
  if (success) {
    yield put(setAsyncSample(success));
  } else {
    // Error
  }
}

export default function* sample() {
  yield all([takeEvery(actions.LOAD_ASYNC, GET_SAMPLE)]);
}
