import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path={'/'} exact={true} component={Hello} />
            <Route path={'/hello'} component={Hello} />
            <Route path={'/world'} component={World} />
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
