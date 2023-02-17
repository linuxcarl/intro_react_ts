import React from "react";
import "./App.css";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
interface list {
  id: number;
  task: string;
  completed: boolean;
  completed_date: string;
}

const todoList = [
  {
    id: 1,
    task: "Levantarme a las 7 am",
    completed: true,
    completed_date: "8/24/2022",
  },
  {
    id: 2,
    task: "Ir al gym",
    completed: true,
    completed_date: "11/3/2022",
  },
  {
    id: 3,
    task: "Desayunar",
    completed: false,
    completed_date: "5/7/2022",
  },
  {
    id: 4,
    task: "Trbajar",
    completed: false,
    completed_date: "9/19/2022",
  },
];

function App() {
  const [todos] = React.useState<list[]>(todoList); // [state, setState
  const [searchValue, setSearchValue] = React.useState<string>("");
  let serachTodos = [];
  if (!searchValue.length) {
    serachTodos = todos;
  } else {
    serachTodos = todos.filter((todo: list) => {
      const todoText = todo.task.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const todoCompleted = serachTodos.filter(
    (todo: list) => !!todo.completed
  ).length;
  const totalTodos = serachTodos.length;
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={todoCompleted} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {serachTodos.map((todo: list) => (
          <TodoItem
            id={todo.id}
            key={todo.task}
            text={todo.task}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}
export default App;
