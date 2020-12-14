// App.js is a "smart component". Other than Card.js and CardList.js, which are pure functions, App.js has state. Smart components have a Class syntax. 

import React, { Component } from 'react';
import './App.css';
import { robots } from '../robots';
import CardList from '../components/CardList.js';
import SearchComponent from '../components/SearchComponent';
import Scroll from '../components/Scroll';
 

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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (!robots.length) ?
      <h1>Loading...</h1> :
      (
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
 
export default App;


