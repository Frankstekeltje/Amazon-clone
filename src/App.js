import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
