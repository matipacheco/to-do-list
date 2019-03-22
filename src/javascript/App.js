import '../css/App.css';
import React, { Component } from 'react';

import {Board} from "./Board";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContextProvider } from 'react-dnd'

class App extends Component {
  renderBoard() {
    return (
        <DragDropContextProvider backend={HTML5Backend}>
          <Board/>
        </DragDropContextProvider>
    )
  }

  render() {
    return (
      <div className="container">
        {this.renderBoard()}
        {/*{this.renderBoard()}*/}
      </div>
    );
  }
}

export default App;
