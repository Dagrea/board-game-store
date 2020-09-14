import React from 'react';
import axios from 'axios';
import {Form} from 'semantic-ui-react';

class Account extends React.Component {
    constructor(props) {
      super(props);
      this.state = this.props.account.account;
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    UNSAFE_componentWillMount() {
    window.scrollTo(0, 1);
    }
    componentDidUpdate(prevProps) {
    if (this.props.account.account !== prevProps.account.account) {
      const props = this.props.account.account;
      this.setState({...props});
    }
}
    onSubmit(event){
      if (this.state.login === '' || this.state.password === '') {
        alert("Введите все данные");
        event.preventDefault();
        return ;
      }
      let state=this.state;       
      axios.post('http://localhost:3000/accountchanges', {...state}).then(({data}) => {
      if (data === "Succes") {alert("Вы успешно изменили свои данные");}
      else  {alert("Произошла ошибка, попробуйте позже или обратитесь в техподдержку")}
      });
    const newAccountData ={login: this.state.login, password: this.state.password, fullname: this.state.fullname, email: this.state.email, phone: this.state.phone, city: this.state.city, address: this.state.address};
    this.setState({...newAccountData});
    event.preventDefault();    
      
    }
    onChangeInput(event) {
      const name = event.target.name;
      this.setState({[name]: event.target.value});
    }
    render() {
      return (
        <div className='myContainer'>
        <h1 style={{ textAlign: 'center'}} >Изменение данных аккаунта</h1>        
        <Form onSubmit={this.onSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid readOnly label='Логин' name="login" 
          type="text" value={this.state.login} onChange={this.onChangeInput}/>
          <Form.Input fluid label='Пароль' placeholder='Введите пароль' 
          name="password" 
          type="text" value={this.state.password} onChange={this.onChangeInput}/>
          </Form.Group><Form.Group widths='equal'><Form.Input fluid label='Имя' placeholder='Введите своё имя' name="fullname" 
          type="text" value={this.state.fullname} onChange={this.onChangeInput}/>        
          <Form.Input fluid label='Електронная почта' placeholder='Напишите свою почту, через которую с вами будут поддерживать связь' 
          name="email" type="email" value={this.state.email} onChange={this.onChangeInput}/>        
          <Form.Input fluid label='Телефон' placeholder='Введите номер своего телефона' name="phone" 
          type="text" value={this.state.phone} onChange={this.onChangeInput}/>        
          </Form.Group><Form.Group widths='equal'><Form.Input fluid label='Город' placeholder='Введите свой город' 
          name="city" 
          type="text" value={this.state.city} onChange={this.onChangeInput}/>         
          <Form.Input fluid label='Адресс' placeholder='Введите предположительное место доставки' name="addres" 
          type="text" value={this.state.address} onChange={this.onChangeInput}/>
        </Form.Group>
        <Form.Button type='submit'>Отправить</Form.Button>
        </Form>
        </div>

      );
    }
  }



export default  Account;