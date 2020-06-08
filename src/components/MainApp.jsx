import React from 'react';
import Menu from '../containers/Menu';
import App from '../containers/App.js';
import GamePage from '../containers/GamePage.js';
import Cart from '../containers/CartPage.js';
import Footer from '../components/Footer.jsx';
import Registration from '../components/Registration.jsx';
import Account from '../containers/Account.js';

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
				    <Route path="/registration" component={Registration}> 
				    </Route>
				    <Route path="/account" component={Account}> 
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