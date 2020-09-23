import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    content: "",
  };
  todoPattern = /^[a-zA-Z\s]{1,100}$/;

  handleChange = (e) => {
    this.setState({
      content: e.target.value.trim(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.todoPattern.test(this.state.content)) {
      this.props.addTodo(this.state);
      e.target.reset();
      this.setState({
        content: "",
      });
    }
    e.target.reset();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new todo:</label>
          <input type="text" onChange={this.handleChange}></input>
        </form>
      </div>
    );
  }
}

export default AddTodo;
