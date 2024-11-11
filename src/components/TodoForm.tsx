import { FormEvent, RefObject, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

interface TodoFormProps {
  addTodo: (text: string) => void;
  inputRef: RefObject<HTMLInputElement>;
}

export default function TodoForm({addTodo, inputRef}: TodoFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}
          role="form">
      <InputGroup className="mb-3">
        <Form.Control
          ref={inputRef}
          value={text}
          type="text"
          size="lg"
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <Button variant="outline-secondary"
                type="submit">
          Add Task
        </Button>
      </InputGroup>
    </form>
  );
}
