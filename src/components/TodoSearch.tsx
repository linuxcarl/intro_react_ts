import React, { ReactNode } from "react";
import "./styles/TodoSearch.css";
export class TodoSearch extends React.Component {
  override render(): ReactNode {
    return <input className="TodoSearch" placeholder="Search..." type="text" />;
  }
}
