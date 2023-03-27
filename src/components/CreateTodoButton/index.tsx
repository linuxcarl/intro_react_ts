import React, { ReactNode } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../TodoContext";
import { TodoContextProps } from "../TodoContext/TodoContent.interface";
interface propierties {
  setOpenModal?: (open: boolean) => void;
}
interface State {
  setOpenModal: (open: boolean) => void;
}
export class CreateTodoButton extends React.Component<propierties, State> {
  static contextType = TodoContext;
  context!: React.ContextType<typeof TodoContext>;
  constructor(props: propierties) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
    this.getTodoContext = this.getTodoContext.bind(this);
  }
  private getTodoContext() {
    return this.context as TodoContextProps;
  }
  private onClickButton() {
    const { setOpenModal, openModal } = this.getTodoContext();
    const prevStateModal = openModal ? false : true;
    setOpenModal && setOpenModal(prevStateModal);
  }
  override render(): ReactNode {
    return (
      <button className="CreateTodoButton" onClick={this.onClickButton}>
        +
      </button>
    );
  }
}
