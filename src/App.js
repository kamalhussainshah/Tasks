import React from 'react';

import { Router, Route } from 'react-router-dom';

import MainForm from './auth/index';
import Routes from './routing/route';

import history from './history';

const App = () => {
  
    return (
          <Router history={history}>

            <Route exact path='/' component= {  MainForm }/>
            <Route exact component= { Routes }/>

          </Router>
     
      );
  
}

export default App;
