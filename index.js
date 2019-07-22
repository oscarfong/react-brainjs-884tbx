import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import outputNN10 from './nn10';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }


// See: https://github.com/BrainJS/brain.js

  render() {
    return (
      <div>
        brain.js  {outputNN10}
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
