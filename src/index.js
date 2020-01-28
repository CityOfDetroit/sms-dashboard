import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

(drupalSettings.intranet.intranetJs.appAccess == 'true') ? ReactDOM.render(<App />, document.getElementById('root')) : '';