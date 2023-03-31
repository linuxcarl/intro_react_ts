import React, { ReactNode, Component } from "react";
import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";

interface TodoSearchProps {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
}

interface TodoSearchState {
  searchValue: string;
}

export class TodoSearch extends Component<TodoSearchProps, TodoSearchState> {
  static contextType = TodoContext;
  context!: React.ContextType<typeof TodoContext>;

  constructor(props: TodoSearchProps) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  private onSearchValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { setSearchValue } = this.context;
    if (setSearchValue) {
      const searchValue = event.target.value;

      console.log(searchValue);
      setSearchValue(searchValue);
      this.setState({ searchValue });
    }
  };

  render(): ReactNode {
    const { searchValue } = this.state;

    return (
      <>
        <input
          className="TodoSearch"
          placeholder="Search..."
          type="text"
          value={searchValue}
          onChange={this.onSearchValueChange}
        />
      </>
    );
  }
}
