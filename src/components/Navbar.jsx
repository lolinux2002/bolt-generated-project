import React from 'react';

  export default function Navbar() {
    return (
      <nav className="w-64 bg-white/80 backdrop-blur-sm shadow-lg p-6 border-r border-gray-100">
        <h1 className="text-2xl font-bold mb-8 text-primary font-display">WebApp</h1>
        <ul className="space-y-2">
          <li><a href="/" className="nav-link">Home</a></li>
          <li><a href="/analysis" className="nav-link">Analysis</a></li>
          <li><a href="/dashboard" className="nav-link">Dashboard</a></li>
        </ul>
      </nav>
    );
  }
