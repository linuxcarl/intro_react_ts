import React, { useState } from "react";
import { useLocalStorage } from "./components/TodoContext/useLocalStorage";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Todo } from "./interfaces/Todo.interface";

export function AppUi(): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>("");
  const key_db = "TODOS_V1";
  const { item: todos, saveItem: setItem } = useLocalStorage(key_db, []);
  const completedTodos = (id: number) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed_date = new Date().toLocaleDateString();
    setItem(newTodos);
  };

  const deleteTodos = (id: number) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id) || 0;
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setItem(newTodos);
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
