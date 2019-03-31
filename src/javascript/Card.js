import '../css/Card.css'
import React, { Component } from 'react'

class Card extends Component {
    render() {
        return(
            <div className='card'>
                <div>
                    <div style={ { fontSize: 11 } }>
                        { this.props.task_name }
                    </div>
                    <div>
                        X
                    </div>
                </div>

                <div style={ { fontSize: 25 } }>
                    { this.props.task_description }
                </div>
            </div>
        )
    }
}

export { Card }
