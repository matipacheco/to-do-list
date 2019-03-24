import '../css/App.css';
import React, { Component } from 'react';

import { Board } from "./Board";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContextProvider } from 'react-dnd'

class App extends Component {
  renderBoard() {
    return (
        <Board/>
    )
  }

  render() {
    return (
      <div className="container">
        <DragDropContextProvider backend={ HTML5Backend }>
          { this.renderBoard() }
          {/*{ this.renderBoard() }*/}
        </DragDropContextProvider>
      </div>
    );
  }
}

export default App;
