import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import VisitorCounter from "./pages/VisitorCounter"; // Adjust path if needed

function App() {
  return (
    <div className="p-4">
      <Home />
      <About />
      <Projects />
      <VisitorCounter /> {/* Add it here */}
    </div>
  );
}

export default App;
