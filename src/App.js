import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import SmartComponent from './SmartComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Link to={'/smart'} >SmartComponent</Link>
            <Link to={'/hello'} >Hello</Link>
            <Link to={'/hello/world'} >World</Link>
            <Switch>
              <Route path={'/smart'} component={SmartComponent} />
              <Route path={'/hello/world'} component={World} />
              <Route path={'/hello'} component={Hello} />
              <Route path={'/'} exact component={Hello} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const Hello = function (props) {
  return <div>Hello</div>
}

const World = () => (
  <div>World</div>
)

export default App;
