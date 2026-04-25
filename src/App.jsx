import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Articles from './pages/Articles';
import VisualLibrary from './pages/VisualLibrary';
import Activities from './pages/Activities';
import Training from './pages/Training';
import Testimonials from './pages/Testimonials';
import Wisdom from './pages/Wisdom';
import Books90 from './pages/Books90';
import Publications from './pages/Publications';

// UX Components
import ReadingEngine from './components/ReadingEngine';
import CommandCenter from './components/CommandCenter';

function App() {
  const [isCommandCenterOpen, setIsCommandCenterOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-background text-primary font-body overflow-x-hidden selection:bg-tertiary/30 text-right" dir="rtl">
        <Navbar onSearchClick={() => setIsCommandCenterOpen(true)} />
        <ReadingEngine />
        <CommandCenter isOpen={isCommandCenterOpen} setIsOpen={setIsCommandCenterOpen} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/visual-library" element={<VisualLibrary />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/training" element={<Training />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/wisdom" element={<Wisdom />} />
            <Route path="/90-books" element={<Books90 />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
