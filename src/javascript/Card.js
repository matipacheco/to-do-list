import '../css/Card.css'
import React, { Component } from 'react'
import RemoveCardButton from './buttons/RemoveCardButton'

class Card extends Component {
    render() {
        return(
            <div className='card'>
                <div>
                    <div style={ { fontSize: 11 } }>
                        { this.props.taskName }
                    </div>
                    <RemoveCardButton taskId={ this.props.taskId }/>
                </div>

                <div style={ { fontSize: 25 } }>
                    { this.props.taskDescription }
                </div>
            </div>
        )
    }
}

export default Card
