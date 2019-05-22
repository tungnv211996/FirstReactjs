import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects'; //all: run multi saga at the same time
import { sayHello, watchAddTask, fetchTasks, watchEditTask,watchDeleteTask } from './taskSagas';

export default function* rootSaga() {
    yield all([
        // sayHello(),
        watchAddTask(),
        fetchTasks(),
        watchEditTask(),
        watchDeleteTask()
    ])
}//yield: saga1 finished, then start saga2
