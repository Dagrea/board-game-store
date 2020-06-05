import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CartComponent = ({ name, id,amount,  image, removeFromCart, incrementInCart, decrementInCart }) => {
	return (
  <List selection divided verticalAlign="middle" key={id}>
    <List.Item>
    <List.Content>{name}</List.Content><br/>
    <List.Content>
    	<Button className="mylytlebtn" onClick={decrementInCart.bind(this, id)} >-</Button>
    	{amount}
    	<Button className="mylytlebtn" onClick={incrementInCart.bind(this, id)} >+</Button>
    </List.Content><br/>
      <List.Content floated="right">
        <Button  color="red" onClick={removeFromCart.bind(this, id)}>
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
    </List.Item>
  </List>
)};

const ExportMenu = ({totalPrice, count, items}) => {
	const ListComponent = items.map((game,key) => (<CartComponent key={key} {...game} />));
	ListComponent.push(<Link to={`/cart`} className="mybtn">Оформить заказ</Link>);
	return (
		<Menu fixed="top" size='huge'>
			<Link to={`../`}><Menu.Item  name='browse'>Playmaker</Menu.Item></Link>
			<Menu.Item  name='submit'>О нас </Menu.Item>
			<Menu.Menu position='right'>
			<Menu.Item name='help'>Техподдержка</Menu.Item>
			<Popup
	    		trigger={
			    	<Menu.Item name="cart">
			    		Корзина (<b>{count}</b>)
		        	</Menu.Item>
				}
				header={<div>Итого: {totalPrice}</div>}
		        content={ListComponent}
		        on="click" hideOnScroll
	     	/>
			</Menu.Menu>
		</Menu>
	)}

export default ExportMenu;