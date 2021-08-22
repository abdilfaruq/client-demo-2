import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './pages/homepage/Homepage';
import './App.css';
import Dashboard from "./pages/dashboard/Dashboard";
import RegisterPage from './pages/register/RegisterPage';

const mapStateToProps = state => {
  return {
    userData: state.requestUserData.data,
    loginDetails: state.inputLoginDetails,
    error: state.requestUserData.error,
    isAuthenticated: state.requestUserData.isAuthenticated
  }
}

class App extends React.Component {
  componentDidMount(){
    if (this.props.isAuthenticated) {
      console.log(this.props.userData);
    } else {
      console.log('not logged in');
    }
  }

  render() {
    return (
      <div className="App">
            <Router>
              <Switch>
                <Route path="/" component={Homepage} exact/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/register" component={RegisterPage}/>
              </Switch>
            </Router>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);