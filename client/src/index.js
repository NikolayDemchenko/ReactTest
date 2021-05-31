import 'typeface-roboto';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("page"));
serviceWorker.unregister();
