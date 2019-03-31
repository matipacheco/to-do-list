import React, { Component } from 'react'

class AddCardButton extends Component {
    handleTaskNameChange = (event) => {
        this.setState({ taskName : event.target.value })
    };

    handleTaskDescriptionChange = (event) => {
        this.setState({ taskDescription : event.target.value })
    };

    handleSubmit = (event) => {
        this.props.addCard(this.state.taskName, this.state.taskDescription);
        event.preventDefault();
    };

    render() {
        return(
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                        Nombre
                        <input type='text' onChange={ this.handleTaskNameChange }/>
                    </label>
                    <br/>
                    <label>
                        Contenido
                        <input type='text' onChange={ this.handleTaskDescriptionChange }/>
                    </label>
                    <input type='submit' value='Add Card' />
                </form>
            </div>

        )
    }
}

export { AddCardButton }
