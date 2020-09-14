import React from 'react'
import axios from 'axios';
import {Card} from 'semantic-ui-react';
import Filter from '../containers/Filter';
import GameCard from '../containers/GameCard';

class App extends React.Component {
	UNSAFE_componentWillMount() {
		window.scrollTo(0, 1);
		const {setGames} = this.props;
		const req = "help me";
		axios.post('http://localhost:3000/gamelist', {req}).then(({data}) => {
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
