import React, { ReactNode } from "react";
import "./styles/TodoItem.css";
interface propierties {
  id: number;
  text: string;
  completed: boolean;
  onCompleted: (id: number) => void;
  onDeleted: (id: number) => void;
  key?: string;
}
interface State {
  completed: boolean;
  onCompleted?: (id: number) => void;
  onDeleted?: (id: number) => void;
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
          onClick={() => this.props.onCompleted(this.props.id)}
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
        <span
          className="Icon Icon-delete"
          onClick={() => this.props.onDeleted(this.props.id)}
        >
          X
        </span>
      </li>
    );
  }
}
