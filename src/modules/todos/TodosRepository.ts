export default class TodosRepository {
  /**
   * @returns {{defaultTodoList: []}}
   */
  getDataFromExternalStorage = () => {
    return {
      defaultTodoList: [],
    };
  };
}
