export interface Todo {
  id: number;
  task: string;
  completed: boolean;
  completed_date: string | null;
}

export interface PropertiesTodos {
  todos: Todo[];
  setTodos: (todos: Todo[]) => void;
}
