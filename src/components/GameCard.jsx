import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const GameCard = game => {
  const {product_id,name, image, title, price, addToCart} = game;
  return (
  <Card>
    <Link to={`/game/${product_id}`}><Image src={image} wrapped ui={false} /></Link>
    <Card.Content>
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/game/${product_id}`}><Card.Header>{name}</Card.Header></Link>
      <br/><Card.Meta>
        <span className='date'>{title}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
        <Icon name='ruble sign' />
        {price}
    </Card.Content>
    <Button onClick={addToCart.bind(this, game)}>Добавить в корзину</Button>
  </Card>
  )
}

export default GameCard;