import { Todo } from '../types';

const LOCAL_STORAGE_KEY = 'mindboxtodos';

export const saveTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

export const loadTodosFromLocalStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTodos ? JSON.parse(storedTodos) : [];
};
