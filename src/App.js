// App.js is a "smart component". Other than Card.js and CardList.js, which are pure functions, App.js has state. Smart components have a Class syntax. 

import React, { Component } from 'react';
import './App.css';
import { robots } from './robots';
import CardList from './CardList.js';
import SearchComponent from './SearchComponent';
import Scroll from './Scroll';
 

// robots and SearchComponent are both children of the same parent, App. You see this because the class App has properties in 'this.state' and those are the children. The child can communicate with its parent --> the SearchComponent can communicate with its parent who will then talk to the other child, robots, and pass on information stored in "this". 

// because I wrote "React, {Component}" in the imports (the comma is important), I don't have to write "class App extends React.Component", I can leave out the "React." part because it's already clear.
// When a function is part of React, I don't have to write it with the arrow function syntax. For example: constructor(), render(), componentDidMount(). Check https://reactjs.org/docs/react-component.html for further information!

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className="App tc ">
          <header className="App-header">
            <h1 className="f1">Robo friends</h1>
          </header>
          <SearchComponent searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }  
}
 
export default App;


