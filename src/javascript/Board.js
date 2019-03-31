import '../css/Board.css'
import Card from './Card'
import React, { Component } from 'react'
import { AddCardButton } from './buttons/AddCardButton'
import { getItemsFromAPI, saveItemsToAPI, getLastId } from "../utils/utils"

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = { items: [], lastId: null };

    // To update the empty state we set above
    getItemsFromAPI()
        .then(response =>
            this.setState({
                items: response.data,
                lastId: getLastId(response)
            }))
        .catch();
    // If it renders before the Promise is resolved, it will render an empty
    // to-do list until the Promise is resolved and the state is updated.
  }

  addCard = (taskName = null, taskDescription = null) => {
    saveItemsToAPI(this.state.lastId, taskName, taskDescription)
        .then(response => {
          this.setState( {
            lastId: response.data.id,
            items: this.state.items.concat([response.data])
          });
        })
        .catch();
  };

  removeCard = () => {

  };

  renderItems = () => {
    return this.state.items.map(function(item) {
      return <Card key={ item.id }
                   taskId={ item.id }
                   taskName={ item.task_name }
                   taskDescription={ item.task_description }

      />
    });
  };

  render() {
    return(
        <div className='board_section'>
          <AddCardButton addCard={ this.addCard } />
          { this.renderItems() }
        </div>
    );
  }
}

export { Board };
