"use client";

import React, { useState } from "react";
import TodoItem from "./TodoItem";

interface Todo {
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput("");
    }
  };

  const deleteTask = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const toggleTask = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-[#424769] text-white rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-4 text-center">Chores ToDo List</h1>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            onDelete={() => deleteTask(index)}
            onToggle={() => toggleTask(index)}
          />
        ))}
      </ul>
      <h3 className="text-center mt-4">
        Done: {todos.filter((todo) => todo.completed).length}
      </h3>
      <div className="flex mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add todo"
          className="flex-1 p-2 text-black rounded-l"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 p-2 rounded-r hover:bg-blue-700"
        >
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default TodoList;
