import React, { Component } from 'react';

class AddTodo extends Component {
  render() {
    return (
      <form className="add-task" onSubmit={this.hanleCreate}>
        <input placeholder="Enter title..." ref="createInput" />
        <button type="submit" className="addBtn">Add</button>
      </form>
    );
  }

  hanleCreate = (event) => {
    event.preventDefault();
    this.props.createTask(this.refs.createInput.value);
    this.refs.createInput.value = '';
  }
}

export default AddTodo;
