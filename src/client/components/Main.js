import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Landing from './Course/Landing';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/conversationdecoded" component={Landing} />
    </Switch>
  </main>
);

export default Main;
