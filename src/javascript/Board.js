import '../css/Board.css';
import { Card } from './Card';
import React, { Component } from 'react';
import { NewCardButton } from './NewCardButton';
import { getMockedItems, saveItems } from "../utils/utils";

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      lastId: null
    };

    // To update the empty state we set above
    // If it renders before the Promise is resolved, it will render an empty
    // to-do list until the Promise is resolved and the state is updated.
    // getItemsFromAPI()
    getMockedItems()
        .then(response =>
            this.setState({
              items: response.data,
              lastId: (parseInt(response.data.slice(-1).pop().id) + 1).toString()
        })).catch();
  }

  createCard(taskName, taskDescription) {
    return {
      "id": this.state.lastId,
      "task_name": (taskName ? taskName : "&nbsp;"),
      "task_description": (taskDescription ? taskDescription : "&nbsp;")
    }
  }

  addCard = (taskName = null, taskDescription = null) => {
    this.setState( state => ({
      lastId: (parseInt(state.lastId) + 1).toString(),
      items: state.items.concat(this.createCard(taskName, taskDescription))
    }));

    // saveTemsToAPI(items)
    saveItems(this.state, taskName, taskDescription);
  };

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
