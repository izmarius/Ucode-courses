import React from "react";

const Todos = (props) => {
  const { todos, deleteTodo } = props;


  const todoList = todos.length
    ? todos.map((todo) => {
        return (
          <div className="collection-item" key={todo.id}>
            <span onClick={(e) => {
                deleteTodo(todo.id)
            }}>{todo.content}</span>
          </div>
        );
      })
    : null;
  return <div className="collection">{todoList}</div>;
};

export default Todos;
