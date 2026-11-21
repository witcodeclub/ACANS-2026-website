'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* ─────────────────────────────────────────────────────────────────────────────
   Static committee data (hard-coded as per requirements)
   ───────────────────────────────────────────────────────────────────────────── */

const leadershipOfficeBearers = [
  {
    role: 'Chief Patron',
    name: 'Prof. Sanjay Kumar Choudhary',
    designation: 'Vice Chancellor, LNMU',
    institution: 'Lalit Narayan Mithila University, Darbhanga',
    photo: '/images/leadership/prof-sanjay-kumar-choudhary.png',
    alt: 'Prof. Sanjay Kumar Choudhary, Vice Chancellor, LNMU',
  },
  {
    role: 'Patron',
    name: 'Dr. Divya Rani Hansda',
    designation: 'Registrar, LNMU',
    institution: 'Lalit Narayan Mithila University, Darbhanga',
    photo: '/images/leadership/dr-divya-rani.png',
    alt: 'Dr. Divya Rani Hansda, Registrar, LNMU',
  },
  {
    role: 'President',
    name: 'Dr. Amod Kumar',
    designation: 'Director, WIT',
    institution: 'Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology, LNMU',
    photo: '/images/leadership/dr-amod-kumar.png',
    alt: 'Dr. Amod Kumar, Director, WIT',
  },
  {
    role: 'Convener',
    name: 'Dr. Rashmi Kumari',
    designation: 'Convener, ACANS 2026',
    institution: 'Dr. A.P.J. Abdul Kalam WIT, LNMU',
    photo: '/images/leadership/dr-rashmi.png',
    alt: 'Dr. Rashmi Kumari, Convener, ACANS 2026',
  },
  {
    role: 'Co-Convener',
    name: 'Mrs. Charmis Mariwala',
    designation: 'Co-Convener, ACANS 2026',
    institution: 'Dr. A.P.J. Abdul Kalam WIT, LNMU',
    photo: '/images/leadership/charmis.jpeg',
    alt: 'Mrs. Charmis Mariwala, Co-Convener, ACANS 2026',
  },
];

// Committee portraits are stored under public/images/leadership. Set `photo`
// to its public path (for example, '/images/leadership/member-name.png'); leave
// it null for the initials placeholder. `photoPosition` can be tuned per image.
type CommitteeMember = {
  name: string;
  designation?: string;
  photo?: string | null;
  photoPosition?: string;
};

const organisingCommittee: CommitteeMember[] = [
  {
    name: 'Dr. Priyanka Rai',
    designation: 'Deputy Registrar, WIT',
    photo: '/images/leadership/dr Priyanka Rai.png',
    photoPosition: 'center 34%',
  },
  {
    name: 'Mr. Krishna Murari',
    designation: 'Administrative Officer, WIT',
    photo: '/images/leadership/Krishna Murari.png',
    photoPosition: 'center 20%',
  },
  {
    name: 'Mr. Amit Mishra',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Amit Mishra.png',
    photoPosition: 'center 30%',
  },
  {
    name: 'Ms. Kajal Kumari',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Kajal Kumari.jpeg',
    photoPosition: 'center 10%',
  },
  {
    name: 'Ms. Prachi Bharti',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Prachi Bharti.png',
    photoPosition: 'center 32%',
  },
  {
    name: 'Dr. Rajeev Prasad',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Dr. Rajeev Prasad.png',
    photoPosition: 'center 30%',
  },
  {
    name: 'Mrs. Neha Kumari',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Neha Kumari.png',
    photoPosition: 'center 34%',
  },
  {
    name: 'Md Ashif Habibi',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Ashif.jpeg',
    photoPosition: 'center 30%',
  },
  {
    name: 'Mr. Ganesh Kumar Paswan',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Ganesh Kumar paswan.png',
    photoPosition: 'center 30%',
  },
  {
    name: 'Dr. M.Z. Shamim',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Dr. M.Z. Shamim.png',
    photoPosition: 'center 30%',
  },
  {
    name: 'Dr. Chandrika Kumari',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/dr Chnadrika.png',
    photoPosition: 'center 24%',
  },
 {
    name: 'Dr. Avinash Chandra',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/avinash chandra.png',
    photoPosition: 'center 30%',
  },
  {
    name: 'Mr. Vipul Kumar',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Vipul.png',
    photoPosition: 'center 30%',
  },
  {
    name: 'Dr. Utsav Kumar Prasar',
    designation: 'Assistant Professor, WIT',
    photo: '/images/leadership/Dr. Utsav Kumar Prasar.jpeg',
    photoPosition: 'center 18%',
  },
];

