import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

export default function TodoItem({todo, toggleTodo, removeTodo}: TodoItemProps) {
  return (
    <InputGroup className="mb-1"
                size="sm">
      <InputGroup.Text id="basic-addon1">
        <Form.Check
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
      </InputGroup.Text>
      <Form.Control
        className={todo.completed ? 'text-decoration-line-through text-muted fst-italic' : ''}
        placeholder={todo.text}
        disabled={true}
      />
      <Button variant="outline-danger"
              onClick={() => removeTodo(todo.id)}>
        ⌫
      </Button>
    </InputGroup>
  )
};
