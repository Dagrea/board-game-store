import React from 'react';
import axios from 'axios';
import { Menu, Button, Form} from 'semantic-ui-react';

class AddPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {name: '', price: '',image: '', title: '',description: '', instruction: ''};
      this.onChangeInput = this.onChangeInput.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
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
      axios.post('http://localhost:3000/addgame', {...state}).then(({data}) => {
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
        <h2  style={{ textAlign: 'center'}} >Добавление товара</h2>        
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
        <Form.Button type='submit'>Отправить</Form.Button>
        </Form>
        </div>
      );
    }
  }

  export default  AddPage;

