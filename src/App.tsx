import React from 'react';
import { Route, Switch } from 'react-router';
import { TokenContainer } from './containers/Token.container';
import { MainPage } from './pages/Main.pages';

function App() {
  return (
    <Switch >
      <Route
        exact
        path='/'
        render={() => <MainPage />}
      />
      <Route
        exact
        path='/redirect'
        render={() => <TokenContainer />}
      />
    </Switch>
  );
}

export default App;
