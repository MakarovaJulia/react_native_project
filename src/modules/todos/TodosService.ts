import TodosRepository from './TodosRepository';
import { Todo, TodosModel } from "./TodosModel";

export default class TodosService {
  todosRepository;

  constructor() {
    this.todosRepository = new TodosRepository();
  }

  /**
   * @returns {TodosModel}
   */
  getAndPrepareDataForStore = () => {
    const data = this.todosRepository.getDataFromExternalStorage();

    const model = new TodosModel();
    model.todoList = data.defaultTodoList;

    return model;
  };

  addTodo = (model: TodosModel, value: Todo) => {
    model.todoList?.push(value);
    return model;
  };

  deleteTodo = (model: TodosModel, index: number) => {
    model?.todoList?.splice(index, 1);
    return model;
  };

  changeTodo = (model: TodosModel, index: number) => {
    if (model.todoList && model.todoList[index]) {
      model.todoList[index].completed = !model.todoList[index].completed;
    }
    return model;
  };

  getCompletedTodo = (model: TodosModel) => {
    return (model?.todoList || []).filter((item: Todo) => item.completed);
  };
}
