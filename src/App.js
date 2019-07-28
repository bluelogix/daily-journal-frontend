import React from 'react';
import HomePage from './components/homepage'
import LogIn from './auth/login'
import SignUp from './auth/signup'
import './App.css';
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route exact path='/'  component={HomePage}  />
      <Route path='/login' component={LogIn} />
      <Route path='/signup' component={SignUp} />

    </div>
  );
}

export default App;
