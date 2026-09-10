import React from 'react';
import { EMERGENCY_DATA } from '../data/tonsilData';
import { WarningBadgeIllustration } from './illustrations/IllustrationSvgs';
import { ShieldAlert, Phone } from 'lucide-react';

export const EmergencySection: React.FC = () => {
  return (
    <section
      id="tanda-bahaya"
      tabIndex={-1}
      aria-labelledby="tanda-bahaya-heading"
      style={{
        paddingTop: '20px',
        paddingBottom: '24px',
        scrollMarginTop: '80px',
      }}
    >
      <div className="container">
        {/* High-visibility Emergency Red Block */}
        <div
          className="poster-section-frame frame-emergency"
          style={{
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: '24px',
              alignItems: 'center',
            }}
            className="emergency-grid"
          >
            {/* Left: Big Warning Badge & Title */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '12px',
                minWidth: '220px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '16px',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  }}
                >
                  <WarningBadgeIllustration size={54} />
                </div>
                <div>
                  <h2
                    id="tanda-bahaya-heading"
                    style={{
                      color: '#FFFFFF',
                      fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                      fontWeight: 900,
                      lineHeight: 1.1,
                      margin: 0,
                      textShadow: '0 2px 4px rgba(0,0,0,0.25)',
                    }}
                  >
                    {EMERGENCY_DATA.title}
                  </h2>
                  <p
                    style={{
                      color: '#FFF1F2',
                      fontSize: '1rem',
                      fontWeight: 700,
                      margin: '4px 0 0 0',
                    }}
                  >
                    {EMERGENCY_DATA.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Middle: Complete Direct Bullet Checklist (No accordion, 2 columns on desktop) */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(4px)',
                borderRadius: 'var(--radius-lg)',
                padding: '20px 24px',
                border: '1.5px solid rgba(255, 255, 255, 0.35)',
              }}
            >
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '12px 20px',
                }}
                className="emergency-signs-list"
              >
                {EMERGENCY_DATA.signs.map((sign, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      color: '#FFFFFF',
                      fontSize: '0.98rem',
                      fontWeight: 700,
                      lineHeight: 1.35,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        backgroundColor: '#FFFFFF',
                        color: 'var(--emergency-red)',
                        fontSize: '0.8rem',
                        fontWeight: 900,
                        flexShrink: 0,
                        marginTop: '1px',
                      }}
                    >
                      !
                    </span>
                    <span>{sign}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Urgent Balloon Badge (As in poster) */}
            <div
              style={{
                maxWidth: '240px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
              className="emergency-balloon-col"
            >
              <div
                style={{
                  backgroundColor: '#B71C1C',
                  border: '3px dashed #FFFFFF',
                  borderRadius: '20px',
                  padding: '18px 16px',
                  textAlign: 'center',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.3)',
                  transform: 'rotate(-1deg)',
                }}
              >
                <div style={{ fontSize: '1.6rem', marginBottom: '4px' }}>🚨</div>
                <p
                  style={{
                    color: '#FFFFFF',
                    fontWeight: 900,
                    fontSize: '1.02rem',
                    lineHeight: 1.35,
                    margin: 0,
                  }}
                >
                  {EMERGENCY_DATA.alertBalloon}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Clear Banner */}
          <div
            style={{
              marginTop: '20px',
              paddingTop: '14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              textAlign: 'center',
            }}
          >
            <ShieldAlert size={20} color="#FFFFFF" />
            <span
              style={{
                fontSize: '1.05rem',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.3px',
              }}
            >
              {EMERGENCY_DATA.primaryWarning}
            </span>
          </div>

          {/* Official 24/7 Emergency & Contact Center 1500911 Pill Button */}
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
            }}
          >
            <a
              href="tel:1500911"
              aria-label="Hubungi 24/7 Emergency and Contact Center 1500911"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                backgroundColor: '#E52330',
                color: '#FFFFFF',
                border: '3px solid #FFFFFF',
                borderRadius: 'var(--radius-pill)',
                padding: '14px 28px',
                fontWeight: 900,
                fontSize: 'clamp(0.95rem, 2.2vw, 1.22rem)',
                fontFamily: 'var(--font-title)',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.35)',
                letterSpacing: '0.4px',
                transition: 'all 0.2s ease',
                cursor: 'pointer',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#B71C1C';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#E52330';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>24/7 EMERGENCY & CONTACT CENTER</span>
              <span
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#E52330',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '1.1rem',
                  fontWeight: 900,
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                1500911
              </span>
              <Phone size={22} strokeWidth={2.8} />
            </a>
            <span style={{ color: '#FFE4E6', fontSize: '0.85rem', fontWeight: 600 }}>
              Tekan tombol untuk langsung menghubungi IGD Siloam
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .emergency-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .emergency-signs-list {
            grid-template-columns: 1fr !important;
          }
          .emergency-balloon-col {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};
