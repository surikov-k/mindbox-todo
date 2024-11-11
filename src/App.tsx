import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Footer, TodoForm, TodoList } from './components';
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
    <div className="d-flex flex-column vh-100">
      <Container fluid={false}>
        <h1 className="text-center my-4">Todos</h1>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}/>
      </Container>
      <Footer/>
    </div>
  )
}

export default App
