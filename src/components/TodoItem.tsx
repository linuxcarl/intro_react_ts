import React, { ReactNode } from "react";
import "./styles/TodoItem.css";
interface propierties {
  id: number;
  text: string;
  completed: boolean;
  key?: string;
}
interface State {
  completed: boolean;
}
export class TodoItem extends React.Component<propierties, State> {
  constructor(props: propierties) {
    super(props);
    this.state = {
      completed: this.props.completed,
    };
  }
  private handleComplete(key: number) {
    console.log("Complete", key);
    this.setState({ completed: !this.state.completed });
  }
  override render(): ReactNode {
    return (
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${
            this.props.completed && "Icon-check--active"
          }`}
          onClick={() => this.handleComplete(this.props.id)}
        >
          √
        </span>
        <p
          className={`TodoItem-p ${
            this.props.completed && "TodoItem-p--complete"
          }`}
        >
          {this.props.text}
        </p>
        <span className="Icon Icon-delete">X</span>
      </li>
    );
  }
}
