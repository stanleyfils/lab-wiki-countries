import React, { Component } from 'react';
import CountryDetail from './components/CountryDetail';
import { Route, Switch, Link } from 'react-router-dom';
import data from './countries.json'
import './App.css';

class App extends Component {
  state = {
    countries: [...data]
  };

  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/" render={() => <CountryDetail name= " " />} />
      </Switch>
    </div>
    );
  }
}



export default App;
