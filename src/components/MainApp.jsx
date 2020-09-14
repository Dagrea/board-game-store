import React from 'react';
import Menu from '../containers/Menu';
import App from '../containers/App.js';
import GamePage from '../containers/GamePage.js';
import Cart from '../containers/CartPage.js';
import Footer from '../components/Footer.jsx';
import Registration from '../components/Registration.jsx';
import Request from '../components/Request.jsx';
import About from '../components/About.jsx';
import Account from '../containers/Account.js';
import AdminPage from '../admin/containers/AdminPage.js';

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
				    <Route path="/request" component={Request}> 
				    </Route>
				    <Route path="/about" component={About}> 
				    </Route>
				    <Route path="/account" component={Account}> 
				    </Route>
				    <Route path="/admin" component={AdminPage}> 
				    </Route>
				    <Route exact path="/" component={App}>
				    </Route>
				    <Route
			          path="*"
			          render={() => <div className='myContainer'><h1>Page not fount </h1></div>} />
				</Switch>
			<Footer/>
			</BrowserRouter>
		</div>
      )
  }
}

export default  MainApp;