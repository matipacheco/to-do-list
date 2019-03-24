import '../css/Card.css';
import React, { Component } from 'react';

// function Card({ connectDragSource, isDragging, task_description }){
//     return connectDragSource(
//         <div className="card" style={{opacity: isDragging ? 0.5 : 1, fontSize: 25, cursor: 'move'}}>
//             { task_description }
//         </div>,
//     )
// }

class Card extends Component {
    render() {
        return(
            <div className='card' style={ { fontSize: 25 } }>
                { this.props.task_description }
            </div>
        )
    }
}

export { Card };
