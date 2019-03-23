import { DragSource } from 'react-dnd'
import React  from 'react';

import { ItemTypes } from "../utils/Constants";


const contentSource = {
    beginDrag(props) {
        return {}
    },
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    }
};

function Content({ connectDragSource, isDragging}) {
    return connectDragSource(
        <div style={{opacity: isDragging ? 0.5 : 1, fontSize: 25, cursor: 'move'}}>
            { this.props.content }
        </div>,
    )
}

export default DragSource(ItemTypes.CARD, contentSource, collect)(Content);
