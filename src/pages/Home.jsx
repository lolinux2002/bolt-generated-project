import React from 'react';

  export default function Home() {
    return (
      <div className="animate-fade-in">
        <h1 className="section-title">Welcome to Our Web Application</h1>
        <p className="section-subtitle">
          This is a modern web application with competitor analysis and user management features.
        </p>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-text">
            <li>Competitor Analysis System</li>
            <li>User Account Management</li>
            <li>Data Visualization</li>
            <li>Secure Authentication</li>
          </ul>
        </div>
      </div>
    );
  }
