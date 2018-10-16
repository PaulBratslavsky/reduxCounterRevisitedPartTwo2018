import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './Counter';

import store from './Redux/Store';

ReactDOM.render(<Counter store={store} />, document.getElementById('root'));

