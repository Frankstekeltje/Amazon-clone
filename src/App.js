import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
