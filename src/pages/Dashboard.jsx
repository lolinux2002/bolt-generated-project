import React from 'react';

  export default function Dashboard() {
    return (
      <div className="animate-fade-in">
        <h1 className="section-title">User Dashboard</h1>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Your Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="stat-card">
              <h3 className="font-semibold text-text-light">Total Analyses</h3>
              <p className="text-2xl text-text">12</p>
            </div>
            <div className="stat-card">
              <h3 className="font-semibold text-text-light">Active Projects</h3>
              <p className="text-2xl text-text">3</p>
            </div>
            <div className="stat-card">
              <h3 className="font-semibold text-text-light">Saved Reports</h3>
              <p className="text-2xl text-text">7</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
