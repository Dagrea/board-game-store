import React from 'react';
import axios from 'axios';
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const CartComponent = ({ name, product_id,amount,  image, removeFromCart, incrementInCart, decrementInCart }) => {
	return (
  <List selection divided verticalAlign="middle" key={product_id}>
    <List.Item>
    <List.Content>{name}</List.Content><br/>
    <List.Content>
    	<Button className="mylytlebtn" onClick={decrementInCart.bind(this, product_id)} >-</Button>
    	{amount}
    	<Button className="mylytlebtn" onClick={incrementInCart.bind(this, product_id)} >+</Button>
    </List.Content><br/>
      <List.Content floated="right">
        <Button  color="red" onClick={removeFromCart.bind(this, product_id)}>
          Удалить
        </Button>
      </List.Content>
      <Image avatar src={image} />
    </List.Item>
  </List>
)};

const AccountCart = ({account, logIn, logOut}) => {
	return (
 	account.login !== "" ? <div><Link to={`/account`}  className="mybtn">Изменить данные</Link><div onClick={logOut} >Выйти</div></div> :
 	<div><div>Вход</div><LoginForm logIn={logIn} /><br/><Link to={`/registration`}  className="mybtn">Зарегистрироваться</Link></div>
	)};

class LoginForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {login: '', password: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
      let state=this.state;
      if (this.state.login === '' || this.state.password === '') {
        alert("Введите все данные");
        event.preventDefault();
        return ;
      }
      axios.post('http://localhost:3001/authorization.php', {...state}).then(({data}) => {
      let {login,password,full_name,email,phone,city,address} = {...data};
      login = data.login;
      console.log(login,password,full_name,email,phone,city,address);
      const logIn = this.props.logIn;
      logIn({login: login, password: password,fullname: full_name, city: city, address: address, email: email, phone: phone});
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
          <div><label>login &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name="login"  type="text"
             value={this.state.login} onChange={this.onChangeInput}/></label></div>
          <div><label>password:<input name="password"  type="text"
             value={this.state.text} onChange={this.onChangeInput}/></label></div>
          <input type="submit" value="Войти"/>
        </form>
      );
    }
  }

const ExportMenu = (props) => {
  const {totalPrice, count, items, account, logIn, logOut } = props;
	const ListComponent = items.map((game,key) => (<CartComponent key={key} {...game} />));
	ListComponent.push(<Link key='1000' to={`/cart`} style={{ color: 'white', textDecoration: 'inherit', background: 'green'}}  className="mybtn">Оформить заказ</Link>);
	return (
		<Menu fixed="top" size='huge'>
			<Link to={`../`}><Menu.Item  name='browse'>Playmaker</Menu.Item></Link>
			<Link to={`/about`}><Menu.Item  name='submit'>О нас </Menu.Item></Link>
			<Menu.Menu position='right'>
			<Link to={`/request`}><Menu.Item name='help'>Техподдержка</Menu.Item></Link>
			<Popup
			position='bottom center'
	    	trigger={
			   	<Menu.Item name="account">
		  	   		Аккаунт
		      </Menu.Item>
				}
		      content={<AccountCart {...account} logIn={logIn} logOut={logOut} />}
		      on="click" hideOnScroll
	     />
			<Popup
				position='bottom right'
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