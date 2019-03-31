import React, { Component } from 'react'

class RemoveCardButton extends Component {
    handleClick = (event) => {
        event.preventDefault();
        alert(this.props.taskId)
    };

    render() {
        return (
            <div>
                <button onClick={ this.handleClick }>
                    x
                </button>
            </div>
        );
    }
}

export default RemoveCardButton