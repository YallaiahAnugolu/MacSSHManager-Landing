import React from 'react';
import './ProblemSection.css';

function ProblemSection() {
  return (
    <section className="problem-section">
      <div className="container">
        <h2>The Challenge</h2>
        <p>Managing multiple SSH connections can be time-consuming and error-prone.</p>
        <ul className="problem-list">
          <li>Remembering complex server addresses and ports</li>
          <li>Managing authentication keys across different servers</li>
          <li>Switching between multiple SSH sessions efficiently</li>
        </ul>
      </div>
    </section>
  );
}

export default ProblemSection;
