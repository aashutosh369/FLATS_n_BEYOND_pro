import React, { useState, useEffect } from 'react';
import SearchBar from '../common/SearchBar';

export default function HeroSection({ onSearchSubmit }) {
  const slides = [
    {
      id: 1,
      image: '/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg',
      title: "Dreams Find An Address",
      subtitle: "Verified luxury penthouses, sky villas & premium residences."
    },
    {
      id: 2,
      image: '/images/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg',
      title: "Experience You'll Love",
      subtitle: "Buying your home should feel like joy, not paperwork."
    },
    {
      id: 3,
      image: '/images/point3d-commercial-imaging-ltd-C438QF1C3eI-unsplash.jpg',
      title: "Secondary Market, Re-imagined",
      subtitle: "Transparent resale flow with 100% verified legal title deeds."
    },
    {
      id: 4,
      image: '/images/home-makers-interior-9mSYc-zKdWA-unsplash.jpg',
      title: "Designing Homes Services",
      subtitle: "Bespoke interior architecture & turnkey luxury fit-outs."
    },
    {
      id: 5,
      image: '/images/filipe-freitas-rzcK5CPpmuc-unsplash.jpg',
      title: "Corporate Real Estate Advisory",
      subtitle: "Institutional transparency and zero markup developer deals."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll images every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      style={{
        position: 'relative',
        height: 'calc(100vh - 75px)',
        minHeight: '580px',
        maxHeight: '820px',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#090d16',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 0'
      }}
    >
      {/* Background Image Slides with Smooth Fade */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: index === currentSlide ? 1 : 0,
            visibility: Math.abs(index - currentSlide) <= 1 || (currentSlide === 0 && index === slides.length - 1) ? 'visible' : 'hidden',
            transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 1,
            willChange: 'opacity'
          }}
        >
          <img
            src={slide.image}
            alt={slide.title}
            decoding="async"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: index === currentSlide ? 'scale(1.04)' : 'scale(1)',
              transition: 'transform 6s ease-out',
              willChange: 'transform'
            }}
          />
          {/* Subtle Dark Gradient Overlay for Readability */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(15, 23, 42, 0.45) 0%, rgba(15, 23, 42, 0.28) 50%, rgba(15, 23, 42, 0.72) 100%)'
            }}
          />
        </div>
      ))}

      {/* Foreground Content - Perfectly Vertically Centered */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: '#ffffff',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Dynamic Titles for each Slide */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <h1
            key={`title-${currentSlide}`}
            style={{
              fontSize: 'clamp(2.1rem, 5vw, 4.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              marginBottom: '0.85rem',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.7)',
              animation: 'fadeIn 0.6s ease-out'
            }}
          >
            {slides[currentSlide].title}
          </h1>

          <p
            key={`sub-${currentSlide}`}
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: 400,
              maxWidth: '680px',
              margin: '0 auto 2.2rem auto',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
              animation: 'fadeIn 0.8s ease-out',
              lineHeight: 1.5
            }}
          >
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Openhouse Capsule Search Bar */}
        <div style={{ width: '100%', maxWidth: '780px', margin: '0 auto 1.8rem auto' }}>
          <SearchBar onSearchSubmit={onSearchSubmit} />
        </div>

        {/* Slide Indicators */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            marginTop: '0.5rem'
          }}
        >
          {slides.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrentSlide(idx)}
              style={{
                height: '5px',
                width: idx === currentSlide ? '28px' : '10px',
                borderRadius: '9999px',
                backgroundColor: idx === currentSlide ? 'var(--accent-gold)' : 'rgba(255, 255, 255, 0.5)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


