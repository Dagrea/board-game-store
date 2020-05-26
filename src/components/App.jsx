import React from 'react'
import axios from 'axios';
import {Card} from 'semantic-ui-react';
import Menu from '../containers/Menu';
import Filter from '../containers/Filter';
import GameCard from '../containers/GameCard';
import Footer from '../components/Footer.jsx';


import '../App.css';

class App extends React.Component {
	componentWillMount() {
		const {setGames} = this.props;
		axios.get('/games.json').then(({data}) => {
			setGames(data);
		});
	}

	render () {  	
  	const {games, loaded} = this.props;
    return (
		<div>
			<div className='myContainer'>
			<Filter/>
			<div className='container'>
			<Card.Group itemsPerRow={4}>
				{
					!loaded ? '...Загрузка...' :
					games.map((game,index) => (
						<GameCard key={index} {...game} />
					))
				}
			</Card.Group>
			</div>
			</div>
		</div>
      )
  }
}

export default  App;
