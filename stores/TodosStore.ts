import {makeAutoObservable} from 'mobx';
import TodosService from '../modules/todos/TodosService';
import {TodosModel} from '../modules/todos/TodosModel';

export class TodosStore {
  todosModel: TodosModel = new TodosModel();

  isLoading = false;

  todosService;

  constructor() {
    makeAutoObservable(this);

    this.todosService = new TodosService();
  }

  getTodoObjectFromService = () => {
    const model = this.todosService.getAndPrepareDataForStore();
    this.setTodosModel(model);
  };

  actionGetCompleted = (model: TodosModel) => {
    let completedTodos = this.todosService.getCompletedTodo(model);
    return completedTodos;
  };

  actionAdd = (value: any) => {
    this.setIsLoading(true);

    const model = this.todosService.addTodo(this.todosModel, value);
    console.log('action add' + value.text + ' text');
    this.setTodosModel(model);
    this.setIsLoading(false);
  };

  actionChange = (index: number) => {
    this.setIsLoading(true);

    const model = this.todosService.changeTodo(this.todosModel, index);
    this.setTodosModel(model);
    this.setIsLoading(false);
  };

  actionDelete = (index: number) => {
    console.log('action delete ' + this.todosModel);
    this.setIsLoading(true);

    const model = this.todosService.deleteTodo(this.todosModel, index);
    this.setTodosModel(model);
    this.setIsLoading(false);
  };

  setTodosModel = (value: TodosModel) => {
    this.todosModel = value;
  };

  setIsLoading = (value: boolean) => {
    this.isLoading = value;
  };
}
