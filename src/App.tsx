import React, { useState } from "react";
import "./App.css";
import { AppUi } from "./AppUi";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  completed_date: string;
}

function App() {
  // const [todoList, setTodoList] = useState<Todo[]>([
  //   {
  //     id: 1,
  //     task: "Levantarme a las 7 am",
  //     completed: true,
  //     completed_date: "8/24/2022",
  //   },
  //   {
  //     id: 2,
  //     task: "Ir al gym",
  //     completed: true,
  //     completed_date: "11/3/2022",
  //   },
  //   {
  //     id: 3,
  //     task: "Desayunar",
  //     completed: false,
  //     completed_date: "5/7/2022",
  //   },
  //   {
  //     id: 4,
  //     task: "Trabajar",
  //     completed: false,
  //     completed_date: "9/19/2022",
  //   },
  // ]);
  // todos={todoList} setTodos={setTodoList}
  return <AppUi />;
}

export default App;
