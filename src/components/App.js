import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// App components
import NavBar from './NavBar'
import Main from './Main'
import Lotteries from './Lotteries'
import NotFound from './NotFound'


const App = () => (
  <BrowserRouter>
    <div className="container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/lotteries" component={Lotteries}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;