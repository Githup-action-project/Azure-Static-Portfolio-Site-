<<<<<<< HEAD
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import VisitorCounter from './components/VisitorCounter';
=======
import React from 'react';
import Home from '/pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import VisitorCounter from "./pages/VisitorCounter";
>>>>>>> 88b61eda60e02341b918cdd899ba769e04324f84

function App() {
  return (
    <div className="p-4">
      <Home />
      <About />
      <Projects />
      <VisitorCounter />
    </div>
  );
}

export default App;