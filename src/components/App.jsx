import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Switch } from 'react-router-dom';

import { Actors, Navbar, Movies, Profile, MovieInformation } from '.';

const App = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <main>
      <Switch>
        <Route exact path="/movie/:id">
          <MovieInformation />
        </Route>
        <Route exact path="/actors/:id">
          <Actors />
        </Route>
        <Route exact path="/profile/:id">
          <Profile />
        </Route>
        <Route exact path="/">
          <Movies />
        </Route>
      </Switch>
    </main>
  </div>
);

export default App;
