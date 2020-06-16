import React from 'react';
import axios from 'axios';
import { Menu, Button, Form} from 'semantic-ui-react';

class OrderListPage extends React.Component {
   constructor(props) {
      super(props);
      this.state = {orders:false,items:false}
    }
  UNSAFE_componentWillMount() {
    axios.get('http://localhost:3001/orderlist.php').then(({data}) => {
      this.setState({orders: data[0],items: data[1]});
    });
  }
  onDataChange(game) {

  };
  onGameDelete() {

  }
  render () { 
  const orders = this.state.orders; 
  const items = this.state.items; 
    return (
    orders === false ? <div className='myContainer'>Загрузка</div> :
    (<div><hr/>
      {
        orders.map((order,index) => (
        <GamePageInList key={index} {...order} items={items}/>
        ))
      }
    </div>) 
    )
  }
}
const GamePageInList = ({items,order_id, order_status, date, full_price,full_name,  city, address, email, phone }) => {
  return (
    <div className="AdminPageConteiner">
    <div className='myInline adminGamePage'><label>Статус<br/><textarea name="order_status" rows="1" cols="45" type="text"
      value={order_status} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Дата подачи<br/><textarea name="date" rows="1" cols="45" type="text"
      value={date} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Цена заказа<br/><textarea name="full_price" rows="1" cols="45" type="text"
      value={full_price} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Имя покупателя<br/><textarea name="full_name" rows="1" cols="60" type="text"
      value={full_name} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Город<br/><textarea name="city" rows="1" cols="45" type="text"
      value={city} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Адресс<br/><textarea name="address" rows="1" cols="45" type="text"
      value={address}/></label><br/></div>
    <div className='myInline adminGamePage'><label>e-mail<br/><textarea name="email" rows="1" cols="45" type="text"
      value={email} /></label><br/></div>
    <div className='myInline adminGamePage'><label>Телефон<br/><textarea name="phone" rows="1" cols="45" type="text"
      value={phone}/></label><br/></div>
    <br/>
      {
        items.map((item,index) => (
        <ItemList key={index} order_id={order_id} item={item}/>
        ))
      }
      <hr/><br/>
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

const ItemList = ({order_id,item}) => {
  return (
  order_id === item.order_id ? <div>Позиция товара: {item.product_id} Количество: {item.amount}</div> : <div/>
  )
}

  export default  OrderListPage;

