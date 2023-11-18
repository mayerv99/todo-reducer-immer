import { useContext, useState } from "react";
import { TodosContext } from "../../Context/todosContext";

import { TodoItem } from "../TodoItem";
import { Container, FilterButton, FilterContainer } from "./styled";
import { FunnelSimple } from "@phosphor-icons/react";
import { CategoryUtils } from "../../utils/CategoryUtils";

interface TodosCount {
  all: number;
  work: number;
  food: number;
  shop: number;
  [key: string]: number;
}

export function TodosList() {
  const { todosState } = useContext(TodosContext);

  const [filter, setFilter] = useState("all");

  const { colors, buttons } = CategoryUtils();

  const filterButtons = [
    {
      label: "All",
      value: "all",
      color: "black",
    },
    ...buttons,
  ];

  const filteredTodos = todosState.filter((todo) => {
    if (filter === "all") {
      return todosState;
    }

    return todo.category === filter;
  });

  function countTodos(category: string) {
    // Igual vem pro array novo
    const count = todosState.filter(
      (todo) => todo.category === category
    ).length;
    return count;
  }

  const todosCount: TodosCount = {
    all: todosState.length,
    work: countTodos("work"),
    food: countTodos("food"),
    shop: countTodos("shop"),
  };

  return (
    <Container>
      <FilterContainer>
        {filterButtons.map((filterButtons) => (
          <FilterButton
            onClick={() => setFilter(filterButtons.value)}
            color={colors[filterButtons.value]}
            isCurrent={filter === filterButtons.value}
          >
            <FunnelSimple size={18} color={colors[filterButtons.value]} />
            <h6>{filterButtons.label}</h6>
            <h6> ({todosCount[filterButtons.value]})</h6>
          </FilterButton>
        ))}
      </FilterContainer>
      {filteredTodos.map((todo, index) => (
        <TodoItem todo={todo} key={index} />
      ))}
    </Container>
  );
}
