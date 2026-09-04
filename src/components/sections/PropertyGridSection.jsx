import React, { useState } from 'react';
import { mockProperties } from '../../data/mockProperties';
import PropertyCard from '../common/PropertyCard';
import Button from '../common/Button';
import { Filter, SlidersHorizontal, Sparkles, Search, MapPin, X } from 'lucide-react';

export default function PropertyGridSection({ activeCategory, onSelectCategory, searchFilters, onOpenInquiry, onSelectProperty }) {
  const [sortOrder, setSortOrder] = useState('featured');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [locationSearchQuery, setLocationSearchQuery] = useState('');

  // Dynamically extract unique locations from mockProperties
  const uniqueLocations = Array.from(new Set(mockProperties.map((p) => p.location)));
  const locationsList = ['All Locations', ...uniqueLocations];

  // Filter properties based on tab category, location select, and location search query
  const filteredProperties = mockProperties.filter((item) => {
    // Tab Category Filter
    if (activeCategory !== 'All' && item.category !== activeCategory) {
      return false;
    }

    // Quick Location Filter
    if (selectedLocation !== 'All' && selectedLocation !== 'All Locations') {
      if (!item.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }
    }

    // Search Query (Location, title, or sector)
    if (locationSearchQuery.trim()) {
      const query = locationSearchQuery.toLowerCase();
      const matchLoc = item.location.toLowerCase().includes(query);
      const matchTitle = item.title.toLowerCase().includes(query);
      const matchBhk = item.bhk.toLowerCase().includes(query);
      if (!matchLoc && !matchTitle && !matchBhk) {
        return false;
      }
    }

    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortOrder === 'price-low') return a.priceRaw - b.priceRaw;
    if (sortOrder === 'price-high') return b.priceRaw - a.priceRaw;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  return (
    <section id="properties" style={{ padding: 'clamp(3rem, 6vw, 5rem) 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        {/* Section Header - Perfectly Centered */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto clamp(1.8rem, 4vw, 2.5rem)' }}>
          <div style={{
            fontSize: 'clamp(0.72rem, 1.2vw, 0.8rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#d97706',
            fontWeight: 700,
            marginBottom: '0.4rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: '#fffbeb',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            border: '1px solid #fef3c7'
          }}>
            <Sparkles size={13} color="#d97706" /> Curated Real Estate Spectrum
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.3rem)', fontWeight: 800, color: '#0f172a', margin: '0.6rem 0 0.4rem', letterSpacing: '-0.02em' }}>
            Exclusive Featured Properties
          </h2>
          <p style={{ color: '#64748b', fontSize: 'clamp(0.88rem, 1.5vw, 1rem)', marginTop: '0.25rem' }}>
            Showing {sortedProperties.length} verified listings across prime luxury micro-markets.
          </p>
        </div>

        {/* Category Pills Switcher */}
        <div 
          className="no-scrollbar"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            paddingBottom: '0.25rem'
          }}
        >
          {['All', 'Fresh Bookings', 'Resale', 'Sale & Purchase'].map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              style={{
                padding: 'clamp(0.45rem, 1vw, 0.55rem) clamp(0.9rem, 2vw, 1.35rem)',
                borderRadius: '9999px',
                fontSize: 'clamp(0.8rem, 1.2vw, 0.86rem)',
                fontWeight: 600,
                backgroundColor: activeCategory === cat ? '#0f172a' : '#ffffff',
                color: activeCategory === cat ? '#ffffff' : '#475569',
                border: activeCategory === cat ? '1px solid #0f172a' : '1px solid #e2e8f0',
                boxShadow: activeCategory === cat ? '0 4px 12px rgba(15, 23, 42, 0.15)' : '0 1px 3px rgba(0,0,0,0.04)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {cat === 'All' ? 'All Listed Spectrum' : cat}
            </button>
          ))}
        </div>

        {/* Location Search & Filter Bar */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: 'clamp(0.85rem, 2vw, 1.25rem)',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)',
          maxWidth: '960px',
          margin: '0 auto clamp(2rem, 4vw, 3rem)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.85rem'
        }}>
          {/* Location Search Input */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: '#f8fafc',
            padding: '0.55rem 0.9rem',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            flex: '1 1 260px',
            minWidth: '200px'
          }}>
            <Search size={17} color="#94a3b8" style={{ flexShrink: 0 }} />
            <input
              type="text"
              value={locationSearchQuery}
              onChange={(e) => setLocationSearchQuery(e.target.value)}
              placeholder="Search location, sector, or project..."
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                outline: 'none',
                width: '100%',
                fontSize: '0.88rem',
                color: '#0f172a'
              }}
            />
            {locationSearchQuery && (
              <button
                onClick={() => setLocationSearchQuery('')}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', color: '#94a3b8' }}
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Quick Location Select Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: '1 1 180px', minWidth: '160px' }}>
            <MapPin size={16} color="#d97706" style={{ flexShrink: 0 }} />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 0.75rem',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                backgroundColor: '#ffffff',
                fontSize: '0.86rem',
                fontWeight: 600,
                color: '#0f172a',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {locationsList.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flex: '1 1 180px', minWidth: '160px' }}>
            <SlidersHorizontal size={16} color="#64748b" style={{ flexShrink: 0 }} />
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, whiteSpace: 'nowrap' }}>Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 0.75rem',
                borderRadius: '10px',
                border: '1px solid #cbd5e1',
                backgroundColor: '#ffffff',
                fontSize: '0.86rem',
                fontWeight: 600,
                color: '#0f172a',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="featured">Featured Advisory</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        {sortedProperties.length === 0 ? (
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '3.5rem 1.5rem',
            textAlign: 'center',
            border: '1px solid #e2e8f0'
          }}>
            <Filter size={48} color="#cbd5e1" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a' }}>No properties match the selected criteria</h3>
            <p style={{ color: '#64748b', margin: '0.5rem 0 1.5rem' }}>
              We have unlisted off-market luxury units available under non-disclosure agreements.
            </p>
            <Button variant="gold" onClick={() => onOpenInquiry({ title: 'Off-Market Penthouse Inquiry' })}>
              Request Off-Market Listings
            </Button>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 330px), 1fr))',
            gap: 'clamp(1.25rem, 3vw, 2rem)'
          }}>
            {sortedProperties.map((prop) => (
              <PropertyCard
                key={prop.id}
                property={prop}
                onSelectProperty={onSelectProperty}
                onEnquire={onOpenInquiry}
              />
            ))}
          </div>
        )}

        {/* Bottom Off-Market Luxury Banner */}
        <div style={{
          marginTop: 'clamp(2.5rem, 5vw, 4rem)',
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.2rem, 4vw, 3rem)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 45%, #fff7ed 100%)',
          border: '1px solid rgba(217, 119, 6, 0.25)',
          boxShadow: '0 16px 36px rgba(217, 119, 6, 0.08)'
        }}>
          <div style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#92400e',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.6rem',
              backgroundColor: '#fef3c7',
              padding: '0.25rem 0.75rem',
              borderRadius: '9999px',
              border: '1px solid #fde68a'
            }}>
              <Sparkles size={14} color="#d97706" /> Confidential Off-Market Advisory
            </div>
            <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
              Looking for Ultra Luxury Estates & Penthouses?
            </h3>
            <p style={{ color: '#475569', fontSize: 'clamp(0.88rem, 1.2vw, 0.96rem)', lineHeight: 1.6 }}>
              Many high-net-worth sellers require complete anonymity. Connect with our corporate director desk for private presentations.
            </p>
          </div>
          <Button variant="gold" size="lg" onClick={() => onOpenInquiry({ title: 'Confidential Ultra-Luxury Dossier' })}>
            Connect Direct Advisory
          </Button>
        </div>
      </div>
    </section>
  );
}

