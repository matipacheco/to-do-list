import React, { Component } from 'react';

class NewCardButton extends Component {
    handleTaskNameChange = (event) => {
        this.setState({ taskName : event.target.value })
    };

    handleTaskDescriptionChange = (event) => {
        this.setState({ taskDescription : event.target.value })
    };

    handleSubmit = () => {
        this.props.addCard(this.state.taskName, this.state.taskDescription);
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

export { NewCardButton };
