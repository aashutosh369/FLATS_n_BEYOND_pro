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
    <section id="properties" style={{ padding: '5rem 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        {/* Section Header - Perfectly Centered */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 2.5rem' }}>
          <div style={{
            fontSize: '0.8rem',
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
          <h2 style={{ fontSize: '2.3rem', fontWeight: 800, color: '#0f172a', margin: '0.6rem 0 0.4rem', letterSpacing: '-0.02em' }}>
            Exclusive Featured Properties
          </h2>
          <p style={{ color: '#64748b', fontSize: '1rem', marginTop: '0.25rem' }}>
            Showing {sortedProperties.length} verified listings across prime luxury micro-markets.
          </p>
        </div>

        {/* Category Pills Switcher - Centered */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.6rem',
          marginBottom: '1.5rem',
          flexWrap: 'wrap'
        }}>
          {['All', 'Fresh Bookings', 'Resale', 'Sale & Purchase'].map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              style={{
                padding: '0.55rem 1.35rem',
                borderRadius: '9999px',
                fontSize: '0.86rem',
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

        {/* Location Search & Filter Bar - Centered Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '16px',
          padding: '1rem 1.4rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 18px rgba(15, 23, 42, 0.05)',
          maxWidth: '960px',
          margin: '0 auto 3rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem'
        }}>
          {/* Location Search Input */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            backgroundColor: '#f8fafc',
            padding: '0.55rem 1rem',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            flex: '1 1 280px',
            minWidth: '240px'
          }}>
            <Search size={17} color="#94a3b8" />
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '0 1 auto' }}>
            <MapPin size={16} color="#d97706" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              style={{
                padding: '0.55rem 0.9rem',
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: '0 1 auto' }}>
            <SlidersHorizontal size={16} color="#64748b" />
            <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, whiteSpace: 'nowrap' }}>Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{
                padding: '0.55rem 0.9rem',
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
            padding: '4rem 2rem',
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '2rem'
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

        {/* Bottom Off-Market Luxury Banner - Warm Project Gold Theme */}
        <div style={{
          marginTop: '4rem',
          borderRadius: '20px',
          padding: '2.5rem 3rem',
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
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
              Looking for Ultra Luxury Estates & Penthouses?
            </h3>
            <p style={{ color: '#475569', fontSize: '0.96rem', lineHeight: 1.6 }}>
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
