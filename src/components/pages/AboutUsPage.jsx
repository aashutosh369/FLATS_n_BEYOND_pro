import React from 'react';
import { 
  Building2, Eye, Compass, ShieldCheck, Sparkles, 
  Users, Award, ArrowLeft, ArrowUpRight, CheckCircle2 
} from 'lucide-react';
import Button from '../common/Button';

export default function AboutUsPage({ onBack, onOpenInquiry }) {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* 1. Top Breadcrumb & Back Bar */}
      <div style={{
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '0.9rem 0',
        position: 'sticky',
        top: '75px',
        zIndex: 40,
        boxShadow: '0 2px 10px rgba(15, 23, 42, 0.03)'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
            <ArrowLeft size={16} /> Back to Home
          </button>

          <div style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600 }}>
            Home / <span style={{ color: '#0f172a' }}>About Us</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3.5rem' }}>
        {/* 2. Hero Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 4rem auto' }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
            fontWeight: 800,
            color: '#0f172a',
            letterSpacing: '-0.03em',
            fontFamily: 'Outfit, sans-serif',
            marginBottom: '1rem'
          }}>
            About Flats n Beyond
          </h1>

          <p style={{
            fontSize: '1.08rem',
            color: '#475569',
            lineHeight: 1.75,
            margin: '0 auto 1.5rem auto'
          }}>
            Flats n Beyond is a premier real estate advisory and curated secondary market platform dedicated to luxury residences across Gurgaon. We simplify high-value property acquisitions and sales with institutional diligence, transparent pricing, and end-to-end legal certainty.
          </p>

          <div style={{
            width: '60px',
            height: '4px',
            backgroundColor: '#d97706',
            borderRadius: '9999px',
            margin: '0 auto'
          }} />
        </div>

        {/* 3. Company Overview Card */}
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: 'clamp(1.25rem, 3.5vw, 3.5rem)',
          border: '1px solid #e2e8f0',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
          marginBottom: '3rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: 'clamp(1.5rem, 3vw, 3rem)',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: '#fffbeb',
                color: '#b45309',
                padding: '0.4rem 0.9rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.25rem'
              }}>
                <Building2 size={18} /> Company Overview
              </div>

              <h2 style={{
                fontSize: 'clamp(1.35rem, 2.5vw, 1.65rem)',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '1rem',
                lineHeight: 1.3
              }}>
                Reimagining Luxury Real Estate Transactions in India
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginBottom: '1rem' }}>
                Historically, the luxury residential and secondary market in Gurgaon has been fragmented and opaque. High-net-worth buyers and sellers were frequently confronted with inaccurate valuations, unverified title deeds, and hidden intermediation fees.
              </p>

              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                Flats n Beyond transforms this paradigm. We curate exclusively verified residences across Golf Course Road, DLF Phase 1–5, Dwarka Expressway, and Southern Peripheral Road. Every listing undergo rigorous 40+ point legal certification, structural inspections, and data-backed valuation to ensure complete buyer confidence and smooth sub-registrar transfers.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  '100% Legally Vetted & Clear Title Certification',
                  'Zero Undisclosed Commissions or Hidden Markup',
                  'Integrated Turnkey Luxury Interior Design Studio'
                ].map((point, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', fontWeight: 600, color: '#1e293b' }}>
                    <CheckCircle2 size={18} color="#16a34a" style={{ flexShrink: 0 }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Showcase Image */}
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                border: '1px solid #e2e8f0'
              }}>
                <img
                  src="/images/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg"
                  alt="Luxury Residence Overview"
                  style={{
                    width: '100%',
                    height: 'clamp(240px, 35vw, 380px)',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>

              {/* Floating Stat Badge */}
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '10px',
                backgroundColor: 'rgba(15, 23, 42, 0.92)',
                color: '#ffffff',
                padding: '0.75rem 1.1rem',
                borderRadius: '12px',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)', fontWeight: 800, color: '#f59e0b' }}>₹ 500+ Cr</div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Luxury Assets Transacted
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Vision & Mission Cards (2 Columns) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3.5rem'
        }}>
          {/* Vision Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            padding: 'clamp(1.4rem, 3vw, 2.5rem)',
            border: '1px solid #e2e8f0',
            boxShadow: '0 6px 20px rgba(15, 23, 42, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              backgroundColor: '#f3e8ff',
              color: '#9333ea',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Eye size={24} />
            </div>

            <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', fontWeight: 800, color: '#0f172a' }}>
              Our Vision
            </h3>

            <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
              To revolutionize luxury homeownership across India by establishing unprecedented standards of legal transparency, algorithmic fair-pricing, and fiduciary trust — empowering every discerning buyer and investor to acquire spaces of timeless prestige.
            </p>
          </div>

          {/* Mission Card */}
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '18px',
            padding: 'clamp(1.4rem, 3vw, 2.5rem)',
            border: '1px solid #e2e8f0',
            boxShadow: '0 6px 20px rgba(15, 23, 42, 0.03)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}>
            <div style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              backgroundColor: '#ffedd5',
              color: '#ea580c',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Compass size={24} />
            </div>

            <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.35rem)', fontWeight: 800, color: '#0f172a' }}>
              Our Mission
            </h3>

            <p style={{ fontSize: '0.94rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
              We streamline the entire secondary and luxury real estate lifecycle through verified listings, institutional legal scrutiny, bespoke interior styling, and dedicated client-first advisory — delivering unmatched peace of mind for buyers and sellers alike.
            </p>
          </div>
        </div>

        {/* 5. Core Values Section (3 Columns) */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#d97706',
            fontWeight: 700,
            fontSize: '0.88rem',
            marginBottom: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em'
          }}>
            <Sparkles size={18} /> Our Core Values
          </div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
            Principles That Guide Every Transaction
          </h2>
          <p style={{ color: '#64748b', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>
            These foundational standards govern every advisory interaction, valuation report, and property registration we execute.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
            gap: 'clamp(1.2rem, 2.5vw, 2rem)',
            textAlign: 'left'
          }}>
            {/* Value 1 */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: 'clamp(1.4rem, 2.5vw, 2.2rem)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 18px rgba(15, 23, 42, 0.03)'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: '#ecfdf5',
                color: '#059669',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <ShieldCheck size={22} />
              </div>
              <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem' }}>
                Radical Transparency
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                We bring absolute clarity to an opaque market. Every title deed, municipal registry clearance, and price benchmark is vetted and shared openly with zero undisclosed markups.
              </p>
            </div>

            {/* Value 2 */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: 'clamp(1.4rem, 2.5vw, 2.2rem)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 18px rgba(15, 23, 42, 0.03)'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Award size={22} />
              </div>
              <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem' }}>
                Institutional Diligence
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                Every luxury residence represented undergoes structural audits, legal encumbrance checks, and RERA compliance verification through our dedicated corporate team.
              </p>
            </div>

            {/* Value 3 */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: 'clamp(1.4rem, 2.5vw, 2.2rem)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 18px rgba(15, 23, 42, 0.03)'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: '#fffbeb',
                color: '#d97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                <Users size={22} />
              </div>
              <h4 style={{ fontSize: '1.18rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.65rem' }}>
                Client-First Fiduciary
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65, margin: 0 }}>
                We operate as confidential advisors, not high-pressure brokers. We align our success exclusively with safeguarding our clients' long-term capital and lifestyle prosperity.
              </p>
            </div>
          </div>
        </div>

        {/* 6. Bottom Advisory CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fff7ed 100%)',
          borderRadius: '20px',
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.2rem, 4vw, 2.5rem)',
          border: '1px solid rgba(217, 119, 6, 0.3)',
          boxShadow: '0 16px 36px rgba(217, 119, 6, 0.08)',
          textAlign: 'center',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Experience the New Benchmark in Luxury Real Estate
          </h3>
          <p style={{ color: '#475569', fontSize: 'clamp(0.92rem, 1.5vw, 1.02rem)', marginBottom: '1.75rem', maxWidth: '600px', margin: '0 auto 1.75rem auto' }}>
            Whether buying your dream penthouse, selling a high-value property, or transforming interiors, our senior partners are ready to assist.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Button variant="gold" size="lg" onClick={() => onOpenInquiry(null)}>
              Request Consultation <ArrowUpRight size={18} />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onOpenInquiry({ title: 'Download Corporate Profile' })}
              style={{ color: '#0f172a', borderColor: '#cbd5e1', backgroundColor: '#ffffff' }}
            >
              Download Corporate Dossier
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
