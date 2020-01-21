import React, { useState }from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Panel from '../Panel/Panel';

function App() {

  return (
    <section className="App">
      <Nav></Nav>
      <Panel></Panel>
    </section>
  );
}

export default App;

