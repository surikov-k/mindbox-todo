import { ChangeEvent, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
}

export default function TodoItem({todo, toggleTodo, removeTodo, editTodo}: TodoItemProps) {

  const [editText, setEditText] = useState(todo.text);
  const [isTextChanged, setIsTextChanged] = useState(false);

  useEffect(() => {
    setIsTextChanged(editText !== todo.text);
  }, [editText, todo.text]);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEditText(e.target.value);
  };

  const handleBlur = () => {
    if (isTextChanged) {
      editTodo(todo.id, editText);
    }
  };

  return (
    <InputGroup
      className="mb-1"
      size="sm">

      <InputGroup.Text id="basic-addon1">
        <Form.Check
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
      </InputGroup.Text>

      <Form.Control
        type="text"
        value={editText}
        className={todo.completed ? 'text-decoration-line-through text-muted fst-italic' : ''}
        onChange={handleTextChange}
        onBlur={handleBlur}
      />
      <Button variant="outline-danger"
              onClick={() => removeTodo(todo.id)}>
        ⌫
      </Button>
    </InputGroup>
  )
};
