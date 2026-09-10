import React, { useState, useEffect } from 'react';
import { AlertTriangle, Heart, CheckCircle2, XCircle, CalendarCheck, HelpCircle } from 'lucide-react';

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

            {/* Prominent Emergency Button */}
            <a
              href="#tanda-bahaya"
              onClick={(e) => scrollToSection(e, 'tanda-bahaya')}
              aria-label="Buka informasi darurat tanda bahaya segera ke IGD"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'var(--emergency-red)',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.95rem',
                fontFamily: 'var(--font-title)',
                padding: '10px 18px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                minHeight: '44px',
                boxShadow: '0 4px 12px rgba(217, 48, 37, 0.3)',
                marginLeft: '8px',
                transition: 'transform 0.15s ease, background-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#B31B1B')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--emergency-red)')}
            >
              <AlertTriangle size={18} />
              <span>Tanda Bahaya (IGD)</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Floating Bottom Button for Mobile Viewports */}
      <div
        className="mobile-emergency-floating"
        style={{
          position: 'fixed',
          bottom: '16px',
          left: '16px',
          right: '16px',
          zIndex: 999,
          display: 'none', // Shown via CSS media query
        }}
      >
        <a
          href="#tanda-bahaya"
          onClick={(e) => scrollToSection(e, 'tanda-bahaya')}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            backgroundColor: 'var(--emergency-red)',
            color: '#FFFFFF',
            fontWeight: 800,
            fontSize: '1.05rem',
            fontFamily: 'var(--font-title)',
            padding: '14px 20px',
            borderRadius: 'var(--radius-pill)',
            textDecoration: 'none',
            minHeight: '48px',
            boxShadow: '0 8px 24px rgba(217, 48, 37, 0.45)',
            border: '2px solid #FFFFFF',
          }}
        >
          <AlertTriangle size={20} />
          <span>Tanda Bahaya: Segera ke IGD</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .nav-desktop-menu {
            display: none !important;
          }
          .mobile-emergency-floating {
            display: block !important;
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
