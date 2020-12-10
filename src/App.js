import React, { Component } from 'react';
//import './App.css';
import { robots } from './robots';
import CardList from './CardList.js';
import SearchComponent from './SearchComponent';

// robots (or is it CardList?) and SearchComponent are both children of the same parent. what state should this have so that the child can communicate with its parent aka the SearchComponent with its parent who will then talk to the other child, robots, and pass on information


// because I wrote "React, {Component}" in the imports (the comma is important), I don't have to write "class App extends React.Component", I can leave out the "React." part because it's already clear.
class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

  onSearchChange(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App tc ">
        <header className="App-header">
          <p>
            <h1 className="App-title">Robo friends</h1>
          </p>
        </header>
        <SearchComponent searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots}/>

      </div>
    );
  }
}
 
export default App;


