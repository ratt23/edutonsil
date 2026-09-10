import React, { useState } from 'react';
import {
  RECOMMENDATIONS,
  INSPIRATIONAL_QUOTE,
  BLEEDING_RISK_NOTE,
  type RecommendationItem,
} from '../data/tonsilData';
import {
  WaterHydrationIllustration,
  SoftFoodIllustration,
  RestSleepIllustration,
  OralHygieneIllustration,
  MedicineScheduleIllustration,
  CalendarReminderIllustration,
} from './illustrations/IllustrationSvgs';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

export const RecommendationsSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleDetail = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderIllustration = (type: RecommendationItem['iconType']) => {
    switch (type) {
      case 'water':
        return <WaterHydrationIllustration size={68} />;
      case 'food':
        return <SoftFoodIllustration size={68} />;
      case 'rest':
        return <RestSleepIllustration size={68} />;
      case 'hygiene':
        return <OralHygieneIllustration size={68} />;
      case 'medicine':
        return <MedicineScheduleIllustration size={68} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="anjuran"
      aria-labelledby="anjuran-heading"
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <div className="container">
        {/* Big Green Framing Box matching the poster */}
        <div className="poster-section-frame frame-green">
          {/* Header Ribbon with Checkmark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-52px',
              marginBottom: '28px',
            }}
          >
            <div
              className="poster-ribbon poster-ribbon-green"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 32px',
                border: '3px solid #FFFFFF',
                borderRadius: 'var(--radius-pill)',
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--green-primary)',
                  fontWeight: 900,
                }}
              >
                <Check size={18} strokeWidth={3.5} />
              </div>
              <h2
                id="anjuran-heading"
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                  fontWeight: 900,
                  letterSpacing: '0.5px',
                  margin: 0,
                }}
              >
                YANG BOLEH & DIANJURKAN
              </h2>
            </div>
          </div>

          {/* Top Row: 4 Cards (Banyak Minum, Tetap Makan, Istirahat Cukup, Jaga Kebersihan Mulut) */}
          <div className="cards-grid-4">
            {RECOMMENDATIONS.slice(0, 4).map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <article
                  key={item.id}
                  className="poster-card"
                  style={{
                    border: '1.5px solid var(--green-border-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Card Illustration Header */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 0',
                        marginBottom: '8px',
                      }}
                    >
                      {renderIllustration(item.iconType)}
                    </div>

                    {/* Card Title */}
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--navy-title)',
                        marginBottom: '10px',
                        textAlign: 'left',
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Bullet Points */}
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 14px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                      }}
                    >
                      {item.points.map((pt, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.94rem',
                            color: 'var(--text-main)',
                            lineHeight: 1.45,
                          }}
                        >
                          <span
                            style={{
                              color: 'var(--green-primary)',
                              fontSize: '1.1rem',
                              lineHeight: 1,
                              marginTop: '2px',
                            }}
                          >
                            •
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Soft Highlight Box / Note */}
                    <div
                      style={{
                        backgroundColor: 'var(--green-bg-light)',
                        border: '1px solid #D5F5E3',
                        borderRadius: 'var(--radius-md)',
                        padding: '10px 12px',
                        fontSize: '0.86rem',
                        color: 'var(--green-dark)',
                        lineHeight: 1.4,
                        marginBottom: '14px',
                      }}
                    >
                      {item.note}
                    </div>
                  </div>

                  {/* Expandable Details Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleDetail(item.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`detail-${item.id}`}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        backgroundColor: isExpanded ? '#E8F8F0' : '#F4FAF6',
                        color: 'var(--green-dark)',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--green-border-card)',
                      }}
                    >
                      <span>{isExpanded ? 'Tutup detail' : 'Lihat detail'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {/* Expanded Content Drawer */}
                    {isExpanded && (
                      <div
                        id={`detail-${item.id}`}
                        style={{
                          marginTop: '10px',
                          padding: '12px',
                          backgroundColor: '#FCFDFD',
                          borderLeft: '3px solid var(--green-primary)',
                          borderRadius: '4px',
                          fontSize: '0.88rem',
                          color: 'var(--text-main)',
                          lineHeight: 1.5,
                        }}
                      >
                        <p style={{ margin: 0 }}>{item.details}</p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Row: 5th Card (Minum Obat), Inspirational Quote, & Bleeding Risk Notice */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.2fr 1.2fr',
              gap: '20px',
              marginTop: '20px',
              alignItems: 'stretch',
            }}
            className="bottom-anjuran-grid"
          >
            {/* Card 5: Minum Obat Sesuai Resep */}
            {(() => {
              const item = RECOMMENDATIONS[4];
              const isExpanded = expandedId === item.id;
              return (
                <article
                  className="poster-card"
                  style={{
                    border: '1.5px solid var(--green-border-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '10px 0',
                        marginBottom: '8px',
                      }}
                    >
                      {renderIllustration(item.iconType)}
                    </div>

                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        color: 'var(--navy-title)',
                        marginBottom: '10px',
                        textAlign: 'left',
                      }}
                    >
                      {item.title}
                    </h3>

                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: '0 0 14px 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px',
                      }}
                    >
                      {item.points.map((pt, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '8px',
                            fontSize: '0.94rem',
                            color: 'var(--text-main)',
                            lineHeight: 1.45,
                          }}
                        >
                          <span
                            style={{
                              color: 'var(--green-primary)',
                              fontSize: '1.1rem',
                              lineHeight: 1,
                              marginTop: '2px',
                            }}
                          >
                            •
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        backgroundColor: 'var(--green-bg-light)',
                        border: '1px solid #D5F5E3',
                        borderRadius: 'var(--radius-md)',
                        padding: '10px 12px',
                        fontSize: '0.86rem',
                        color: 'var(--green-dark)',
                        lineHeight: 1.4,
                        marginBottom: '14px',
                      }}
                    >
                      {item.note}
                    </div>
                  </div>

                  <div>
                    <button
                      type="button"
                      onClick={() => toggleDetail(item.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`detail-${item.id}`}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        backgroundColor: isExpanded ? '#E8F8F0' : '#F4FAF6',
                        color: 'var(--green-dark)',
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--green-border-card)',
                      }}
                    >
                      <span>{isExpanded ? 'Tutup detail' : 'Lihat detail'}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {isExpanded && (
                      <div
                        id={`detail-${item.id}`}
                        style={{
                          marginTop: '10px',
                          padding: '12px',
                          backgroundColor: '#FCFDFD',
                          borderLeft: '3px solid var(--green-primary)',
                          borderRadius: '4px',
                          fontSize: '0.88rem',
                          color: 'var(--text-main)',
                          lineHeight: 1.5,
                        }}
                      >
                        <p style={{ margin: 0 }}>{item.details}</p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })()}

            {/* Handwritten Center Quote Box */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '24px 20px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '2px dashed var(--green-border)',
                position: 'relative',
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '4px' }}>🌿</div>
              <p
                className="handwritten-text"
                style={{
                  fontSize: 'clamp(1.5rem, 2.3vw, 1.95rem)',
                  fontWeight: 700,
                  color: 'var(--navy-title)',
                  lineHeight: 1.35,
                  margin: 0,
                }}
              >
                {INSPIRATIONAL_QUOTE}
              </p>
              <span
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginTop: '10px',
                  fontWeight: 600,
                }}
              >
                Penyembuhan bertahap setiap hari
              </span>
            </div>

            {/* Bleeding Risk & Normal White Slough Callout Card */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                padding: '20px 22px',
                border: '2px solid var(--green-pill)',
                boxShadow: 'var(--shadow-soft)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                  <CalendarReminderIllustration size={46} />
                  <div>
                    <h4
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--navy-title)',
                        margin: 0,
                      }}
                    >
                      {BLEEDING_RISK_NOTE.title}
                    </h4>
                    <span style={{ fontSize: '0.82rem', color: 'var(--emergency-red)', fontWeight: 700 }}>
                      Masa Rawan: Hari ke 5–10
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-main)',
                    lineHeight: 1.45,
                    marginBottom: '14px',
                  }}
                >
                  {BLEEDING_RISK_NOTE.description}
                </p>
              </div>

              {/* Dark Teal Reassuring Banner */}
              <div
                style={{
                  backgroundColor: '#0E6251',
                  color: '#FFFFFF',
                  padding: '10px 14px',
                  borderRadius: '12px',
                  fontSize: '0.9rem',
                  fontWeight: 800,
                  textAlign: 'center',
                  lineHeight: 1.3,
                  boxShadow: '0 2px 8px rgba(14, 98, 81, 0.25)',
                }}
              >
                {BLEEDING_RISK_NOTE.banner}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .bottom-anjuran-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
