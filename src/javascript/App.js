import '../css/App.css';
import React, { Component } from 'react';

import {Board} from "./Board";

class App extends Component {
  renderBoard() {
    return <Board/>
  }

  render() {
    return (
      <div className="container">
        {this.renderBoard()}
        {this.renderBoard()}
      </div>
    );
  }
}

export default App;
