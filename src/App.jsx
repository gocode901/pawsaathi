import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup1 from "./pages/Signup1";
import Signup3 from "./pages/Signup3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup1 />} />
        <Route path="/signup3" element={<Signup3 />} />
      </Routes>
    </Router>
  );
}

export default App;
