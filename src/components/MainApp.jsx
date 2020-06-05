import React from 'react';
import Menu from '../containers/Menu';
import App from '../containers/App.js';
import GamePage from '../containers/GamePage.js';
import Cart from '../components/CartPage.jsx';
import Footer from '../components/Footer.jsx';

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import '../App.css';

class MainApp extends React.Component {
	
	render () {  	
    return (
		<div>
			<BrowserRouter>
			<Menu/>
				<Switch>
				    <Route path="/game/:gameId" component={GamePage}> 
				    </Route>
				    <Route path="/cart" component={Cart}> 
				    </Route>
				    <Route path="/" component={App}>
				    </Route>
				</Switch>
			<Footer/>
			</BrowserRouter>
		</div>
      )
  }
}

export default  MainApp;