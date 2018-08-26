import React, { Component } from 'react';
import Card from "../Card";

class AddCardButton extends Component {
    render() {
        return (
            <button onClick = {Card.addCard()}> + </button>
        )
    }
}

export default AddCardButton;