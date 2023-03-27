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
  addTodo: () => {},
  deleteTodo: () => {},
  openModal: false,
  setOpenModal: () => {},
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
  const [openModal, setOpenModal] = useState<boolean>(false);
  const completeTodo = (id: number) => {
    const todoIndex = todos.findIndex((todo: Todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed_date = new Date().toLocaleDateString();
    setItem(newTodos);
  };
  const addTodo = (text: string) => {
    const newTodo = [...todos];
    newTodo.push({
      id: Date.now(),
      task: text,
      completed: false,
      completed_date: null,
    });
    setItem(newTodo);
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
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}
export { TodoContext, TodoProvider };
