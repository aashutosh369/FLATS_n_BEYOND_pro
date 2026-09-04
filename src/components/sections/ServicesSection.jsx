import React from 'react';
import { Sparkles, Key, RefreshCw, Home, Compass, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function ServicesSection({ onSelectVertical, onOpenInquiry }) {
  const verticals = [
    {
      id: 'fresh',
      title: 'Fresh Bookings & Launches',
      subtitle: 'Primary Market',
      desc: 'Exclusive access to premier upcoming luxury launches across Golf Course Road, Extension, & Dwarka Expressway at initial pre-launch prices.',
      icon: Key,
      tag: '0% Brokerage on Primary',
      accentColor: '#2563eb',
      bgColor: '#eff6ff'
    },
    {
      id: 'resale',
      title: 'Resale & Secondary Market',
      subtitle: 'Reshell Smooth Flow',
      desc: 'Transparent valuation, verified seller ownership, and hassle-free document transfer for ready-to-move luxury apartments and villas.',
      icon: RefreshCw,
      tag: 'Open House Model',
      accentColor: '#d97706',
      bgColor: '#fffbe6'
    },
    {
      id: 'spectrum',
      title: 'Full Spectrum Buy & Sell',
      subtitle: 'Curated Luxury Spectrum',
      desc: 'End-to-end portfolio management whether buying your first premium floor or acquiring ultra-luxury penthouse mansions.',
      icon: Home,
      tag: 'Curated Portfolios',
      accentColor: '#0f172a',
      bgColor: '#f1f5f9'
    },
    {
      id: 'interiors',
      title: 'Designing Homes Services',
      subtitle: 'Luxury Interior Verticals',
      desc: 'Bespoke architectural interiors, turn-key furniture curation, and smart home automation to turn bare shell spaces into living art.',
      icon: Sparkles,
      tag: 'In-House Designers',
      accentColor: '#0d9488',
      bgColor: '#f0fdf4'
    }
  ];

  return (
    <section id="services" style={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
          <div style={{
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#d97706',
            fontWeight: 700,
            marginBottom: '0.5rem'
          }}>
            Core Advisory Verticals
          </div>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '1rem' }}>
            Structured Real Estate Services
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.05rem' }}>
            Comprehensive corporate solutions tailored for home buyers, high-net-worth investors, and luxury homeowners.
          </p>
        </div>

        {/* Verticals Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.75rem'
        }}>
          {verticals.map((v) => {
            const Icon = v.icon;
            return (
              <div
                key={v.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = v.accentColor;
                  e.currentTarget.style.boxShadow = '0 16px 32px rgba(15, 23, 42, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.05)';
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: v.bgColor,
                    color: v.accentColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Icon size={26} />
                  </div>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.6rem',
                    borderRadius: '9999px',
                    backgroundColor: v.bgColor,
                    color: v.accentColor
                  }}>
                    {v.tag}
                  </span>
                </div>

                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: v.accentColor, fontWeight: 700, letterSpacing: '0.05em' }}>
                  {v.subtitle}
                </div>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: '#0f172a', margin: '0.25rem 0 0.75rem' }}>
                  {v.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: '#64748b', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {v.desc}
                </p>

                <button
                  onClick={() => onOpenInquiry({ title: v.title })}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    color: v.accentColor,
                    backgroundColor: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer'
                  }}
                >
                  Explore Vertical <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
