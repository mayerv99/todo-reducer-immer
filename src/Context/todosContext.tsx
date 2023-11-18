import { ReactNode, createContext, useReducer } from "react";
import { Todo } from "../@types/Todo";

//* Reducer imports
import { todosReducer } from "../reducer/reducer";
import { addNewTodo, changeStatus, deleteTodo } from "../reducer/actions";

interface TodosContextProviderProps {
  children: ReactNode;
}

interface FormDataType {
  todoName: string;
  category: string;
}

interface TodosContextType {
  todosState: Todo[];
  create: ({ todoName, category }: FormDataType) => void;
  deleteFunction: (todo: Todo) => void;
  handleChange: (todo: Todo) => void;
}

export const TodosContext = createContext({} as TodosContextType);

export function TodosContextProvider({ children }: TodosContextProviderProps) {
  const [todosState, dispatch] = useReducer(todosReducer, [], () => []);

  function create({ todoName, category }: FormDataType) {
    const newTodo = {
      name: todoName,
      description: "Carlos",
      isCompleted: false,
      category,
    };
    dispatch(addNewTodo(newTodo));
  }

  function deleteFunction(todo: Todo) {
    dispatch(deleteTodo(todo));
  }

  function handleChange(todo: Todo) {
    dispatch(changeStatus(todo));
  }

  return (
    <TodosContext.Provider
      value={{ todosState, create, deleteFunction, handleChange }}
    >
      {children}
    </TodosContext.Provider>
  );
}
