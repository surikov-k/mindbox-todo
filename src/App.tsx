import { useState } from 'react';

import { TodoForm, TodoList } from './components';
import { Todo } from './types';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    setTodos([...todos, {id: Date.now(), text, completed: false}]);
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="container">
      <h1>Todos</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </div>
  )
}

export default App
