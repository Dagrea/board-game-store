import React from 'react';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';

const CartComponent = ({ title, id, image, removeFromCart }) => (
  <List selection divided verticalAlign="middle">
    <List.Item>
      <List.Content floated="right">
        <Button onClick={removeFromCart.bind(this, id)} color="red">
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{title}</List.Content>
    </List.Item>
  </List>
);

const ExportMenu = ({totalPrice, count, items}) => (
	<Menu size='huge'>
		<Menu.Item  name='browse'>Магазин игр</Menu.Item>
		<Menu.Item  name='submit'>О нас </Menu.Item>
		<Menu.Menu position='right'>
		<Menu.Item name='help'>Техподдержка</Menu.Item>
		<Popup
    		trigger={
		    	<Menu.Item name="cart">
		    		Корзина (<b>{count}</b>)
	        	</Menu.Item>
			}
			header=<div>Итого: {totalPrice}</div>
	        content={items.map((game,key) => (
		        <CartComponent key={key} {...game} />
		    ))
			}
	        on="click" hideOnScroll
     	/>
		</Menu.Menu>
	</Menu>
	)

export default ExportMenu;