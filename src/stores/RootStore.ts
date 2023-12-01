import React from 'react';
import {TodosStore} from './TodosStore';
import LangStore from '../modules/lang/LangStore';

class RootStore {
  todosStore;
  langStore;

  constructor() {
    this.todosStore = new TodosStore();
    this.langStore = new LangStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
