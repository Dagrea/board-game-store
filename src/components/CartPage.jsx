import React from 'react';
import axios from 'axios';
import {Image, Button, Form} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const GamePageInCart = ({title, name, price, product_id,amount,  image, removeFromCart, incrementInCart, decrementInCart }) => {
  return (
    <div className="cartPageConteiner">
    <Image src={image} size='small' className="myInline"/>
    <div  className="myInline cartPageName">{name}</div>
    <div  className="myInline cartPageTitle">{title}</div>
    <div  className="myInline cartPageAmount">
      <Button onClick={decrementInCart.bind(this, product_id)}>-</Button>
      {amount}
      <Button onClick={incrementInCart.bind(this, product_id)}>+</Button>
    </div>
    <div  className="myInline cartPagePrice">{price*amount} грн.</div>
    <Button onClick={removeFromCart.bind(this, product_id)}>X</Button>
    </div>
  )
}

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {FIO: '', city: '', address: '', email: '', phone: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
      const state=this.state;
      const games = this.props.games;
      const totalPrice = this.props.totalPrice;
      if (this.state.FIO === '' || this.state.city === '' || this.state.address === '' || this.state.email === '' || this.state.phone === '' ) {
        alert("Введите все данные");event.preventDefault();return ;
      }
     axios.post('http://localhost:3001/addOrder.php', {...state,totalPrice, games}).then(({data}) => {
      if (data === "Succes") {alert("Ваш заказ добавлен в очередь");}
      else  {alert("Произошла ошибка, попробуйте позже или обратитесь в техподдержку")}
      });
      event.preventDefault(); 
    }
    onChangeInput(event) {
      const name = event.target.name;
      this.setState({[name]: event.target.value});
    }
    render() {
      return (
        <div>
        <h2 style={{ textAlign: 'center'}} >Форма оформления заказа</h2>        
        <Form onSubmit={this.onSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Имя' placeholder='Введите своё имя' name="FIO" 
          type="text" value={this.state.FIO} onChange={this.onChangeInput}/>
          <Form.Input fluid label='Електронная почта' placeholder='Введите почту, через которую с вами будут поддерживать связь' 
          name="email" 
          type="email" value={this.state.email} onChange={this.onChangeInput}/>
          <Form.Input fluid label='Телефон' placeholder='Введите своё имя' name="phone" 
          type="text" value={this.state.phone} onChange={this.onChangeInput}/>        
          <Form.Input fluid label='Город' placeholder='Напишите город, в который будет осуществляться доставка' 
          name="city" type="text" value={this.state.city} onChange={this.onChangeInput}/>        
          <Form.Input fluid label='Адрес' placeholder='Введите адрес, по которому прибудет ваша покупка' name="address" 
          type="text" value={this.state.address} onChange={this.onChangeInput}/>                
        </Form.Group>
        <Form.Button type='submit'>Отправить</Form.Button>
        </Form>
        </div>
      );
    }
  }

class CartPage extends React.Component {
  UNSAFE_componentWillMount() {
    window.scrollTo(0, 1);
  }
  render () {  
  const {incrementInCart, decrementInCart, removeFromCart, totalPrice} = this.props;
    const games = this.props.items;
    return (
      games.length === 0 ? <div className='myContainer'> <Link to={`../`}><Button size='huge'>На главную</Button></Link></div>:
      <div className='myContainer'>
      {
        games.map((game,index) => (
          <GamePageInCart key={index} {...game} {...incrementInCart} {...decrementInCart} {...removeFromCart} />
        ))
      }
      <div>Общий счёт: {totalPrice}</div><br/>
      <LoginForm games={games} totalPrice={totalPrice} />
      </div>
      )
  }
}

export default  CartPage;