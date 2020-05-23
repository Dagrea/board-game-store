import {combineReducers} from 'redux';

import games from './games';
import cart from './cart';
import filter from './filter';

export default combineReducers({
		games,
		cart,
		filter,
	});