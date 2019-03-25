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
            last_id: items.pop().id
        };
    }

    emptyCard() {
        return {
            "id": parseInt(this.state.last_id) + 1,
            "task_name": "&nbsp;",
            "task_description": "&nbsp;"
        }
    };

    addCard = () => {
        this.setState( state => ({
            items: this.state.items.concat(this.emptyCard()),
            last_id: parseInt(this.state.last_id) + 1
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
                { this.renderItems() }

                <NewCardButton holi={this.addCard} />
            </div>
        );
    }
}

export { Board };
