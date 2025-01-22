// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
// eslint-disable-next-line no-unused-vars
import ClassCompEG from "./components/classComponents/ClassCompEG";
import Gallery from "./components/FunctionalComponents/Gallery";
import Contact from "./components/FunctionalComponents/Contact";
import Navbar from "./components/FunctionalComponents/Navbar";
import Signup from "./components/FunctionalComponents/Signup";
import Login from "./components/FunctionalComponents/Login";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div>
      <BrowserRouter>
        {isAuthenticated && <Navbar onLogout={handleLogout} />}
        <Routes>
          <Route path="/" element={<Home />} />
          {!isAuthenticated ? (
            <>
              <Route path="/Signup" element={<Signup onLogin={handleLogin} />} />
              <Route path="/Login" element={<Login onLogin={handleLogin} />} />
            </>
          ) : (
            <>
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Gallery" element={<Gallery image="SECE logo" page="Gallery" />} />
              <Route path="/Contact" element={<Contact />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
