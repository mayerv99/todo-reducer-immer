import { Todo } from "../../@types/Todo";
import {
  CheckButton,
  Container,
  DeleteButton,
  TodoName,
  CategoryIndicator,
} from "./styled";

import { useContext } from "react";
import { TodosContext } from "../../Context/todosContext";
import { Check, Trash } from "@phosphor-icons/react";

import { useTheme } from "styled-components";
import { CategoryUtils } from "../../utils/CategoryUtils";

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem({ todo }: TodoItemProps) {
  const { deleteFunction, handleChange } = useContext(TodosContext);

  const theme = useTheme();

  function handleDelete() {
    deleteFunction(todo);
  }

  function handleStatusChange() {
    handleChange(todo);
  }

  const { isCompleted } = todo;

  const { colors } = CategoryUtils();

  return (
    <Container isCompleted={isCompleted}>
      <CategoryIndicator color={colors[todo.category]} />
      <div>
        <CheckButton isCompleted={isCompleted} onClick={handleStatusChange}>
          {todo.isCompleted && (
            <Check size={32} color={theme.colors.green_700} />
          )}
        </CheckButton>
        <TodoName isCompleted={isCompleted}>{todo.name}</TodoName>
      </div>

      <DeleteButton onClick={handleDelete}>
        <Trash size={32} />
      </DeleteButton>
    </Container>
  );
}
