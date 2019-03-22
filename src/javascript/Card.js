import '../css/Card.css';
import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                {this.props.content}
            </div>
        );
    }
}

export {Card}