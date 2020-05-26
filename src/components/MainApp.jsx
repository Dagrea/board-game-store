import React from 'react';
import axios from 'axios';
import Menu from '../containers/Menu';
import App from '../containers/App.js';
import GamePage from '../components/GamePage.jsx';
import Footer from '../components/Footer.jsx';

import { Switch, Router, BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';

class MainApp extends React.Component {
	
	render () {  	
  	const {games, loaded} = this.props;
    return (
		<div>
			<Menu/>
			<BrowserRouter>
				<Switch>
				    <Route path="/game/:gameId" component={GamePage}> 
				    </Route>
				    <Route path="/" component={App}>
				    </Route>
				</Switch>
			</BrowserRouter>
			<Footer/>
		</div>
      )
  }
}

export default  MainApp;