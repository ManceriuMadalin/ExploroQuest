import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from './Test';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Result from './Result';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default App;