const advisoryCommittee: { department: string; members: CommitteeMember[] }[] = [
  {
    department: 'University Department of Physics',
    members: [
      { name: 'Prof. Naushad Alam', photo: '/images/leadership/naushad alam.png', photoPosition: 'center 30%' },
      { name: 'Dr. Pooja Agarwal', photo: '/images/leadership/Dr. Pooja Agarwal.png', photoPosition: 'center 30%' },
      { name: 'Dr. Sumandeep Kaur', photo: '/images/leadership/Sumandeep .jpeg', photoPosition: 'center 50%' },
    ],
  },
  {
    department: 'University Department of Chemistry',
    members: [
      { name: 'Dr. Abhishek Rai', photo: '/images/leadership/Abhishek Rai.jpeg', photoPosition: 'center 30%' },
      { name: 'Dr. Arindra Sharma', photo: '/images/leadership/Arindra Sharma.jpeg', photoPosition: 'center 30%' },
    ],
  },
  {
    department: 'University Department of Zoology',
    members: [
      { name: 'Dr. Parul Banerjee', photo: '/images/leadership/Dr. Parul Banerjee.jpeg', photoPosition: 'center 30%' },
    ],
  },
  {
    department: 'University Department of Botany',
    members: [
      { name: 'Dr. Ankit Kumar Singh', photo: '/images/leadership/Ankit kumar.jpeg', photoPosition: 'center 30%' },
    ],
  },
  {
    department: 'Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology',
    members: [
      { name: 'Dr. Priyanka Rai', designation: 'Deputy Registrar, WIT', photo: '/images/leadership/dr Priyanka Rai.png', photoPosition: 'center 34%' },
      { name: 'Mr. Amit Kumar Mishra', photo: '/images/leadership/Amit Mishra.png', photoPosition: 'center 30%' },
      { name: 'Mrs. Neha Kumari', photo:'/images/leadership/Neha Kumari.png' , photoPosition: 'center 30%' },
      { name: 'Mr. Ashif Habibi', photo: '/images/leadership/Ashif.jpeg', photoPosition: 'center 30%' },
      { name: 'Dr. Zakirullah Shamim', photo: '/images/leadership/Dr. M.Z. Shamim.png', photoPosition: 'center 30%' },
      { name: 'Dr. Avinash Chandra', photo: '/images/leadership/avinash chandra.png', photoPosition: 'center 30%' },
      ],
  },
];

function PhotoPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(' ')
    .filter(w => w.length > 0)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('');
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e2e8f0',
        color: '#64748b',
        fontSize: '1.6rem',
        fontWeight: 700,
        letterSpacing: '0.05em',
        userSelect: 'none',
      }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Leadership card – with photo support and graceful fallback
   ───────────────────────────────────────────────────────────────────────────── */
function LeadershipCard({
  role,
  name,
  designation,
  institution,
  photo,
  alt,
}: {
  role: string;
  name: string;
  designation: string;
  institution: string;
  photo: string | null;
  alt: string;
}) {
  const [imgError, setImgError] = React.useState(false);

  const topBorderColor = '#0f294a';

  return (
    <div
      className="card leadership-card"
      style={{
        borderTop: `3px solid ${topBorderColor}`,
        textAlign: 'center',
        padding: '1.5rem 1rem 1.25rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem',
      }}
    >
      {/* Photo or Placeholder */}
      <div
        style={{
          width: 'clamp(112px, 12vw, 164px)',
          aspectRatio: '1',
          borderRadius: '50%',
          overflow: 'hidden',
          border: `2px solid ${topBorderColor}`,
          marginBottom: '0.35rem',
          flexShrink: 0,
          backgroundColor: '#e2e8f0',
        }}
      >
        {photo && !imgError ? (
          <Image
            src={photo}
            alt={alt}
            width={164}
            height={164}
            style={{ objectFit: 'cover', objectPosition: 'center 32%', width: '100%', height: '100%' }}
            onError={() => setImgError(true)}
          />
        ) : (
          <PhotoPlaceholder name={name} />
        )}
      </div>

      {/* Role badge */}
      <div
        style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          color: '#0f294a',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          backgroundColor: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '3px',
          padding: '0.15rem 0.5rem',
        }}
      >
        {role}
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: '1.05rem',
          color: '#0f294a',
          fontWeight: 700,
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {name}
      </h3>

      {/* Designation */}
      <div
        style={{
          fontSize: '0.825rem',
          color: '#334155',
          fontWeight: 600,
        }}
      >
        {designation}
      </div>

      {/* Institution */}
      {institution && (
        <div
          style={{
            fontSize: '0.775rem',
            color: '#64748b',
            lineHeight: 1.4,
          }}
        >
          {institution}
        </div>
      )}
    </div>
  );
}

