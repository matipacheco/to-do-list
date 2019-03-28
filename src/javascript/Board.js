import '../css/Board.css';
import { Card } from './Card';
import React, { Component } from 'react';
import { NewCardButton } from './NewCardButton';
import { getItemsFromAPI, saveItemsToAPI, getLastId, createTask } from "../utils/utils";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], lastId: null };

    // To update the empty state we set above
    getItemsFromAPI()
        .then(response =>
            this.setState({
                items: response.data,
                lastId: this.getLastId(response)
            }))
        .catch();
    // If it renders before the Promise is resolved, it will render an empty
    // to-do list until the Promise is resolved and the state is updated.
  }

  addCard = (taskName = null, taskDescription = null) => {
    let id = getLastId(this.state.lastId);

    this.setState( {
        lastId: id,
        items: this.state.items.concat(createTask(id, taskName, taskDescription))
    });

    saveItemsToAPI(this.state.lastId, taskName, taskDescription)
        .then()
        .catch();
  };

  getLastId(response) {
      return getLastId(response.data.slice(-1).pop().id)
  }

  renderItems = () => {
    return this.state.items.map(function(item) {
      return <Card key={ item.id } task_name={ item.task_name } task_description={ item.task_description }/>
    });
  };

  render() {
    return(
        <div className='board_section'>
          <NewCardButton addCard={ this.addCard } />
          { this.renderItems() }
        </div>
    );
  }
}

export { Board };
