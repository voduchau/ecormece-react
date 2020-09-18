import React from 'react';
import './App.css';
import HomepageScreen from './screens/homepage/HomepageScreen';
import ShopingCartScreen from './screens/shopingCart/ShopingCartScreen';
import CheckoutScreen from './screens/checkout/CheckoutScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ShopingGridScreen from './screens/shopinggrid/ShopingGridScreen';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/shoping-cart">
            <ShopingCartScreen />
          </Route>
          <Route path="/shop-grid">
            <ShopingGridScreen />
          </Route>
          <Route path="/checkout">
            <CheckoutScreen />
          </Route>
          <Route ex path="/">
            <HomepageScreen />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
