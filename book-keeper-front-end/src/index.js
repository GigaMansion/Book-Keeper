import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdminPage from './component/AdminPage';

import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router, Route} from 'react-router-dom';

// testing only
// import LoginPanel from './component/LoginPanel/LoginPanel';

ReactDOM.render(
  <Router>
    <React.StrictMode>

      <Route exact path="/" component={App}/>
      <Route path="/adminpage" component={AdminPage}/>
      {/* <AdminPage /> */}

    </React.StrictMode>
  </Router>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
