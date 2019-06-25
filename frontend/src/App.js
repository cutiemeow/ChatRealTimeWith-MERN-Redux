import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Login from './conponents/login/';
import Register from './conponents/register/';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component = {Login} />
        <Route path = "/login" conponent = {Login} />
        <Route path = "/register" component = {Register} />
      </Router>

    </div>
  );
}

export default App;
