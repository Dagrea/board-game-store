import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import orderBy from 'lodash/orderBy';
import * as gameActions from '../actions/games';
import App from '../components/App';

const sortBy = (games, filterBy) => {
	switch (filterBy) {
		case 'popular' :
			return orderBy(games, 'author', 'asc');
		case 'price_high' :
			return orderBy(games, 'price', 'desc');
		case 'price_low' :
			return orderBy(games, 'price', 'asc');
		default:
			return games;
	}
};

const filterGames = (games, searchQuery) => 
	games.filter(
		o =>
			o.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0 || 
			o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >=0,
	);

const searchGames = (games, filterBy, searchQuery) => {
	return sortBy(filterGames(games,searchQuery), filterBy);
}

const mapStateToProps = ({games, filter}) => ({
	games: games.items && searchGames(games.items, filter.filterBy, filter.searchQuery),
	loaded: games.loaded,
});

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(gameActions,dispatch),
});

export default  connect(mapStateToProps,mapDispatchToProps)(App);