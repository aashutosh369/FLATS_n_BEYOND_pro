import React from 'react';
import { interiorProjects } from '../../data/mockProperties';
import { Sparkles, CheckCircle, Palette, Home, Shield, ArrowRight } from 'lucide-react';
import Button from '../common/Button';

export default function InteriorsSection({ onOpenInquiry }) {
  return (
    <section id="interiors" style={{ padding: '5.5rem 0', backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              backgroundColor: '#f0fdf4',
              color: '#0d9488',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '1rem',
              border: '1px solid #a7f3d0'
            }}>
              <Sparkles size={14} /> New Vertical • Designing Homes
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.2, marginBottom: '1rem' }}>
              Turn Bare Shells into Bespoke Masterpieces.
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Beyond real estate acquisition, our in-house luxury design studio curates turnkey interiors tailored for luxury apartments, penthouses, and villa estates.
            </p>
          </div>

          <div style={{
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            padding: '2rem',
            border: '1px solid #e2e8f0',
            boxShadow: '0 10px 25px rgba(15, 23, 42, 0.05)'
          }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
              Book an Interior Advisory Session
            </h4>
            <p style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: '1.25rem' }}>
              Consult with senior architects for 3D spatial planning, Italian material sampling, and budget forecasting.
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#334155', marginBottom: '1.5rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} color="#0d9488" /> 3D VR Spatial Walkthroughs
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} color="#0d9488" /> Imported Italian & German Hardware
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle size={16} color="#0d9488" /> Turnkey Delivery within 90 Days
              </li>
            </ul>

            <Button variant="gold" fullWidth onClick={() => onOpenInquiry({ title: 'Designing Homes Interior Consultation' })}>
              Schedule Design Consultation
            </Button>
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {interiorProjects.map((item) => (
            <div
              key={item.id}
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-6px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  fontWeight: 600
                }}>
                  {item.concept}
                </span>
              </div>

              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '0.8rem', color: '#0d9488', fontWeight: 600, marginBottom: '0.2rem' }}>
                  {item.location}
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.75rem' }}>
                  {item.title}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {item.tags.map((tag, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.72rem',
                      backgroundColor: '#f1f5f9',
                      color: '#475569',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      fontWeight: 500
                    }}>
                      • {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenInquiry({ title: `Interior Consultation: ${item.title}` })}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
                  }}
                >
                  View Lookbook Concept <ArrowRight size={16} color="#d97706" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
