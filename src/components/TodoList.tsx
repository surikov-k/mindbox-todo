import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoList({ todos, toggleTodo, removeTodo }: TodoListProps)  {
  const activeTodos = todos.filter(todo => !todo.completed);
  const completedTodos = todos.filter(todo => todo.completed);

  return (
    <div>
      <h2>Tasks</h2>
    <div>
    <h3>Active</h3>
  {activeTodos.map(todo => (
    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
  ))}
  <h3>Completed</h3>
  {completedTodos.map(todo => (
    <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />
  ))}
  </div>
  </div>
);
};
