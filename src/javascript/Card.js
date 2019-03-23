import '../css/Card.css';
import React from 'react';

import { DragSource } from 'react-dnd';
import { ItemTypes } from "../utils/Constants";

const cardSource = {
    beginDrag(props) {
        return {content: props.content}
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
}

function Card({ connectDragSource, isDragging, content }){
    return connectDragSource(
        <div className="card" style={{opacity: isDragging ? 0.5 : 1, fontSize: 25, cursor: 'move'}}>
            { content }
        </div>,
    )
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
