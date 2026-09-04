import React from 'react';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage({ onBack }) {
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
            Legal / <span style={{ color: '#0f172a' }}>Terms and Conditions</span>
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
              Terms and Conditions
            </h1>
            <div style={{ fontSize: '0.88rem', color: '#64748b', fontWeight: 600 }}>
              Effective Date: September 4, 2026
            </div>
          </div>

          {/* Clauses List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: '#334155', fontSize: '0.95rem', lineHeight: 1.75 }}>
            {/* 1 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                1. Introduction
              </h2>
              <p style={{ margin: 0 }}>
                These Terms and Conditions ("Terms") govern your access to and use of the services, property evaluations, and consultation portals provided by Flats n Beyond Advisory Services Private Limited ("Company", "Flats n Beyond"). By accessing our platform or engaging our advisory desk, you agree to be bound by these Terms.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                2. Services Offered
              </h2>
              <p style={{ margin: 0 }}>
                Flats n Beyond provides real estate advisory services including verified primary developer bookings, secondary resale transactions, legal title vetting, comparative market analysis, and turnkey interior design coordination across Gurgaon and NCR micro-markets.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                3. User Eligibility
              </h2>
              <p style={{ margin: 0 }}>
                You must be at least 18 years of age and legally competent to enter into binding contracts under Indian law to engage our transaction services. By submitting inquiries, you warrant that all information supplied is accurate and lawful.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                4. User Responsibilities
              </h2>
              <p style={{ margin: 0 }}>
                Clients agree to provide truthful and complete documentation regarding property ownership, KYC credentials, and financial authorizations. Any fraudulent representation or unauthorized submission of third-party property assets is strictly prohibited.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                5. Intellectual Property
              </h2>
              <p style={{ margin: 0 }}>
                All trademarks, visual renders, floor plan illustrations, content, branding, and proprietary analytical matrices hosted on Flats n Beyond are the intellectual property of the Company and protected under applicable copyright laws.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                6. Privacy & Non-Disclosure
              </h2>
              <p style={{ margin: 0 }}>
                Our collection and utilization of your personal and transaction data is governed by our Privacy Policy. For High-Net-Worth and corporate clients, strict non-disclosure covenants apply to ensure complete transaction anonymity.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                7. Offer and Valuation Disclaimer
              </h2>
              <p style={{ margin: 0 }}>
                All price quotes, capital appreciation projections, and property evaluations published on the website or shared via advisory dossiers are indicative and subject to physical structural verification, prevailing market movements, and final mutually signed agreements.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                8. Limitation of Liability
              </h2>
              <p style={{ margin: 0 }}>
                To the fullest extent permitted by law, Flats n Beyond shall not be liable for any indirect, incidental, or consequential damages resulting from third-party developer delays, municipal zoning updates, or banking sanction revisions beyond our reasonable control.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                9. Indemnification
              </h2>
              <p style={{ margin: 0 }}>
                You agree to indemnify and hold harmless Flats n Beyond, its directors, advisors, and affiliates from any third-party claims or damages arising from willful misrepresentation, breach of these Terms, or violation of third-party rights.
              </p>
            </div>

            {/* 10 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                10. Termination
              </h2>
              <p style={{ margin: 0 }}>
                We reserve the right to suspend or terminate advisory services or digital access if we identify a material breach of these Terms, unlawful conduct, or intentional misrepresentation.
              </p>
            </div>

            {/* 11 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                11. Governing Law and Jurisdiction
              </h2>
              <p style={{ margin: 0 }}>
                These Terms are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts located in Gurgaon, Haryana, India.
              </p>
            </div>

            {/* 12 */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.5rem' }}>
                12. Amendments
              </h2>
              <p style={{ margin: 0 }}>
                We reserve the right to modify these Terms at any time. Updated terms will be published on this page and your continued use of our platform constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* 13. Contact Box */}
            <div>
              <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.75rem' }}>
                13. Contact Us
              </h2>
              <p style={{ marginBottom: '1rem' }}>
                For any questions, legal clarifications, or grievances regarding these Terms, please contact:
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
                <div><strong>Email:</strong> legal@flatsnbeyond.com</div>
                <div><strong>Direct Desk:</strong> +91 98765 43210</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
