import React from 'react';

const Footer = () => (
     <div className="ui inverted vertical footer segment">
    <div className="ui center aligned container">
      <div className="ui stackable inverted divided grid">
        <div className="three wide column">
          <h4 className="ui inverted header">Group 1</h4>
          <div className="ui inverted link list">
            <a href="http://localhost:3000" className="item">Link One</a>
            <a href="http://localhost:3000" className="item">Link Two</a>
            <a href="http://localhost:3000" className="item">Link Three</a>
            <a href="http://localhost:3000" className="item">Link Four</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Group 2</h4>
          <div className="ui inverted link list">
            <a href="http://localhost:3000" className="item">Link One</a>
            <a href="http://localhost:3000" className="item">Link Two</a>
            <a href="http://localhost:3000" className="item">Link Three</a>
            <a href="http://localhost:3000" className="item">Link Four</a>
          </div>
        </div>
        <div className="three wide column">
          <h4 className="ui inverted header">Group 3</h4>
          <div className="ui inverted link list">
            <a href="http://localhost:3000" className="item">Link One</a>
            <a href="http://localhost:3000" className="item">Link Two</a>
            <a href="http://localhost:3000" className="item">Link Three</a>
            <a href="http://localhost:3000" className="item">Link Four</a>
          </div>
        </div>
      </div>
      <div className="ui inverted section divider"></div>
      <img src="assets/images/logo.png" alt="logo" className="ui centered mini image"/>
      <div className="ui horizontal inverted small divided link list">
        <a className="item" href="http://localhost:3000">Site Map</a>
        <a className="item" href="http://localhost:3000">Contact Us</a>
        <a className="item" href="http://localhost:3000">Terms and Conditions</a>
        <a className="item" href="http://localhost:3000">Privacy Policy</a>
      </div>
    </div>
  </div>
    )
export default Footer;