import React from 'react';
import {connect} from 'react-redux';
import {setGames} from './actions/games';
import axios from 'axios';
import './App.css';

class App extends React.Component {
	componentWillMount() {
		const {setGames} = this.props;
		axios.get('/games.json').then(({data}) => {
			setGames(data);
		});
	}

	render () {  	
  	const {games} = this.props;
    return (
		<div>
			<ul>
				{
					!games ? '...Загрузка' :
					games.map(game => (
						<li>{game.title}</li>
					))
				}
			</ul>
		</div>
      )
  }
}

const mapStateToProps = ({games}) => ({
	games: games.items,
});

const mapDispatchToProps = dispatch => ({
	setGames: games => dispatch(setGames(games)),
})

export default  connect(mapStateToProps,mapDispatchToProps)(App);
