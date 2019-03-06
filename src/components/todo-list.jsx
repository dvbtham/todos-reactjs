import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.renderTasks()}
      </ul>
    );
  }

  renderTasks = () => {
    return this.props.tasks.map((task) => <TodoItem key={task.id}
      task={task} deleteTask={() => this.props.deleteTask(task.id)}
      toggleTask={() => this.props.toggleTask(task)} />);
  }
}

export default TodoList;
