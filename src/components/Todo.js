import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  // map over the todos item, which exist in the TodoList Component, because this Todo Component will be invoked in Todolist Component
  return todos.map((todo, index) => (
    //   this add classname for the styling that gonna trigger the styling code based on which condition the "isComplete is now"
    // the complete action is done in this section by CSS not by javascript function
    <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>
      {/* This part render the todo text */}
      <div
        key={todo.id}
        onClick={() => {
          completeTodo(todo.id);
        }}
      >
        {todo.text}
      </div>

      {/* this part render the icons of edit and remove todo items */}
      <div className="icons">
        {/* here the RiCloseCircleLine passing event handler that call "removeTodo" function, and passed todo.id to that function */}
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="delete-icon" />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="edit-icon" />
      </div>
    </div>
  ));
}

export default Todo;
