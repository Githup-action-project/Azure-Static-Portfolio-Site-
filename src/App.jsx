import React from 'react'; 
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import VisitorAnalytics from './components/VisitorAnalytics';
// import VisitorAnalytics from './components/VisitorAnalytics';

function App() {
  return (
    <div className="p-4">
      <Home />
      <About />
      <Projects />
      <VisitorAnalytics />
    </div>
  );
}

export default App;