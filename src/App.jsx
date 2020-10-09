import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as routes from './routes';
import CountryList from './pages/country-list/country-list';
import CountryDetails from './pages/country-details/country-details';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={routes.HOME} component={CountryList}></Route>
          <Route exact path={routes.COUNTRY_DETAILS} component={CountryDetails}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
