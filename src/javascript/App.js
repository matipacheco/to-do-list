import '../css/App.css';
import React, { Component } from 'react';

import { Board } from "./Board";
import {NewCardButton} from "./NewCardButton";

import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContextProvider } from 'react-dnd';

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
          <div className='new_card_button_section'>
            <NewCardButton/>
          </div>
        </DragDropContextProvider>
      </div>
    );
  }
}

export default App;
