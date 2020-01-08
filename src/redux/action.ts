
import { ADD_ITEM, DELETE_ITEM, DONE_ALL, SET_DOING, SET_DONE, SET_TODO } from './actionTypes';

export const addItem = () => ({
    type: ADD_ITEM,
})

export const deleteItem = (task:string) => ({
    type: DELETE_ITEM,
    task: task,
})

export const doneAll = () => ({
    type: DONE_ALL,
})

export const setDoing = (task:string) => ({
    type: SET_DOING,
    task: task,
})

export const setTodo = (task:string) => ({
    type: SET_TODO,
    task: task,
})

export const setDone = (task:string) => ({
    type: SET_DONE,
    task: task,
})