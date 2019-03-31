import '../css/Card.css'
import React, { Component } from 'react'
import RemoveCardButton from './buttons/RemoveCardButton'

class Card extends Component {
    render() {
        return(
            <div className='card'>
                <div>
                    <div style={ { fontSize: 11 } }>
                        { this.props.task_name }
                    </div>
                    <RemoveCardButton item={ this.props.item }/>
                </div>

                <div style={ { fontSize: 25 } }>
                    { this.props.task_description }
                </div>
            </div>
        )
    }
}

export default Card
