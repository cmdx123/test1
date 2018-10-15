/**
 * Created by Administrator on 2018/10/14 0014.
 */
import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST, INIT_LIST } from './actionTypes'
import { initList } from './actionCreaters'
import axios from 'axios';

function* getInitList() {
    const res = yield axios.post('/api/todoList.json');
    const action = initList(res.data);
    yield put(action);
}
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
export default mySaga;