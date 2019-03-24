import '../css/Card.css';
import React from 'react';

import { DragSource } from 'react-dnd';
import { ItemTypes } from "../utils/Constants";

const cardSource = {
    beginDrag(props) {
        return { task_description: props.task_description }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

function Card({ connectDragSource, isDragging, task_description }){
    return connectDragSource(
        <div className="card" style={{opacity: isDragging ? 0.5 : 1, fontSize: 25, cursor: 'move'}}>
            { task_description }
        </div>,
    )
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
