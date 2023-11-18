import { Todo } from "../@types/Todo";

export enum ActionTypes {
  ADD_NEW_TODO = "ADD_NEW_TODO",
  DELETE_TODO = "DELETE_TODO",
  CHANGE_TODO_STATUS = "CHANGE_TODO_STATUS",
}

export function addNewTodo(todo: Todo) {
  return {
    type: ActionTypes.ADD_NEW_TODO,
    payload: {
      todo,
    },
  };
}

export function deleteTodo(todo: Todo) {
  return {
    type: ActionTypes.DELETE_TODO,
    payload: {
      todo,
    },
  };
}

export function changeStatus(todo: Todo) {
  return {
    type: ActionTypes.CHANGE_TODO_STATUS,
    payload: {
      todo,
    },
  };
}
