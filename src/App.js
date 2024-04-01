// import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import ProdDet from './components/ProdDet';
import {Routes, Route, Link} from "react-router-dom";
import NotFound from './components/NotFound';

function App() {
  const styles = {
    textDecoration: "none",
    marginRight: "2rem",
    fontSize: "18px",
  }
  return (
    <div className="App">
      <ul>
        <li><Link to="/" style={styles}>Home</Link></li>
        <li><Link to="/about" style={styles}>About</Link></li>
        <li><Link to="/products" style={styles}>Products</Link></li>
      </ul>
      <hr />
      <Routes>
        <Route path='/'>
          <Route index = {true} element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/products' element={<Products />}>
            <Route path=':id' element={<ProdDet />}/>
          </Route>
          <Route path='*' element={<NotFound />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
