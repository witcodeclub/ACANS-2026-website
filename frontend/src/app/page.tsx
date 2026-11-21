'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { api } from '../lib/api';
import { EventSettings } from '../types';
import { normalizeEventText } from '../lib/eventText';
import { defaultThemes } from '../lib/defaultThemes';
import TemplateDownloadCard from '../components/TemplateDownloadCard';

function ProfilePortrait({
  src,
  name,
  shape,
  objectPosition = 'center 30%',
}: {
  src: string;
  name: string;
  shape: 'circle' | 'square';
  objectPosition?: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = name.split(' ').filter(Boolean).slice(-2).map((part) => part[0]).join('');

  return (
    <div className={`profile-portrait profile-portrait-${shape}`}>
      {!imageFailed ? (
        <Image
          fill
          sizes="(max-width: 768px) 132px, 164px"
          src={src}
          alt={`Photograph of ${name}`}
          style={{ objectFit: 'cover', objectPosition }}
          onError={() => setImageFailed(true)}
        />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </div>
  );
}

export default function HomePage() {
  const [settings, setSettings] = useState<EventSettings | null>(null);
  const [settingsLoadError, setSettingsLoadError] = useState(false);
  const [activeThemeTab, setActiveThemeTab] = useState<'all' | 'workshop' | 'conference'>('all');

  useEffect(() => {
    api.getPublicSettings()
      .then(res => setSettings(res.settings))
      .catch(err => {
        console.error('Error loading settings:', err);
        setSettingsLoadError(true);
      });
  }, []);

  const publishedThemes = settings?.themes?.length ? settings.themes : defaultThemes;
  const themes = [...publishedThemes].sort((a, b) => a.sortOrder - b.sortOrder).map((theme) => ({
    ...theme,
    title: normalizeEventText(theme.title),
    description: theme.description ? normalizeEventText(theme.description) : theme.description,
  }));
  const filteredThemes = activeThemeTab === 'all'
    ? themes
    : themes.filter(t => t.category === activeThemeTab);

  const homepageLeaders = [
    {
      role: 'Chief Patron',
      name: 'Prof. Sanjay Kumar Choudhary',
      designation: 'Vice Chancellor, LNMU',
      institution: 'Lalit Narayan Mithila University, Darbhanga',
      image: '/images/leadership/prof-sanjay-kumar-choudhary.png',
    },
    {
      role: 'Patron',
      name: 'Dr. Divya Rani Hansda',
      designation: 'Registrar, LNMU',
      institution: 'Lalit Narayan Mithila University, Darbhanga',
      image: '/images/leadership/dr-divya-rani.png',
    },
    {
      role: 'President',
      name: 'Dr. Amod Kumar',
      designation: 'Director, WIT',
      institution: 'Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology, LNMU',
      image: '/images/leadership/dr-amod-kumar.png',
    },
  ];
  const speakers = [
    {
      name: 'V.K. Manchanda',
      image: '/images/speakers/manchanda.jpeg',
      objectPosition: 'center 0%',
      role: 'Head, Radiochemistry Division, BARC',
      affiliation: 'Former Professor, Sung Kyun Kwan University, South Korea',
    },
    {
      name: 'Anadi Kumar Sinha',
      image: '/images/speakers/anadi-kumar-sinha.png',
      role: 'Convener, Outreach Committee, INS',
      affiliation: 'Recognized as an Outstanding Scientist (OS)',
    },
    {
      name: 'Dr. Ashok Kumar Kesari',
      image: '/images/speakers/dr-ashok-kumar-kesari.png',
      role: 'Treasurer, INS',
      affiliation: 'Chief Coordinator, INS',
    },
    {
      name: 'Dr. Hrishikesh Mishra',
      image: '/images/speakers/dr-hrishikesh-mishra.jpeg',
      role: 'President, INS',
      affiliation: 'Former Distinguished Scientist; Former Director, Engineering Service Group, BARC',
    },
    {
      name: 'Dr. Jimmy Kansal',
      image: '/images/speakers/dr-jimmy-kansal.png',
      role: 'Scientist G, DGRE',
      affiliation: 'DRDO Chandigarh',
    },
    {
      name: 'Sri OP Rai',
      image: '/images/speakers/op-rai.jpeg',
      role: 'Treasurer, INS',
      affiliation: 'Chief Coordinator of the Seminar',
    },
  ];
  const eventSchedule = [
    {
      day: 'MONDAY',
      date: '07/12',
      description: 'Inaugural session; keynote lectures; introduction to advanced computing and nuclear science.',
    },
    {
      day: 'TUESDAY',
      date: '08/12',
      description: 'Artificial Intelligence, Machine Learning, HPC, Digital Twins, and nuclear reactor monitoring, Medical physics, nuclear imaging, healthcare applications, and cancer diagnosis and treatment.',
    },
    {
      day: 'WEDNESDAY',
      date: '09/12',
      description: 'Computational biology, molecular research, GeoAI, hazard prediction, and environmental risk assessment, Generative AI, Cybersecurity, IoT, Industry 5.0, research opportunities, interactive discussions, valedictory session, and certificate distribution.',
    },
  ];

  return (
    <div>
      {/* 1. Academic Conference Hero Banner */}
      <section style={{
        backgroundColor: '#0f294a',
        color: '#ffffff',
        padding: '3rem 0 2.5rem 0',
        borderBottom: '4px solid #b45309',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          {/* Institution label */}
          <div style={{
            display: 'inline-block',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '0.3rem 0.85rem',
            borderRadius: '3px',
            fontSize: '0.8rem',
            color: '#fcd34d',
            fontWeight: 600,
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}>
            National Seminar
          </div>

          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '0.5rem',
          }}>
            ACANS 2026
          </h1>

          <div style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
            fontWeight: 600,
            color: '#fcd34d',
            maxWidth: '900px',
            margin: '0 auto 1rem auto',
            lineHeight: 1.4,
          }}>
            <span style={{ display: 'block' }}>National Seminar on “Advanced Computing and Nuclear Science:</span>
            <span style={{ display: 'block' }}>Emerging Technologies, Interdisciplinary Applications and Research Opportunities”</span>
          </div>

          <p style={{
            fontSize: '0.95rem',
            color: '#cbd5e1',
            maxWidth: '820px',
            margin: '0 auto 1.5rem auto',
            lineHeight: 1.6,
          }}>
            The National Seminar on &ldquo;Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities&rdquo; is organised by <strong>Dr. A.P.J. Abdul Kalam Women&apos;s Institute of Technology (WIT), Lalit Narayan Mithila University (LNMU)</strong>, in collaboration with the <strong>Indian Nuclear Society (INS)</strong>.
          </p>

          {/* Dates & Venue Info Box */}
          <div style={{
            display: 'inline-flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'center',
            backgroundColor: '#071529',
            border: '1px solid #1e3a8a',
            borderRadius: '4px',
            padding: '0.75rem 1.5rem',
            marginBottom: '1.75rem',
            fontSize: '0.9rem',
          }}>
            <div>
              <span style={{ color: '#94a3b8' }}>Seminar Dates: </span>
              <strong style={{ color: '#fcd34d' }}>
                7–9 December 2026
              </strong>
            </div>
            <div style={{ color: '#475569' }}>|</div>
            <div>
              <span style={{ color: '#94a3b8' }}>Venue: </span>
              <strong style={{ color: '#ffffff' }}>
                Kalpana Chawla Auditorium, WIT, LNMU, Darbhanga
              </strong>
            </div>
          </div>

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/downloads/Paper-presentation-templete.docx"
              download="Paper-presentation-templete.docx"
              className="btn btn-gold btn-lg"
              id="hero-template-cta"
            >
              📄 Download Paper Presentation Template (.docx)
            </a>
            <Link href="/register" className="btn btn-outline-white btn-lg" id="hero-register-cta">
              Register as Participant
            </Link>
            <Link href="/abstract-submission" className="btn btn-outline-white btn-lg" id="hero-abstract-cta">
              Submit Abstract
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Main Body Split: Left Updates & Right About */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="grid-3" style={{ alignItems: 'flex-start' }}>
            {/* Left Column (1 col): Important Updates & Quick Downloads */}
            <div className="card" style={{ borderTop: '3px solid #0f294a', padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.1rem', color: '#0f294a', marginBottom: '0.75rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '0.5rem', fontWeight: 700 }}>
                Important Updates
              </h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.85rem' }}>
                <li style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#dc2626', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    ● Official Template Available
                  </div>
                  <div style={{ marginTop: '0.2rem' }}>
                    Abstract submission closes 3 December 2026. Submit a one-page abstract of no more than 250 words. Registration remains open after the abstract deadline, subject to arrangements; late abstracts will not be considered for publication.
                  </div>
                  <a
                    href="/downloads/Paper-presentation-templete.docx"
                    download="Paper-presentation-templete.docx"
                    style={{ color: '#0f294a', fontWeight: 600, display: 'inline-block', marginTop: '0.25rem' }}
                  >
                    Download Paper Presentation Template (.docx) →
                  </a>
                </li>

                <li style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#15803d', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    ● Participant Registration Open
                  </div>
                  <div style={{ marginTop: '0.2rem' }}>
                    Online registration is active. Categories: Students (₹500), Scholars (₹750), Faculty (₹1,000).
                  </div>
                  <Link href="/register" style={{ color: '#0f294a', fontWeight: 600, display: 'inline-block', marginTop: '0.25rem' }}>
                    Register Profile →
                  </Link>
                </li>

                <li style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '0.6rem' }}>
                  <div style={{ fontWeight: 700, color: '#0f294a', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    ● UPI Fee Payment
                  </div>
                  <div style={{ marginTop: '0.2rem' }}>
                    Pay registration fee via UPI as per LNMU/WIT instructions and submit your UPI ID and 12-digit UTR in your dashboard.
                  </div>
                </li>

                <li>
                  <div style={{ fontWeight: 700, color: '#0f294a', fontSize: '0.75rem', textTransform: 'uppercase' }}>
                    ● Seminar Dates
                  </div>
                  <div style={{ marginTop: '0.2rem' }}>
                    7–9 December 2026 at Kalpana Chawla Auditorium, Dr. A.P.J. Abdul Kalam WIT, LNMU, Darbhanga.
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column (2 cols): About the Seminar */}
            <div className="home-about-main">
              <div style={{ marginBottom: '1.5rem' }}>
                <span className="section-tag">About the Seminar</span>
                <h2 style={{ fontSize: '1.65rem', color: '#0f294a', margin: '0.35rem 0 0.75rem 0', fontWeight: 700 }}>
                  ACANS 2026: Advanced Computing and Nuclear Science
                </h2>
                <p style={{ color: '#334155', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.925rem' }}>
                  ACANS 2026 is the National Seminar on <em>&ldquo;Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities&rdquo;</em>, organised by <strong>Dr. A.P.J. Abdul Kalam Women&apos;s Institute of Technology (WIT)</strong>, a constituent unit of <strong>Lalit Narayan Mithila University (LNMU)</strong>, Darbhanga, Bihar, in collaboration with the <strong>Indian Nuclear Society (INS)</strong>.
                </p>
                <p style={{ color: '#334155', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '0.925rem' }}>
                  The seminar explores high-performance computing, artificial intelligence, digital twin simulations, nuclear energy safety, radiation applications in agriculture and health sciences, and women in STEM technologies.
                </p>
              </div>

              {/* Two Institution Overview Cards */}
              <div className="grid-2" style={{ gap: '1rem', marginBottom: '1.5rem' }}>
                <div className="card" style={{ borderLeft: '3px solid #0f294a' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#0f294a', marginBottom: '0.35rem' }}>
                    Indian Nuclear Society (INS)
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
                    Founded in 1988, INS is the premier professional body promoting nuclear science, radiation technology, and atomic energy applications across BARC, NPCIL, AERB, universities, and research institutes across India.
                  </p>
                </div>

                <div className="card" style={{ borderLeft: '3px solid #831843' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#831843', marginBottom: '0.35rem' }}>
                    Dr. A.P.J. Abdul Kalam WIT &amp; LNMU
                  </h4>
                  <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
                    WIT is a constituent unit of Lalit Narayan Mithila University in Darbhanga, Bihar, providing technical education to women.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="btn btn-outline-navy btn-sm">
                  Read Complete About Section →
                </Link>
                <Link href="/committees" className="btn btn-secondary btn-sm">
                  View Advisory &amp; Organizing Committees →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Leadership */}
      <section id="leadership" className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Leadership</span>
            <h2 className="section-title">Leadership</h2>
            
          </div>
          <div className="grid-3 leadership-grid">
            {homepageLeaders.map((leader) => (
              <article key={leader.role} className="card leadership-feature-card">
                <ProfilePortrait src={leader.image} name={leader.name} shape="circle" objectPosition="center 28%" />
                <p className="leadership-feature-role">{leader.role}</p>
                <h3>{leader.name}</h3>
                <p className="leadership-feature-designation">{leader.designation}</p>
                <p className="leadership-feature-institution">{leader.institution}</p>
              </article>
            ))}
          </div>
          <div className="leadership-more-link">
            <Link href="/committees" className="btn btn-outline-navy btn-sm">View All Committees →</Link>
          </div>
        </div>
      </section>

      {/* Speakers */}
      <section id="speakers" className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Speakers</span>
            <h2 className="section-title">Key Speakers</h2>
            
          </div>
          <div className="grid-3">
            {speakers.map((speaker) => (
              <article key={speaker.name} className="card speaker-card">
                <ProfilePortrait src={speaker.image} name={speaker.name} shape="circle" objectPosition={speaker.objectPosition} />
                <h3>{speaker.name}</h3>
                <p className="speaker-card-role">{speaker.role}</p>
                <p className="speaker-card-affiliation">{speaker.affiliation}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section id="event-schedule" className="section event-schedule-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Three-Day Program</span>
            <h2 className="section-title">Event Schedule</h2>
          </div>
          <div className="event-schedule-grid">
            {eventSchedule.map((day, index) => (
              <article className={`event-schedule-card event-schedule-card-${index + 1}`} key={day.day}>
                <div className="event-schedule-date">
                  <span>{day.day}</span>
                  <strong>{day.date}</strong>
                </div>
                <p>{day.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Official Abstract Template Section */}
      <section style={{ backgroundColor: '#f8fafc', padding: '2.5rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <TemplateDownloadCard />
          </div>
        </div>
      </section>

      {/* 4. Registration Fees & Categories */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Registration</span>
            <h2 className="section-title">Registration Categories &amp; Fee Structure</h2>
            <p className="section-subtitle">
                Registration fee structure verified from the official seminar notification. Payments are accepted via UPI.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="table-responsive" style={{ marginBottom: '1.25rem' }}>
              <table className="table">
                <thead>
                  <tr>
                    <th>Participant Category</th>
                    <th>Delegate Eligibility</th>
                    <th>Fee (₹)</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Student</strong></td>
                    <td>Undergraduate and Postgraduate Students</td>
                    <td><strong style={{ color: '#0f294a', fontSize: '1.1rem' }}>₹500</strong></td>
                    <td>
                      <Link href="/register?category=student" className="btn btn-primary btn-sm">
                        Register
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Research Scholar</strong></td>
                    <td>Ph.D. Scholars and Junior/Senior Research Fellows</td>
                    <td><strong style={{ color: '#0f294a', fontSize: '1.1rem' }}>₹750</strong></td>
                    <td>
                      <Link href="/register?category=research_scholar" className="btn btn-primary btn-sm">
                        Register
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Faculty</strong></td>
                    <td>Faculty, Scientists, and Academic Delegates</td>
                    <td><strong style={{ color: '#0f294a', fontSize: '1.1rem' }}>₹1,000</strong></td>
                    <td>
                      <Link href="/register?category=faculty" className="btn btn-primary btn-sm">
                        Register
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="alert alert-info" style={{ fontSize: '0.85rem' }}>
              <strong>UPI Payment Process:</strong> Transfer the fee amount via UPI (GPay / PhonePe / Paytm / BHIM) as instructed by Dr. A.P.J. Abdul Kalam WIT / LNMU. After payment, login to your Participant Dashboard and submit your <strong>Payer UPI ID</strong> and <strong>12-digit UPI UTR</strong> for official administrative verification.
            </div>
          </div>
        </div>
      </section>

      {/* 5. Important Dates Schedule */}
      <section className="section" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Schedule</span>
            <h2 className="section-title">Important Dates &amp; Deadlines</h2>
            <p className="section-subtitle">
              Seminar dates and submission milestones.
            </p>
          </div>

          <div style={{ maxWidth: '850px', margin: '0 auto' }}>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Event Milestone</th>
                    <th>Date / Timeline</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Seminar Dates</strong></td>
                    <td><strong>7–9 December 2026</strong></td>
                    <td><span className="badge badge-accepted">Confirmed</span></td>
                  </tr>
                  <tr>
                    <td><strong>Abstract Submission</strong></td>
                    <td>Deadline: 3 December 2026 (250-word summary + official paper template PDF)</td>
                    <td><span className="badge badge-accepted">Active</span></td>
                  </tr>
                  <tr>
                    <td><strong>Delegate Registration Deadline</strong></td>
                    <td>To be announced by organizing committee</td>
                    <td><span className="badge badge-submitted">Upcoming</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technical Themes Section */}
      <section className="section" id="themes" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Research Scope</span>
            <h2 className="section-title">Technical Themes &amp; Tracks</h2>
            <p className="section-subtitle">
              Seminar themes and related topics in advanced computing and nuclear science.
            </p>
            {settingsLoadError && (
              <p role="status" style={{ marginTop: '0.5rem', color: '#64748b', fontSize: '0.85rem' }}>
                Showing the approved ACANS 2026 themes while event settings are unavailable.
              </p>
            )}

            <div className="theme-filter-controls" style={{ display: 'inline-flex', gap: '0.4rem', marginTop: '1rem', backgroundColor: '#f1f5f9', padding: '0.25rem', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
              <button
                onClick={() => setActiveThemeTab('all')}
                className={`btn btn-sm ${activeThemeTab === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              >
                All Themes ({themes.length})
              </button>
              <button
                onClick={() => setActiveThemeTab('workshop')}
                className={`btn btn-sm ${activeThemeTab === 'workshop' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Seminar Themes
              </button>
              <button
                onClick={() => setActiveThemeTab('conference')}
                className={`btn btn-sm ${activeThemeTab === 'conference' ? 'btn-primary' : 'btn-secondary'}`}
              >
                Related Technical Topics
              </button>
            </div>
          </div>

          <div className="grid-2">
            {filteredThemes.slice(0, 8).map((theme, idx) => (
              <div key={idx} className="card card-interactive" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: theme.category === 'workshop' ? '#0d5f57' : '#0f294a',
                      backgroundColor: theme.category === 'workshop' ? '#f0fdf4' : '#f8fafc',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '3px',
                      border: '1px solid #e2e8f0',
                      textTransform: 'uppercase',
                    }}>
                      {theme.category === 'workshop' ? 'Seminar Theme' : 'Related Topic'}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>#{idx + 1}</span>
                  </div>
                  <h4 style={{ fontSize: '1rem', color: '#0f294a', lineHeight: 1.4, marginBottom: '0.4rem' }}>
                    {theme.title}
                  </h4>
                  {theme.description && (
                    <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.5 }}>
                      {theme.description}
                    </p>
                  )}
                </div>
                <div style={{ marginTop: '0.75rem', paddingTop: '0.5rem', borderTop: '1px solid #f1f5f9' }}>
                  <Link href={`/abstract-submission?theme=${encodeURIComponent(theme.title)}`} style={{ fontSize: '0.825rem', color: '#0f294a', fontWeight: 600 }}>
                    Submit abstract under this track →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/themes" className="btn btn-outline-navy">
              View All {themes.length} Technical Themes &amp; Topics →
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Venue & Location Information */}
      <section className="section" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Location</span>
            <h2 className="section-title">Conference Venue &amp; Travel</h2>
            <p className="section-subtitle">
              Dr. A.P.J. Abdul Kalam Women&apos;s Institute of Technology, LNMU Campus, Darbhanga, Bihar.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <h4 style={{ fontSize: '1rem', color: '#0f294a', marginBottom: '0.5rem', fontWeight: 700 }}>
                ✈️ By Air (Darbhanga Airport - DHR)
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
                Located approximately 7 km from the LNMU campus. Regular direct commercial flights connect Darbhanga to New Delhi, Mumbai, Bengaluru, and Kolkata.
              </p>
            </div>

            <div className="card">
              <h4 style={{ fontSize: '1rem', color: '#0f294a', marginBottom: '0.5rem', fontWeight: 700 }}>
                🚆 By Train (Darbhanga Junction - DBG)
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
                Darbhanga Junction is a major railway station in the East Central Railway zone with direct express and superfast trains connecting all metropolitan cities across India.
              </p>
            </div>

            <div className="card">
              <h4 style={{ fontSize: '1rem', color: '#0f294a', marginBottom: '0.5rem', fontWeight: 700 }}>
                🏫 Campus Venue &amp; Facilities
              </h4>
              <p style={{ fontSize: '0.85rem', color: '#475569', lineHeight: 1.6 }}>
                The WIT institute provides modern auditoriums, lecture halls, technical laboratories, and high-speed Wi-Fi connectivity on the historic university campus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
