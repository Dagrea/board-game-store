import React from 'react';
import logo from '../images/dices.png';
import { Link } from 'react-router-dom';

const Footer = () => (
     <div className="ui inverted vertical footer segment"><br/>
    <div className="ui center aligned container">
      <div className="ui stackable inverted divided grid">
        <div className="three wide column">
          <div className="ui inverted link list">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`../`}>Главная</Link>
          </div> 
        </div>
        <div className="three wide column">
          <div className="ui inverted link list">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/about`}>О нас</Link>
          </div> 
        </div>
        <div className="three wide column">
          <div className="ui inverted link list">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/request`}>Помощь</Link>
          </div>   
        </div>
      </div>
      <div className="ui inverted section divider"></div>
      © Playmaker 2020
    </div>
  </div>
    )
export default Footer;