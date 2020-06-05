import React from 'react'
import axios from 'axios';
import {Card} from 'semantic-ui-react';
import Filter from '../containers/Filter';
import GameCard from '../containers/GameCard';

class App extends React.Component {
	componentWillMount() {
		const {setGames} = this.props;
		axios.get('http://localhost:3001/productlist.php').then(({data}) => {
			setGames(data);
			console.log(data);			
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
