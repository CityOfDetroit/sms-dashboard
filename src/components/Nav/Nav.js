import React, { useState }from 'react';
import './Nav.scss';

function Nav(props) {
  // Declare a new state variable, which we'll call when changing panel render
  const {
    nav: [nav, setNav]
  } = {
    nav: useState(0),
    ...(props.state || {})
  };

  const logo = require('../../img/logo.png');

  const getButtonClass = (btn) => {
    let status;
    if(btn == nav){
      status = 'active';
    }else{
      status = '';
    }
    return status;
  }

  const getHomePage = () => {
    return `${window.location.protocol}//${window.location.host}`;
  }

  return (
      <nav>
        <ul>
          <li><a href={getHomePage()}><img src={logo} alt="City of Detroit"></img></a></li>
          <li><button className={getButtonClass('board')} onClick={() => setNav('board')}><i className="fas fa-tachometer-alt"></i> BOARD</button></li>
          <li><button className={getButtonClass('msg')}  onClick={() => setNav('msg')}><i className="fas fa-sms"></i> MESSAGE</button></li>
          <li><button className={getButtonClass('num')}  onClick={() => setNav('num')}><i className="fas fa-mobile-alt"></i> NUMBER +</button></li>
          <li><button className={getButtonClass('info')}  onClick={() => setNav('info')}><i className="far fa-question-circle"></i> INFO</button></li>
        </ul>
      </nav>
  );
}

export default Nav;

