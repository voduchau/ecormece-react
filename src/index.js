import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import GetItemProvider from './context/GetItemContext';
import CartProvider from './context/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <GetItemProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </GetItemProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
