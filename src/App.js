import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import "./App.css";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/contato">Contado </Link>
        </li>
      </ul>
      <Routes>
        <Route  path="/" element={<Home/>} exact></Route>
        <Route  path="/contato" element={<Contato />} exact></Route>
      </Routes>


    </Router>
  );
}

export default App;
