import React from 'react';
import './FeatureHighlights.css';

function FeatureHighlights() {
  return (
    <section className="feature-highlights">
      <div className="container">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>Quick Connect</h3>
            <p>Connect to your servers with a single click from the menu bar.</p>
          </div>
          <div className="feature-card">
            <h3>Organized Groups</h3>
            <p>Keep your connections organized with custom groups and tags.</p>
          </div>
          <div className="feature-card">
            <h3>Sync Across Devices</h3>
            <p>Your settings sync seamlessly across all your Macs via iCloud.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeatureHighlights;
