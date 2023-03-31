import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

interface ModalProps {
  children?: React.ReactNode;
}

export class Modal extends React.Component<ModalProps> {
  constructor(props: ModalProps) {
    super(props);
  }

  public render() {
    return ReactDOM.createPortal(
      <div className="ModalBackground">{this.props.children}</div>,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      document.getElementById("modal")!
    );
  }
}
