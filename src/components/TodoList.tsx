import React, { ReactNode } from "react";
import "./styles/TodoList.css";
interface propierties {
  children: ReactNode;
}
export class TodoList extends React.Component<propierties> {
  constructor(props: propierties) {
    super(props);
  }
  override render(): ReactNode {
    return (
      <div>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
