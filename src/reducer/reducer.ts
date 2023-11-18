import { produce } from "immer";

import { Todo } from "../@types/Todo";
import { ActionTypes } from "./actions";

type ReducerPayload = {
  type: ActionTypes;
  payload: {
    todo: Todo;
  };
};

export function todosReducer(state: Todo[], action: ReducerPayload) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_TODO:
      return produce(state, (draft) => {
        draft.push(action.payload.todo);
      });

    case ActionTypes.DELETE_TODO: {
      return produce(state, (draft) => {
        const newArray = draft.filter(
          (item) => item.name != action.payload.todo.name
        );
        return (draft = newArray);
      });
    }

    case ActionTypes.CHANGE_TODO_STATUS: {
      const selectedTodoIndex = state.findIndex((todo) => {
        return todo.name === action.payload.todo.name;
      });

      if (selectedTodoIndex < 0) {
        return state;
      }

      return produce(state, (draft) => {
        const currentStatus = draft[selectedTodoIndex].isCompleted;
        draft[selectedTodoIndex].isCompleted = !currentStatus;
      });
    }

    default:
      return state;
  }
}
