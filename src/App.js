import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from './context'
import Navbar from './components/Layout/Navbar'
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;
const Home = Loadable({
  loader: () => import('./components/Layout/Home'),
  loading: Loading
});

const Student = Loadable({
  loader: () => import('./components/Layout/Student'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/student/:id" component={Student}></Route>
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
