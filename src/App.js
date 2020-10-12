import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './cart/Cart';
import Products from './products/Products';

function App() {
  return (
    <div className="App">

        <Switch>
          <Route exact path ="/cart" component={Cart}/>
        <Products />

        </Switch>
    </div>
  );
}

export default App;
