import React, { Component } from 'react'

class RemoveCardButton extends Component {
    handleClick = (event) => {
        event.preventDefault();
        this.props.removeCard(this.props.taskId)
    };

    render() {
        return (
            <span>
                <button onClick={ this.handleClick }>
                    x
                </button>
            </span>
        );
    }
}

export default RemoveCardButton