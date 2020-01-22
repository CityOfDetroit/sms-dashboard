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

  return (
      <nav>
        <ul>
          <li><button onClick={() => setNav('home')}><i className="fas fa-home"></i> | Home</button></li>
          <li><button onClick={() => setNav('msg')}><i className="fas fa-sms"></i> | Message</button></li>
          <li><button onClick={() => setNav('num')}><i className="fas fa-mobile-alt"></i> | Add Number</button></li>
        </ul>
      </nav>
  );
}

export default Nav;

