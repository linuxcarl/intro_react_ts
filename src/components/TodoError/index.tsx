import React from "react";

interface properties {
  error: string | Error;
}
export class TodoError extends React.Component<properties> {
  constructor(props: properties) {
    super(props);
  }
  render() {
    return <div>error!</div>;
  }
}
