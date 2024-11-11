import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[],
  toggleTodo: (id: number) => void,
  removeTodo: (id: number) => void,
  editTodo: (id: number, newText: string) => void,
}

export default function TodoList({ todos, toggleTodo, removeTodo, editTodo }: TodoListProps) {
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div>
      <div>
        {!!activeTodos.length && <h3 className="mt-5">Active Tasks</h3>}
        {activeTodos.map(todo => (
          <TodoItem key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        editTodo={editTodo}
      />
      ))}

        {!!completedTodos.length && <h3 className="mt-5">Completed</h3>}
        {completedTodos.map(todo => (
          <TodoItem key={todo.id}
                    todo={todo}
                    toggleTodo={toggleTodo}
                    removeTodo={removeTodo}
                    editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
};
