import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import Counter from "./pages/Counter";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />

        <div className="container main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/add" element={<AddStudent />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </div>

        <footer className="footer">
          © 2026 Student Portal 
        </footer>
      </div>
    </Router>
  );
}

export default App;