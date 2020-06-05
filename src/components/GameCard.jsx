import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';
import placeholder from '../images/dices.png';
import { Link } from 'react-router-dom';

const GameCard = game => {
  const {id,name, image, author, title, price, addToCart} = game;
  return (
  <Card>
    <Link to={`/game/${id}`}><Image src={image} wrapped ui={false} /></Link>
    <Card.Content>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/game/${id}`}><Card.Header>{name}</Card.Header></Link>
      <Card.Meta>
        <span className='date'>{title}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
        <Icon name='dollar sign' />
        {price}
    </Card.Content>
    <Button onClick={addToCart.bind(this, game)}>Добавить в корзину {id}</Button>
  </Card>
  )
}

export default GameCard;