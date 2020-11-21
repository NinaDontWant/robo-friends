import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
      return (
        <div className="Hello">
          <header className="App-header">
            This is the header, it is not styled. The first h1 and p tags have styles through a css file while the second h1 and p tags have styles through tachions.
          </header>
          <h1>Hello World</h1>
          <p>{this.props.greeting} Welcome to my first React App!</p>
          <div className="f1 tc">
              {/*   f1 stands for "font 1"
                    tc stands for "text center" */}
        <h1>Hello World</h1>
        <p>Welcome to my first React App!</p>
                    </div>
        </div>
        );
    }
  }

export default Hello;
