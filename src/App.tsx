import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecommendationsSection } from './components/RecommendationsSection';
import { AvoidSection } from './components/AvoidSection';
import { EmergencySection } from './components/EmergencySection';
import { DailyChecklist } from './components/DailyChecklist';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Accessibility Skip Link */}
      <a
        href="#hero"
        style={{
          position: 'absolute',
          left: '-9999px',
          top: '10px',
          padding: '8px 16px',
          backgroundColor: '#0284C7',
          color: '#FFFFFF',
          fontWeight: 700,
          zIndex: 9999,
          borderRadius: '4px',
        }}
        onFocus={(e) => (e.currentTarget.style.left = '10px')}
        onBlur={(e) => (e.currentTarget.style.left = '-9999px')}
      >
        Lewati ke Konten Utama
      </a>

      <Navbar />

      <main id="main-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Hero />
        <RecommendationsSection />
        <AvoidSection />
        <EmergencySection />
        <DailyChecklist />
        <FaqSection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
