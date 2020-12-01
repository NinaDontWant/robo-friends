import React from 'react';
//import './App.css';
import { robots } from './robots';
import CardList from './CardList.js';
import SearchComponent from './SearchComponent';

 
class App extends React.Component {
  render() {
    return (
      <div className="App tc ">
        <header className="App-header">
          <p>
            <h1 className="App-title">Robo friends</h1>
          </p>
        </header>
        <SearchComponent />
        <CardList robots={robots}/>

      </div>
    );
  }
}
 
export default App;


