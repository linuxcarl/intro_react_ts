import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoForm } from "./components/TodoForm";
import { Todo } from "./interfaces/Todo.interface";
import { TodoContext } from "./components/TodoContext";
import { TodoContextProps } from "./components/TodoContext/TodoContent.interface";
import { Modal } from "./components/Modal";

export function AppUi(): JSX.Element {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  }: TodoContextProps = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desespérate, hubo un error</p>}
        {loading && <p>Estamos cargando, no desesperes</p>}
        {!loading && !searchedTodos && <p>Crea tu primer TODO</p>}

        {searchedTodos.map((todo: Todo) => (
          <TodoItem
            id={todo.id}
            key={todo.task}
            text={todo.task}
            completed={todo.completed}
            onCompleted={() =>
              todo.id && completeTodo && completeTodo(todo.id || 0)
            }
            onDeleted={() => todo.id && deleteTodo && deleteTodo(todo.id || 0)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  );
}
