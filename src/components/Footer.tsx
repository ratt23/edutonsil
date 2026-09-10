import React from 'react';
import { FOOTER_DATA } from '../data/tonsilData';
import { Heart, FileText, Stethoscope } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer
      role="contentinfo"
      style={{
        marginTop: 'auto',
        paddingTop: '32px',
        paddingBottom: '40px',
        borderTop: '2px dashed #E2DED5',
        backgroundColor: 'rgba(250, 248, 242, 0.8)',
      }}
    >
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Decorative Handwritten Closing Quote */}
        <div style={{ marginBottom: '18px' }}>
          <p
            className="handwritten-text"
            style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 2.6rem)',
              fontWeight: 700,
              color: 'var(--navy-title)',
              margin: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span>{FOOTER_DATA.warmWish}</span>
            <Heart size={28} fill="#FA6B84" color="#FA6B84" />
          </p>
        </div>

        {/* Medical & Legal Disclaimers */}
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            backgroundColor: '#FFFFFF',
            padding: '16px 20px',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid #EAE5D8',
            boxShadow: 'var(--shadow-soft)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.9rem',
              fontWeight: 800,
              color: '#B45309',
            }}
          >
            <FileText size={16} />
            <span>{FOOTER_DATA.draftNote}</span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              fontSize: '0.88rem',
              color: 'var(--text-muted)',
            }}
          >
            <Stethoscope size={16} />
            <span>{FOOTER_DATA.doctorNote}</span>
          </div>

          <p
            style={{
              fontSize: '0.78rem',
              color: '#94A3B8',
              margin: '6px 0 0 0',
              lineHeight: 1.4,
            }}
          >
            Informasi pada halaman ini disusun semata-mata sebagai materi pendukung edukasi pasien dan keluarga di rumah pasca tindakan tonsilektomi.
          </p>
        </div>
      </div>
    </footer>
  );
};
