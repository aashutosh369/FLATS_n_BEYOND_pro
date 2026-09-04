import React, { useState } from 'react';
import Header from './components/common/Header';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import PropertyGridSection from './components/sections/PropertyGridSection';
import InteriorsSection from './components/sections/InteriorsSection';
import TrustPhilosophySection from './components/sections/TrustPhilosophySection';
import PropertyDetailPage from './components/pages/PropertyDetailPage';
import AboutUsPage from './components/pages/AboutUsPage';
import ContactUsPage from './components/pages/ContactUsPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import TermsPage from './components/pages/TermsPage';
import Footer from './components/common/Footer';
import InquiryModal from './components/common/InquiryModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'property-detail' | 'about' | 'contact' | 'privacy' | 'terms'
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPropertyDetails, setSelectedPropertyDetails] = useState(null);
  const [searchFilters, setSearchFilters] = useState({
    location: 'All Locations',
    budget: 'All Budgets',
    type: 'All Types'
  });
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedPropertyForInquiry, setSelectedPropertyForInquiry] = useState(null);

  const handleOpenInquiry = (property = null) => {
    setSelectedPropertyForInquiry(property);
    setInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryModalOpen(false);
    setSelectedPropertyForInquiry(null);
  };

  const handleSelectProperty = (property) => {
    setSelectedPropertyDetails(property);
    setCurrentPage('property-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setSelectedPropertyDetails(null);
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigatePage = (pageName) => {
    setSelectedPropertyDetails(null);
    setCurrentPage(pageName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (cat) => {
    setActiveCategory(cat);
    setSelectedPropertyDetails(null);
    setCurrentPage('home');
    // Scroll to properties section
    setTimeout(() => {
      const propSection = document.getElementById('properties');
      if (propSection) {
        propSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleFilterChange = (filters) => {
    setSearchFilters(filters);
    const propSection = document.getElementById('properties');
    if (propSection) {
      propSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f8fafc' }}>
      {/* Top Header */}
      <Header 
        onOpenInquiry={handleOpenInquiry} 
        onSelectCategory={handleSelectCategory}
        onNavigate={handleNavigatePage}
      />

      {/* Main Content */}
      <main style={{ flexGrow: 1 }}>
        {currentPage === 'property-detail' && selectedPropertyDetails ? (
          <PropertyDetailPage
            property={selectedPropertyDetails}
            onBack={handleBackToHome}
            onOpenInquiry={handleOpenInquiry}
          />
        ) : currentPage === 'about' ? (
          <AboutUsPage
            onBack={handleBackToHome}
            onOpenInquiry={handleOpenInquiry}
          />
        ) : currentPage === 'contact' ? (
          <ContactUsPage
            onBack={handleBackToHome}
          />
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicyPage
            onBack={handleBackToHome}
          />
        ) : currentPage === 'terms' ? (
          <TermsPage
            onBack={handleBackToHome}
          />
        ) : (
          <>
            <HeroSection
              onSearchSubmit={(query) => {
                const propSection = document.getElementById('properties');
                if (propSection) {
                  propSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            />

            <PropertyGridSection
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
              searchFilters={searchFilters}
              onOpenInquiry={handleOpenInquiry}
              onSelectProperty={handleSelectProperty}
            />

            <InteriorsSection
              onOpenInquiry={handleOpenInquiry}
            />

            <TrustPhilosophySection
              onOpenInquiry={handleOpenInquiry}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenInquiry={handleOpenInquiry}
        onNavigate={handleNavigatePage}
      />

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={handleCloseInquiry}
        property={selectedPropertyForInquiry}
      />
    </div>
  );
}
