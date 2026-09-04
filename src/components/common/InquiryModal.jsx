import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Send, Building } from 'lucide-react';
import Button from './Button';

export default function InquiryModal({ isOpen, onClose, property = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: property ? property.title : 'General Buying Advisory',
    budget: '₹1 Cr - ₹3 Cr',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(0.75rem, 2vw, 1.5rem)'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        maxWidth: '520px',
        width: '100%',
        maxHeight: '92vh',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        overflowY: 'auto',
        position: 'relative',
        animation: 'fadeIn 0.3s ease-out'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          padding: 'clamp(1.25rem, 3vw, 1.75rem) clamp(1.25rem, 3vw, 2rem)',
          color: '#ffffff',
          position: 'relative'
        }}>
          <button 
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              color: '#94a3b8',
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <Building size={18} color="#d97706" />
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d97706', fontWeight: 700 }}>
              Flats n Beyond Confidential
            </span>
          </div>

          <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.4rem)', color: '#ffffff', fontWeight: 700 }}>
            {property ? 'Request Exclusive Callback' : 'Connect with Corporate Advisory'}
          </h3>
          {property && (
            <p style={{ fontSize: '0.82rem', color: '#cbd5e1', marginTop: '0.2rem' }}>
              Listing: <strong style={{ color: '#ffffff' }}>{property.title}</strong>
            </p>
          )}
        </div>

        {/* Content */}
        <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '1.5rem 0.5rem' }}>
              <CheckCircle2 size={52} color="#0d9488" style={{ margin: '0 auto 1rem' }} />
              <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '0.5rem' }}>
                Enquiry Successfully Logged!
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.92rem', marginBottom: '1.5rem' }}>
                Our corporate real estate advisor will get in touch with you shortly on <strong>{formData.phone}</strong>.
              </p>
              <div style={{
                background: '#f8fafc',
                padding: '0.75rem',
                borderRadius: '8px',
                fontSize: '0.8rem',
                color: '#475569',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                <ShieldCheck size={16} color="#0d9488" />
                100% Privacy Guaranteed. No spam calls.
              </div>
              <Button variant="primary" onClick={handleReset} fullWidth>
                Done
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ananya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.7rem 0.9rem',
                      borderRadius: '10px',
                      border: '1px solid #cbd5e1',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                  Target Investment Range
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.92rem',
                    backgroundColor: '#ffffff',
                    outline: 'none'
                  }}
                >
                  <option>Premium Residences (Up to ₹2 Crores)</option>
                  <option>Luxury Residences (₹2 Cr - ₹5 Crores)</option>
                  <option>Ultra Luxury Penthouses (₹5 Cr - ₹10 Crores)</option>
                  <option>Bespoke Villa Estates (₹10+ Crores)</option>
                  <option>Designing Homes (Interior Consultancy)</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: '#334155', marginBottom: '0.35rem' }}>
                  Specific Requirements (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="Tell us preferred locations, floor preferences, or possession timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.7rem 0.9rem',
                    borderRadius: '10px',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.88rem',
                    fontFamily: 'inherit',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.75rem',
                color: '#64748b'
              }}>
                <ShieldCheck size={14} color="#0d9488" style={{ flexShrink: 0 }} />
                <span>Your information is protected under corporate anonymity standards.</span>
              </div>

              <Button variant="gold" size="lg" type="submit" icon={Send} fullWidth>
                Submit High-Priority Request
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

