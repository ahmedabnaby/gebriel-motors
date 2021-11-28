import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navs from "./includes/Navbar"

import Homepage from "./components/Homepage"


export default function App() {
  return (

    <Router>
      <div>
        <Navs/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/veichles' element={<Veichles/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/our-benfits' element={<Benfits/>} />
        </Routes>
      </div>
    </Router>
  );
}

function Products() {
  return <h2>Products</h2>;
}

function Services() {
  return <h2>Services</h2>;
}

function Veichles() {
  return <h2>Veichles</h2>;
}

function Benfits() {
  return <h2>Benfits</h2>;
}