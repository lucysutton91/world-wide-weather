
import React from 'react';
import { Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import WeatherDetail from './components/WeatherDetail';
import Landing from './components/Landing';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/weatherdetail" component={WeatherDetail} />
        <Route path="/" component={Landing} />
      </Switch>
    </div>
  )
}

export default App;