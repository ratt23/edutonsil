import React, { useState } from 'react';
import { AVOID_ITEMS, type AvoidItem } from '../data/tonsilData';
import {
  HeavyExerciseAvoidIllustration,
  HotFoodAvoidIllustration,
  HardFoodAvoidIllustration,
  SpicyAcidAvoidIllustration,
  SmokingAvoidIllustration,
  StrainingAvoidIllustration,
  DustHeatAvoidIllustration,
  CoughAvoidIllustration,
} from './illustrations/IllustrationSvgs';
import { X, HelpCircle, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';

export const AvoidSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleWhy = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const renderIllustration = (type: AvoidItem['iconType']) => {
    switch (type) {
      case 'cough':
        return <CoughAvoidIllustration size={68} />;
      case 'hotfood':
        return <HotFoodAvoidIllustration size={68} />;
      case 'exercise':
        return <HeavyExerciseAvoidIllustration size={68} />;
      case 'hardfood':
        return <HardFoodAvoidIllustration size={68} />;
      case 'spicyacid':
        return <SpicyAcidAvoidIllustration size={68} />;
      case 'smoking':
        return <SmokingAvoidIllustration size={68} />;
      case 'straining':
        return <StrainingAvoidIllustration size={68} />;
      case 'dustheat':
        return <DustHeatAvoidIllustration size={68} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="hindari"
      aria-labelledby="hindari-heading"
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <div className="container">
        {/* Big Pink Framing Box */}
        <div className="poster-section-frame frame-pink">
          {/* Header Ribbon with Cross Mark */}
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
              className="poster-ribbon poster-ribbon-pink"
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
                  color: 'var(--pink-dark)',
                  fontWeight: 900,
                }}
              >
                <X size={18} strokeWidth={3.5} />
              </div>
              <h2
                id="hindari-heading"
                style={{
                  color: '#FFFFFF',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.7rem)',
                  fontWeight: 900,
                  letterSpacing: '0.5px',
                  margin: 0,
                }}
              >
                YANG HARUS DIHINDARI
              </h2>
            </div>
          </div>

          {/* 8 Avoid Cards in a 4-Column Grid (2 Rows of 4 Cards on Desktop) */}
          <div className="cards-grid-4">
            {AVOID_ITEMS.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <article
                  key={item.id}
                  className="poster-card"
                  style={{
                    border: '1.5px solid var(--pink-border-card)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    {/* Illustration */}
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

                    {/* Title */}
                    <h3
                      style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        color: 'var(--navy-title)',
                        marginBottom: '10px',
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Summary */}
                    <p
                      style={{
                        fontSize: '0.92rem',
                        color: 'var(--text-main)',
                        lineHeight: 1.45,
                        marginBottom: item.tips && item.tips.length > 0 ? '10px' : '14px',
                      }}
                    >
                      {item.summary}
                    </p>

                    {/* Tips Box if provided (e.g. for batuk/bersin or makanan panas/hangat) */}
                    {item.tips && item.tips.length > 0 && (
                      <div
                        style={{
                          backgroundColor: '#FFFBEB',
                          border: '1px solid #FDE68A',
                          borderRadius: 'var(--radius-md)',
                          padding: '10px 12px',
                          marginBottom: '14px',
                          fontSize: '0.84rem',
                          color: '#92400E',
                          lineHeight: 1.4,
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            marginBottom: '4px',
                            color: '#B45309',
                          }}
                        >
                          <Lightbulb size={14} />
                          <span>Tips Penting:</span>
                        </div>
                        <ul
                          style={{
                            paddingLeft: '16px',
                            margin: 0,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '3px',
                          }}
                        >
                          {item.tips.map((tip, tIdx) => (
                            <li key={tIdx}>{tip}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Toggle "Mengapa perlu dihindari?" */}
                  <div>
                    <button
                      type="button"
                      onClick={() => toggleWhy(item.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`avoid-why-${item.id}`}
                      style={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '6px',
                        backgroundColor: isExpanded ? '#FCE4EC' : '#FFF0F3',
                        color: 'var(--pink-dark)',
                        fontSize: '0.86rem',
                        fontWeight: 700,
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--pink-border-card)',
                      }}
                    >
                      <HelpCircle size={15} />
                      <span>{isExpanded ? 'Tutup penjelasan' : 'Mengapa perlu dihindari?'}</span>
                      {isExpanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                    </button>

                    {isExpanded && (
                      <div
                        id={`avoid-why-${item.id}`}
                        style={{
                          marginTop: '10px',
                          padding: '12px',
                          backgroundColor: '#FFF8F9',
                          borderLeft: '3px solid var(--pink-dark)',
                          borderRadius: '4px',
                          fontSize: '0.86rem',
                          color: '#4A1521',
                          lineHeight: 1.5,
                        }}
                      >
                        <p style={{ margin: 0 }}>{item.whyAvoid}</p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Review Note */}
          <div
            style={{
              marginTop: '22px',
              padding: '10px 16px',
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              borderRadius: 'var(--radius-md)',
              border: '1px dashed var(--pink-border)',
              fontSize: '0.84rem',
              color: 'var(--text-muted)',
              textAlign: 'center',
            }}
          >
            Catatan: Pantangan di atas disusun untuk mencegah komplikasi robekan luka dan perdarahan sekunder pasca operasi tonsil.
          </div>
        </div>
      </div>
    </section>
  );
};
