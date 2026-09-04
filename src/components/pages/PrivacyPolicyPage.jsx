import React from 'react';
import { ArrowLeft, Shield, Mail, Phone, MapPin } from 'lucide-react';

export default function PrivacyPolicyPage({ onBack }) {
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
            Legal / <span style={{ color: '#0f172a' }}>Privacy Policy</span>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '2.5rem', maxWidth: '860px' }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: 'clamp(2rem, 4vw, 3.5rem)',
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 25px rgba(15, 23, 42, 0.04)'
        }}>
          {/* Header */}
          <div style={{ marginBottom: '2.5rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem' }}>
            <h1 style={{
              fontSize: '2.2rem',
              fontWeight: 800,
              color: '#0f172a',
              fontFamily: 'Outfit, sans-serif',
              marginBottom: '0.4rem',
              letterSpacing: '-0.02em'
            }}>
              Privacy Policy
            </h1>
            <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
              Effective Date: September 4, 2026
            </div>
          </div>

          {/* Policy Sections */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#334155', fontSize: '0.95rem', lineHeight: 1.75 }}>
            {/* 1 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                1. Information We Collect
              </h2>
              <p style={{ margin: 0 }}>
                We collect personal and transactional information that you voluntarily provide to us when scheduling an advisory session, requesting confidential property dossiers, or engaging our legal desk. This includes your full name, contact number, email address, residential budget criteria, property requirements, and verification documents necessary for municipal registry and bank syndication.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                2. How We Use Your Information
              </h2>
              <p style={{ margin: 0 }}>
                We utilize collected information to deliver curated luxury real estate advisory, facilitate site tours, prepare due-diligence valuation reports, assist with RERA/escrow documentation, and communicate bespoke off-market investment opportunities tailored to your portfolio objectives.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                3. Information Sharing & Confidentiality
              </h2>
              <p style={{ margin: 0 }}>
                Flats n Beyond enforces strict corporate non-disclosure. We do not sell, rent, or trade your personal data. Information is shared strictly on a need-to-know basis with authorized banks, legal counsel, and sub-registrar authorities solely to complete lawful conveyance, title deed transfer, or verified loan syndication with your prior consent.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                4. Data Security
              </h2>
              <p style={{ margin: 0 }}>
                We implement bank-grade encryption protocols and technical security measures to protect your personal details, financial preferences, and identification records against unauthorized access, alteration, disclosure, or accidental destruction.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                5. Your Rights
              </h2>
              <p style={{ margin: 0 }}>
                You maintain full rights to inspect, update, correct, or request the deletion of your personal contact records from our advisory systems at any time by contacting our dedicated data privacy desk.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                6. Cookies and Similar Technologies
              </h2>
              <p style={{ margin: 0 }}>
                Our digital platform utilizes functional and analytical cookies to optimize browsing speed, remember your search filter preferences (such as location and BHK filters), and understand user engagement. You can customize cookie preferences directly in your browser settings.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                7. Changes to This Privacy Policy
              </h2>
              <p style={{ margin: 0 }}>
                We may periodically update this policy in compliance with evolving Indian regulatory directives or corporate enhancements. Any amendments will be published on this page with an updated effective date.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                8. Third-Party Sites & Portals
              </h2>
              <p style={{ margin: 0 }}>
                Our website may include references to banking portals, RERA statutory verification portals, or developer CAD repositories. We encourage you to review the privacy policies of external sites as Flats n Beyond is not responsible for external privacy practices.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                9. NRI & Access Outside India
              </h2>
              <p style={{ margin: 0 }}>
                If you are accessing our advisory services from outside India (e.g. NRI investors in the UAE, UK, USA, or Singapore), please note that transaction records and property documents are processed in India under applicable Indian real estate and financial regulations.
              </p>
            </div>

            {/* 10. Contact Us Card Box */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                10. Contact Us
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                If you have any questions, clarifications, or requests regarding this Privacy Policy, please reach out to:
              </p>

              <div style={{
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '14px',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                fontSize: '0.9rem',
                color: '#475569'
              }}>
                <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1rem' }}>
                  Flats n Beyond Advisory Services Private Limited
                </div>
                <div>Golf Course Extension Road, Sector 65, Gurgaon, Haryana — 122101</div>
                <div><strong>Email:</strong> advisory@flatsnbeyond.com</div>
                <div><strong>Direct Desk:</strong> +91 98765 43210</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
