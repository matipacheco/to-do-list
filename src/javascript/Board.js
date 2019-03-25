import '../css/Board.css';
import { Card } from './Card';
import React, { Component } from 'react';
import {NewCardButton} from './NewCardButton'

// import axios from 'axios';
// import { GetAllTasksUrl } from '../utils/Constants';

class Board extends Component {
    constructor(props) {
        super(props);

        let items = this.getItems();

        this.state = {
            items: items,
            lastId: (parseInt(items.slice(-1).pop().id) + 1).toString()
        };
    }

    emptyCard() {
        return {
            "id": this.state.lastId,
            "task_name": "&nbsp;",
            "task_description": "&nbsp;"
        }
    }

    addCard = () => {
        this.setState( state => ({
            lastId: (parseInt(state.lastId) + 1).toString(),
            items: state.items.concat(this.emptyCard())
        }))
    };

    getItems() {
        // Since CORS are fucking everything up.... This a temporary solution
        let payload = require('../utils/mocks/get_all_tasks_mock').payload;
        let items   = payload ? payload : [];
        return items;

        // let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        // let config  = {
        //     method: "GET",
        //     headers: headers,
        //     mode: "cors"
        // };
        //
        // fetch(GetAllTasksUrl, config)
        //     .then(response => console.log(response.json()))
        //     .catch(error => console.log(error));

        // axios.get(GetAllTasksUrl, { headers: { ''Access-Control-Allow-Origin': '*' } })
        //     .then(data => console.log(data))
        //     .catch(err => console.log(err));
    }

    renderItems = () => {
        let cards = this.state.items.map(function(item) {
            return <Card key={ item.id } task_name={ item.task_name } task_description={ item.task_description }/>
        });

        return cards;
    };

    render() {
        return(
            <div className='board_section'>
                <NewCardButton addCard={this.addCard} />
                { this.renderItems() }
            </div>
        );
    }
}

export { Board };
