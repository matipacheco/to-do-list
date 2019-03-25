import React, { Component } from 'react';

class NewCardButton extends Component {
    handleClick = () => {
        this.props.holi();
    };

    render() {
        return(
            <button onClick={ this.handleClick }> Add Card </button>
        )
    }
}

export { NewCardButton };
