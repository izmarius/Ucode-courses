import React from "react";

const Todos = (props) => {
  const { todos, deleteTodo } = props;

  const todoList = todos.length
    ? todos.map((todo) => {
        return (
          <div className="collection-item row" key={todo.id}>
            <div className="col s11" onClick={(e) => {
              e.target.style.textDecoration="line-through";
              e.target.nextSibling.classList.remove("hide");
            }}>{todo.content}</div> 
            <div className="col s1 center-align hide">
              <span
                onClick={(e) => {
                  deleteTodo(todo.id);
                }}
              >
                X
              </span>
            </div>
          </div>
        );
      })
    : null;
  return <div className="collection">{todoList}</div>;
};

export default Todos;
