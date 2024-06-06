import React, { useState } from "react";
import "./App.css";
import TodoList from "./components/todoList";
import Filter from "./components/filter";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Office-task-1",
      description: "this is the description for my first task",
      status: "not completed",
    },
    {
      id: 2,
      name: "Office-task-2",
      description: "this is the description for my second task",
      status: "not completed",
    },
    {
      id: 3,
      name: "Office-task-3",
      description: "this is the description for my d task",
      status: "not completed",
    },
  ]);

  const [filter, setFilter] = useState("all");
  const [newTodoName, setNewTodoName] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [formError, setFormError] = useState("");

  const handleAddTodo = () => {
    if (!newTodoName.trim() || !newTodoDescription.trim()) {
      setFormError("Please enter both name and description.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      name: newTodoName,
      description: newTodoDescription,
      status: "not completed",
    };

    setTodos([...todos, newTodo]);
    setNewTodoName("");
    setNewTodoDescription("");
    setFormError("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
  };

  const filteredTodos =
    filter === "all" ? todos : todos.filter((todo) => todo.status === filter);

  return (
    <div className="app">
      <h4> React Todo App</h4>

      <div className="content">
        <input
          type="text"
          id="newTodoName"
          placeholder="ToDo Name"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <input
          id="newTodoDescription"
          placeholder="ToDo Description"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
        />
        <button className="buttontodo" onClick={handleAddTodo}>
          Add Todo
        </button>
      </div>

      {formError && <p className="error">{formError}</p>}

      <div className="mylist">
        <label>My Todos</label>
        <Filter filter={filter} onChangeFilter={setFilter} />
      </div>
      <TodoList
        todos={filteredTodos}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />
    </div>
  );
}

export default App;
