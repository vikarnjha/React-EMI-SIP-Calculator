import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EMICalc from "./components/EMICalc";
import SIPCalc from "./components/SIPCalc";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/emi-calculator" element={<EMICalc />} />
          <Route path="/sip-calculator" element={<SIPCalc />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
