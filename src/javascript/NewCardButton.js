import React, { Component } from 'react';

class NewCardButton extends Component {
    handleClick = () => {
        this.props.addCard();
    };

    render() {
        return(
            <button onClick={ this.handleClick }> Add Card </button>
        )
    }
}

export { NewCardButton };
