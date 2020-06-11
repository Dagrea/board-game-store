import React from 'react';
import axios from 'axios';
import {Image, Button} from 'semantic-ui-react';
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
        <form onSubmit={this.onSubmit}>
          <div><label>ФИО: <input name="FIO"  type="text"
             value={this.state.FIO} onChange={this.onChangeInput}/></label></div>
          <div><label> Email: <input name="email"  type="email"
             value={this.state.email} onChange={this.onChangeInput}/></label></div>
          <div><label> Телефон: <input name="phone"  type="tel"
                               value={this.state.phone} onChange={this.onChangeInput}/></label></div>
          <div><label> Город: <input name="city"  type="text"
             value={this.state.city} onChange={this.onChangeInput}/></label></div>
          <div><label> Адрес: <input name="address"  type="text"
              value={this.state.address} onChange={this.onChangeInput}/></label></div>
          <input type="submit" value="Оформить заказ"/>
        </form>
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
      games.length === 0 ? <div className='myContainer'> <Link to={`../`}>На главную</Link></div>:
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