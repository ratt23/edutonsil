import React, { useState } from 'react';
import { FAQS } from '../data/tonsilData';
import { ChevronDown, HelpCircle, AlertTriangle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['lapisan-putih']); // First one open by default

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #EAE5D8',
            borderRadius: 'var(--radius-xl)',
            padding: '32px 28px',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px',
              borderBottom: '2px dashed #EAE5D8',
              paddingBottom: '16px',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                backgroundColor: '#EBF5FB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2980B9',
              }}
            >
              <HelpCircle size={24} />
            </div>
            <div>
              <h2
                id="faq-heading"
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                  fontWeight: 900,
                  color: 'var(--navy-title)',
                  margin: 0,
                }}
              >
                Pertanyaan yang Sering Diajukan (FAQ)
              </h2>
              <p
                style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.92rem',
                  margin: '4px 0 0 0',
                }}
              >
                Informasi penting seputar masa pemulihan pasca operasi tonsil
              </p>
            </div>
          </div>

          {/* Accordion List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {FAQS.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              const isBleedingQuestion = faq.id === 'muncul-darah';

              return (
                <div
                  key={faq.id}
                  style={{
                    border: isBleedingQuestion
                      ? '2px solid #FCA5A5'
                      : isOpen
                      ? '1.5px solid #CBD5E1'
                      : '1.5px solid #F1F5F9',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    backgroundColor: isBleedingQuestion && isOpen ? '#FFF5F5' : '#FFFFFF',
                    boxShadow: isOpen ? '0 4px 12px rgba(0,0,0,0.04)' : 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    style={{
                      width: '100%',
                      padding: '16px 20px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      textAlign: 'left',
                      backgroundColor: isBleedingQuestion
                        ? '#FEE2E2'
                        : isOpen
                        ? '#F8FAFC'
                        : '#FFFFFF',
                      transition: 'background-color 0.2s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {isBleedingQuestion && <AlertTriangle size={18} color="#DC2626" />}
                      <span
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 800,
                          color: isBleedingQuestion ? '#991B1B' : 'var(--navy-title)',
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.question}
                      </span>
                    </div>
                    <div
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        color: isBleedingQuestion ? '#DC2626' : 'var(--text-muted)',
                        flexShrink: 0,
                      }}
                    >
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-header-${faq.id}`}
                      style={{
                        padding: '18px 20px',
                        borderTop: isBleedingQuestion ? '1px solid #FECACA' : '1px solid #E2E8F0',
                        fontSize: '0.96rem',
                        color: 'var(--text-main)',
                        lineHeight: 1.6,
                      }}
                    >
                      <p style={{ margin: 0, marginBottom: '12px' }}>{faq.answer}</p>

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          padding: '4px 10px',
                          borderRadius: 'var(--radius-pill)',
                          backgroundColor: isBleedingQuestion ? '#FEE2E2' : '#F1F5F9',
                          color: isBleedingQuestion ? '#991B1B' : '#64748B',
                        }}
                      >
                        <span>📋 {faq.tag}</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
