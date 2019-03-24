import '../css/App.css';
import React, { Component } from 'react';

import { Board } from "./Board";
import {NewCardButton} from "./NewCardButton";

class App extends Component {
  renderBoard() {
    return (
        <Board/>
    )
  }

  render() {
    return (
      <div className="container">
          { this.renderBoard() }
          <div className='new_card_button_section'>
            <NewCardButton/>
          </div>
      </div>
    );
  }
}

export default App;
