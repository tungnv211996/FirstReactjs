import {call} from 'redux-saga/effects';
import axios from "axios";
const urlGetTasks = 'https://5cde761d6f4437001467a7e6.mockapi.io/api/tasks';
function* getTasks(){
    const response = yield axios({
        method: "GET",
        url: urlGetTasks
      });
    const tasks = yield response.status ===200 ? response.data: [];
    return tasks
}
function* addTask(task){
    const response = yield axios({
        method: "POST",
        url: urlGetTasks,
        data: task
      });
    const result = yield response.status ===201 ? true: false;
    return result;
}
function* editTask(task){
    const response = yield axios({
        method: "PUT",
        url: urlGetTasks+'/'+task.id,
        data: task
      });
      console.log(response);
    const result = yield response.status ===200 ? true: false;
    return result;
}
function* deleteTask(id){
    const response = yield axios({
        method: "DELETE",
        url: urlGetTasks+'/'+id,
      });
      console.log(response);
    const result = yield response.status ===200 ? true: false;
    return result;
}
export const api = {
    getTasks,
    addTask,
    editTask,
    deleteTask
};
