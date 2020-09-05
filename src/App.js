import React from 'react';
import './App.css';
import HomepageScreen from './screens/homepage/HomepageScreen';
import ShopingCartScreen from './screens/shopingCart/ShopingCartScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/shoping-cart">
            <ShopingCartScreen />
          </Route>
          <Route path="/">
            <HomepageScreen />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
