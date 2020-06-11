import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react'

class Registration extends React.Component {
	constructor(props) {
      super(props);
      this.state = {login: '', password: '',fullname: '', email: '',phone: '', city: '',addres: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
      let state=this.state;
      if (this.state.login === '' || this.state.password === '' || this.state.fullname === '' || this.state.email === ''
        || this.state.phone === '' || this.state.city === '' || this.state.addres === '') {
        alert("Введите все данные");
        event.preventDefault();
        return ;
      }
      axios.post('http://localhost:3001/registration.php', {...state}).then(({data}) => {
      if (data === "Succes") {alert("Вы успешно зарегистрировались");}
      else  {alert("Произошла ошибка, попробуйте позже или обратитесь в техподдержку")}
      });
      event.preventDefault();      
    }
    onChangeInput(event) {
      const name = event.target.name;
      this.setState({[name]: event.target.value});
    }
	UNSAFE_componentWillMount() {
		window.scrollTo(0, 1);
	}
    render() {
      return (
        <div className='myContainer'>
        <h1  className='' style={{ textAlign: 'center'}} >Регистрация</h1>        
        <Form onSubmit={this.onSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Логин' placeholder='Введите логин' name="login" 
          type="text" value={this.state.login} onChange={this.onChangeInput}/>
          <Form.Input fluid label='Пароль' placeholder='Введите пароль' 
          name="password" 
          type="text" value={this.state.password} onChange={this.onChangeInput}/>
          <Form.Input fluid label='Имя' placeholder='Введите своё имя' name="fullname" 
          type="text" value={this.state.fullname} onChange={this.onChangeInput}/>        
          <Form.Input fluid label='Електронная почта' placeholder='Напишите свою почту, через которую с вами будут поддерживать связь' 
          name="email" type="email" value={this.state.email} onChange={this.onChangeInput}/>        
          <Form.Input fluid label='Телефон' placeholder='Введите номер своего телефона' name="phone" 
          type="text" value={this.state.phone} onChange={this.onChangeInput}/>        
          <Form.Input fluid label='Город' placeholder='Введите свой город' 
          name="city" 
          type="text" value={this.state.city} onChange={this.onChangeInput}/>         
          <Form.Input fluid label='Адресс' placeholder='Введите предположительное место доставки' name="addres" 
          type="text" value={this.state.addres} onChange={this.onChangeInput}/>
        </Form.Group>
        <Form.Button type='submit'>Отправить</Form.Button>
        </Form>
        </div>
      );
    }
  }

export default  Registration;
