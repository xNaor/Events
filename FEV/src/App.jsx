
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";
import Results from "./pages/Results";
import SupplierPage from "./pages/SupplierPage";
import Dashboard from "./pages/Dashboard";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import About from "./pages/About";
import ChatBot from "./pages/ChatBot";

export default function App() {
  return (
    <div style={{
      fontFamily: "Varela Round, sans-serif",
      backgroundColor: "#fffaf3",
      color: "#3e3e3e",
      minHeight: "100vh",
      padding: "2rem"
    }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/results" element={<Results />} />
          <Route path="/supplier/:id" element={<SupplierPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/chat" element={<ChatBot />} />
        </Routes>
      </Router>
    </div>
  );
}
