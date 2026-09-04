import React from 'react';

export default function Footer({ onOpenInquiry, onNavigate }) {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #fefbf6 0%, #f7efe1 100%)',
      color: '#44403c',
      paddingTop: 'clamp(2.5rem, 5vw, 3.5rem)',
      paddingBottom: '2rem',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid #ebdcc4'
    }}>
      {/* Architectural Skyscraper Watermark Silhouette */}
      <div style={{
        position: 'absolute',
        right: '2%',
        bottom: '0',
        width: 'clamp(180px, 25vw, 320px)',
        height: 'clamp(240px, 35vw, 420px)',
        opacity: 0.15,
        pointerEvents: 'none',
        userSelect: 'none',
        zIndex: 0
      }}>
        <svg viewBox="0 0 200 450" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
          {/* Spire */}
          <line x1="100" y1="10" x2="100" y2="70" stroke="#b45309" strokeWidth="2" />
          <polygon points="100,5 98,30 102,30" fill="#b45309" />
          {/* Crown / Top Tier */}
          <polygon points="100,70 85,110 115,110" stroke="#1c1917" strokeWidth="1.5" />
          <line x1="85" y1="110" x2="115" y2="110" stroke="#1c1917" strokeWidth="1.5" />
          <line x1="88" y1="95" x2="112" y2="95" stroke="#b45309" strokeWidth="1" />
          {/* Upper Floors */}
          <rect x="75" y="110" width="50" height="50" stroke="#1c1917" strokeWidth="1.5" />
          <line x1="85" y1="110" x2="85" y2="160" stroke="#78716c" strokeWidth="0.8" />
          <line x1="100" y1="110" x2="100" y2="160" stroke="#78716c" strokeWidth="0.8" />
          <line x1="115" y1="110" x2="115" y2="160" stroke="#78716c" strokeWidth="0.8" />
          <line x1="75" y1="125" x2="125" y2="125" stroke="#78716c" strokeWidth="0.8" />
          <line x1="75" y1="140" x2="125" y2="140" stroke="#78716c" strokeWidth="0.8" />
          {/* Middle Section */}
          <polygon points="75,160 65,190 135,190 125,160" stroke="#1c1917" strokeWidth="1.5" />
          <rect x="65" y="190" width="70" height="120" stroke="#1c1917" strokeWidth="1.5" />
          {/* Window Grid Lines */}
          {[210, 230, 250, 270, 290].map((y) => (
            <line key={y} x1="65" y1={y} x2="135" y2={y} stroke="#78716c" strokeWidth="0.8" />
          ))}
          {[75, 87, 100, 113, 125].map((x) => (
            <line key={x} x1={x} y1="190" x2={x} y2="310" stroke="#78716c" strokeWidth="0.8" />
          ))}
          {/* Base Tier & Pillars */}
          <polygon points="65,310 50,350 150,350 135,310" stroke="#1c1917" strokeWidth="1.5" />
          <rect x="50" y="350" width="100" height="100" stroke="#1c1917" strokeWidth="1.5" />
          {[370, 390, 410, 430].map((y) => (
            <line key={y} x1="50" y1={y} x2="150" y2={y} stroke="#78716c" strokeWidth="0.8" />
          ))}
          {[62, 75, 87, 100, 113, 125, 138].map((x) => (
            <line key={x} x1={x} y1="350" x2={x} y2="450" stroke="#78716c" strokeWidth="0.8" />
          ))}
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="responsive-2col" style={{
          alignItems: 'start',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid #ebdcc4'
        }}>
          {/* Left: Brand Logo & Description */}
          <div style={{ maxWidth: '520px' }}>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate('home');
              }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem', textDecoration: 'none', marginBottom: '1.25rem' }}
            >
              <img
                src="/logo.jpg"
                alt="Flats n Beyond Logo"
                style={{
                  height: '46px',
                  width: '46px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px solid #d97706',
                  boxShadow: '0 4px 14px rgba(217, 119, 6, 0.2)'
                }}
              />
              <div>
                <div style={{ fontSize: 'clamp(1.2rem, 2.2vw, 1.45rem)', fontWeight: 800, color: '#1c1917', letterSpacing: '0.02em', fontFamily: 'Outfit, sans-serif' }}>
                  FLATS <span style={{ color: '#d97706' }}>n</span> BEYOND
                </div>
                <div style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#78716c',
                  fontWeight: 700
                }}>
                  WHERE DREAMS FIND AN ADDRESS.
                </div>
              </div>
            </a>

            <p style={{
              fontSize: '0.92rem',
              color: '#57534e',
              lineHeight: 1.75,
              margin: 0
            }}>
              Flats n Beyond is Gurgaon’s trusted luxury real estate advisory, redefining high-end residential acquisitions and secondary resale transactions. We ensure complete institutional transparency, verified legal title deeds, bespoke interior styling, and hassle-free registry execution from consultation to handover.
            </p>
          </div>

          {/* Right: Quick Links & Social */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
            {/* 2x2 Grid of Links */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '1rem 1.5rem'
            }}>
              <button
                onClick={() => onNavigate ? onNavigate('about') : null}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', color: '#1c1917', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b45309'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1c1917'}
              >
                About Us
              </button>
              <button
                onClick={() => onNavigate ? onNavigate('contact') : null}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', color: '#1c1917', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b45309'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1c1917'}
              >
                Contact Us
              </button>
              <button
                onClick={() => onNavigate ? onNavigate('terms') : null}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', color: '#1c1917', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b45309'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1c1917'}
              >
                Terms & Conditions
              </button>
              <button
                onClick={() => onNavigate ? onNavigate('privacy') : null}
                style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', color: '#1c1917', fontWeight: 600, fontSize: '0.95rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#b45309'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1c1917'}
              >
                Privacy Policy
              </button>
            </div>

            {/* Social Icons Section */}
            <div>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#1c1917', marginBottom: '0.85rem' }}>
                Social
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  style={{
                    color: '#57534e',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#b45309'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#57534e'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  style={{
                    color: '#57534e',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#b45309'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#57534e'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  style={{
                    color: '#57534e',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#b45309'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#57534e'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  style={{
                    color: '#57534e',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#b45309'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#57534e'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"></polygon>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={{
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.8rem',
          color: '#78716c'
        }}>
          <div>
            © {new Date().getFullYear()} <strong>FLATS <span style={{ color: '#d97706' }}>n</span> BEYOND</strong>. All rights reserved.
          </div>
          <div style={{ color: '#a8a29e', fontSize: '0.78rem' }}>
            Gurgaon • Golf Course Extn • Dwarka Expressway • SPR
          </div>
        </div>
      </div>
    </footer>
  );
}

