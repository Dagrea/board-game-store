import {combineReducers} from 'redux';

import games from './games';
import card from './card';
import filter from './filter';

export default combineReducers({
		games,
		card,
		filter,
	});