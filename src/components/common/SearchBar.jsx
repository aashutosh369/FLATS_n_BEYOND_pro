import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar({ onSearchSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearchSubmit) {
      onSearchSubmit(query);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        width: '100%',
        maxWidth: '780px',
        margin: '0 auto',
        position: 'relative'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          borderRadius: '9999px',
          padding: '0.4rem 0.4rem 0.4rem 1.5rem',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }}
      >
        {/* Search Icon */}
        <Search size={22} color="#94a3b8" style={{ flexShrink: 0, marginRight: '0.8rem' }} />

        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by city, neighborhood, or micro-market..."
          style={{
            flexGrow: 1,
            border: 'none',
            outline: 'none',
            fontSize: '1.05rem',
            color: '#0f172a',
            backgroundColor: 'transparent',
            fontFamily: 'inherit'
          }}
        />

        {/* Solid Orange/Gold Search Button (Matches Openhouse screenshot) */}
        <button
          type="submit"
          className="btn-gold"
          style={{
            borderRadius: '9999px',
            padding: '0.85rem 2.2rem',
            fontSize: '1rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap'
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
}
