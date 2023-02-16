import React, { ReactNode } from "react";
import "./styles/CreateTodoButton.css";

export class CreateTodoButton extends React.Component {
  override render(): ReactNode {
    return <button className="CreateTodoButton">+</button>;
  }
}
