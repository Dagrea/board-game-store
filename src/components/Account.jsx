import React from 'react';
import axios from 'axios';

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
      axios.post('http://localhost:3001/accounchanges.php', {...state}).then(({data}) => {
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
        <form onSubmit={this.onSubmit}>
          <div><label>Логин <input name="login" disabled type="text"
             value={this.state.login} onChange={this.onChangeInput}/></label></div>
          <div><label> Пароль <input name="password"  type="text"
             value={this.state.password} onChange={this.onChangeInput}/></label></div>
          <div><label>Полное имя <input name="fullname"  type="text"
             value={this.state.fullname} onChange={this.onChangeInput}/></label></div>
          <div><label>Телефон<input name="phone"  type="text"
             value={this.state.phone} onChange={this.onChangeInput}/></label></div>
          <div><label>e-mail<input name="email"  type="email"
             value={this.state.email} onChange={this.onChangeInput}/></label></div>
          <div><label> city: <input name="city"  type="text"
             value={this.state.city} onChange={this.onChangeInput}/></label></div>
          <div><label> address: <input name="address"  type="text"
             value={this.state.address} onChange={this.onChangeInput}/></label></div>
          <input type="submit" value="Подтвердить изменения"/>
        </form>
        </div>
      );
    }
  }



export default  Account;