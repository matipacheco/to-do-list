import React    from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Card />, document.getElementById('task-list'));
registerServiceWorker();