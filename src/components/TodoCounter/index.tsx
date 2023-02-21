import React, { ReactNode } from "react";
import "./TodoCounter.css";

interface properties {
  total: number;
  completed: number;
}
export class TodoCounter extends React.Component<properties> {
  constructor(props: properties) {
    super(props);
  }
  override render(): ReactNode {
    return (
      <h2>
        You have <span>{this.props.completed}</span> completed of{" "}
        <span>{this.props.total}</span> todos
      </h2>
    );
  }
}
