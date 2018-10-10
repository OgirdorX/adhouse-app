import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router.jsx';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<Router />, document.getElementById('root'));
registerServiceWorker();
