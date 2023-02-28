/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Todo } from "../../interfaces/Todo.interface";
import { TodoContextProps } from "./TodoContent.interface";
const TodoContext = React.createContext<TodoContextProps>({
  loading: false,
  error: null,
  totalTodos: 0,
  completedTodos: 0,
  searchValue: "",
  setSearchValue: () => {},
  searchedTodos: [],
  completeTodo: () => {},
  deleteTodo: () => {},
});
interface properties {
  children: React.ReactNode;
}
function TodoProvider(props: properties) {
  const [searchValue, setSearchValue] = useState<string>("");
  const key_db = "TODOS_V1";
  const {
    item: todos,
    saveItem: setItem,
    loading,
    error,
  } = useLocalStorage(key_db, []);
  const completeTodo = (id: number) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed_date = new Date().toLocaleDateString();
    setItem(newTodos);
  };

  const deleteTodo = (id: number) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id) || 0;
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setItem(newTodos);
  };
  let searchedTodos: Todo[] = [];
  if (!searchValue.length) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo: Todo) => {
      const todoText = todo.task.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }
  const completedTodos = searchedTodos.filter(
    (todo: Todo) => !!todo.completed
  ).length;
  const totalTodos = searchedTodos.length;
  console.log(searchValue);
  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
