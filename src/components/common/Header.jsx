import React, { useState, useEffect } from 'react';
import { Building2, Sparkles, Menu, X, ArrowUpRight, ChevronDown, Key, RefreshCw, Home } from 'lucide-react';
import Button from './Button';

export default function Header({ onOpenInquiry, onSelectCategory, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceItems = [
    {
      title: 'Fresh Bookings / New Launches',
      subtitle: 'Exclusive primary launches & developer booking',
      icon: Key,
      category: 'Fresh Bookings',
      href: '#properties',
      color: '#2563eb'
    },
    {
      title: 'Resale / Secondary Market',
      subtitle: 'Transparent reshell verified listings & transfer',
      icon: RefreshCw,
      category: 'Resale',
      href: '#properties',
      color: '#d97706'
    },
    {
      title: 'Properties / Buy & Sell',
      subtitle: 'Full spectrum luxury buy & sell portfolios',
      icon: Home,
      category: 'Sale & Purchase',
      href: '#properties',
      color: '#0f172a'
    },
    {
      title: 'Designing Homes',
      subtitle: 'Turnkey interior design & bespoke living spaces',
      icon: Sparkles,
      category: 'Designing Homes',
      href: '#interiors',
      color: '#0d9488'
    }
  ];

  const handleServiceClick = (item) => {
    setServicesDropdownOpen(false);
    if (onNavigate) {
      onNavigate('home');
    }
    if (onSelectCategory && item.category !== 'Designing Homes') {
      onSelectCategory(item.category);
    }
    setTimeout(() => {
      const targetElement = document.querySelector(item.href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <header className="glass-nav" style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 10px 30px rgba(15, 23, 42, 0.08)' : 'none'
    }}>
      {/* Main Header Bar - Full Width */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '75px',
        width: '100%',
        paddingLeft: 'clamp(1.5rem, 4vw, 3.5rem)',
        paddingRight: 'clamp(1.5rem, 4vw, 3.5rem)'
      }}>
        {/* Brand Logo */}
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            if (onNavigate) onNavigate('home');
            else if (onSelectCategory) onSelectCategory('All');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}
        >
          <img
            src="/logo.jpg"
            alt="Flats n Beyond Logo"
            style={{
              height: '52px',
              width: '52px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #d97706',
              boxShadow: '0 4px 12px rgba(217, 119, 6, 0.25)'
            }}
          />
          <div>
            <div style={{
              fontSize: '1.35rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#0f172a',
              fontFamily: 'Outfit, sans-serif'
            }}>
              FLATS <span style={{ color: '#d97706' }}>n</span> BEYOND
            </div>
            <div style={{
              fontSize: '0.62rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#64748b',
              fontWeight: 700
            }}>
              WHERE DREAMS FIND AN ADDRESS.
            </div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {/* Services Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button
              onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.95rem',
                fontWeight: 600,
                color: '#0f172a',
                padding: '0.5rem 0',
                cursor: 'pointer'
              }}
            >
              <span>Services</span>
              <ChevronDown
                size={16}
                color="#64748b"
                style={{
                  transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>

            {/* Dropdown Menu Box */}
            {servicesDropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-20px',
                  width: '380px',
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '0.75rem',
                  boxShadow: '0 20px 45px rgba(15, 23, 42, 0.15)',
                  border: '1px solid #e2e8f0',
                  animation: 'fadeIn 0.2s ease-out',
                  zIndex: 200
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                  {serviceItems.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleServiceClick(item)}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.85rem',
                          padding: '0.8rem 1rem',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8fafc'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <div style={{
                          padding: '0.5rem',
                          borderRadius: '10px',
                          backgroundColor: '#f1f5f9',
                          color: item.color,
                          marginTop: '2px'
                        }}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a' }}>
                            {item.title}
                          </div>
                          <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '0.15rem' }}>
                            {item.subtitle}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate ? onNavigate('about') : null}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#1e293b',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d97706'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
          >
            About Us
          </button>

          <button
            onClick={() => onNavigate ? onNavigate('contact') : null}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontSize: '0.95rem',
              fontWeight: 600,
              color: '#1e293b',
              cursor: 'pointer',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#d97706'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#1e293b'}
          >
            Contact
          </button>
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Button variant="gold" onClick={() => onOpenInquiry(null)}>
            Schedule Advisory <ArrowUpRight size={16} />
          </Button>

          {/* Mobile menu trigger button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              padding: '0.5rem',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              color: '#0f172a'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
