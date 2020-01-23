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

  const getButtonClass = (btn) => {
    let status;
    if(btn == nav){
      status = 'active';
    }else{
      status = '';
    }
    return status;
  }

  return (
      <nav>
        <ul>
          <li><button className={getButtonClass('home')} onClick={() => setNav('home')}><i className="fas fa-home"></i> Home</button></li>
          <li><button className={getButtonClass('msg')}  onClick={() => setNav('msg')}><i className="fas fa-sms"></i> Message</button></li>
          <li><button className={getButtonClass('num')}  onClick={() => setNav('num')}><i className="fas fa-mobile-alt"></i> Add Number</button></li>
        </ul>
      </nav>
  );
}

export default Nav;

