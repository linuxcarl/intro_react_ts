import React, { ReactNode } from "react";
import "./TodoSearch.css";

interface properties {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
}

interface State {
  searchValue: string;
}

export class TodoSearch extends React.Component<properties, State> {
  constructor(props: properties) {
    super(props);
    this.state = {
      searchValue: "",
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  private handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    const { value = "" } = event.target;
    if (value) {
      this.setState({ searchValue: value });
      // this.props.setSearchValue(value);
    }
  }
  override render(): ReactNode {
    return (
      <>
        <input
          className="TodoSearch"
          placeholder="Search..."
          type="text"
          value={this.props.searchValue}
          onChange={this.handleSearch}
        />
        <p>{this.props.searchValue}</p>
      </>
    );
  }
}
