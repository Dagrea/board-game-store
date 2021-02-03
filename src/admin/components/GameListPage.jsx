import React from 'react';
import axios from 'axios';
import { Menu, Button, Form} from 'semantic-ui-react';

  class GameListPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {games:false}
    }
  UNSAFE_componentWillMount() {
    const req = "cap";
    axios.post('http://localhost:3000/gamelist', {req}).then(({data}) => {
      this.setState({games: data});
    });
  }
  render () { 
  const games = this.state.games;  
    return (
    games == false ? <div className='myContainer'>Загрузка</div> :
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

class GamePageInList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {game:false};
      this.state = {_id: '', name: '', price: '',image: '', title: '',description: '', instruction: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onGameDelete = this.onGameDelete.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }
  UNSAFE_componentWillMount() {
    this.setState(this.props);
  }
  onSubmit(event){
      let state=this.state;
      if (this.state.name === '' || this.state.price === '' || 
          this.state.image === '' || this.state.description === '' || 
          this.state.instruction === '') {
        alert("Введите все данные");
        event.preventDefault();
        return ;
      }
      axios.post('http://localhost:3000/updategames', {...state}).then(({data}) => {
      if (data === "Succes") {alert("Информация обновлена");}
      else  {alert("Произошла ошибка")}
      });
      event.preventDefault();      
    }
  onChangeInput(event) {
      const name = event.target.name;
      this.setState({[name]: event.target.value});
    }
  onGameDelete() {
    const req = this.props._id;
    axios.post('http://localhost:3000/deletegame', {req})
  }
  render () { 
  return (
    <div className="AdminPageConteiner">
    <Form onSubmit={this.onSubmit}>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Название товара' placeholder='' name="name" 
          type="text" value={this.state.name} onChange={this.onChangeInput}/>
          <Form.Input fluid label='Цена' placeholder='' name="price" 
          type="text" value={this.state.price} onChange={this.onChangeInput}/>
          <Form.Input fluid label='Адрес изображение' placeholder='' name="image" 
          type="text" value={this.state.image} onChange={this.onChangeInput}/>
        </Form.Group>
        <Form.TextArea label='Краткое описание' placeholder='' rows='2' name="title" 
          type="text" value={this.state.title} onChange={this.onChangeInput}/>
        <Form.TextArea label='Полное описание' placeholder='' 
          name="description" rows='5'
          type="text" value={this.state.description} onChange={this.onChangeInput}/>  
        <Form.TextArea label='Инструкция' placeholder='' 
          name="instruction" rows='5'
          type="text" value={this.state.instruction} onChange={this.onChangeInput}/>
        <Form.Button type='submit'>Сохранить изменения</Form.Button>
        <Form.Button type='button' onClick={this.onGameDelete} >Удалить товар</Form.Button>
        </Form>
    <br/><hr/><br/>
    </div>
    
   
    )
  }
}

  export default  GameListPage;

