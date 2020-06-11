import React from 'react';
import axios from 'axios';

class Request extends React.Component {
	constructor(props) {
      super(props);
      this.state = {fullname: '', email: '',theme: '', message: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
      let state=this.state;
      if (this.state.name === '' || this.state.email === '' || this.state.theme === '' || this.state.message === '') {
        alert("Введите все данные");
        event.preventDefault();
        return ;
      }
      axios.post('http://localhost:3001/request.php', {...state}).then(({data}) => {
      if (data === "Succes") {alert("Ваше сообщение доставлено");}
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
            <div><label>Имя<input name="fullname"  type="text"
            	value={this.state.fullname}  className='myInline adminGamePage'
              onChange={this.onChangeInput}/>
            </label></div>
            <div><label>e-mail<input name="email"  type="text"
            	value={this.state.email} className='myInline adminGamePage' 
              onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Тема сообщения<textarea rows="1" cols="45" type="text"
              name="theme"  className='myInline adminGamePage' 
              value={this.state.theme} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Сообщение<textarea rows="10" cols="45" type="text"
              name="message"  className='myInline adminGamePage'
            	value={this.state.message} onChange={this.onChangeInput}/>
            </label></div>
          <input type="submit" value="Отправить"/>
        </form>
        </div>
      );
    }
  }

export default  Request;
