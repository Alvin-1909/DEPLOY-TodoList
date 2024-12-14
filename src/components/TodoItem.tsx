import React from "react";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onDelete: () => void;
  onToggle: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onDelete, onToggle }) => {
  return (
    <li className="flex items-center justify-between p-2 border-b border-gray-700">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onToggle}
          className="mr-2 cursor-pointer"
        />
        <span
          onClick={onToggle}
          className={`cursor-pointer ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={onDelete}
        className="text-red-500 hover:text-red-700 border border-white rounded p-1 flex"
      >
        🗑
      </button>
    </li>
  );
};

export default TodoItem;
