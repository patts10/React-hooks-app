import React from "react";

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li className="flex items-center justify-between px-6 py-2 w-full">
      <p
        className={ todo.done ? "line-through cursor-pointer mx-0" : "cursor-pointer mx-0" }
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1}. {todo.desc}
      </p>
      <button
        className="bg-red-500 shadow-lg shadow-red-500/50 rounded py-1 px-2 mt-3 text-white"
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};
