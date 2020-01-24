import React, { useState }from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Panel from '../Panel/Panel';
import Loader from '../Loader/Loader';

function App() {
  const [nav, setNav]       = useState('board');
  const [loader, setLoader] = useState('');

  return (
    <section className="App">
      <Loader loader={loader}></Loader>
      <Nav state={{ nav: [nav, setNav] }}></Nav>
      <Panel type={nav} state={{ loader: [loader, setLoader] }}></Panel>
    </section>
  );
}

export default App;

