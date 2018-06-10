import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import { configureStore, history } from './store/configureStore';

const store = configureStore();

let render = () => {
  const { App } = require('./containers/App');
  ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('App'));
}

render();
if (module.hot) { module.hot.accept(render); }