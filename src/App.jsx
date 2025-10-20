
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
import ContactForm from "./components/ContactForm";





function App() {
  return (
    <>

      
<Helmet>
  {/* Basic SEO */}
  <title>Mohammed Ibrahim | Portfolio</title>
  <meta name="description" content="Portfolio showcasing Azure, DevOps, Terraform projects and skills." />
  https://brave-coast-04f21c003.1.azurestaticapps.net

  {/* Open Graph */}
  <meta property="og:title" content="Mohammed Ibrahim Portfolio" />
  <meta property="og:description" content="Explore projects, skills, and experience in cloud and DevOps." />
  <meta property="og:image" content="https://brave-coast-04f21c003.1.azurestaticapps.net/preview.png" />
  <meta property="og:url" content="https://brave-coast-04f21c003.1.azurestaticapps.net" />
  <meta property="og:type" content="website" />

  {/* Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Mohammed Ibrahim Portfolio" />
  <meta name="twitter:description" content="Explore projects, skills, and experience in cloud and DevOps." />
  <meta name="twitter:image" content="https://brave-coast-04f21c003.1.azurestaticapps.net/preview.png" />

  {/* JSON-LD Structured Data */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammed Ibrahim",
      jobTitle: "Software Engineer Lead",
      url: "https://brave-coast-04f21c003.1.azurestaticapps.net",
      sameAs: [
        "https://linkedin.com/in/yourusername",
        "https://github.com/yourusername"
      ]
    })}
  </script>
</Helmet>



      <div className="pt-20 px-4">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/analytics" element={<VisitorAnalytics />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}


export default App;
