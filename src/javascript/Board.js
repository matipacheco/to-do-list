import '../css/Board.css';
import { Card } from './Card'
import React, { Component } from 'react';

class Board extends Component {
    render() {
        return(
            <div className="board">
                <Card content={ 'Hola' }/>
                <Card content={ 'mundo' }/>
            </div>
        );
    }
}

export { Board };
