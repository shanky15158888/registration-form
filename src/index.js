import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './userList';
import Register from './registration';
import NotFound from './notfound';

ReactDOM.render(
      <Router>
        <div>
          <Switch>
            <Route path="/" component={App} exact />            
            <Route path="/userList" component={UserList} />
            <Route path="/registration" component={Register} />            
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    , document.getElementById('root'));
