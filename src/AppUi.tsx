import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Todo } from "./interfaces/Todo.interface";
import { TodoContext } from "./components/TodoContext";
import { TodoContextProps } from "./components/TodoContext/TodoContent.interface";

export function AppUi(): JSX.Element {
  return (
    <React.Fragment>
      <TodoCounter total={3} completed={40} />
      <TodoSearch />
      <TodoContext.Consumer>
        {({
          error,
          loading,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }: TodoContextProps) => (
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
                onCompleted={() => todo.id && completeTodo(todo.id || 0)}
                onDeleted={() => deleteTodo(todo.id || 0)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>
      <CreateTodoButton />
    </React.Fragment>
  );
}
