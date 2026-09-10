import React, { useState, useEffect } from 'react';
import { DAILY_CHECKLIST_ITEMS, CHECKLIST_DISCLAIMER } from '../data/tonsilData';
import { CheckSquare, Square, RotateCcw, Calendar, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const STORAGE_KEY = 'tonsil_daily_checklist_v1';

export const DailyChecklist: React.FC = () => {
  // Today's date string YYYY-MM-DD
  const getTodayDateString = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Friendly Indonesian date formatting
  const getTodayFormatted = () => {
    const now = new Date();
    return new Intl.DateTimeFormat('id-ID', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(now);
  };

  const [todayDate] = useState(getTodayDateString());
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed.date === todayDate && Array.isArray(parsed.checked)) {
          setCheckedIds(parsed.checked);
        } else {
          // Different date -> reset for the new day
          localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayDate, checked: [] }));
          setCheckedIds([]);
        }
      } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayDate, checked: [] }));
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }, [todayDate]);

  const toggleItem = (id: string) => {
    setCheckedIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayDate, checked: next }));
      } catch (e) {
        console.warn('Could not save to localStorage', e);
      }

      // If completing all 5, soft celebration confetti
      if (next.length === DAILY_CHECKLIST_ITEMS.length && prev.length < DAILY_CHECKLIST_ITEMS.length) {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#2BB673', '#FA6B84', '#F6D365', '#60A5FA'],
        });
      }

      return next;
    });
  };

  const handleReset = () => {
    if (window.confirm('Apakah Anda ingin mereset checklist hari ini?')) {
      setCheckedIds([]);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ date: todayDate, checked: [] }));
      } catch (e) {
        console.warn('Could not reset localStorage', e);
      }
    }
  };

  const allCompleted = checkedIds.length === DAILY_CHECKLIST_ITEMS.length;

  return (
    <section
      id="checklist"
      aria-labelledby="checklist-heading"
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <div className="container">
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '2px solid #D5E5F2',
            borderRadius: 'var(--radius-xl)',
            padding: '32px 28px',
            boxShadow: 'var(--shadow-card)',
            position: 'relative',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '16px',
              borderBottom: '2px dashed #E2E8F0',
              paddingBottom: '18px',
              marginBottom: '20px',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#E0F2FE',
                  color: '#0369A1',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  marginBottom: '8px',
                }}
              >
                <Calendar size={15} />
                <span>Hari Ini: {getTodayFormatted()}</span>
              </div>
              <h2
                id="checklist-heading"
                style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                  fontWeight: 900,
                  color: 'var(--navy-title)',
                  margin: 0,
                }}
              >
                Checklist Perawatan Hari Ini
              </h2>
            </div>

            <button
              type="button"
              onClick={handleReset}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#F1F5F9',
                color: 'var(--text-muted)',
                padding: '8px 16px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.88rem',
                fontWeight: 700,
                border: '1px solid #CBD5E1',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#E2E8F0')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#F1F5F9')}
            >
              <RotateCcw size={15} />
              <span>Reset Hari Ini</span>
            </button>
          </div>

          {/* Checklist Items List */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginBottom: '20px',
            }}
          >
            {DAILY_CHECKLIST_ITEMS.map((item) => {
              const isChecked = checkedIds.includes(item.id);
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  role="checkbox"
                  aria-checked={isChecked}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    backgroundColor: isChecked ? '#F2FBF6' : '#FAF8F5',
                    border: isChecked ? '1.5px solid #86EFAC' : '1.5px solid #E5E7EB',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 18px',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isChecked ? '#E8F8F0' : '#F4EFEA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isChecked ? '#F2FBF6' : '#FAF8F5';
                  }}
                >
                  <div
                    style={{
                      color: isChecked ? 'var(--green-primary)' : '#94A3B8',
                      display: 'flex',
                      alignItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {isChecked ? (
                      <CheckSquare size={24} strokeWidth={2.5} />
                    ) : (
                      <Square size={24} strokeWidth={2} />
                    )}
                  </div>
                  <span
                    style={{
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: isChecked ? 'var(--navy-title)' : 'var(--text-main)',
                      textDecoration: isChecked ? 'none' : 'none',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.text}
                  </span>
                </button>
              );
            })}
          </div>

          {/* All Completed Encouragement Note (Without Health Score or False Immunity Claims) */}
          {allCompleted && (
            <div
              style={{
                backgroundColor: '#E8F8F0',
                border: '1.5px solid #6EE7B7',
                borderRadius: 'var(--radius-md)',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px',
              }}
            >
              <CheckCircle2 size={20} color="#10B981" />
              <span style={{ fontSize: '0.92rem', color: '#065F46', fontWeight: 700 }}>
                Semua kegiatan perawatan hari ini telah dicatat. Tetap patuhi arahan dokter dan selalu waspada jika timbul tanda perdarahan.
              </span>
            </div>
          )}

          {/* Mandatory Medical Disclaimer Banner */}
          <div
            style={{
              backgroundColor: '#FEF9C3',
              border: '1px solid #FDE047',
              borderRadius: 'var(--radius-md)',
              padding: '10px 16px',
              textAlign: 'center',
              fontSize: '0.86rem',
              color: '#854D0E',
              fontWeight: 700,
            }}
          >
            ℹ️ {CHECKLIST_DISCLAIMER}
          </div>
        </div>
      </div>
    </section>
  );
};
