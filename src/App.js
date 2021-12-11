import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from  './actions/todos';
import './App.css';

class App extends Component {

  state = {
    todo: ''
  }

  handleOnChange = event => {
    this.setState({
      todo: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    console.log("Todo being added: ", this.state.todo);
    this.props.addTodo(this.state.todo);
    this.setState({ todo: '' });
  }

  render() {
   
    const renderTodos = () => this.props.todos.map(todo => <li key={todo}>{todo}</li>);
    return (
      <div className="App">
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        <input
          type="text"
          onChange={(event) => this.handleOnChange(event)}
          id="todos"
          placeholder="add todo" 
          value={this.state.todo}/>
        <input type="submit" />
      </form>
      <h2>Todos:</h2>
        <ol>{renderTodos()}</ol>
      </div>
    );
  }
 

};

// const mapStateToProps = (state) => {
//   return {
//     todos: state.todos
//   };
// };

// This new function takes in dispatch as an argument
// It then returns an object that contains a function as a value!

// const mapDispatchToProps = dispatch => {
//   return {
//     addTodo: (todo) => {
//       dispatch(addTodo(todo))
//     }
  
//   };
// };

//export default connect(mapStateToProps, mapDispatchToProps)(App);

//instead of call mapStateToProps & mapDispatchToProps we can set the state to an arrow function to connect our app to the store below: 
//from there make sure to commnet out mapStateToProps & mapDispatchToProps function
export default connect(state => ({ todos: state.todos }), { addTodo })(App);