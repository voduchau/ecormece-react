import React, { useContext } from 'react';
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
import DashBoardScreen from './screens/admin/DashBoardScreen';
import DashBoardProducts from './screens/admin/DashBoardProducts';
import { AuthContext } from './context/AuthContext';
import PrivateRoute from './route/PrivateRoute';

function App() {
  const { user } = useContext(AuthContext)

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
{/* 
        {user && user.isAdmin ?
          <>
            <Route exact path="/dashboard/products" component={DashBoardProducts} />
            <Route path="/dashboard" component={DashBoardScreen} />
          </>

          : null
        } */}
        <PrivateRoute user={user} path='/dashboard/products' component={DashBoardProducts}/>
        <PrivateRoute exact user={user} path='/dashboard' component={DashBoardScreen}/>

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
