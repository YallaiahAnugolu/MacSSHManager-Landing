import React from 'react';
import Hero from './Hero';
import ProblemSection from './ProblemSection';
import SolutionSection from './SolutionSection';
import FeatureHighlights from './FeatureHighlights';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <FeatureHighlights />
    </div>
  );
}

export default App;
