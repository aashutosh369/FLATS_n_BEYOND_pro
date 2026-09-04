import React from 'react';
import { MapPin, ShowerHead, Layers, CarFront, Navigation2, Sun, Bus, Building2, Trees } from 'lucide-react';

export default function PropertyCard({ property, onSelectProperty, onEnquire }) {
  const handleClick = () => {
    if (onSelectProperty) {
      onSelectProperty(property);
    } else if (onEnquire) {
      onEnquire(property);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '18px',
        overflow: 'hidden',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 20px rgba(15, 23, 42, 0.07)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
        width: '100%'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-6px)';
        e.currentTarget.style.boxShadow = '0 18px 36px rgba(15, 23, 42, 0.12)';
        e.currentTarget.style.borderColor = '#cbd5e1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.07)';
        e.currentTarget.style.borderColor = '#e2e8f0';
      }}
    >
      {/* Property Image Header with Available Badge */}
      <div
        style={{
          position: 'relative',
          height: 'clamp(200px, 26vw, 240px)',
          width: '100%',
          overflow: 'hidden',
          backgroundColor: '#0f172a'
        }}
      >
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
            willChange: 'transform'
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />

        {/* Available Badge - Clean Luxury Glass Pill */}
        <div
          style={{
            position: 'absolute',
            top: '0.85rem',
            left: '0.85rem',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            color: '#0f172a',
            border: '1px solid rgba(255, 255, 255, 0.95)',
            fontSize: '0.75rem',
            fontWeight: 700,
            padding: '0.3rem 0.75rem',
            borderRadius: '9999px',
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.08)',
            letterSpacing: '0.02em',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem'
          }}
        >
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#10b981' }} />
          {property.status || 'Available'}
        </div>
      </div>

      {/* Property Information Body */}
      <div style={{ padding: 'clamp(1.1rem, 2vw, 1.4rem) clamp(1.1rem, 2vw, 1.5rem)', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        {/* Title & Price Header */}
        <div style={{ marginBottom: '0.85rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <h3
              style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.15rem)',
                fontWeight: 700,
                color: '#1e293b',
                lineHeight: 1.35,
                margin: 0,
                flex: '1 1 180px'
              }}
            >
              {property.title}
            </h3>
            <div
              style={{
                fontSize: 'clamp(1.15rem, 1.8vw, 1.3rem)',
                fontWeight: 800,
                color: '#d97706',
                whiteSpace: 'nowrap',
                letterSpacing: '-0.02em'
              }}
            >
              {property.price}
            </div>
          </div>

          {/* Location */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: '#64748b',
              fontSize: '0.86rem'
            }}
          >
            <MapPin size={14} color="#d97706" style={{ flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{property.location}</span>
          </div>
        </div>

        {/* Configuration Pills Row (BHK, Area, Unit) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.9rem', flexWrap: 'wrap' }}>
          {/* BHK */}
          <span
            style={{
              backgroundColor: '#fffbeb',
              color: '#b45309',
              border: '1px solid #fde68a',
              fontSize: '0.78rem',
              fontWeight: 650,
              padding: '0.22rem 0.6rem',
              borderRadius: '6px'
            }}
          >
            {property.bhk}
          </span>

          {/* Area */}
          <span
            style={{
              backgroundColor: '#eff6ff',
              color: '#1e40af',
              border: '1px solid #dbeafe',
              fontSize: '0.78rem',
              fontWeight: 600,
              padding: '0.22rem 0.6rem',
              borderRadius: '6px'
            }}
          >
            {property.sqft}
          </span>

          {/* Unit */}
          <span
            style={{
              backgroundColor: '#f5f3ff',
              color: '#6d28d9',
              border: '1px solid #ede9fe',
              fontSize: '0.78rem',
              fontWeight: 500,
              padding: '0.22rem 0.6rem',
              borderRadius: '6px'
            }}
          >
            Unit: {property.unit}
          </span>
        </div>

        {/* Scores Row (Sunlight, Transit, Locality) */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            marginBottom: '1.1rem',
            flexWrap: 'wrap'
          }}
        >
          {/* Sunlight */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.74rem',
              fontWeight: 600,
              backgroundColor: '#fffbeb',
              color: '#92400e',
              border: '1px solid #fef3c7',
              padding: '0.25rem 0.55rem',
              borderRadius: '9999px',
              whiteSpace: 'nowrap'
            }}
          >
            <Sun size={12} color="#d97706" />
            <span>Sunlight {property.sunlight}</span>
          </span>

          {/* Transit */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.74rem',
              fontWeight: 600,
              backgroundColor: '#eff6ff',
              color: '#1e40af',
              border: '1px solid #dbeafe',
              padding: '0.25rem 0.55rem',
              borderRadius: '9999px',
              whiteSpace: 'nowrap'
            }}
          >
            <Bus size={12} color="#2563eb" />
            <span>Transit {property.transit}</span>
          </span>

          {/* Locality */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.74rem',
              fontWeight: 600,
              backgroundColor: '#f0fdf4',
              color: '#166534',
              border: '1px solid #dcfce7',
              padding: '0.25rem 0.55rem',
              borderRadius: '9999px',
              whiteSpace: 'nowrap'
            }}
          >
            <Building2 size={12} color="#16a34a" />
            <span>Locality {property.locality}</span>
          </span>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: '#f1f5f9', marginBottom: '1rem', marginTop: 'auto' }} />

        {/* Bottom 5-Column Specs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '0.25rem',
            textAlign: 'center'
          }}
        >
          {/* Baths */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '8px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem', border: '1px solid #f1f5f9' }}>
              <ShowerHead size={15} color="#d97706" />
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>{property.baths}</div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 500 }}>Baths</div>
          </div>

          {/* Balcony */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '8px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem', border: '1px solid #f1f5f9' }}>
              <Trees size={15} color="#d97706" />
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>{property.balcony}</div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 500 }}>Balcony</div>
          </div>

          {/* Floor */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '8px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem', border: '1px solid #f1f5f9' }}>
              <Layers size={15} color="#d97706" />
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>{property.floor}</div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 500 }}>Floor</div>
          </div>

          {/* Parking */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '8px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem', border: '1px solid #f1f5f9' }}>
              <CarFront size={15} color="#d97706" />
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#0f172a' }}>{property.parking}</div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 500 }}>Parking</div>
          </div>

          {/* Facing */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 0 }}>
            <div style={{ width: '30px', height: '30px', borderRadius: '8px', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.3rem', border: '1px solid #f1f5f9' }}>
              <Navigation2 size={15} color="#d97706" />
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0f172a', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>
              {property.facing}
            </div>
            <div style={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 500 }}>Facing</div>
          </div>
        </div>
      </div>
    </div>
  );
}

