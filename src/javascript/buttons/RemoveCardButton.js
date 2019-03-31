import React, { Component } from 'react'

class RemoveCardButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                { this.props.item }
            </div>
        );
    }
}

export default RemoveCardButton