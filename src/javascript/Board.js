import '../css/Board.css';
import { Card } from './Card';
import React, { Component } from 'react';

// import axios from 'axios';
// import { GetAllTasksUrl } from '../utils/Constants';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.getItems()
        }
    }

    getItems() {
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

        // Since CORS are fucking everything up.... This a temporary solution
        let payload = require('../utils/mocks/get_all_tasks_mock').payload;
        let items   = payload ? payload : [];
        return items;
    }

    render() {
        let cards = this.state.items.map(function(item) {
            return <Card key={ item.id } task_name={ item.task_name } task_description={ item.task_description }/>
        });
        return(
            <div className='board_section'>
                { cards }
            </div>
        );
    }
}

export { Board };
