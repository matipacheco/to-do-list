import React, { Component } from 'react';
import ReactDOM from "react-dom";

import CardInput        from "./CardInput";
import StoreCardButton  from './buttons/StoreCardButton';
import RemoveCardButton from './buttons/RemoveCardButton';

class Card extends Component {
    static addCard() {
        const element = <Card/>;
        ReactDOM.render(element, document.getElementById('task-list'));
    }
    render() {
        return (
            <div>
                <CardInput/>
                <StoreCardButton/>
                <RemoveCardButton/>
            </div>
        )
    }
}

export default Card;