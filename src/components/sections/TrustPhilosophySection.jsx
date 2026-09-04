import React from 'react';
import { Eye, Scale, Award, Lock, Sparkles } from 'lucide-react';
import Button from '../common/Button';

export default function TrustPhilosophySection({ onOpenInquiry }) {
  const pillars = [
    {
      icon: Eye,
      title: 'Institutional Transparency',
      desc: 'Zero hidden markups or undisclosed builder commissions. Every property title deed, environmental clearance, and RERA filing is verified by our legal desk.'
    },
    {
      icon: Scale,
      title: 'Market Experience & Analytics',
      desc: 'Over 15+ years of deep micro-market research across Golf Course Extension, Dwarka Expressway, and SPR to forecast realistic capital appreciation.'
    },
    {
      icon: Lock,
      title: 'Corporate Anonymity & Privacy',
      desc: 'We operate as a unified corporate entity. High-net-worth buyers and sellers enjoy 100% confidentiality without public exposure.'
    },
    {
      icon: Award,
      title: 'End-to-End Escrow & Legal Support',
      desc: 'From initial letter of intent (LOI) to bank loan syndication and registry execution at the sub-registrar office, we handle every corporate step.'
    }
  ];

  return (
    <section id="why-us" style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0', backgroundColor: '#f8fafc' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto clamp(2rem, 4vw, 4rem)' }}>
          <div style={{
            fontSize: 'clamp(0.72rem, 1.2vw, 0.8rem)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#d97706',
            fontWeight: 700,
            marginBottom: '0.5rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            backgroundColor: '#fffbeb',
            padding: '0.3rem 0.85rem',
            borderRadius: '9999px',
            border: '1px solid #fef3c7'
          }}>
            <Sparkles size={13} color="#d97706" /> Brand Philosophy & Values
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.8vw, 2.4rem)', fontWeight: 800, color: '#0f172a', margin: '0.6rem 0 0.8rem', letterSpacing: '-0.02em' }}>
            Why High-Net-Worth Investors Trust Flats n Beyond
          </h2>
          <p style={{ color: '#64748b', fontSize: 'clamp(0.92rem, 1.5vw, 1.05rem)', lineHeight: 1.6 }}>
            "Dreams find an address." We bridge the gap between individual buyers and mega real estate developers through institutional corporate standards.
          </p>
        </div>

        {/* Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: 'clamp(1.2rem, 2.5vw, 1.75rem)',
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
        }}>
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: 'clamp(1.4rem, 3vw, 2.2rem) clamp(1.2rem, 2.5vw, 2rem)',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = '#d97706';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(217, 119, 6, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.04)';
                }}
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  backgroundColor: '#fffbeb',
                  color: '#d97706',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  border: '1px solid #fde68a'
                }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: 'clamp(1.05rem, 2vw, 1.18rem)', fontWeight: 700, color: '#0f172a', marginBottom: '0.65rem' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div style={{
          background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 50%, #fff7ed 100%)',
          borderRadius: '20px',
          padding: 'clamp(2rem, 4vw, 3.5rem) clamp(1.2rem, 4vw, 2rem)',
          border: '1px solid rgba(217, 119, 6, 0.3)',
          boxShadow: '0 16px 36px rgba(217, 119, 6, 0.08)',
          textAlign: 'center',
          maxWidth: '850px',
          margin: '0 auto'
        }}>
          <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Ready to Find Your Next Luxury Address?
          </h3>
          <p style={{ color: '#475569', fontSize: 'clamp(0.92rem, 1.5vw, 1.02rem)', marginBottom: '1.75rem', maxWidth: '600px', margin: '0 auto 1.75rem' }}>
            Connect with our advisory desk today. No pressure sales, only transparent market facts.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <Button variant="gold" size="lg" onClick={() => onOpenInquiry(null)}>
              Request Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onOpenInquiry({ title: 'Download Market Report' })}
              style={{ color: '#0f172a', borderColor: '#cbd5e1', backgroundColor: '#ffffff' }}
            >
              Download NCR Market Report 2026
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

