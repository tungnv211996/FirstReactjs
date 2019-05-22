import * as types from '../contants/ActionTypes';
import { delay } from 'redux-saga';
import { api } from './api';
import { put, takeEvery, takeLatest } from 'redux-saga/effects'; //takeEvery: watch an action changed
export function* sayHello() {
    console.log('abc');
}
function* addTask(action) {
    try {
        const result = yield api.addTask(action.task);
        if (result === true)
            yield fetchTasks();
    } catch (error) {
        console.log('error');

    }
}
export function* watchAddTask() {
    yield takeLatest(types.ADD_TASK, addTask)
}

function* editTask(action) {
    try {
        const result = yield api.editTask(action.task);
        // if (result === true)
        // yield fetchTasks();
    } catch (error) {
        console.log('error');

    }
}
export function* watchEditTask() {
    yield takeLatest(types.EDIT_TASK, editTask)
}

export function* fetchTasks() {
    try {
        const tasks = yield api.getTasks();
        yield put({ type: types.LIST_ALL, tasks });
    } catch (error) {
        console.log('error');
    }
}
export function* watchListAll() {
    yield takeLatest(types.LIST_ALL, fetchTasks)
}
function* deleteTask(action){
    try {
        const result = yield api.deleteTask(action.id);
    } catch (error) {
        console.log('error');
    }
}
export function* watchDeleteTask() {
    yield takeLatest(types.DELETE_TASK, deleteTask)
}