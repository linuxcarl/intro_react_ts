import React, { ReactNode } from "react";
import "./styles/TodoItem.css";
interface propierties {
  text: string;
  completed: boolean;
  key?: string;
}
export class TodoItem extends React.Component<propierties> {
  constructor(props: propierties) {
    super(props);
  }
  override render(): ReactNode {
    return (
      <li className="TodoItem">
        <span
          className={`Icon Icon-check ${
            this.props.completed && "Icon-check--active"
          }`}
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
