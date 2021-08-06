import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFields: "",
    };
  }

  // fetch external data and set current state accordingly
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  // pass data to the component to render
  render() {

    // destructuring state objects
    const { monsters, searchFields } = this.state;
    
    // filter the array by referring to search fields everytimes its changing
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFields.toLowerCase())
    );

    return (
      <div className="App">
        <input
          // synthetic event (re-render everytimes fields input is changing)
          onChange={e => this.setState({ searchFields: e.target.value })}
          type="search"
          placeholder="search monster by name"
        />
        {/* Props and children props */}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
