import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Menu, Button, Image } from 'semantic-ui-react';


  class AdminPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {page: false,};
      this.handleClick = this.handleClick.bind(this);
    }
    UNSAFE_componentWillMount() {
      window.scrollTo(0, 1);
    }
    handleClick (e, { name }) { 
      this.setState({ page: name })
    }

    render() {
      return (
        <div className='myContainer'>
        <Menu size='huge'>
          <Menu.Item  name='addGame'  onClick={this.handleClick}>Добавить товар</Menu.Item>
          <Menu.Item  name='gamesList' onClick={this.handleClick} >Товары</Menu.Item>
          <Menu.Item  name='orders' onClick={this.handleClick}>Заказы</Menu.Item>
        </Menu>
    {this.state.page === "addGame" ? <AddPage/> :
     this.state.page === "gamesList" ? <GameListPage/> :
     <div></div>} 
    </div>
      );
    }
  }


class AddPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {name: '', price: '',image: '', title: '',description: '', instruction: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(event){
      let state=this.state;
      if (this.state.name === '' || this.state.price === '') {
        alert("Введите все данные");
        event.preventDefault();
        return ;
      }
      axios.post('http://localhost:3001/addgame.php', {...state}).then(({data}) => {
      if (data === "Succes") {alert("Товар добавлен");}
      else  {alert("Произошла ошибка")}
      });
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
            <div><label>Название<input name="name" id="addGameForm" type="text"
              value={this.state.name} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Цена<input name="price"  type="text"
              value={this.state.price} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Адрес изображения<input name="image"  type="text"
              value={this.state.image} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Краткое описание:<textarea name="title" rows="3" cols="45" type="text"
              value={this.state.title} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Полное описание<textarea name="description" rows="10" cols="45" type="text"
              value={this.state.description} onChange={this.onChangeInput}/>
            </label></div>
            <div><label>Инструкция<textarea name="instruction" rows="10" cols="45" type="text"
              value={this.state.instruction} onChange={this.onChangeInput}/>
            </label></div>
          <input type="submit" value="Добавить товар"/>
        </form>
        </div>
      );
    }
  }

  class GameListPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {games:false}
    }
  UNSAFE_componentWillMount() {
    axios.get('http://localhost:3001/productlist.php').then(({data}) => {
      this.setState({games: data});
    });
  }
  onDataChange(game) {

  };
  onGameDelete() {

  }
  render () { 
  const games = this.state.games;  
    return (
    games === false ? <div className='myContainer'>Загрузка</div> :
    (<div><hr/>
      {
        games.map((game,index) => (
        <GamePageInList key={index} {...game} />
        ))
      }
    </div>) 
    )
  }
}
const GamePageInList = ({title, name, price, id,amount,  image, description, instruction }) => {
  return (
    <div className="AdminPageConteiner">
    <Button>Сохранить изменения</Button>
    <Button>Удалить товар</Button><br/>
    <div className='myInline adminGamePage'><label>Название<br/><textarea name="name" rows="1" cols="45" type="text"
      value={name}/></label><br/></div>
    <div className='myInline adminGamePage'><label>Цена<br/><textarea name="price" rows="1" cols="45" type="text"
      value={price} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Адрес изображения<br/><textarea name="image" rows="2" cols="60" type="text"
      value={image} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Краткое описание<br/><textarea name="title" rows="3" cols="60" type="text"
      value={title} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Полное описание<br/><textarea name="description" rows="10" cols="60" type="text"
      value={description} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Инструкция<br/><textarea name="instruction" rows="10" cols="60" type="text"
      value={instruction} /></label><br/></div><br/><hr/><br/>
    </div>
  )
}

  export default  AdminPage;

