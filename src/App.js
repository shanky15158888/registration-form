import React from 'react';
import './App.css';
import Dashboard from './dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './userList';
import Register from './registration';
import NotFound from './notfound';
import { parentContext } from './parentContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerDetail: {}
    }
  }
  handleNext = (data) => {
    this.setState({ registerDetail: data });
  }
  render() {
    const { registerDetail } = this.state;
    const detail = {
      registerDetail,
      handleNext: this.handleNext
    };
    return <parentContext.provider value={detail}>
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/userList" component={UserList} />
            <Route path="/registration" component={Register} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </parentContext.provider>
  }
}

export default App;
