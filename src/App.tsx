import { useState } from 'react';
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

  const editTodo = (id: number, newText: string) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, text: newText} : todo));
  }

  return (
    <div className="d-flex flex-column vh-100">
      <Container fluid={false}>
        <h1 className="text-center my-4">Todos</h1>

        <TodoForm addTodo={addTodo}/>

        <TodoList todos={todos}
                  toggleTodo={toggleTodo}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
        />
      </Container>

      <Footer/>
    </div>
  )
}

export default App
