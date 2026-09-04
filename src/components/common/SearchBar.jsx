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
          padding: 'clamp(0.25rem, 0.8vw, 0.4rem) clamp(0.25rem, 0.8vw, 0.4rem) clamp(0.25rem, 0.8vw, 0.4rem) clamp(0.85rem, 2vw, 1.5rem)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
          border: '1px solid rgba(255, 255, 255, 0.8)'
        }}
      >
        {/* Search Icon */}
        <Search size={20} color="#94a3b8" style={{ flexShrink: 0, marginRight: 'clamp(0.4rem, 1vw, 0.8rem)' }} />

        {/* Input Field */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by city, neighborhood, or sector..."
          style={{
            flexGrow: 1,
            minWidth: 0,
            border: 'none',
            outline: 'none',
            fontSize: 'clamp(0.88rem, 1.5vw, 1.05rem)',
            color: '#0f172a',
            backgroundColor: 'transparent',
            fontFamily: 'inherit',
            paddingRight: '0.5rem'
          }}
        />

        {/* Solid Orange/Gold Search Button */}
        <button
          type="submit"
          className="btn-gold"
          style={{
            borderRadius: '9999px',
            padding: 'clamp(0.65rem, 1.5vw, 0.85rem) clamp(1.2rem, 3vw, 2.2rem)',
            fontSize: 'clamp(0.86rem, 1.5vw, 1rem)',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            whiteSpace: 'nowrap',
            flexShrink: 0
          }}
        >
          Search
        </button>
      </div>
    </form>
  );
}

