import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './store';
import App from './containers/App';
import GamePage from './components/GamePage';
import 'semantic-ui-css/semantic.min.css';
//import './index.css';

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<GamePage />
	</Provider>,
  document.getElementById('root')
);


