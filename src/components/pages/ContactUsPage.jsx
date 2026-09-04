import React, { useState } from 'react';
import { 
  ArrowLeft, Phone, Mail, MapPin, Clock, Send, 
  CheckCircle2, ChevronDown, ChevronUp, Sparkles, Building2 
} from 'lucide-react';
import Button from '../common/Button';

export default function ContactUsPage({ onBack }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'What are your office hours?',
      a: 'Our central advisory desk is open Monday to Saturday from 10:00 AM to 7:00 PM. For high-net-worth and NRI clients in different time zones, private off-hours advisory sessions are available by appointment.'
    },
    {
      q: 'How quickly can I expect a response?',
      a: 'We typically respond to all digital inquiries within 2 to 4 business hours. For immediate urgent consultations or on-site inspections, we recommend calling our direct advisory hotline.'
    },
    {
      q: 'Do I need to schedule an appointment to visit your office?',
      a: 'While we welcome walk-ins at our Gurugram Headquarters, we strongly recommend scheduling an advisory session in advance so our senior estate partners can curate bespoke property dossiers for you.'
    },
    {
      q: 'What information should I provide when contacting about a property?',
      a: 'When inquiring about a specific property or sector, kindly share your preferred BHK configuration, target budget spectrum, investment timeline, and any specific society preferences (e.g. Golf Course Extension or Dwarka Expressway).'
    },
    {
      q: 'Do you offer legal due-diligence and sub-registrar assistance?',
      a: 'Yes. Flats n Beyond provides end-to-end legal title deed vetting, municipal clearance checks, pre-approved bank syndication, and on-ground sub-registrar registration support.'
    }
  ];

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
            Home / <span style={{ color: '#0f172a' }}>Contact Us</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Header Banner (Warm Luxury Project Theme) */}
      <div style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #fffcf6 0%, #fef5e7 60%, #fbf0dc 100%)',
        color: '#0f172a',
        padding: '4.5rem 1.5rem 4rem 1.5rem',
        textAlign: 'center',
        borderBottom: '1px solid #ebdcc4'
      }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: '#fffbeb',
            color: '#b45309',
            border: '1px solid #fde68a',
            padding: '0.35rem 1rem',
            borderRadius: '9999px',
            fontSize: '0.82rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '1.25rem',
            boxShadow: '0 2px 8px rgba(217, 119, 6, 0.08)'
          }}>
            <Sparkles size={15} color="#d97706" /> Get In Touch
          </div>

          <h1 style={{
            fontSize: 'clamp(2.3rem, 4.5vw, 3.4rem)',
            fontWeight: 800,
            fontFamily: 'Outfit, sans-serif',
            marginBottom: '1rem',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: '#0f172a'
          }}>
            We're Here to <span style={{ color: '#d97706' }}>Help You</span>
          </h1>

          <p style={{
            fontSize: '1.05rem',
            color: '#475569',
            lineHeight: 1.75,
            marginBottom: '2rem',
            maxWidth: '680px',
            margin: '0 auto 2rem auto'
          }}>
            Have questions about our luxury listings, off-market penthouses, or need expert guidance with property transactions? Reach out to our senior advisory team today.
          </p>

          {/* Quick Action Contact Pills */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <a
              href="tel:+919876543210"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: '#ffffff',
                border: '1.5px solid #fde68a',
                color: '#0f172a',
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.92rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(217, 119, 6, 0.08)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d97706';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#d97706';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#0f172a';
                e.currentTarget.style.borderColor = '#fde68a';
              }}
            >
              <Phone size={16} color="#d97706" /> +91 98765 43210
            </a>

            <a
              href="mailto:advisory@flatsnbeyond.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                backgroundColor: '#ffffff',
                border: '1.5px solid #fde68a',
                color: '#0f172a',
                padding: '0.65rem 1.4rem',
                borderRadius: '9999px',
                fontSize: '0.92rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(217, 119, 6, 0.08)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#d97706';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#d97706';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.color = '#0f172a';
                e.currentTarget.style.borderColor = '#fde68a';
              }}
            >
              <Mail size={16} color="#d97706" /> advisory@flatsnbeyond.com
            </a>
          </div>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '3.5rem' }}>
        {/* 3. Main 2-Column Grid (Form + Contact Cards) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)',
          gap: '2.5rem',
          alignItems: 'start',
          marginBottom: '4.5rem'
        }}>
          {/* Left Column: Form + Offices Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Form Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 2.75rem)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 25px rgba(15, 23, 42, 0.04)'
            }}>
              <h3 style={{
                fontSize: '1.45rem',
                fontWeight: 800,
                color: '#0f172a',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em'
              }}>
                Send Us a Message
              </h3>

              {submitted ? (
                <div style={{
                  backgroundColor: '#f0fdf4',
                  border: '1.5px solid #86efac',
                  borderRadius: '14px',
                  padding: '2.5rem 2rem',
                  textAlign: 'center'
                }}>
                  <CheckCircle2 size={48} color="#16a34a" style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#166534', marginBottom: '0.4rem' }}>
                    Thank You, {formData.fullName}!
                  </h4>
                  <p style={{ color: '#15803d', fontSize: '0.92rem', margin: '0 auto 1.5rem auto', maxWidth: '400px' }}>
                    Your message has been received by our senior real estate advisory desk. An advisor will contact you shortly.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.45rem' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Aarav Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          backgroundColor: '#ffffff'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d97706'}
                        onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.45rem' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. aarav@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '0.8rem 1rem',
                          borderRadius: '10px',
                          border: '1.5px solid #cbd5e1',
                          fontSize: '0.92rem',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          backgroundColor: '#ffffff'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#d97706'}
                        onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.45rem' }}>
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
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        backgroundColor: '#ffffff'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#d97706'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '0.45rem' }}>
                      Message or Property Requirements
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your query, desired location (Golf Course Extn / Dwarka Expressway), or preferred configuration..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '10px',
                        border: '1.5px solid #cbd5e1',
                        fontSize: '0.92rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        backgroundColor: '#ffffff',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#d97706'}
                      onBlur={(e) => e.target.style.borderColor = '#cbd5e1'}
                    />
                  </div>

                  <Button variant="gold" size="lg" type="submit" style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}>
                    Send Message <Send size={16} />
                  </Button>
                </form>
              )}
            </div>

            {/* Our Offices & Interactive Map Card */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: 'clamp(2rem, 4vw, 2.5rem)',
              border: '1px solid #e2e8f0',
              boxShadow: '0 8px 25px rgba(15, 23, 42, 0.04)'
            }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Our Offices
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', margin: 0 }}>
                  Gurgaon, Delhi NCR — Tap the pin or map to navigate to our central advisory headquarters.
                </p>
              </div>

              {/* Map View Box */}
              <div style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid #cbd5e1',
                height: '280px',
                position: 'relative'
              }}>
                <iframe
                  title="Flats n Beyond Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112347.88128362624!2d77.01358986877239!3d28.41846599984931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d227db0b80fbf%3A0xe54b9d0b6d2e7372!2sSector%2065%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Cards Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* 1. Call Us */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '18px',
              padding: '1.75rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 18px rgba(15, 23, 42, 0.03)',
              display: 'flex',
              gap: '1.2rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#fffbeb',
                color: '#d97706',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Phone size={22} />
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontWeight: 700 }}>
                  Call Us
                </div>
                <a
                  href="tel:+919876543210"
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    textDecoration: 'none',
                    display: 'block',
                    marginTop: '0.2rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#d97706'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}
                >
                  +91 98765 43210
                </a>
                <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.2rem' }}>
                  Direct Senior Advisory Line (Mon–Sat)
                </div>
              </div>
            </div>

            {/* 2. Email Us */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '18px',
              padding: '1.75rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 18px rgba(15, 23, 42, 0.03)',
              display: 'flex',
              gap: '1.2rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: '#eff6ff',
                color: '#2563eb',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Mail size={22} />
              </div>

              <div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontWeight: 700 }}>
                  Email Us
                </div>
                <a
                  href="mailto:advisory@flatsnbeyond.com"
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#0f172a',
                    textDecoration: 'none',
                    display: 'block',
                    marginTop: '0.2rem',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#2563eb'}
                  onMouseLeave={(e) => e.currentTarget.style.color = '#0f172a'}
                >
                  advisory@flatsnbeyond.com
                </a>
                <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '0.2rem' }}>
                  Concierge: concierge@flatsnbeyond.com
                </div>
              </div>
            </div>

            {/* 3. Visit Us (Detailed Branches) */}
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '18px',
              padding: '2rem',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 18px rgba(15, 23, 42, 0.03)'
            }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  backgroundColor: '#fef2f2',
                  color: '#dc2626',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <MapPin size={22} />
                </div>

                <div>
                  <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#64748b', fontWeight: 700 }}>
                    Visit Us
                  </div>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '0.35rem', marginTop: '0.15rem' }}>
                    <Clock size={15} color="#d97706" /> Mon–Sat: 10:00 AM – 7:00 PM
                  </div>
                </div>
              </div>

              {/* Office Location 1: Headquarters */}
              <div style={{
                paddingBottom: '1.25rem',
                borderBottom: '1px solid #f1f5f9',
                marginBottom: '1.25rem'
              }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Gurugram (Headquarters)
                </div>
                <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  Unit 408-410, Suncity Success Tower,<br />
                  Golf Course Extension Road, Sector 65,<br />
                  Gurugram, Haryana — 122101
                </div>
              </div>

              {/* Office Location 2: Golf Course Road */}
              <div style={{
                paddingBottom: '1.25rem',
                borderBottom: '1px solid #f1f5f9',
                marginBottom: '1.25rem'
              }}>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Golf Course Road Executive Lounge
                </div>
                <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  Horizon One Centre, DLF Phase 5,<br />
                  Golf Course Road, Gurugram — 122002
                </div>
              </div>

              {/* Office Location 3: Dwarka Expressway */}
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', marginBottom: '0.35rem' }}>
                  Dwarka Expressway Advisory Branch
                </div>
                <div style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6 }}>
                  Sector 109 Belt, Dwarka Expressway Corridor,<br />
                  Gurugram, Haryana — 122017
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4. Frequently Asked Questions Section */}
        <div style={{ maxWidth: '840px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '0.6rem',
              letterSpacing: '-0.02em'
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#64748b', fontSize: '0.94rem' }}>
              Quick answers to common questions about our advisory process, inspections, and consultations.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: isOpen ? '1.5px solid #d97706' : '1px solid #e2e8f0',
                    boxShadow: '0 4px 14px rgba(15, 23, 42, 0.03)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.35rem 1.75rem',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    <span style={{ fontSize: '1.02rem', fontWeight: 750, color: '#0f172a' }}>
                      {faq.q}
                    </span>
                    <span style={{ color: isOpen ? '#d97706' : '#64748b', flexShrink: 0, marginLeft: '1rem' }}>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 1.75rem 1.5rem 1.75rem',
                      fontSize: '0.92rem',
                      color: '#475569',
                      lineHeight: 1.7,
                      borderTop: '1px solid #f8fafc'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
