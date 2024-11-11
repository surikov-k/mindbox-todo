import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { loadTodosFromLocalStorage, saveTodosToLocalStorage } from './storage/local-storage-utils';

import { vi } from 'vitest';

vi.mock('./storage/local-storage-utils', () => ({
  loadTodosFromLocalStorage: vi.fn(() => []),
  saveTodosToLocalStorage: vi.fn(),
}));

describe('Todo App', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('renders the Todo app title', () => {
    render(<App />);
    const title = screen.getByText(/todos/i);
    expect(title).toBeInTheDocument();
  });

  test('loads todos from local storage on initial render', () => {
    // @ts-ignore
    loadTodosFromLocalStorage.mockReturnValueOnce([{ id: 1, text: 'Test todo', completed: false }]);
    render(<App />);
    expect(loadTodosFromLocalStorage).toHaveBeenCalled();
    const todoInput = screen.getByDisplayValue(/test todo/i);
    expect(todoInput).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<App />);

    const inputField = screen.getByPlaceholderText('What needs to be done?');
    const button = screen.getByText('Add Task');

    fireEvent.change(inputField, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const newTodo = screen.getByDisplayValue('New Todo');
    expect(newTodo).toBeInTheDocument();
    expect(saveTodosToLocalStorage).toHaveBeenCalledTimes(2);
  });

  test('toggles a todo as completed', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Toggle Todo' } });
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    const todoCheckbox = screen.getByRole('checkbox');
    expect(todoCheckbox).not.toBeChecked();

    fireEvent.click(todoCheckbox);
    expect(todoCheckbox).toBeChecked();
    expect(saveTodosToLocalStorage).toHaveBeenCalledTimes(3);
  });

  test('edits a todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Editable Todo' } });
    fireEvent.submit(screen.getByRole('form'));

    fireEvent.doubleClick(screen.getByDisplayValue(/editable todo/i));
    const editInput = screen.getByDisplayValue(/editable todo/i);
    fireEvent.change(editInput, { target: { value: 'Edited Todo' } });
    fireEvent.blur(editInput);

    const todoInput = screen.getByDisplayValue(/edited todo/i);
    expect(todoInput).toBeInTheDocument();
    expect(saveTodosToLocalStorage).toHaveBeenCalledTimes(3);


  });

  test('deletes a todo', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input, { target: { value: 'Deletable Todo' } });
    fireEvent.submit(screen.getByRole('form'));

    const deleteButton = screen.getByText('⌫');
    fireEvent.click(deleteButton);

    expect(screen.queryByText(/deletable todo/i)).not.toBeInTheDocument();

    expect(saveTodosToLocalStorage).toHaveBeenCalledTimes(3);
  });
});
