import '../css/Card.css'
import React, { Component } from 'react'
import RemoveCardButton from './buttons/RemoveCardButton'

class Card extends Component {
    render() {
        return(
            <div className='card'>
                <div>
                    <span style={ { fontSize: 11 } }>
                        { this.props.taskName }
                    </span>
                    <RemoveCardButton taskId={ this.props.taskId } removeCard={ this.props.removeCard }/>
                </div>

                <div style={ { fontSize: 25 } }>
                    { this.props.taskDescription }
                </div>
            </div>
        )
    }
}

export default Card
