import React from "react";
import "./TodoLoading.css";
export class TodoLoading extends React.Component {
  render() {
    return (
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text">Cargando TODOs...</p>
        <span className="LoadingTodo-deleteIcon"></span>
      </div>
    );
  }
}
