import "../css/Board.css";
import Card from "./Card";
import React, { Component } from "react";

// import axios from "axios";
// import { GetAllTasksUrl } from "../utils/Constants";

function getItems() {
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

    // axios.get(GetAllTasksUrl, { headers: { "Access-Control-Allow-Origin": "*" } })
    //     .then(data => console.log(data))
    //     .catch(err => console.log(err));

    // Since CORS are fucking everything up.... This a temporary solution
    return require('../utils/mocks/get_all_tasks_mock');
}

class Board extends Component {
    render() {
        let items = getItems().payload;
        let cards = items.map(function(item) {
            return <Card key={ item.id } task_name={ item.task_name } task_description={ item.task_description }/>
        });
        return(
            <div className="board">
                { cards }
            </div>
        );
    }
}

export { Board };
