import '../css/Board.css';
import Card from './Card'
import React, { Component } from 'react';

import axios from 'axios';
import {GetAllTasksUrl} from "../utils/Constants";

function getItems() {
    axios.get(GetAllTasksUrl)
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

class Board extends Component {
    render() {
        getItems();
        return(
            <div className="board">
                <Card content={ 'Hello' }/>
                <Card content={ 'World' }/>
            </div>
        );
    }
}

export { Board };
