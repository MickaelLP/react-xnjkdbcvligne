import React, { Component } from 'react';
import { render } from 'react-dom';
import Nav from './Nav';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Nav name={this.state.name} />
        <p>
          Commence par modifier pour voir la magie apparaître :) 
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
