import React, { ReactNode } from "react";
import { TodoContext } from "../TodoContext";
import { TodoContextProps } from "../TodoContext/TodoContent.interface";
import "./TodoForm.css";

interface propierties {
  setOpenModal?: (open: boolean) => void;
}
interface State {
  newTodo: string;
  setOpenModal?: (open: boolean) => void;
}
export class TodoForm extends React.Component<propierties, State> {
  static contextType = TodoContext;
  context!: React.ContextType<typeof TodoContext>;

  constructor(props: propierties) {
    super(props);
    this.state = {
      newTodo: "",
    };
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getContext = this.getContext.bind(this);
  }
  private getContext() {
    return this.context as TodoContextProps;
  }
  override render(): ReactNode {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Create new Task</label>
        <textarea name="task" placeholder="Nuevo todo" />
        <div>
          <button
            onClick={this.onCancel}
            type="button"
            className="TodoForm-button TodoForm-button--cancel"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="TodoForm-button TodoForm-button--add"
          >
            Add
          </button>
        </div>
      </form>
    );
  }
  private onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const task = event.currentTarget.task.value;
    console.log(task);
    task && this.context.addTodo && this.context.addTodo(task);
    this.onCancel();
  }
  private onCancel() {
    const { setOpenModal } = this.getContext();
    setOpenModal && setOpenModal(false);
  }
}
