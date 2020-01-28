import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

(drupalSettings.intranet.intranetJs.appAccess == 'true') ? ReactDOM.render(<App />, document.getElementById('root')) : document.getElementById('root').innerHTML = <h1>Permission Denied.</h1>;