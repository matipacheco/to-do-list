import '../css/Card.css';
import React, { Component } from 'react';

import { Content } from "./Content";

class Card extends Component {
    render() {
        return (
            <div className="card">
                <Content content={ this.props.content }/>
            </div>
        )
    }
}

export { Card }