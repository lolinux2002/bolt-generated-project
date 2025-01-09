import React from 'react';
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  import Home from './pages/Home';
  import Analysis from './pages/Analysis';
  import Dashboard from './pages/Dashboard';
  import Navbar from './components/Navbar';

  export default function App() {
    return (
      <BrowserRouter>
        <div className="flex min-h-screen bg-background">
          <Navbar />
          <main className="flex-1 p-8">
            <div className="max-w-6xl mx-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/analysis" element={<Analysis />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          </main>
        </div>
      </BrowserRouter>
    );
  }
