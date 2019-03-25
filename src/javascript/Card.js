import '../css/Card.css';
import React, { Component } from 'react';

class Card extends Component {
    render() {
        return(
            <div className='card'
                 style={ { fontSize: 25 } }
                 dangerouslySetInnerHTML={ { __html: this.props.task_description } }
            />
        )
    }
}

export { Card };