function CommitteeMemberCard({ member }: { member: CommitteeMember }) {
  const [imgError, setImgError] = React.useState(false);
  const navy = '#0f294a';

  return (
    <div
      className="card leadership-card committee-member-card"
      style={{
        borderTop: `3px solid ${navy}`,
        textAlign: 'center',
        padding: '1.2rem 1rem 1.1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '0.6rem',
        minHeight: '272px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          width: 'clamp(116px, 10vw, 132px)',
          aspectRatio: '1',
          borderRadius: '50%',
          overflow: 'hidden',
          border: `2px solid ${navy}`,
          marginBottom: '0.35rem',
          flexShrink: 0,
          backgroundColor: '#e2e8f0',
        }}
      >
        {member.photo && !imgError ? (
          <Image
            src={member.photo}
            alt={member.name}
            width={164}
            height={164}
            sizes="(max-width: 900px) 116px, 132px"
            style={{
              objectFit: 'cover',
              objectPosition: member.photoPosition ?? 'center 30%',
              width: '100%',
              height: '100%',
            }}
            onError={() => setImgError(true)}
          />
        ) : (
          <PhotoPlaceholder name={member.name} />
        )}
      </div>

      <h3
        style={{
          fontSize: '1.02rem',
          color: navy,
          fontWeight: 700,
          lineHeight: 1.25,
          margin: 0,
          minHeight: '2.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {member.name}
      </h3>

      {member.designation && (
        <div
          style={{
            fontSize: '0.825rem',
            color: '#334155',
            fontWeight: 600,
            lineHeight: 1.35,
            minHeight: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {member.designation}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   Page component
   ───────────────────────────────────────────────────────────────────────────── */
export default function CommitteesPage() {
  return (
    <div>
      {/* Page Header */}
      <section
        style={{
          backgroundColor: '#0f294a',
          color: '#ffffff',
          padding: '2.5rem 0',
          borderBottom: '3px solid #b45309',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              gap: '0.5rem',
              fontSize: '0.825rem',
              color: '#cbd5e1',
              marginBottom: '0.5rem',
            }}
          >
            <Link href="/" style={{ color: '#fcd34d' }}>
              Home
            </Link>
            <span>/</span>
            <span>Committees</span>
          </div>
          <h1
            style={{
              fontSize: '1.85rem',
              color: '#ffffff',
              marginBottom: '0.35rem',
              fontWeight: 700,
            }}
          >
            Committees
          </h1>
          <p style={{ color: '#cbd5e1', maxWidth: '750px', fontSize: '0.95rem' }}>
            Distinguished academicians, office bearers, advisory panels, and organizing faculty supporting ACANS 2026.
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>

            {/* ══════════════════════════════════════════════
                SECTION 1: Leadership & Office Bearers
                ══════════════════════════════════════════════ */}
            <div>
              <div
                style={{
                  borderBottom: '2px solid #0f294a',
                  paddingBottom: '0.4rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span className="section-tag">Leadership</span>
                <h2
                  style={{
                    fontSize: '1.45rem',
                    color: '#0f294a',
                    fontWeight: 700,
                    margin: '0.25rem 0 0 0',
                  }}
                >
                  Office Bearers &amp; Patrons
                </h2>
              </div>

              {/* Top row: Chief Patron, Patron, President (with photos) */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                  gap: '1.25rem',
                  marginBottom: '1.25rem',
                }}
              >
                {leadershipOfficeBearers.slice(0, 3).map((m, idx) => (
                  <LeadershipCard
                    key={idx}
                    role={m.role}
                    name={m.name}
                    designation={m.designation}
                    institution={m.institution}
                    photo={m.photo}
                    alt={m.alt}
                  />
                ))}
              </div>

              {/* Bottom row: Convener, Co-Convener */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                  gap: '1.25rem',
                  maxWidth: '640px',
                }}
              >
                {leadershipOfficeBearers.slice(3).map((m, idx) => (
                  <LeadershipCard
                    key={idx}
                    role={m.role}
                    name={m.name}
                    designation={m.designation}
                    institution={m.institution}
                    photo={m.photo}
                    alt={m.alt}
                  />
                ))}
              </div>
            </div>

            {/* ══════════════════════════════════════════════
                SECTION 2: Organising Committee
                ══════════════════════════════════════════════ */}
            <div>
              <div
                style={{
                  borderBottom: '2px solid #0f294a',
                  paddingBottom: '0.4rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span className="section-tag">Coordination</span>
                <h2
                  style={{
                    fontSize: '1.45rem',
                    color: '#0f294a',
                    fontWeight: 700,
                    margin: '0.25rem 0 0 0',
                  }}
                >
                  Organising Committee
                </h2>
              </div>
              <div className="card">
                <div
                  className="committee-member-grid"
                >
                  {organisingCommittee.map(member => (
                    <CommitteeMemberCard key={member.name} member={member} />
                  ))}
                </div>
              </div>
            </div>

            {/* ══════════════════════════════════════════════
                SECTION 3: Advisory Committee (Dept-wise)
                ══════════════════════════════════════════════ */}
            <div>
              <div
                style={{
                  borderBottom: '2px solid #0f294a',
                  paddingBottom: '0.4rem',
                  marginBottom: '1.25rem',
                }}
              >
                <span className="section-tag">Panels</span>
                <h2
                  style={{
                    fontSize: '1.45rem',
                    color: '#0f294a',
                    fontWeight: 700,
                    margin: '0.25rem 0 0 0',
                  }}
                >
                  Advisory Committee by Department
                </h2>
              </div>

              <div className="committee-department-list">
                {advisoryCommittee.map((dept, deptIdx) => (
                  <div key={deptIdx} className="card committee-department-card">
                    <h3 className="committee-department-title">
                      {dept.department}
                    </h3>
                    <div className="committee-member-grid">
                      {dept.members.map(member => (
                        <CommitteeMemberCard key={member.name} member={member} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
