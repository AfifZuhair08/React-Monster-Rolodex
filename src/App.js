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

  render() {
    return (
      <div className="App">
      {/* Props and children props */}
      <CardList name="Afif">
        {
          this.state.monsters.map( monster => 
            <h1 key={monster.id}>
              {monster.name}
            </h1>
          )
        }
      </CardList>
      </div>
    )
  }
}

export default App;
