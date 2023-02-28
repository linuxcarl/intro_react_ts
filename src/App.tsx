import React from "react";
import "./App.css";
import { AppUi } from "./AppUi";
import { TodoProvider } from "./components/TodoContext";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
