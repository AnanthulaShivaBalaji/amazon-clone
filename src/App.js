import React from "react";
import './App.css';
import Header from  "./Header"; // Importing the Header component
import Home from "./Home"; // Importing the Home component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout"; // Importing the Checkout component
function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/checkout" element={<><Header />
            <Checkout />
          </>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
