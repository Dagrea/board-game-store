import {combineReducers} from 'redux';

import games from './games';
import account from './account';
import cart from './cart';
import filter from './filter';

export default combineReducers({
		games,
		account,
		cart,
		filter,
	});