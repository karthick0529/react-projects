import { useState } from "react";

const Todo = ({ todo, onDelete, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ ...todo });

  const handleStatusChange = (e) => {
    const updatedTodo = { ...editedTodo, status: e.target.value };
    setEditedTodo(updatedTodo);
    onUpdate(updatedTodo);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onUpdate(editedTodo);
    setEditMode(false);
  };

  return (
    <div className="todo-card">
      <div className="desc">
        <h5>
          {" "}
          Name :{" "}
          {editMode ? (
            <input
              type="text"
              value={editedTodo.name}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, name: e.target.value })
              }
            />
          ) : (
            todo.name
          )}
        </h5>
        <h6>
          {" "}
          Description :{" "}
          {editMode ? (
            <input
              value={editedTodo.description}
              onChange={(e) =>
                setEditedTodo({ ...editedTodo, description: e.target.value })
              }
            />
          ) : (
            todo.description
          )}
        </h6>
        <p>
          Status :
          <select value={editedTodo.status} onChange={handleStatusChange}>
            <option value="not completed">Not Completed</option>
            <option value="completed">Completed</option>
          </select>
        </p>
      </div>
      {editMode ? (
        <button className="save" onClick={handleSave}>
          Save
        </button>
      ) : (
        <>
          <button className="edit" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete" onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default Todo;
