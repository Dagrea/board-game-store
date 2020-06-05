import React from 'react';
import axios from 'axios';
import placeholder from '../images/dices.png';
import {Image, Button} from 'semantic-ui-react';

const GamePageInCart = ({title, name, price, id,amount,  image, removeFromCart, incrementInCart, decrementInCart }) => {
  amount = 1;
	return (
		<div className="cartPageConteiner">
    <Image src={image} size='small' className="myInline"/>
    <div  className="myInline cartPageName">{name}</div>
    <div  className="myInline cartPageTitle">{title}</div>
    <div  className="myInline cartPageAmount">
      <Button>-</Button>
      {amount}
      <Button>+</Button>
    </div>
    <div  className="myInline cartPagePrice">{price*amount} грн.</div>
    </div>
	)
}

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {paymentMethod: 'Visa, MasterCard', FIO: '', city: '', adress: '', email: '', phone: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
      let state=this.state;
      let games = this.props.games;
      axios.post('http://localhost:3001/addOrder.php', {...state, games}).then(({data}) => {
      console.log(data);
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
          <div><label> Способ оплаты: <select name="paymentMethod"  value={this.state.paymentMethod} onChange={this.onChangeInput}>
              <option value="Visa, MasterCard">Visa, MasterCard</option>
              <option value="Оплата при доставке">Оплата при доставке</option>
            </select>
          </label></div>
          <div><label> Город: <input name="city"  type="text"
             value={this.state.city} onChange={this.onChangeInput}/></label></div>
          <div><label> Адрес: <input name="adress"  type="text"
              value={this.state.adress} onChange={this.onChangeInput}/></label></div>
          <input type="submit" value="Оформить заказ"/>
        </form>
      );
    }
  }

class Cart extends React.Component {

	render () {  	
  	const games = [{
  	    "id": 1,
  	    "title": "Классическая настольная игра, требующая составления слов с помощью фишек-букв.",
  	    "name": "Скрабл",
  	    "image": "https://www.mosigra.ru/mosigra.product.main/522/544/1-7_800x500.jpg",
  	    "price": 710,
  	    "amount": 3
  	  },
  	  {
  	    "id": 2,
  	    "title": "Берите эту игру на вечеринки. Научиться в неё играть — дело пяти минут, а весело будет всем.",
  	    "name": "Взрывные котята",
  	    "image": "https://www.mosigra.ru/mosigra.product.main/559/016/DSC_6565_800x500.jpg",
  	    "price": 415,
  	    "amount": 5
  	  }]//this.props;
    return (
			<div className='myContainer'>
			{
				games.map((game,index) => (
					<GamePageInCart key={index} {...game} />
				))
			}
      <LoginForm games={games}/>
			</div>
      )
  }
}

export default  Cart;
