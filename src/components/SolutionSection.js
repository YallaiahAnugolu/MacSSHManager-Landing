import React from 'react';
import './SolutionSection.css';

function SolutionSection() {
  return (
    <section className="solution-section">
      <div className="container">
        <h2>Our Solution</h2>
        <p>MacSSH Manager simplifies SSH connection management with an intuitive interface.</p>
        <div className="solution-features">
          <div className="feature">
            <h3>Easy Setup</h3>
            <p>Configure your SSH connections in minutes with our user-friendly interface.</p>
          </div>
          <div className="feature">
            <h3>Secure Storage</h3>
            <p>Your credentials are safely encrypted and stored locally on your Mac.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
