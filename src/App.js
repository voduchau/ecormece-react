import React from 'react';
import './App.css';
import HomepageScreen from './screens/homepage/HomepageScreen';
import ShopingCartScreen from './screens/shopingCart/ShopingCartScreen';
import CheckoutScreen from './screens/checkout/CheckoutScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ShopingGridScreen from './screens/shopinggrid/ShopingGridScreen';
import ShopDetailScreen from './screens/shopDetail/ShopDetailScreen';
import NoMatchScreen from './screens/nomatch/NoMatchScreen';

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

        <Route path="/shop-detail">
          <Route path="/:productID">
            <ShopDetailScreen />
          </Route>
          <Route>
            <NoMatchScreen />
          </Route>
        </Route>

        {/* <Route path="/shop-detail/:productID">
            <ShopDetailScreen />
        </Route> */}

        <Route path="/checkout">
          <CheckoutScreen />
        </Route>
        <Route exact path="/">
          <HomepageScreen />
        </Route>
        <Route>
          <NoMatchScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
