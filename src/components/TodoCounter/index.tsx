import React, { ReactNode } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

interface TodoCounterProps {
  totalTodos: number;
  completedTodos: number;
}

export class TodoCounter extends React.Component {
  static contextType = TodoContext;

  override render(): ReactNode {
    const { totalTodos, completedTodos } = this.context as TodoCounterProps;
    return (
      <h2 className="TodoCounter">
        You have <span>{completedTodos}</span> completed of{" "}
        <span>{totalTodos}</span> todos
      </h2>
    );
  }
}
