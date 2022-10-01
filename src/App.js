import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe('pk_test_51Lo3LmGHDM9WFjbyzUsP74jOqc12PfOXDkZuV8SnkIuv9CZretRA8cOEuLEMymgRGpzA9I9PAwwMpm3szZM89LWG00WWiTDeFS');

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //Will only run once when the app component loads...

    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={Array(<Header />, <Home />)} />
          <Route path='/checkout' element={Array(<Header />, <Checkout />)} />
          <Route path='/payment' element={Array(<Header />, <Elements stripe={promise}><Payment /></Elements>)} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
