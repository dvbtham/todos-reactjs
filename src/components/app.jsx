import React, { Component } from 'react';
import '../app.css';
import Header from './header';
import TodoList from './todo-list';
import AddTodo from './add-todo';
import Filter from './filter';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [{ id: 1, title: "Learn reactjs", completed: false }]
    }
  }

  render() {
    return (
      <div className="app">
        <Header />
        <AddTodo createTask={this.handleCreate} />
        <h3 className="filter-label">Filter:</h3>
        <div className="filter-buttons">
          {this.getFilterButtons()}
        </div>
        <TodoList tasks={this.state.tasks} deleteTask={this.handleDelete}
          toggleTask={this.handleToggleTask} />
      </div>
    );
  }

  handleToggleTask = (task) => {
    const tasks = [...this.state.tasks];
  	const index = tasks.indexOf(task);
  	tasks[index].completed = !tasks[index].completed;
	  this.setState({ tasks: tasks });
  }

  handleDelete = (taskId) => {
    let tasks = this.state.tasks.filter(x => x.id !== taskId);
    this.setState({ tasks: tasks });
  }

  handleCreate = (value) => {
    this.state.tasks.push({
      id: Date.now(),
      title: value
    });

    this.setState({
      tasks: this.state.tasks
    });
  }

  getFilterButtons = () => {
    return (
      <React.Fragment>
        <Filter filterText="All"
          filterTask={() => this.filterTask(null)} />
        <Filter filterText="Active"
          filterTask={() => this.filterTask(false)} />
        <Filter filterText="Compeleted"
          filterTask={() => this.filterTask(true)} />
      </React.Fragment>
    );
  }
}

export default App;
