import { call, takeEvery, put } from 'redux-saga/effects';
import { sagaActions } from './counterActions'
import { fetchCount } from './counterAPI'
import { incrementAsync, incrementStatus } from './counterSlice';

interface fetchDataAction {
  type: string,
  payload: number
}

export function* fetchDataSaga(action: fetchDataAction) {
  try {
    yield put(incrementStatus('loading'));
    const { data } = yield call(fetchCount, action.payload);
    yield put(incrementAsync(data));
    yield put(incrementStatus('idle'));
  } catch (e) {
    yield put({ type: 'FETCH_FAILED' });
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchDataSaga);
}
