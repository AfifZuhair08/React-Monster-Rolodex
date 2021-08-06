import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {CardList} from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  // fetch external data and set current state accordingly
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  // pass data to the component to render
  render() {
    return (
      <div className="App">
      {/* Props and children props */}
      <CardList monsters={this.state.monsters} />
      </div>
    )
  }
}

export default App;
