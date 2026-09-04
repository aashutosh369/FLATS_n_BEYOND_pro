import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, MapPin, Share2, PhoneCall, MessageSquare, 
  Sun, Bus, Building2, CheckCircle2, ChevronLeft, ChevronRight, 
  Compass, Car, Layers, ShowerHead, Trees, Maximize, ShieldCheck, 
  FileText, Home, Sparkles, Download
} from 'lucide-react';
import Button from '../common/Button';

export default function PropertyDetailPage({ property, onBack, onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('about-home');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [property?.id]);

  // Dynamic curated gallery images for the selected property
  const galleryImages = (property?.gallery && property.gallery.length > 0)
    ? property.gallery
    : [{ src: property?.image || '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg', label: 'Living & Lounge Area' }];

  const currentImage = galleryImages[activeImageIndex] || galleryImages[0];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const whyBuyHome = [
    'RERA Approved Project & Clear Title',
    'Pre-Approved Bank Syndication (SBI, HDFC, ICICI)',
    'Ultra-Luxury Clubhouse & Resort Pool',
    '3-Tier 24/7 Biometric & Perimeter Security',
    'Kids & Senior-Friendly Landscaped Podium',
    '100% Power Backup & 24/7 Hydro-Pneumatic Water',
    'VRV Air Conditioning & Italian Marble Flooring'
  ];

  const whyBuyFromUs = [
    '100% Legally Verified & Vetted Title Deeds',
    'Zero Undisclosed Commissions or Hidden Markups',
    'Strict Corporate Anonymity & Privacy NDA',
    'End-to-End Escrow & Sub-Registrar Support'
  ];

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* 1. Top Breadcrumb & Back Bar */}
      <div style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '0.9rem 0',
        position: 'sticky',
        top: '72px',
        zIndex: 40,
        boxShadow: '0 2px 10px rgba(15, 23, 42, 0.03)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={onBack}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#fffbeb',
              color: '#d97706',
              border: '1px solid #fde68a',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#d97706';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#fffbeb';
              e.currentTarget.style.color = '#d97706';
            }}
          >
            <ArrowLeft size={16} /> Back
          </button>

          <div style={{ fontSize: '0.9rem', color: '#64748b', fontWeight: 600 }}>
            <span style={{ color: '#0f172a' }}>{property.bhk}</span> in <strong style={{ color: '#0f172a' }}>{property.title}</strong>, {property.location}
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2rem' }}>
        {/* 2. Gallery Section (Main Viewport + Vertical Thumbnail Strip) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 110px',
          gap: '1rem',
          height: '480px',
          marginBottom: '2rem',
          borderRadius: '20px',
          overflow: 'hidden'
        }}>
          {/* Main Large Image Viewport */}
          <div style={{
            position: 'relative',
            backgroundColor: '#0f172a',
            borderRadius: '16px',
            overflow: 'hidden'
          }}>
            <img
              src={currentImage.src}
              alt={currentImage.label}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease'
              }}
            />

            {/* Label Tag (e.g. Living Room) */}
            <div style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(15, 23, 42, 0.85)',
              color: '#ffffff',
              padding: '0.4rem 1.25rem',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              backdropFilter: 'blur(8px)',
              letterSpacing: '0.03em'
            }}>
              {currentImage.label}
            </div>

            {/* Prev / Next Arrows */}
            <button
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.2s ease'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '1rem',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#0f172a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.2s ease'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Vertical Thumbnail Strip */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.65rem',
            overflowY: 'auto',
            borderRadius: '16px'
          }}>
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                style={{
                  height: '84px',
                  width: '100%',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeImageIndex === idx ? '2.5px solid #d97706' : '1.5px solid #e2e8f0',
                  opacity: activeImageIndex === idx ? 1 : 0.7,
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 3. Main Property Overview Card (Openhouse Style) */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '18px',
          padding: '2.2rem 2.5rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 24px rgba(15, 23, 42, 0.05)',
          marginBottom: '2rem'
        }}>
          {/* Title & Address */}
          <h1 style={{ fontSize: '1.9rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
            {property.title}
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.92rem', marginBottom: '1.8rem' }}>
            <MapPin size={16} color="#d97706" />
            <span>{property.location}, Gurgaon, NCR</span>
          </div>

          {/* Unit, Area, Price Highlight Banner */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.5rem',
            padding: '1.25rem 1.75rem',
            backgroundColor: '#fffdf9',
            borderRadius: '12px',
            border: '1px solid #fef3c7',
            marginBottom: '1.8rem'
          }}>
            <div>
              <div style={{ fontSize: '0.78rem', color: '#92400e', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Unit Spec
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#b45309' }}>
                Unit {property.unit}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Super Area
              </div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                {property.sqft}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Advisory Price
              </div>
              <div style={{ fontSize: '1.45rem', fontWeight: 800, color: '#d97706' }}>
                {property.price}
              </div>
            </div>
          </div>

          {/* 6 Key Specs Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1.25rem',
            paddingBottom: '1.8rem',
            borderBottom: '1px solid #f1f5f9',
            marginBottom: '1.8rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '10px', backgroundColor: '#fffbeb', border: '1px solid #fef3c7' }}>
                <Layers size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>{property.floor}th Floor</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Elevation</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '10px', backgroundColor: '#fffbeb', border: '1px solid #fef3c7' }}>
                <ShowerHead size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>{property.baths} Bathrooms</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Luxury Baths</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '10px', backgroundColor: '#fffbeb', border: '1px solid #fef3c7' }}>
                <Trees size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>{property.balcony} Balconies</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Deck Views</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '10px', backgroundColor: '#fffbeb', border: '1px solid #fef3c7' }}>
                <Compass size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>{property.facing}</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Main Facing</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '10px', backgroundColor: '#fffbeb', border: '1px solid #fef3c7' }}>
                <Car size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>{property.parking} Reserved (Closed)</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Basement Parking</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ padding: '0.5rem', borderRadius: '10px', backgroundColor: '#fffbeb', border: '1px solid #fef3c7' }}>
                <Maximize size={18} color="#d97706" />
              </div>
              <div>
                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>Club & Garden View</div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Orientation</div>
              </div>
            </div>
          </div>

          {/* Property Scores Row */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.65rem' }}>
              Verified Property Scores
            </div>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#fffbeb',
                border: '1px solid #fde68a',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                color: '#92400e',
                fontSize: '0.85rem',
                fontWeight: 700
              }}>
                <Sun size={16} color="#d97706" />
                <span>Sunlight {property.sunlight}</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#eff6ff',
                border: '1px solid #dbeafe',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                color: '#1e40af',
                fontSize: '0.85rem',
                fontWeight: 700
              }}>
                <Bus size={16} color="#2563eb" />
                <span>Connectivity {property.transit}</span>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: '#f0fdf4',
                border: '1px solid #dcfce7',
                padding: '0.5rem 1rem',
                borderRadius: '10px',
                color: '#166534',
                fontSize: '0.85rem',
                fontWeight: 700
              }}>
                <Building2 size={16} color="#16a34a" />
                <span>Locality {property.locality}</span>
              </div>
            </div>
          </div>

          {/* CTA Action Buttons Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
            <Button
              variant="gold"
              size="lg"
              onClick={() => onOpenInquiry(property)}
              style={{ flex: '1 1 240px', justifyContent: 'center' }}
            >
              <PhoneCall size={18} style={{ marginRight: '0.5rem' }} /> Schedule Callback Desk
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => onOpenInquiry({ ...property, title: `Query: ${property.title}` })}
              style={{ flex: '1 1 200px', justifyContent: 'center', color: '#0f172a', borderColor: '#cbd5e1' }}
            >
              <MessageSquare size={18} style={{ marginRight: '0.5rem' }} /> Ask Your Queries
            </Button>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({ title: property.title, url: window.location.href });
                } else {
                  alert('Property link copied to clipboard!');
                }
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                padding: '0.75rem 1.25rem',
                borderRadius: '10px',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#475569',
                cursor: 'pointer'
              }}
            >
              <Share2 size={16} /> Share
            </button>
          </div>
        </div>

        {/* 4. Tab Switcher Navigation */}
        <div style={{
          display: 'flex',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '0.4rem',
          border: '1px solid #e2e8f0',
          marginBottom: '2rem',
          gap: '0.5rem'
        }}>
          {[
            { id: 'about-home', label: '🏠 About Home' },
            { id: 'about-society', label: '🏢 About Society & Amenities' },
            { id: 'tools-insights', label: '📊 Market Insights & Floor Plan' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                fontSize: '0.92rem',
                fontWeight: 700,
                backgroundColor: activeTab === tab.id ? '#0f172a' : 'transparent',
                color: activeTab === tab.id ? '#ffffff' : '#64748b',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 5. Tab 1: Why Buy This Home + Why Buy From Us */}
        {activeTab === 'about-home' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            {/* Why Buy this home */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={18} color="#d97706" /> Why Buy this home?
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {whyBuyHome.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: '#334155' }}>
                    <CheckCircle2 size={17} color="#16a34a" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Buy From Flats n Beyond */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)'
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={18} color="#d97706" /> Why buy with Flats n Beyond?
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {whyBuyFromUs.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.9rem', color: '#334155' }}>
                    <CheckCircle2 size={17} color="#0d9488" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: '1.75rem',
                backgroundColor: '#fffbeb',
                padding: '1rem',
                borderRadius: '10px',
                border: '1px solid #fef3c7',
                fontSize: '0.82rem',
                color: '#92400e',
                lineHeight: 1.5
              }}>
                <strong>Corporate Standard:</strong> Every property transaction is verified by our legal desk before presenting it to investors.
              </div>
            </div>
          </div>
        )}

        {/* 6. Area Breakdown & Floor Plan Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '18px',
          padding: '2.2rem',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 18px rgba(15, 23, 42, 0.04)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                Area Breakdown & Spatial Architecture
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem' }}>
                Verified floor plan with dimension analytics and sunlight penetration.
              </p>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenInquiry({ ...property, title: `Download Floor Plan: ${property.title}` })}
              style={{ color: '#0f172a', borderColor: '#cbd5e1' }}
            >
              <Download size={15} style={{ marginRight: '0.4rem' }} /> Download CAD Dossier
            </Button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.4fr) minmax(240px, 1fr)',
            gap: '2rem',
            alignItems: 'center'
          }}>
            {/* Floor Plan Diagram Illustration */}
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '14px',
              padding: '1.5rem',
              border: '1.5px dashed #cbd5e1',
              textAlign: 'center'
            }}>
              <img
                src="/images/lycs-architecture-kUdbEEMcRwE-unsplash.jpg"
                alt="Architectural Floor Plan"
                style={{
                  width: '100%',
                  maxHeight: '320px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '0.75rem'
                }}
              />
              <div style={{ fontSize: '0.78rem', color: '#64748b', fontWeight: 600 }}>
                High-Fidelity 3D Architectural Blueprint • {property.bhk} Layout
              </div>
            </div>

            {/* Metrics Breakdown Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Super Area</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>{property.sqft}</div>
                </div>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#e2e8f0', padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: 600 }}>100%</span>
              </div>

              <div style={{
                backgroundColor: '#f8fafc',
                padding: '1rem 1.25rem',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>Carpet Area</div>
                  <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a' }}>~78% Usable Area</div>
                </div>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#dcfce7', color: '#166534', padding: '0.2rem 0.6rem', borderRadius: '6px', fontWeight: 600 }}>Optimal</span>
              </div>

              {/* Natural Light Box */}
              <div style={{
                backgroundColor: '#fffbeb',
                padding: '1.2rem',
                borderRadius: '12px',
                border: '1px solid #fde68a'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#92400e', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Sun size={15} color="#d97706" /> Natural Sunlight Score
                  </span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: '#b45309' }}>{property.sunlight}</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#78350f', lineHeight: 1.5, margin: 0 }}>
                  Enjoy uninterrupted east/north sunshine throughout the day across living room and master decks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
