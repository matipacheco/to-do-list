import React    from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import AddCardButton from "./buttons/AddCardButton";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Card />, document.getElementById('task-list'));
ReactDOM.render(<AddCardButton />, document.getElementById('add-card-button'));
registerServiceWorker();