import React from 'react';
import axios from 'axios';

class Registration extends React.Component {
	constructor(props) {
      super(props);
      this.state = {login: '', password: '',fullname: '', email: '',phone: '', city: '',addres: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
      let state=this.state;
      if (this.state.FIO === '' || this.state.city === '') {
        alert("Введите все данные");
        event.preventDefault();
        return ;
      }
      axios.post('http://localhost:3001/authorization.php', {...state}).then(({data}) => {
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
        <form onSubmit={this.onSubmit}>
            <div><label>Логин<input name="login"  type="text"
            	value={this.state.login} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Пароль<input name="password"  type="text"
            	value={this.state.password} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Полное имя<input name="fullname"  type="text"
            	value={this.state.fullname} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>e-mail:<input name="email"  type="text"
            	value={this.state.email} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Телефон<input name="phone"  type="text"
            	value={this.state.phone} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Город:<input name="city"  type="text"
            	value={this.state.city} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Адресс<input name="addres"  type="text"
            	value={this.state.addres} onChange={this.onChangeInput}/>
            </label></div>
          <input type="submit" value="Зарегистрироваться"/>
        </form>
        </div>
      );
    }
  }

export default  Registration;
