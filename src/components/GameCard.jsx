import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';
import placeholder from '../images/dices.png';
import { Link } from 'react-router-dom';
const GameCard = game => {
  const {image, author, title, price, addToCart} = game;
  return (
  <Card>
    <Image src={placeholder} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Meta>
        <span className='date'>{author}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
        <Icon name='dollar sign' />
        {price}
    </Card.Content>
    <Button onClick={addToCart.bind(this, game)}><Link to="/game/1">Добавить в корзину</Link></Button>
  </Card>
  )
}

export default GameCard;