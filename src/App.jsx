
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import VisitorAnalytics from "./components/VisitorAnalytics";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AnalyticsPage from "./components/AnalyticsDashboard";

function App() {
  return (
    <div className="pt-20 px-4">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/analytics" element={<VisitorAnalytics />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
      <Footer />
      <BackToTop /> {/* Add here */}
    </div>
  );
}

export default App;
