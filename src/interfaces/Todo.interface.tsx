export interface Todo {
  id: number;
  task: string;
  completed: boolean;
  completed_date: string;
}

export interface PropertiesTodos {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}
