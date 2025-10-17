
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
import { Helmet } from "react-helmet-async";





function App() {
  return (
    <>
      <Helmet>
        <title>Mohammed Ibrahim | Portfolio</title>
        <meta name="description" content="Portfolio showcasing Azure, DevOps, Terraform projects and skills." />
        <meta property="og:title" content="Mohammed Ibrahim Portfolio" />
        <meta property="og:description" content="Explore projects, skills, and experience in cloud and DevOps." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="twitter:image" content="/preview.png" />
      </Helmet>

      <div className="pt-20 px-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<VisitorAnalytics />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}


export default App;
