import React from 'react';
import axios from 'axios';
import { Menu, Button, Form} from 'semantic-ui-react';
import AddPage from './AddPage.jsx';
import GameListPage from './GameListPage.jsx';
import OrderListPage from './OrderListPage.jsx';

  class AdminPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {page: false,authorized:false,login:"",password:""};
      this.handleClick = this.handleClick.bind(this);
      this.loginn = this.loginn.bind(this);
      this.onChangeInput = this.onChangeInput.bind(this);
    }
    UNSAFE_componentWillMount() {
      window.scrollTo(0, 1);
      const req = "help me";
      const {setGames} = this.props;
      axios.post('http://localhost:3000/gamelist', {req}).then(({data}) => {
      setGames(data); 
      });
    }
    handleClick (e, { name }) { 
      this.setState({ page: name })
    }
    loginn () {
      if (this.state.login === "admin" || this.state.password === "admin") {
        this.setState({ authorized: true })
      }
    };
    onChangeInput(event) {
      const name = event.target.name;
      this.setState({[name]: event.target.value});
    }
    render() {
      console.log(this.state);
      const authorized = this.state.authorized;
      return (
        authorized === false ? <div className='myContainer'>
        <div className='myInline adminGamePage'><label>Логин<br/><textarea name="login" rows="1" cols="20" type="text"
          value={this.state.login} onChange={this.onChangeInput} /></label><br/></div>
        <div className='myInline adminGamePage'><label>Пароль<br/><textarea name="password" rows="1" cols="20" type="text"
          value={this.state.password} onChange={this.onChangeInput}/></label><br/></div><br/>
          <Button onClick={this.loginn} >Войти</Button>
        </div> :
        <div className='myContainer'>
        <Menu size='huge'>
          <Menu.Item  name='addGame'  onClick={this.handleClick}>Добавить товар</Menu.Item>
          <Menu.Item  name='gamesList' onClick={this.handleClick} >Товары</Menu.Item>
          <Menu.Item  name='orders' onClick={this.handleClick}>Заказы</Menu.Item>
        </Menu>
    {this.state.page === "addGame" ? <AddPage/> :
     this.state.page === "gamesList" ? <GameListPage/> :
     this.state.page === "orders" ? <OrderListPage/> :
     <div>?</div>} 
    </div>
      );
    }
  }

  export default  AdminPage;