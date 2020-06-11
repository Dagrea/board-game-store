import React from 'react'
import axios from 'axios';
import {Card} from 'semantic-ui-react';

class About extends React.Component {
	UNSAFE_componentWillMount() {
		window.scrollTo(0, 1);
		
	}
	render () {  	
    return (
		<div>
			<div className='myContainer'>
				<h1>О компании</h1>
				<p>Playmaker&nbsp;— это магазин, где всегда можно найти отличную игру, чтобы скрасить свой досуг яркими эмоциями.</p> 
				<p>Магазинов настольных игр Playmaker&nbsp;— только недавно вошел в рынок, но уже завоевал сердца своих клиентов&nbsp;
				ведь асортимент способен удовлетворить почти каждого любителя настольных игр. 
				В&nbsp;настоящий момент доставка игр осуществляется&nbsp;по всей територии&nbsp;СНГ.
				 </p> <p>Мосигра 
				 регулярно участвует в&nbsp;крупных 
				 мероприятиях (Нашествие, Селигер, «Дикая мята», «Другие вещи», «Пикник Афиши»,
				  «Джаз-Коктебейль», день города в&nbsp;Москве и&nbsp;другие). </p> 
				  <div ><p></p> <hr color="#cb1812" /><p></p></div>
				<h4>Контакты:</h4>
				<p>Общие вопросы&nbsp;— +38 (050) 916-50-31, <a href="mailto:dagonsha@gmail.com">
				dagonsha@gmail.com</a></p>
				<p>Техподдержка&nbsp;— <a href="mailto:dagonsha@gmail.com">dagonsha@gmail.com</a>
				</p>
				<p>Маркетинг&nbsp;— <a href="mailto:dagonsha@gmail.com">dagonsha@gmail.com</a>
				</p>
			</div>
		</div>
      )
  }
}

export default  About;
