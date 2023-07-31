import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Footer from "./components/Footer/Footer";
import NavHeader from "./components/NavHeader/NavHeader";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div>
      <Router basename="/shaneh.dev">
        <NavHeader />
        <Routes>
          <Route path="/shaneh.dev" element={<About />} />
          <Route path="/shaneh.dev/projects/*" element={<Projects />} />
          <Route path="*" element={<Navigate to="/shaneh.dev" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
