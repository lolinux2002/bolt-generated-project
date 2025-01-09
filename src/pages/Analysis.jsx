import React from 'react';

  export default function Analysis() {
    return (
      <div className="animate-slide-up">
        <h1 className="section-title">Competitor Analysis</h1>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4 text-secondary">Analyze Competitors</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 text-text-light">Competitor URL</label>
              <input
                type="url"
                className="input-field"
                placeholder="https://example.com"
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
            >
              Analyze
            </button>
          </form>
        </div>
      </div>
    );
  }
