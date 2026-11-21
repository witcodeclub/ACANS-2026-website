'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const { user, isAdmin, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className="site-header" style={{ width: '100%', zIndex: 1000, position: 'relative' }}>
      {/* Top Institutional Utility Strip */}
      <div style={{
        backgroundColor: '#071529',
        color: '#cbd5e1',
        fontSize: '0.785rem',
        padding: '0.35rem 0',
        borderBottom: '1px solid #1e293b',
      }}>
        <div className="container utility-strip-content">
          <div className="utility-strip-institutions">
            <span>Dr. A.P.J. Abdul Kalam Women&apos;s Institute of Technology (WIT), LNMU Darbhanga</span>
          </div>
          <div className="utility-strip-links">
            <Link href="/information#venue" style={{ color: '#cbd5e1' }}>Venue &amp; Travel</Link>
            <span className="utility-divider" style={{ color: '#64748b' }}>|</span>
            <Link href="/information#contact" style={{ color: '#cbd5e1' }}>Helpdesk</Link>
            <span className="utility-divider" style={{ color: '#64748b' }}>|</span>
            {user ? (
              <span style={{ color: '#67e8f9' }}>Signed in as: <strong>{user.fullName}</strong></span>
            ) : (
              <Link href="/login" style={{ color: '#fcd34d', fontWeight: 600 }}>Participant Login</Link>
            )}
          </div>
        </div>
      </div>

      {/* Institutional Header / Masthead */}
<div className="masthead">
  <div className="container masthead-container">

    {/* WIT and LNMU Logos */}
    <div className="masthead-left">
      <div className="masthead-logo masthead-logo-wit">
        <Image
          src="/logos/wit-logo-transparent.png"
          alt="Women's Institute of Technology Logo"
          width={100}
          height={100}
          sizes="(max-width: 720px) 48px, (max-width: 960px) 56px, 78px"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>

      <div className="masthead-logo masthead-logo-lnmu">
        <Image
          src="/logos/lnmu-logo-transparent.png"
          alt="Lalit Narayan Mithila University Logo"
          width={100}
          height={100}
          sizes="(max-width: 720px) 48px, (max-width: 960px) 56px, 78px"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>

    {/* Conference Details */}
    <div className="masthead-center">
      <h1 className="masthead-title">
        ACANS 2026
      </h1>

      <div className="masthead-subtitle">
        <span> National Seminar on “Advanced Computing and Nuclear Science:</span>
        <span className="masthead-subtitle-detail">Emerging Technologies, Interdisciplinary Applications and Research Opportunities”</span>
      </div>

      <div className="masthead-organizer">
        Organised by{" "}
        <strong>
          Dr. A.P.J. Abdul Kalam Women&apos;s Institute of Technology (WIT)
        </strong>
        , <strong>Lalit Narayan Mithila University (LNMU)</strong>, Darbhanga, Bihar, in collaboration with the <strong>Indian Nuclear Society (INS)</strong>
      </div>
    </div>

    {/* INS Logo */}
    <div className="masthead-right">
      <div className="masthead-logo masthead-logo-ins">
        <Image
          src="/logos/ins_logo-removebg-preview.png"
          alt="Indian Nuclear Society Logo"
          width={120}
          height={120}
          sizes="(max-width: 720px) 60px, (max-width: 960px) 68px, 96px"
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    </div>

  </div>
