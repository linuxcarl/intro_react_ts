import React, { ReactNode } from "react";

export class TodoCounter extends React.Component {
  override render(): ReactNode {
    return (
      <h2>
        You have <span>2</span> todos
      </h2>
    );
  }
}
