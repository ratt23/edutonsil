import React from 'react';
import { HERO_DATA } from '../data/tonsilData';
import { PatientDrinkingIllustration, TonsilDiagramIllustration } from './illustrations/IllustrationSvgs';
import { AlertCircle, ChevronDown, ArrowRight, Phone } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      el.focus({ preventScroll: true });
    }
  };

  return (
    <section
      id="hero"
      aria-labelledby="hero-main-title"
      style={{
        paddingTop: '24px',
        paddingBottom: '28px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Main Hero Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '32px',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            border: '2px solid #EAE5D8',
            borderRadius: 'var(--radius-xl)',
            padding: '36px 36px 28px 36px',
            position: 'relative',
            boxShadow: 'var(--shadow-card)',
          }}
          className="hero-grid"
        >
          {/* Left Column: Titles & Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Handwritten Top Accent */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span
                className="handwritten-text"
                style={{
                  fontSize: '2.1rem',
                  fontWeight: 700,
                  color: 'var(--navy-light)',
                  transform: 'rotate(-2deg)',
                  display: 'inline-block',
                }}
              >
                {HERO_DATA.overtitle}
              </span>
              <span style={{ fontSize: '1.4rem' }}>✨</span>
            </div>

            {/* Giant Title */}
            <h1
              id="hero-main-title"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
                fontWeight: 900,
                color: 'var(--navy-title)',
                letterSpacing: '-1.5px',
                lineHeight: 1.05,
                margin: 0,
              }}
            >
              {HERO_DATA.title}
            </h1>

            {/* Physical-style Pink Ribbon Banner */}
            <div style={{ margin: '8px 0 4px 0', alignSelf: 'flex-start' }}>
              <div
                style={{
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                <div
                  className="poster-ribbon"
                  style={{
                    backgroundColor: 'var(--pink-ribbon)',
                    color: '#FFFFFF',
                    fontSize: 'clamp(1.1rem, 2.2vw, 1.45rem)',
                    fontWeight: 900,
                    letterSpacing: '0.5px',
                    padding: '10px 24px',
                    borderRadius: '16px',
                    boxShadow: '0 4px 14px rgba(244, 91, 105, 0.35)',
                    border: '2px solid #FFFFFF',
                  }}
                >
                  {HERO_DATA.ribbonText}
                </div>
              </div>
            </div>

            {/* Subtitle & Goal */}
            <p
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginTop: '4px',
                marginBottom: '0',
                lineHeight: 1.4,
              }}
            >
              {HERO_DATA.subtitle}
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                margin: 0,
                lineHeight: 1.45,
              }}
            >
              {HERO_DATA.objective}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                marginTop: '16px',
              }}
            >
              <button
                type="button"
                onClick={() => scrollTo('anjuran')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--green-pill)',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-pill)',
                  boxShadow: '0 4px 12px rgba(40, 180, 99, 0.3)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--green-dark)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--green-pill)')}
              >
                <span>Lihat panduan</span>
                <ChevronDown size={20} />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('tanda-bahaya')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--emergency-red)',
                  border: '2.5px solid var(--emergency-red)',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  padding: '12px 22px',
                  borderRadius: 'var(--radius-pill)',
                  boxShadow: '0 4px 10px rgba(217, 48, 37, 0.12)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--emergency-light-bg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                }}
              >
                <span>Kenali tanda perdarahan</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Column: Illustrations (Patient & Tonsil Inset) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Handwritten Floating Quote above patient */}
            <div
              style={{
                alignSelf: 'flex-end',
                marginBottom: '-8px',
                marginRight: '12px',
                zIndex: 2,
              }}
            >
              <span
                className="handwritten-text"
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 700,
                  color: 'var(--navy-title)',
                  backgroundColor: '#FFF9E6',
                  padding: '6px 14px',
                  borderRadius: '12px',
                  border: '1.5px dashed #F39C12',
                  display: 'inline-block',
                  transform: 'rotate(2deg)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                }}
              >
                {HERO_DATA.patientQuote}
              </span>
            </div>

            {/* Central Patient Drinking Character */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <PatientDrinkingIllustration size={250} />
            </div>

            {/* Tonsil Inset Circular Card (Overlay at bottom right of patient) */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                backgroundColor: '#FFFFFF',
                border: '2px solid #FCD5B5',
                borderRadius: '18px',
                padding: '10px 14px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                maxWidth: '290px',
                marginTop: '-24px',
                zIndex: 3,
              }}
            >
              <TonsilDiagramIllustration size={68} />
              <div style={{ flex: 1 }}>
                <p
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 800,
                    color: 'var(--navy-title)',
                    lineHeight: 1.25,
                    marginBottom: '2px',
                  }}
                >
                  {HERO_DATA.tonsilNoteTitle}
                </p>
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {HERO_DATA.tonsilNoteText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Immediate Post-Hero Emergency Alert Strip */}
        <div
          role="region"
          aria-label="Pemberitahuan Darurat Cepat"
          style={{
            marginTop: '18px',
            backgroundColor: '#FDF2F2',
            border: '2px solid #F87171',
            borderRadius: 'var(--radius-lg)',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            boxShadow: '0 4px 12px rgba(239, 68, 68, 0.1)',
          }}
          className="hero-emergency-strip"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--emergency-red)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <AlertCircle size={22} />
            </div>
            <div>
              <p
                style={{
                  color: 'var(--emergency-dark)',
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {HERO_DATA.quickEmergencyAlert}
              </p>
              <p
                style={{
                  color: 'var(--text-main)',
                  fontSize: '0.88rem',
                  margin: 0,
                }}
              >
                Jangan menunggu darah berhenti sendiri. Akses bantuan medis darurat segera.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'center' }}>
            <a
              href="tel:1500911"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#E52330',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '0.88rem',
                fontFamily: 'var(--font-title)',
                padding: '9px 18px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                boxShadow: '0 3px 10px rgba(229, 35, 48, 0.35)',
                whiteSpace: 'nowrap',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B71C1C')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#E52330')}
            >
              <span>24/7 EMERGENCY & CONTACT CENTER: 1500911</span>
              <Phone size={16} strokeWidth={2.8} />
            </a>

            <button
              type="button"
              onClick={() => scrollTo('tanda-bahaya')}
              style={{
                backgroundColor: '#FFFFFF',
                color: 'var(--emergency-red)',
                border: '1.5px solid var(--emergency-red)',
                fontWeight: 800,
                fontSize: '0.88rem',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--emergency-light-bg)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FFFFFF')}
            >
              Lihat Tanda Bahaya
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 24px 20px !important;
            gap: 28px !important;
          }
          .hero-emergency-strip {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};
