import '../css/Board.css';
import {Card} from './Card'
import React, { Component } from 'react';

class Board extends Component {
    render() {
        return(
            <div className="board">
                <Card/>
                <Card/>
            </div>
        );
    }
}

export {Board};
