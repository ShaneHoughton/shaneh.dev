import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import NavHeader from "./components/NavHeader/NavHeader";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div>
      <Router basename="/">
        <NavHeader />
        <Routes>
          <Route path="/shaneh.dev/about" element={<About />} />
          <Route path="/shaneh.dev/projects/*" element={<Projects />} />
          <Route path="*" element={<Navigate to="/shaneh.dev/about" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
