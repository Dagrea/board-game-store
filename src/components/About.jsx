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
				ведь асортимент способен удовлетворить почти каждого любителя настольных игр. Мы вкладывает всю нашу энергию и энтузиазм в 
				улучшение сервиса наших покупателей, ведь мы вас очень ценим!</p>
				<hr color="#cb1812" />
				<h2>История</h2>
				<p>Playmaker начинал как стартап и очень быстро перерос вполноценный бизнес, что дало наи возможности развиваться и увеличивать
				асортимент предоставляемых игр. Мы активно участвуем в жизни сообщества и  
				 регулярно участвуем в&nbsp;крупных 
				 мероприятиях (Нашествие, Селигер, «Дикая мята», «Другие вещи», «Пикник Афиши»,
				  «Джаз-Коктебейль».</p>
				<hr color="#cb1812" />
				<h2>Доставка</h2>
				<p>В&nbsp;настоящий момент доставка игр осуществляется&nbsp;по всей територии&nbsp;СНГ.</p>
				<p>Оплата заказа происходит наложеным платежом.</p>
				  <div ><p></p> <hr color="#cb1812" /><p></p></div>
				<h4>Контакты:</h4>
				<p>Общие вопросы&nbsp;— +38 (050) 916-50-31, <a href="mailto:dagonsha@gmail.com">
				contact.playmaker@gmail.com</a></p>
				<p>Техподдержка&nbsp;— <a href="mailto:dagonsha@gmail.com">help.playmaker@gmail.com</a>
				</p>
				<p>Маркетинг&nbsp;— <a href="mailto:dagonsha@gmail.com">playmaker@gmail.com</a>
				</p>
			</div>
		</div>
      )
  }
}

export default  About;
