'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { api } from '../../lib/api';
import { EventSettings } from '../../types';
import { normalizeEventText, normalizeOrganizationText } from '../../lib/eventText';

export default function AboutPage() {
  const [settings, setSettings] = useState<EventSettings | null>(null);
  const aboutEvent = settings?.aboutEvent ? normalizeEventText(settings.aboutEvent) : undefined;

  useEffect(() => {
    api.getPublicSettings()
      .then(res => setSettings(res.settings))
      .catch(err => console.error('Error fetching settings:', err));
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section style={{
        backgroundColor: '#0f294a',
        color: '#ffffff',
        padding: '2.5rem 0',
        borderBottom: '3px solid #b45309',
      }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '0.5rem', fontSize: '0.825rem', color: '#cbd5e1', marginBottom: '0.5rem' }}>
            <Link href="/" style={{ color: '#fcd34d' }}>Home</Link>
            <span>/</span>
            <span>About</span>
          </div>
          <h1 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '0.35rem', fontWeight: 700 }}>
            About ACANS 2026 and the Collaborating Institutions
          </h1>
          <p style={{ color: '#cbd5e1', maxWidth: '750px', fontSize: '0.95rem' }}>
            ACANS 2026 is the National Seminar organised by Dr. A.P.J. Abdul Kalam Women&apos;s Institute of Technology (WIT), Lalit Narayan Mithila University (LNMU), in collaboration with the Indian Nuclear Society (INS).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* 1. The Seminar */}
            <div id="joint-event" style={{ scrollMarginTop: '80px' }}>
              <div style={{ borderBottom: '2px solid #0f294a', paddingBottom: '0.4rem', marginBottom: '1rem' }}>
                <span className="section-tag">Section 1</span>
                <h2 style={{ fontSize: '1.45rem', color: '#0f294a', fontWeight: 700 }}>
                  ACANS 2026: National Seminar on &ldquo;Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities&rdquo;
                </h2>
              </div>
              <div className="card" style={{ borderLeft: '4px solid #0f294a', lineHeight: '1.8', color: '#334155' }}>
                <p style={{ marginBottom: '1rem' }}>
                  {aboutEvent || `ACANS 2026 is the National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities." It is organised by Dr. A.P.J. Abdul Kalam Women's Institute of Technology (WIT), a constituent unit of Lalit Narayan Mithila University (LNMU), Darbhanga, Bihar, in collaboration with the Indian Nuclear Society (INS). The seminar brings together researchers, academicians, scientists, and industry professionals to explore the intersections of nuclear science and advanced computing.`}
                </p>
                <p>
                  As India advances towards the vision of Viksit Bharat @2047 and a sustainable energy future with an ambitious target of achieving 100 GWe of nuclear power capacity, the integration of advanced computing technologies and nuclear science has emerged as a key driver of scientific innovation and technological progress. In this context, the Seminar on Advanced Computing & Nuclear Science (ACANS 2026) provides a distinguished multidisciplinary platform that brings together eminent researchers, scientists, academicians, engineers, industry experts, and policymakers to deliberate on emerging trends and future challenges at the intersection of computing and nuclear technologies.

