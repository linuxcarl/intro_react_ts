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
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todoList.map((todo: list) => (
          <TodoItem
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
