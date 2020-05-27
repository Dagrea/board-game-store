import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createStore from './store';
import App from './containers/App';
import MainApp from './components/MainApp';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const store = createStore();

ReactDOM.render(
	<Provider store={store}>
		<MainApp />
	</Provider>,
  document.getElementById('root')
);