The Seminar will explore cutting-edge advancements in artificial intelligence, machine learning, high-performance computing, digital twins, cybersecurity, data analytics, and intelligent reactor monitoring, highlighting their transformative role in enhancing nuclear safety, reactor design, healthcare, medical diagnostics, radiation applications, and predictive risk assessment. Through keynote lectures, technical sessions, and collaborative discussions, ACANS 2026 aims to foster meaningful partnerships among academia, research organizations, government agencies, and industry, thereby promoting knowledge exchange, interdisciplinary research, and technological innovation in support of India&apos;s scientific excellence, energy security, and sustainable national development.
                </p>
              </div>
            </div>

            {/* 2. Indian Nuclear Society (INS) */}
            <div id="insac" style={{ scrollMarginTop: '80px' }}>
              <div style={{ borderBottom: '2px solid #0f294a', paddingBottom: '0.4rem', marginBottom: '1rem' }}>
                <span className="section-tag">Section 2</span>
                <h2 style={{ fontSize: '1.45rem', color: '#0f294a', fontWeight: 700 }}>
                  Indian Nuclear Society (INS)
                </h2>
              </div>
              <div className="card" style={{ borderLeft: '4px solid #0f294a', lineHeight: '1.8', color: '#334155' }}>
                <p style={{ marginBottom: '1rem' }}>
                  {settings?.aboutINS ? normalizeOrganizationText(settings.aboutINS) : `The Indian Nuclear Society (INS) is a professional body dedicated to the advancement and peaceful applications of nuclear science, technology, and allied disciplines. INS collaborates in organizing ACANS 2026, the National Seminar organised by Dr. A.P.J. Abdul Kalam Women's Institute of Technology (WIT), LNMU. Separately, INS organizes its own annual conference.`}
                </p>
                <p>
                  Through its national symposiums, technical seminars, and outreach, INS cultivates scientific literacy, technological self-reliance, and research collaboration in peaceful nuclear applications throughout the nation.
                </p>
              </div>
            </div>

            {/* 3. Lalit Narayan Mithila University (LNMU) */}
            <div id="lnmu" style={{ scrollMarginTop: '80px' }}>
              <div style={{ borderBottom: '2px solid #0f294a', paddingBottom: '0.4rem', marginBottom: '1rem' }}>
                <span className="section-tag">Section 3</span>
                <h2 style={{ fontSize: '1.45rem', color: '#0f294a', fontWeight: 700 }}>
                  Lalit Narayan Mithila University (LNMU), Darbhanga
                </h2>
              </div>
              <div className="card" style={{ borderLeft: '4px solid #831843', lineHeight: '1.8', color: '#334155' }}>
                <p style={{ marginBottom: '1rem' }}>
                  {settings?.aboutLNMU ? normalizeEventText(settings.aboutLNMU) : `Lalit Narayan Mithila University (LNMU), established in 1972, is an esteemed state university situated in the historic city of Darbhanga, Bihar. Named in honour of the illustrious leader and philosopher Lalit Narayan Mishra, LNMU is a major hub of higher learning and research in North Bihar, providing quality education across arts, science, commerce, law, medicine, and engineering through numerous constituent and affiliated institutions.`}
                </p>
                <p>
                  LNMU has consistently promoted advanced scientific inquiry and interdisciplinary research, providing a vibrant intellectual ecosystem for regional and national conferences.
                </p>
              </div>
            </div>

            {/* 4. Dr. A.P.J. Abdul Kalam Women's Institute of Technology (WIT) */}
            <div id="wit" style={{ scrollMarginTop: '80px' }}>
              <div style={{ borderBottom: '2px solid #0f294a', paddingBottom: '0.4rem', marginBottom: '1rem' }}>
                <span className="section-tag">Section 4</span>
                <h2 style={{ fontSize: '1.45rem', color: '#0f294a', fontWeight: 700 }}>
                  Dr. A.P.J. Abdul Kalam Women&apos;s Institute of Technology (WIT)
                </h2>
              </div>
              <div className="card" style={{ borderLeft: '4px solid #0d5f57', lineHeight: '1.8', color: '#334155' }}>
                <p style={{ marginBottom: '1rem' }}>
                   Established in 2004 as a constituent unit of Lalit Narayan Mithila University, Darbhanga, our Institute is approved by the All India Council for Technical Education (AICTE). It is the first Women&apos;s Institute of Technology in the Eastern Zone, dedicated to providing quality technical education to women in Bihar, with a special focus on the Mithilanchal region. The Institute was inaugurated by Bharat Ratna Dr. A.P.J. Abdul Kalam on 30 December 2005.
                  <br />
                  Today, the Institute is committed to empowering women through quality technical education, research, innovation, and skill development. We offer undergraduate and postgraduate programmes in Engineering & Technology and Computer Applications, supported by experienced faculty and guided by the principles of academic excellence, interdisciplinary research, and the National Education Policy (NEP) 2020.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
