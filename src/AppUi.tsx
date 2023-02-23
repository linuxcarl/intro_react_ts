import React, { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

// interface Properties {
//   todos: Todo[];
//   setTodos: (
//     todos: {
//       id: number;
//       task: string;
//       completed: boolean;
//       completed_date: string;
//     }[]
//   ) => void;
// }

interface Todo {
  id: number;
  task: string;
  completed: boolean;
  completed_date: string;
}
function useLocalStorage(itemName: string, initialValue: Todo[]) {
  const localSotorageItem = localStorage.getItem(itemName);
  let parsedItem: Todo[] = [];

  if (!localSotorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localSotorageItem);
  }
  const [item, setItem] = React.useState<Todo[]>(parsedItem);

  const saveItem: React.Dispatch<React.SetStateAction<Todo[]>> = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    console.log("newItem=>", newItem);
    setItem(newItem);
  };
  return [item, saveItem];
}

export function AppUi(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");
  const [$todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const todos: Array<Todo> = Array.isArray($todos) ? $todos : [];
  // const [todos, setTodos] = useState<Todo[]>([]);

  // const saveTodos: React.Dispatch<React.SetStateAction<Todo[]>> = (
  //   newTodos
  // ) => {
  //   setTodos(newTodos);
  // };
  const completedTodos = (id: number) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed_date = new Date().toLocaleDateString();
    saveTodos(newTodos);
  };

  const deleteTodos = (id: number) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id) || 0;
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  let searchTodos: Todo[] = [];
  if (!searchValue.length) {
    searchTodos = todos;
  } else {
    searchTodos = todos.filter((todo: Todo) => {
      const todoText = todo.task.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const todoCompleted = searchTodos.filter(
    (todo: Todo) => !!todo.completed
  ).length;
  const totalTodos = searchTodos.length;

  return (
    <>
      <TodoCounter total={totalTodos} completed={todoCompleted} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchTodos.map((todo: Todo) => (
          <TodoItem
            id={todo.id}
            key={todo.task}
            text={todo.task}
            completed={todo.completed}
            onCompleted={() => completedTodos(todo.id)}
            onDeleted={() => deleteTodos(todo.id)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}
