import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import VisitorAnalytics from "./components/VisitorAnalytics";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="pt-20 px-4">
      <Navbar />
      <Hero />
      <Home />
      <About />
      <Projects />
      <VisitorAnalytics />
      <Footer />
    </div>
  );
}

export default App;
