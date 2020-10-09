import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Contents from './components/Contents';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders'
import { auth } from './firebase';
import { useStateValue } from './components/StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51HZj2ACCt3DDJtadKO5EQhqqAFQ2LNFS2dwvztvc9t71dXArMS6tR2QZfXLzcC2czp3lOOdpzb8hVqaH0cb05Vt800KH4YSVgW");

function App() {
  const [{}, dispatch] = useStateValue();

  // will only run once when the app component loads
  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>>', authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])
  return (
    //BEM
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            {/* <Header /> */}
            <Login />
          </Route>

          <Route path="/checkout">
            {/* <Header /> */}
            <Checkout />
          </Route>

          <Route path="/orders">
            {/* <Header /> */}
            <Orders />
          </Route>

          <Route path="/payment">
            {/* <Header /> */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Contents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;