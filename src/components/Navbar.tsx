import React, { useState, useEffect } from 'react';
import { AlertTriangle, Heart, CheckCircle2, XCircle, CalendarCheck, HelpCircle, Phone } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update browser focus for accessibility
      element.focus({ preventScroll: true });
    }
  };

  return (
    <>
      <header
        role="banner"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: isScrolled ? 'rgba(250, 248, 242, 0.96)' : 'var(--bg-ivory)',
          backdropFilter: isScrolled ? 'blur(8px)' : 'none',
          borderBottom: isScrolled ? '1px solid #E2DED5' : '1px solid transparent',
          transition: 'all 0.25s ease',
          padding: '12px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          {/* Logo Brand: RSU Siloam + Panduan Tonsilektomi */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, 'hero')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              textDecoration: 'none',
              color: 'var(--navy-title)',
              minHeight: '44px',
            }}
          >
            {/* RSU Siloam Official Logo */}
            <img
              src="/logo-rsu-siloam.png"
              alt="Logo RSU Siloam"
              style={{
                height: '34px',
                width: 'auto',
                maxWidth: '140px',
                objectFit: 'contain',
                display: 'block',
              }}
            />

            {/* Elegant vertical divider */}
            <div
              style={{
                width: '1.5px',
                height: '26px',
                backgroundColor: '#D1D5DB',
                borderRadius: '1px',
              }}
            />

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#E8F8F0',
                  border: '1.5px solid var(--green-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--green-primary)',
                }}
              >
                <Heart size={18} fill="#27AE60" color="#27AE60" />
              </div>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-title)',
                    fontWeight: 900,
                    fontSize: '1.15rem',
                    letterSpacing: '-0.3px',
                    display: 'block',
                    lineHeight: 1.1,
                  }}
                >
                  Panduan Tonsilektomi
                </span>
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                    display: 'block',
                  }}
                >
                  Edukasi Pasca Operasi
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            role="navigation"
            aria-label="Navigasi Halaman"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            className="nav-desktop-menu"
          >
            <a
              href="#anjuran"
              onClick={(e) => scrollToSection(e, 'anjuran')}
              className="nav-link-item"
              style={navLinkStyle}
            >
              <CheckCircle2 size={16} color="#27AE60" />
              <span>Anjuran</span>
            </a>
            <a
              href="#hindari"
              onClick={(e) => scrollToSection(e, 'hindari')}
              className="nav-link-item"
              style={navLinkStyle}
            >
              <XCircle size={16} color="#F06292" />
              <span>Hindari</span>
            </a>
            <a
              href="#checklist"
              onClick={(e) => scrollToSection(e, 'checklist')}
              className="nav-link-item"
              style={navLinkStyle}
            >
              <CalendarCheck size={16} color="#0284C7" />
              <span>Checklist</span>
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, 'faq')}
              className="nav-link-item"
              style={navLinkStyle}
            >
              <HelpCircle size={16} color="#7E92A2" />
              <span>FAQ</span>
            </a>

            {/* Prominent Emergency Section Link */}
            <a
              href="#tanda-bahaya"
              onClick={(e) => scrollToSection(e, 'tanda-bahaya')}
              aria-label="Buka informasi tanda bahaya segera ke IGD"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--emergency-red)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.92rem',
                fontFamily: 'var(--font-title)',
                padding: '9px 18px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                minHeight: '42px',
                boxShadow: '0 4px 12px rgba(217, 48, 37, 0.25)',
                marginLeft: '8px',
                transition: 'transform 0.15s ease, background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B31B1B')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--emergency-red)')}
            >
              <AlertTriangle size={17} />
              <span>Tanda Bahaya (IGD)</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Floating 24/7 Emergency Button (Desktop & Mobile) */}
      <aside
        aria-label="Panggilan Darurat Cepat 24/7"
        className="floating-emergency-widget"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9999,
        }}
      >
        <a
          href="tel:1500911"
          aria-label="Hubungi 24/7 Emergency 1500911"
          className="floating-emergency-pill-btn"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            backgroundColor: '#E52330',
            color: '#FFFFFF',
            fontWeight: 900,
            fontSize: '1rem',
            fontFamily: 'var(--font-title)',
            padding: '13px 24px',
            borderRadius: '9999px',
            textDecoration: 'none',
            border: '2px solid #FFFFFF',
            boxShadow: '0 8px 24px rgba(229, 35, 48, 0.45)',
            letterSpacing: '0.4px',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#B71C1C';
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
            e.currentTarget.style.boxShadow = '0 12px 28px rgba(229, 35, 48, 0.55)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#E52330';
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(229, 35, 48, 0.45)';
          }}
        >
          <span>24/7 EMERGENCY: 1500911</span>
          <Phone size={19} strokeWidth={2.8} />
        </a>
      </aside>

      <style>{`
        @media (max-width: 840px) {
          .nav-desktop-menu {
            display: none !important;
          }
        }
        @media (max-width: 640px) {
          .floating-emergency-widget {
            bottom: 16px !important;
            left: 16px !important;
            right: 16px !important;
          }
          .floating-emergency-pill-btn {
            width: 100% !important;
            padding: 14px 20px !important;
            font-size: 0.96rem !important;
          }
        }
      `}</style>
    </>
  );
};

const navLinkStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  color: 'var(--navy-title)',
  fontWeight: 700,
  fontSize: '0.95rem',
  textDecoration: 'none',
  padding: '8px 14px',
  borderRadius: 'var(--radius-pill)',
  minHeight: '44px',
  transition: 'background-color 0.2s',
};
