import React from 'react';
import {TodosStore} from './TodosStore';

class RootStore {
  todosStore;

  constructor() {
    this.todosStore = new TodosStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
