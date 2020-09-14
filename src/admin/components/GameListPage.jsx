import React from 'react';
import axios from 'axios';
import { Menu, Button, Form} from 'semantic-ui-react';

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
class GamePageInList extends React.Component {
  constructor(props) {
      super(props);
      this.state = {games:false};
      
    }
  render () { 
  const {title, name, price, id,amount,  image, description, instruction } = this.props;
  return (
    <div className="AdminPageConteiner">
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

    /*Батоны в начало
    <Button>Сохранить изменения</Button>
    <Button>Удалить товар</Button><br/>*/
   /* <Form onSubmit={this.onSubmit}>
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
        <Form.Button type='submit'>Отправить</Form.Button>
        </Form>*/
    )
  }
}

  export default  GameListPage;

