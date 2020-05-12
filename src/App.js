import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-menu">Каталог</div>
        <div className="header-menu">Sign in</div>
      </div>
      <div className="content flex-container">
        <div className="box-product"></div>
        <div className="box-product"></div>
        <div className="box-product"></div>
        <div className="box-product"></div>
        <div className="box-product"></div>
        <div className="box-product"></div>
        <div className="box-product"></div>
        <div className="box-product"></div>
        <div className="box-product"></div>
        <div className="box-product"></div>
      </div>
      <div className="footer">
        <div className="column">
          <ul>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Отзывы</li>
          </ul>
        </div>
        <div className="column">
          <ul>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
