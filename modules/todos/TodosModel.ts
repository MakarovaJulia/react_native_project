export type Todo = {
  text: string;
  index: number;
  completed: boolean;
};

export class TodosModel {
  todoList: Todo[] | undefined;
}
