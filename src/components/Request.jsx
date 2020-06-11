import React from 'react';
import axios from 'axios';
import { Form } from 'semantic-ui-react';

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
        <h1  className='' style={{ textAlign: 'center'}} >Техподдержка</h1>        
        <Form onSubmit={this.onSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Имя' placeholder='Введите своё имя' name="fullname" 
          type="text" value={this.state.fullname} onChange={this.onChangeInput}/>
          <Form.Input fluid label='Електронная почта' placeholder='Напишите свою почту, через которую с вами будут поддерживать связь' name="email" 
          type="email" value={this.state.email} onChange={this.onChangeInput}/>
        </Form.Group>
        <Form.TextArea label='Тема сообщения' placeholder='Краткое описание проблемы' rows='2' name="theme" 
          type="text" value={this.state.theme} onChange={this.onChangeInput}/>
        <Form.TextArea label='Сообщение' placeholder='Опишите нам свою проблему' 
          name="message" rows='4'
          type="text" value={this.state.message} onChange={this.onChangeInput}/>
        <Form.Button type='submit'>Отправить</Form.Button>
        </Form>
        </div>
      );
    }
  }

export default  Request;
