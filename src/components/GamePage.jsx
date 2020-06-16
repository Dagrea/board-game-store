import React from 'react'
import axios from 'axios';
import {Image, Button, Icon} from 'semantic-ui-react';
import placeholder from '../images/dices.png';

import '../App.css';

class GamePage extends React.Component {
	constructor(props) {
    super(props)
    this.state = {
      image:placeholder,
      price: 0,
      name: 'The Game',
      description: "",
      instruction: ""
    }
  }
	UNSAFE_componentWillMount() {
		axios.get('http://localhost:3001?id='+this.props.match.params.gameId).then(({data}) => {
    	this.setState({...data});
		});
	}

	render () {
	const state = {...this.state, incrementInCart: this.props.incrementInCart,
	 decrementInCart: this.props.decrementInCart, 
	 removeFromCart: this.props.removeFromCart};
    return (
		<div> 
			<div className='myContainer'>
				<div className='myHead myCenter myFlex'>{this.state.name}</div>
				<div className='mySection myVCenter mymrgbtm '>
					<div className='myLeft myCenter'>
						<Image src={this.state.image} alt="GameImage" size='medium' />
					</div>
					<div className='myRight myCenter'>
						<div className='myCenter myFluid'><div className='mymrgbtm myBlock'>Цена одного набора: {this.state.price} UAH</div></div>
						<Button fluid color='green' size='large' animated='fade'>
					   		<Button.Content visible> <Icon name='shop' /></Button.Content>
					    	<Button.Content hidden onClick={this.props.addToCart.bind(this, state)}>В корзину</Button.Content>
					    </Button>
					</div>
				</div>
				<div className='myFlex myCenter'>
					<div className='myCenter my80prc'>
						<h2>Описание</h2>
						<div dangerouslySetInnerHTML={{__html:this.state.description}}></div>
					</div>
					<div className='myCenter my80prc'>
						<h2>Инструкция</h2>
						<div dangerouslySetInnerHTML={{__html: this.state.instruction}}></div>
					</div>
				</div>
			</div>
		</div>
      )
  }
}

export default GamePage;