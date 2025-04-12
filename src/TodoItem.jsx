import React from 'react';

function TodoItem({ text, index, deleteTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {text}
      <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
