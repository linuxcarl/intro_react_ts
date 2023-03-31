import { Todo } from "../../interfaces/Todo.interface";
export interface TodoContextProps {
  loading: boolean;
  error: Error | string | null;
  searchedTodos: Todo[];
  searchValue: string;
  totalTodos: number;
  setSearchValue?: (value: string) => void;
  completedTodos: number;
  completeTodo?: (id: number) => void;
  addTodo?: (text: string) => void;
  deleteTodo?: (id: number) => void;
  openModal: boolean;
  setOpenModal?: (value: boolean) => void;
}
