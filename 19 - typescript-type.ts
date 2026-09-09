type Todo = {
  title: string;
  description: string;
  isComplete: boolean;
  createAt?: number;
};

type TodoPreview = Partial<Todo>;
type TodoOmit = Omit<Todo, "description" | "createAt">;
type RequiredTodo = Required<Todo>;
type ReadOnlyTodo = Readonly<Todo>;
type PickTodo = Pick<Todo, "title" | "isComplete">;
type recordTodo = Record<string, Todo>;
