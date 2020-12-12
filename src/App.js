import React, { Component } from 'react';
import './App.css';
import { robots } from './robots';
import CardList from './CardList.js';
import SearchComponent from './SearchComponent';
 

// robots and SearchComponent are both children of the same parent, App. You see this because the class App has properties in 'this.state' and those are the children. what state should 'this' have so that the child can communicate with its parent aka the SearchComponent with its parent who will then talk to the other child, robots, and pass on information?

// because I wrote "React, {Component}" in the imports (the comma is important), I don't have to write "class App extends React.Component", I can leave out the "React." part because it's already clear.
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  
  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className="App tc ">
        <header className="App-header">
          <h1 className="f1">Robo friends</h1>
        </header>
        <SearchComponent searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}
 
export default App;


