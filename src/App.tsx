//* Context
import { TodosContextProvider } from "./Context/todosContext";
//* Components
import { TodoForm } from "./Components/TodoForm";
import { TodosList } from "./Components/TodosList";
//* Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { defaultTheme } from "./theme";

export function App() {
  return (
    <TodosContextProvider>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <div>
          <TodoForm />
          <TodosList />
        </div>
      </ThemeProvider>
    </TodosContextProvider>
  );
}
