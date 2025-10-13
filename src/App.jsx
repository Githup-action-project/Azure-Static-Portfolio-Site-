import React from 'react'; 
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import VisitorCounter from './components/VisitorCounter';
import VisitorAnalytics from './components/VisitorAnalytics';

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