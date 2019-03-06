import React, { Component } from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  render() {
    const {title} = this.props.task;
    return (
      <div>
        <li onClick={this.props.toggleTask} className={this.getTaskStatusClass()}>
          {title}
        </li>
        {this.renderActionSection()}
      </div>
    );
  }

  renderActionSection = () => {
    if(this.state.isEditing) {
      return (
        <div>
          <span className="edit" onClick={this.props.toggleTask}>save</span>
          <span className="close" onClick={this.handleCancelClick}>cancel</span>
        </div>
      );
    }
    else {
      return (
        <div>
          <span className="edit" onClick={this.handleEditClick}>edit</span>
          <span className="close" onClick={this.props.deleteTask}>delete</span>
        </div>
      );
    }
  }

  handleEditClick = () => {
    this.setState({ isEditing: true });
  }

  handleCancelClick = () => {
    this.setState({ isEditing: false });
  }

  getTaskStatusClass = () => {
    return this.props.task.completed ? 'checked' : '';
  }
}

export default TodoItem;
