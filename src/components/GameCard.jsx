import React from 'react';
import {Card, Icon, Image, Button} from 'semantic-ui-react';

const GameCard = game => {
  const {image, author, title, price, addToCart} = game;
  return (
  <Card>
    <Image src={image} wrapped ui={false} />
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
    <Button onClick={addToCart.bind(this, game)}>Добавить в корзину</Button>
  </Card>
  )
}

export default GameCard;