</div>

      {/* Solid Academic Navigation Bar */}
      <nav style={{
        backgroundColor: '#0f294a',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Desktop Nav Items */}
          <div style={{ display: 'flex', alignItems: 'center' }} className="desktop-nav">
            <Link
              href="/"
              style={{
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: isActive('/') ? '#fcd34d' : '#ffffff',
                backgroundColor: isActive('/') ? 'rgba(255,255,255,0.1)' : 'transparent',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <Link
                href="/about"
                style={{
                  padding: '0.75rem 1rem',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: pathname.startsWith('/about') ? '#fcd34d' : '#ffffff',
                  backgroundColor: pathname.startsWith('/about') ? 'rgba(255,255,255,0.1)' : 'transparent',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}
              >
                About Us ▾
              </Link>

              {aboutDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  width: '260px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #cbd5e1',
                  borderRadius: '0 0 4px 4px',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.15)',
                  zIndex: 200,
                }}>
                  <Link
                    href="/about#joint-event"
                    style={{ display: 'block', padding: '0.65rem 1rem', fontSize: '0.85rem', color: '#1e293b', borderBottom: '1px solid #f1f5f9' }}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    The Joint Academic Event
                  </Link>
                  <Link
                    href="/about#insac"
                    style={{ display: 'block', padding: '0.65rem 1rem', fontSize: '0.85rem', color: '#1e293b', borderBottom: '1px solid #f1f5f9' }}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Indian Nuclear Society (INS)
                  </Link>
                  <Link
                    href="/about#wit"
                    style={{ display: 'block', padding: '0.65rem 1rem', fontSize: '0.85rem', color: '#1e293b', borderBottom: '1px solid #f1f5f9' }}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    Dr. A.P.J. Abdul Kalam WIT
                  </Link>
                  <Link
                    href="/about#lnmu"
                    style={{ display: 'block', padding: '0.65rem 1rem', fontSize: '0.85rem', color: '#1e293b' }}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    LNMU Darbhanga
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/committees"
              style={{
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: isActive('/committees') ? '#fcd34d' : '#ffffff',
                backgroundColor: isActive('/committees') ? 'rgba(255,255,255,0.1)' : 'transparent',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              Committees
            </Link>

            <Link
              href="/themes"
              style={{
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: isActive('/themes') ? '#fcd34d' : '#ffffff',
                backgroundColor: isActive('/themes') ? 'rgba(255,255,255,0.1)' : 'transparent',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              Themes &amp; Topics
            </Link>

            <Link
              href="/information"
              style={{
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: isActive('/information') ? '#fcd34d' : '#ffffff',
                backgroundColor: isActive('/information') ? 'rgba(255,255,255,0.1)' : 'transparent',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              Registration
            </Link>

            <Link
              href="/abstract-submission"
              style={{
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: isActive('/abstract-submission') ? '#fcd34d' : '#ffffff',
                backgroundColor: isActive('/abstract-submission') ? 'rgba(255,255,255,0.1)' : 'transparent',
                borderRight: '1px solid rgba(255,255,255,0.08)',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              Abstract Submission
            </Link>
          </div>

          {/* Right Action / Auth */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {user ? (
              <>
                <Link
                  href="/dashboard"
                  style={{
                    backgroundColor: '#14325a',
                    color: '#ffffff',
                    padding: '0.45rem 0.85rem',
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    borderRadius: '3px',
                    border: '1px solid #334155',
                  }}
                  id="nav-dashboard-btn"
                >
                  My Dashboard
                </Link>
                {isAdmin && (
                  <Link
                    href="/admin"
                    style={{
                      backgroundColor: '#b45309',
                      color: '#ffffff',
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                      borderRadius: '3px',
                    }}
                    id="nav-admin-btn"
                  >
                    Admin Control
                  </Link>
                )}
                <button
                  onClick={() => logout()}
                  style={{
                    backgroundColor: 'transparent',
                    color: '#cbd5e1',
                    border: 'none',
                    padding: '0.45rem 0.6rem',
                    fontSize: '0.825rem',
                    cursor: 'pointer',
                  }}
                  id="nav-logout-btn"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  style={{
                    color: '#ffffff',
                    padding: '0.45rem 0.75rem',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                  id="nav-login-btn"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  style={{
                    backgroundColor: '#b45309',
                    color: '#ffffff',
                    padding: '0.45rem 0.95rem',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    borderRadius: '3px',
                    letterSpacing: '0.02em',
                  }}
                  id="nav-register-btn"
                >
                  Register Now
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle"
            aria-label="Toggle Navigation"
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              padding: '0.5rem',
            }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* 4. Official Academic Announcement Ticker Bar */}
      <div className="announcement-bar" aria-label="Seminar notices">
        <div className="container announcement-content" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="announcement-badge">Notice</span>
          <div className="announcement-viewport" tabIndex={0} aria-label="Notice ticker. Focus to pause scrolling.">
            <div className="announcement-track">
              {[0, 1].map((copy) => (
                <div className="announcement-group" key={copy} aria-hidden={copy === 1}>
                  <span>★ Official Seminar Paper Template (PDF) is available for download.</span>
                  <span className="announcement-separator">|</span>
                  <span><strong>IMPORTANT NOTICE: Last date for Abstract Submission – 3 December 2026.</strong></span>
                  <span className="announcement-separator">|</span>
                  <span>★ Seminar Dates: 7–9 December 2026.</span>
                  <span className="announcement-separator">|</span>
                  <span>★ Registration Fee: Student ₹500, Research Scholar ₹750, Faculty ₹1,000 (Payment via UPI).</span>
                  <span className="announcement-separator">|</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderBottom: '2px solid #0f294a',
          padding: '1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}>
          <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.4rem 0', fontWeight: 600, color: '#0f294a' }}>Home</Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.4rem 0', fontWeight: 600, color: '#0f294a' }}>About the Seminar</Link>
          <Link href="/committees" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.4rem 0', fontWeight: 600, color: '#0f294a' }}>Committees</Link>
          <Link href="/themes" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.4rem 0', fontWeight: 600, color: '#0f294a' }}>Themes &amp; Topics</Link>
          <Link href="/information" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.4rem 0', fontWeight: 600, color: '#0f294a' }}>Registration</Link>
          <Link href="/abstract-submission" onClick={() => setMobileMenuOpen(false)} style={{ padding: '0.4rem 0', fontWeight: 600, color: '#0f294a' }}>Abstract Submission</Link>
          <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '0.5rem 0' }} />
          {user ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/dashboard" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary btn-sm">My Dashboard</Link>
              {isAdmin && (
                <Link href="/admin" onClick={() => setMobileMenuOpen(false)} className="btn btn-gold btn-sm">Admin Control Panel</Link>
              )}
              <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="btn btn-secondary btn-sm">Logout</button>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="btn btn-outline-navy btn-sm" style={{ flex: 1 }}>Login</Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="btn btn-gold btn-sm" style={{ flex: 1 }}>Register</Link>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        @media (min-width: 961px) {
          .mobile-toggle {
            display: none !important;
          }
        }
          /* Institutional Conference Masthead */
.masthead {
  background: #ffffff;
  border-bottom: 2px solid #0f294a;
  padding: 0.55rem 0;
}

.masthead-container {
  display: grid;
  grid-template-columns: clamp(168px, 14vw, 190px) minmax(0, 1fr) clamp(82px, 7vw, 100px);
  align-items: center;
  gap: clamp(0.55rem, 1vw, 1rem);
}

/* Left: INS */
.masthead-left {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;
}

/* Right: LNMU and WIT */
.masthead-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
}

/* Base Logo Container */
.masthead-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  background: transparent;
}

/* INS Logo: Transparent Institutional Mark */
.masthead-logo-ins {
  width: clamp(82px, 5vw, 96px);
  height: clamp(82px, 5vw, 96px);
  flex: 0 0 clamp(82px, 5vw, 96px);
  background-color: transparent;
  border-radius: 0;
  border: none;
  box-shadow: none;
  overflow: visible;
  padding: 0;
  transition: none;
}

.masthead-logo-ins:hover {
  transform: none;
  box-shadow: none;
}

.masthead-logo-ins img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  background: transparent;
  border: none;
  border-radius: 0;
}

/* LNMU and WIT logo images have transparent exterior backgrounds. */
.masthead-logo-lnmu {
  width: clamp(64px, 3.8vw, 78px);
  height: clamp(64px, 3.8vw, 78px);
  flex: 0 0 clamp(64px, 3.8vw, 78px);
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  overflow: visible;
  padding: 0;
  transition: none;
}

.masthead-logo-lnmu:hover,
.masthead-logo-wit:hover {
  transform: none;
  box-shadow: none;
}

.masthead-logo-lnmu img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

/* WIT Logo: Calibrated to match LNMU Circular Seal */
.masthead-logo-wit {
  width: clamp(64px, 3.8vw, 78px);
  height: clamp(64px, 3.8vw, 78px);
  flex: 0 0 clamp(64px, 3.8vw, 78px);
  background: transparent;
  border: 0;
  border-radius: 0;
  box-shadow: none;
  overflow: visible;
  padding: 0;
  transition: none;
}

.masthead-logo-wit img {
  width: 100%;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  display: block;
}

/* Conference Details */
.masthead-center {
  min-width: 0;
  text-align: center;
  padding: 0 0.25rem;
}

.masthead-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  color: #b45309;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.15rem;
}

.masthead-title {
  font-size: clamp(1.05rem, 1.85vw, 1.65rem);
  font-weight: 800;
  color: #0f294a;
  line-height: 1.22;
  margin: 0 0 0.2rem;
  letter-spacing: -0.01em;
}

.masthead-subtitle {
  font-size: clamp(0.78rem, 1.25vw, 0.94rem);
  font-weight: 600;
  color: #334155;
  line-height: 1.32;
}

.masthead-organizer {
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.35;
  margin-top: 0.2rem;
}

/* Tablet (<= 960px) */
@media (max-width: 960px) {
  .masthead-container {
    grid-template-columns: 120px minmax(0, 1fr) 120px;
    gap: 0.85rem;
  }

  .masthead-logo-ins {
    width: 68px;
    height: 68px;
    flex: 0 0 68px;
    border-radius: 0;
  }

  .masthead-logo-lnmu {
    width: 56px;
    height: 56px;
    flex: 0 0 56px;
  }

  .masthead-logo-wit {
    width: 56px;
    height: 56px;
    flex: 0 0 56px;
  }

  .masthead-logo-wit img {
    width: 100%;
    height: 100%;
  }

  .masthead-right {
    gap: 0.5rem;
  }
}

/* Mobile (<= 720px) */
@media (max-width: 720px) {
  .masthead {
    padding: 0.65rem 0;
  }

  .masthead-container {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "left right"
      "center center";
    row-gap: 0.65rem;
    column-gap: 0.75rem;
  }

  .masthead-left {
    grid-area: left;
    justify-content: flex-start;
    gap: 0.5rem;
  }

  .masthead-right {
    grid-area: right;
    justify-content: flex-end;
    gap: 0.5rem;
  }

  .masthead-center {
    grid-area: center;
    padding: 0;
  }

  .masthead-logo-ins {
    width: 60px;
    height: 60px;
    flex: 0 0 60px;
    border-radius: 0;
  }

  .masthead-logo-lnmu {
    width: 48px;
    height: 48px;
    flex: 0 0 48px;
  }

  .masthead-logo-wit {
    width: 48px;
    height: 48px;
    flex: 0 0 48px;
  }

  .masthead-logo-wit img {
    width: 100%;
    height: 100%;
  }

  .masthead-title {
    font-size: 1.05rem;
    line-height: 1.25;
  }

  .masthead-subtitle {
    font-size: 0.82rem;
  }

  .masthead-organizer {
    font-size: 0.72rem;
  }
}
`}</style>
    </header>
  );
}
