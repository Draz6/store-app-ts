import React, { useRef, useState } from 'react'
import "../styles/Todo.css"

interface TodoProps {}

const Todo: React.FC<TodoProps> = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<string[]>([]);

  const addItem = () => {
    const text = inputRef.current?.value;
    if (text) {
      setTodos([...todos, text]);
      inputRef.current.value = "";
    }
  };

  const removeItem = () => {
    todos.pop();
    setTodos([...todos]);
  };

  const removeAll = () => {
    setTodos([]);
  };

  return (
    <div className="main">
      <h1> TO DO LIST</h1>
      <input ref={inputRef} type="text" placeholder="enter..." />
      <button onClick={addItem} className="add">
        Add item
      </button>
      <button onClick={removeItem} className="remove">
        Remove item
      </button>
      <button onClick={removeAll} className="remove-all">
        Remove all
      </button>
      <ul>
        {todos.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;