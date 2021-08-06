import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
 
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

  // arrow function does bind any refs to this inside of it, to the context which was define
  handleChange = (e) => {
    this.setState({ searchFields: e.target.value });
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
        <h1>Monsters Rolodex</h1>
        {/* Handle changing values in the search field*/}
        <SearchBox 
          placeholder="search monsters"
          handleChange={e => this.setState({ searchFields: e.target.value })}
        />
        {/* Listen to the changes made to the search*/}
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;
