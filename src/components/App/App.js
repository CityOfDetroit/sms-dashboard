import React, { useState }from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Panel from '../Panel/Panel';

function App() {
  const [nav, setNav]     = useState('msg');

  return (
    <section className="App">
      <Nav state={{ nav: [nav, setNav] }}></Nav>
      <Panel type={nav}></Panel>
    </section>
  );
}

export default App;

