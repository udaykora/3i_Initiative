import { useState, useEffect } from 'react';

const NAVY = '#102a52';
const NAVY_LIGHT = '#1c3f6e';
const TEAL = '#1d9e8f';
const BG = '#f6f9fc';

/* ---------- Small square icon badge, matching the navy/white icon
   style used in the deck (e.g. the "100+" stat icons) ---------- */
function IconBadge({ children, size = 'md' }) {
  const dims = size === 'lg' ? 'w-12 h-12' : 'w-9 h-9';
  return (
    <div
      className={`${dims} shrink-0 rounded-xl flex items-center justify-center text-white`}
      style={{ background: NAVY }}
    >
      {children}
    </div>
  );
}

/* Inline icon glyphs, kept minimal/line-style so they read cleanly at small sizes */
const Icons = {
  about: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  objectives: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  ),
  methodology: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h4l2-5 4 10 2-5h4" />
    </svg>
  ),
  solutions: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18h6M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3Z" />
    </svg>
  ),
  leadership: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3" />
      <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" />
    </svg>
  ),
  partners: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2 6-6" />
      <path d="M21 7 13.5 14.5 11 12" />
      <path d="m3 7 7.5 7.5" />
      <path d="M7 3 3 7l4 4" />
    </svg>
  ),
  collaborators: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
      <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
    </svg>
  ),
  members: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  ),
};

/* Heading row: icon badge + serif heading, reused across every section */
function SectionHeading({ icon, children, light }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <IconBadge>{icon}</IconBadge>
      <h2 className="font-serif text-3xl md:text-4xl" style={{ color: light ? 'white' : NAVY }}>
        {children}
      </h2>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = [
    ['About', '#about'],
    ['Objectives', '#objectives'],
    ['Methodology', '#methodology'],
    ['Solutions', '#solutions'],
    ['Leadership', '#leadership'],
    ['Partners', '#steering-partners'],
    ['Contact', '#contact'],
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl font-semibold" style={{ color: NAVY }}>
          3i <span className="font-sans text-sm font-normal tracking-[0.2em] text-slate-500 align-middle ml-1">INITIATIVE</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-[#1d9e8f] transition-colors">{label}</a>
          ))}
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-slate-700">
          {open ? '✕' : '☰'}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-4 bg-white">
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="py-2 text-slate-600 border-b border-slate-100">{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-40 pb-28 px-6 overflow-hidden" style={{ background: `linear-gradient(180deg, ${NAVY} 0%, ${NAVY_LIGHT} 100%)` }}>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10" style={{ background: TEAL }} />
      <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full opacity-10" style={{ background: TEAL }} />
      <div className="relative max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase mb-5" style={{ color: '#7fd9cf' }}>
          A Collaborative Skill Development Consortium
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6">
          Bridging the gap between<br className="hidden md:block" /> academia and industry
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          3i Initiative brings institutions and industry together to build a skilled, employable,
          and globally competitive workforce — through training, certification, and placement at scale.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#about" className="px-7 py-3 rounded-full text-sm font-medium text-white" style={{ background: TEAL }}>
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  const cards = [
    { label: 'Vision', text: 'To empower India’s youth with industry-relevant skills and transform them into globally competitive professionals and entrepreneurs.' },
    { label: 'Mission', text: 'To collaborate with educational institutions and industry partners to deliver demand-driven skill development programs and sustainable livelihood opportunities.' },
  ];
  return (
    <section id="about" className="py-24 px-6" style={{ background: BG }}>
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: TEAL }}>About</p>
        <SectionHeading icon={Icons.about}>The 3i Initiative Consortium</SectionHeading>
        <p className="text-slate-600 text-lg leading-relaxed mb-12 max-w-3xl -mt-6">
          3i Initiative is a collaborative consortium that bridges the gap between academic institutions
          and industry by enabling skill development, employability, upskilling, industry-aligned programs,
          and workforce readiness aligned with real-world demands.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.label} className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="font-serif text-xl mb-3" style={{ color: NAVY }}>{c.label}</h3>
              <p className="text-slate-600 leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Objectives() {
  const stats = [
    ['1,00,000+', 'Youth upskilling & employment'],
    ['100+', 'Industry integration partnerships'],
    ['100+', 'Institutional ecosystem development'],
    ['100+', 'Industry-aligned curriculum development'],
    ['100+', 'SME networking'],
    ['100+', 'Training & awareness programs'],
    ['1000+', 'Candidates trained in EHS programs'],
    ['1000+', 'Candidates in entrepreneurship development'],
    ['39+', 'Training infrastructure & centres of excellence'],
    ['10+', 'Trade & collaboration network expansion'],
    ['10+', 'International placement collaborations'],
    ['4+', 'Mega employment drives'],
    ['10+', 'New business opportunity identification'],
    ['1 Cr', 'Trees planted — green initiative'],
  ];
  return (
    <section id="objectives" className="py-24 px-6" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: '#7fd9cf' }}>By the numbers</p>
        <SectionHeading icon={Icons.objectives} light>Strategic objectives</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden -mt-4">
          {stats.map(([num, label]) => (
            <div key={label} className="bg-[#102a52] p-6">
              <p className="font-serif text-2xl md:text-3xl mb-2" style={{ color: TEAL }}>{num}</p>
              <p className="text-slate-300 text-sm leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Methodology ----------
   Rebuilt as a clean horizontal stepper: numbered circles and
   connecting arrows sit on one centered row (so the arrow always
   lines up with the middle of the circle, not the label text below
   it), and the whole row scrolls horizontally on narrow screens
   instead of wrapping — which is what was breaking the arrows. */
function Methodology() {
  const steps = ['Assess', 'Upskill', 'Train', 'Certify', 'Place', 'Monitor', 'Give back'];
  return (
    <section id="methodology" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: TEAL }}>How it works</p>
        <SectionHeading icon={Icons.methodology}>Methodology</SectionHeading>

        <div className="overflow-x-auto -mt-4 pb-2">
          <div className="flex items-start min-w-max gap-0">
            {steps.map((step, i) => (
              <div key={step} className="flex items-start">
                <div className="flex flex-col items-center gap-2 w-28">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-medium shrink-0"
                    style={{ background: i === steps.length - 1 ? TEAL : NAVY }}
                  >
                    {i + 1}
                  </div>
                  <span className="text-sm text-slate-600 text-center leading-snug">{step}</span>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex items-center justify-center w-10 h-14 text-slate-300 shrink-0">
                    {Icons.arrow}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Solutions() {
  const [tab, setTab] = useState('institutes');
  const data = {
    institutes: [
      ['Skill–industry mismatch', 'Co-designed curriculum, role-based training, mandatory skill assessments before hiring.'],
      ['Lack of domain expertise', 'Specialization tracks fitted to specific job roles.'],
      ['Weak industry connect', 'Dedicated partnership cell, 100+ corporate MoUs, monthly industry sessions.'],
      ['Placement pressure', 'Distributed, multi-offer placement ecosystem.'],
      ['Poor employability skills', 'Mandatory boot camps, communication training, mock interviews.'],
      ['No real-time exposure', 'Live projects, internships, and industry immersion.'],
      ['Faculty–industry gap', 'Faculty upskilling programs and company sabbaticals.'],
      ['One-size-fits-all placement', 'Student segmentation with AI-driven job matching.'],
      ['Lack of structured placement', 'Centralized 3i platform with real-time tracking.'],
      ['Limited access to recruiters', 'National and international recruiter network across ASEAN, GCC, and Europe.'],
      ['Student awareness gap', 'Career awareness programs from year one.'],
      ['No outcome accountability', 'Performance and measurable dashboards.'],
    ],
    industry: [
      ['Skill–industry mismatch', 'Co-designed curriculum and pre-hire skill assessments.'],
      ['Lack of domain-specific expertise', 'Job-role focused learning pathways.'],
      ['Poor employability skills', 'Mock interviews, group discussions, workplace readiness.'],
      ['High training & onboarding costs', 'Pre-trained candidates via industry-sponsored facilities.'],
      ['High attrition rates', 'Role-fit hiring and clear career growth plans.'],
      ['Gap between academia & industry', 'Industry experts, mandatory internships, live projects.'],
      ['Lack of practical experience', 'Simulation labs and capstone projects.'],
      ['Inconsistent quality of talent', 'Standardized certification and centralized assessment.'],
      ['Shortage of skilled blue-collar workforce', 'Vocational training targeted at dropouts.'],
      ['Geographical mobility issues', 'Relocation support and regional awareness.'],
      ['Digital skill gaps', 'Continuous upskilling via online and hybrid platforms.'],
      ['Weak industry–institute collaboration', 'Joint training programs and placement-linked partnerships.'],
    ],
  };
  return (
    <section id="solutions" className="py-24 px-6" style={{ background: BG }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: TEAL }}>Pain points & solutions</p>
        <SectionHeading icon={Icons.solutions}>Where we close the gap</SectionHeading>
        <div className="flex gap-2 mb-10 -mt-6">
          {['institutes', 'industry'].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="px-5 py-2 rounded-full text-sm font-medium capitalize transition-colors"
              style={tab === t ? { background: NAVY, color: 'white' } : { background: 'white', color: '#475569', border: '1px solid #e2e8f0' }}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {data[tab].map(([title, desc], i) => (
            <div key={title} className="bg-white rounded-xl p-6 border border-slate-200">
              <p className="text-xs font-medium mb-2" style={{ color: TEAL }}>{String(i + 1).padStart(2, '0')}</p>
              <h3 className="font-medium text-slate-800 mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  const team = [
    { name: 'Kasi Viswanathan', role: 'Managing Director', org: 'TN Apex Skill Development Centre of Automobile', photo: "Leadership_Images/01_kasi_viswanathan.jpeg", pos: 'center 15%' },
    { name: 'Srinivas Kumar Yerrapothu', role: 'Global Vice President', org: 'International Federation of Electric Vehicle Association', photo: "Leadership_Images/02_srinivas_kumar_yerrapothu.jpeg", pos: 'center 15%' },
    { name: 'Mohamed Farook', role: 'Founder & Mentor-in-Chief', org: 'Kento Kaizen Solutions', photo: "Leadership_Images/03_mohamed_farook.jpg", pos: 'center 15%' },
    { name: 'Karunakaran', role: 'Country Head', org: 'ASSIST Development Foundation', photo: "Leadership_Images/04_karunakaran.jpg", pos: 'center 10%' },
    { name: 'Ferhan Anjum', role: 'Operations Director', org: 'CarAegis Mobility Solutions Pvt Ltd.', photo: "Leadership_Images/05_ferhan_anjum.jpeg", pos: 'center 15%' },
    { name: 'Surendran', role: 'Mentor – Process', org: 'Kento Kaizen Solutions', photo: "Leadership_Images/06_surendran.jpg", pos: 'center 10%' },
    { name: 'Sundaresan', role: 'Director', org: 'Tamilnadu Advanced Technical Training Institute', photo: "Leadership_Images/07_sundaresan.jpeg", pos: 'center 15%' },
    { name: 'Sharfudeen', role: 'Chief Operating Officer', org: 'THL Innovative Solutions Private Limited', photo: "Leadership_Images/08_sharfudeen.jpeg", pos: 'center 15%' },
    { name: 'Gnanasekar', role: 'Mentor – Project', org: 'Kento Kaizen Solutions', photo: "Leadership_Images/09_gnanasekar.jpeg", pos: 'center 15%' },
  ];
  return (
    <section id="leadership" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: TEAL }}>People</p>
        <SectionHeading icon={Icons.leadership}>Leadership</SectionHeading>
        <div className="grid sm:grid-cols-3 gap-6 -mt-4">
          {team.map((p) => (
            <div key={p.name} className="text-center">
              <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden bg-slate-100 flex items-center justify-center">
                {p.photo ? (
                  <img
                    src={p.photo}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: p.pos || 'center' }}
                  />
                ) : (
                  <span className="text-lg font-medium text-slate-400">
                    {p.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </span>
                )}
              </div>
              <p className="font-medium text-slate-800">{p.name}</p>
              <p className="text-sm mt-1" style={{ color: TEAL }}>{p.role}</p>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{p.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Logo tile, shared by both partner sections ----------
   Every logo sits inside a fixed-size frame (same width/height for
   every tile) and is centered both horizontally and vertically
   inside it, regardless of the source image's own aspect ratio —
   the same trick the Leadership grid uses with its round photo frame. */
function LogoTile({ name, logo, role }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white flex flex-col items-center text-center p-5 h-full">
      <div className="w-full h-16 flex items-center justify-center mb-2">
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="max-h-full max-w-full w-auto h-auto object-contain"
          />
        ) : (
          <p className="text-sm font-medium text-slate-700 leading-snug">{name}</p>
        )}
      </div>
      {role && <p className="text-xs mt-auto pt-2" style={{ color: TEAL }}>{role}</p>}
    </div>
  );
}

/* ---------- Slide 1: Steering Partner row + 5 role-based partners ---------- */
function SteeringPartners() {
  const steering = [
    { name: 'TNSDC – Tamil Nadu Skill Development Corporation', logo: "/Collaborators_Images/tnsk.png" },
    { name: 'Royal Enfield', logo: "/Collaborators_Images/RE.png" },
    { name: 'ASDC – Automotive Skills Development Council', logo: "/Collaborators_Images/ASDC.png" },
    { name: 'TN AutoSkills – Driving Forward', logo: "/Collaborators_Images/TN_Auto_skills.png" },
  ];
  const rolePartners = [
    { name: 'Kento Kaizen', role: 'Strategizing & Monitoring Partner', logo: "/Collaborators_Images/KENTO.png" },
    { name: 'CarAegis', role: 'Industry Connect Partner', logo: "/Collaborators_Images/Caraegis.png" },
    { name: 'ASSIST', role: 'Talent Upskilling Partner', logo: "/Collaborators_Images/Assist.png" },
    { name: 'THL', role: 'Placement Partner', logo: "/Collaborators_Images/THL.png" },
    { name: 'TATTI', role: 'Knowledge Partner', logo: "/Collaborators_Images/TNATTI.png" },
  ];
  return (
    <section id="steering-partners" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: TEAL }}>Backed by</p>
        <SectionHeading icon={Icons.partners}>Steering & strategic partners</SectionHeading>

        <h3 className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide -mt-6">Steering partner</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 items-stretch">
          {steering.map((p) => <LogoTile key={p.name} {...p} />)}
        </div>

        <h3 className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wide">Role-based partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-stretch">
          {rolePartners.map((p) => <LogoTile key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Slide 2: Collaborating Partners ---------- */
function CollaboratingPartners() {
  const partners = [
    { name: 'Saaliheen Educational & Charitable Trust', logo: "/Collaborators_Images/Saliheen.png" },
    { name: 'IFEVA – International Federation of Electric Vehicle Association', logo: "/Collaborators_Images/IFEVA.png" },
    { name: 'United Training Academy', logo: "/Collaborators_Images/UTA.png" },
    { name: 'BAZ', logo: "/Collaborators_Images/BAZ.png" },
  ];
  return (
    <section id="collaborators" className="py-24 px-6 border-t border-slate-100" style={{ background: BG }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: TEAL }}>Working together</p>
        <SectionHeading icon={Icons.collaborators}>Collaborating partners</SectionHeading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-stretch -mt-4">
          {partners.map((p) => <LogoTile key={p.name} {...p} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Slides 12–16: one full-height section per member organization ----------
   The logo frame matches the LogoTile pattern: a fixed-size, padded,
   white frame with the logo centered via object-contain, so every
   organization's mark sits at the same scale and position. */
function PartnerSection({ index, name, tag, body, image, imageAlt, reverse, bg }) {
  return (
    <section
      id={`partner-${index}`}
      className="min-h-screen flex items-center px-6 py-20"
      style={{ background: bg }}
    >
      <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <div className="w-full aspect-[4/3] rounded-2xl border border-slate-200 bg-white flex items-center justify-center overflow-hidden p-10">
          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="max-w-full max-h-full w-auto h-auto object-contain"
            />
          ) : (
            <div className="text-center px-6">
              <div className="w-16 h-16 rounded-full mx-auto mb-4" style={{ background: TEAL, opacity: 0.15 }} />
              <p className="text-sm text-slate-400">Image placeholder — add {name}’s photo or logo here</p>
            </div>
          )}
        </div>
        <div>
          <p className="text-xs font-medium mb-3" style={{ color: TEAL }}>{String(index).padStart(2, '0')} / 05</p>
          <h2 className="font-serif text-3xl md:text-4xl mb-2" style={{ color: NAVY }}>{name}</h2>
          <p className="text-sm text-slate-500 mb-6 uppercase tracking-wide">{tag}</p>
          <p className="text-slate-600 leading-relaxed text-base md:text-lg">{body}</p>
        </div>
      </div>
    </section>
  );
}

function MemberOrganizations() {
  const orgs = [
    {
      name: 'TN AutoSkills',
      tag: 'Apex skill centre for automotive',
      body: 'Tamil Nadu’s apex skill development centre dedicated im the to the automotive sector, established under the Government of Tamil Nadu to bridge the skill gap in India’s rapidly growing automotive industry. A state-of-the-art facility creating a steady pipeline of trained professionals for OEMs, Tier-1 suppliers, and the broader automotive ecosystem.',
      image: "/Collaborators_Images/TN_Auto_skills.png",
    },
    {
      name: 'Kento Kaizen',
      tag: 'Ethical leadership for MSMEs',
      body: 'Born from a gap in the business landscape: while large corporations engage “Big 4” firms, MSMEs and startups often lack access to high-quality guidance. Kento Kaizen equips entrepreneurs with the mindset, skills, and values to lead with purpose — built on four pillars: Trust, Truth, Transparency, and Timeliness.',
      image: "/Collaborators_Images/KENTO.png",
    },
    {
      name: 'CarAegis',
      tag: 'Trusted end-to-end car care',
      body: 'Mission: to redefine car ownership with trust, convenience, and innovation, offering transparent, data-driven solutions across the entire car lifecycle. Vision: to be India’s most trusted platform for end-to-end car care and mobility, blending skilled people with digital-first innovation.',
      image: "/Collaborators_Images/Caraegis.png",
    },
    {
      name: 'TATTI',
      tag: 'Industry-ready careers since 1985',
      body: 'Tailor-made programs preparing college students for industry and corporate life — including personality development, entrepreneurship, and corporate survival skills like interview etiquette. Clients include the Tamil Nadu Police Department, ISRO, the Bombay Stock Exchange, the Government of Tamil Nadu, Aspire Systems, and TCS iON.',
      image: "/Collaborators_Images/TNATTI.png",
    },
    {
      name: 'THL Innovative Solutions',
      tag: 'Sustainable, human-centred impact',
      body: 'A purpose-driven company committed to sustainable, inclusive, and impactful solutions — through education, technology, skill development, and social innovation — bridging the gap between potential and opportunity.',
      image: "/Collaborators_Images/THL.png",
    },
  ];
  return (
    <div id="partners">
      {orgs.map((org, i) => (
        <PartnerSection
          key={org.name}
          index={i + 1}
          name={org.name}
          tag={org.tag}
          body={org.body}
          image={org.image}
          imageAlt={org.name}
          reverse={i % 2 === 1}
          bg={i % 2 === 0 ? '#ffffff' : BG}
        />
      ))}
    </div>
  );
}

function Conclusion() {
  return (
    <section id="conclusion" className="py-28 px-6 text-center" style={{ background: NAVY }}>
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: '#7fd9cf' }}>In closing</p>
        <p className="font-serif text-2xl md:text-3xl text-white leading-snug mb-2">
          “The 3i Initiative aims to create a scalable, industry-integrated ecosystem that
          bridges the gap between talent and opportunity — driving employment, entrepreneurship,
          and sustainable development at both national and global levels.”
        </p>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-5">
          <IconBadge>{Icons.contact}</IconBadge>
          <h2 className="font-serif text-3xl md:text-4xl" style={{ color: NAVY }}>
            Let’s build the talent pipeline together
          </h2>
        </div>
        <p className="text-slate-500 leading-relaxed">
          Whether you’re an institution, an employer, or an ecosystem partner —
          there’s a role for you in the 3i Initiative.
        </p>
      </div>
      <p className="text-slate-400 text-xs mt-16">© 2026 3i Initiative Consortium</p>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);
  return (
    <div className="font-sans antialiased text-slate-800">
      <NavBar />
      <Hero />
      <About />
      <Objectives />
      <Methodology />
      <Solutions />
      <Leadership />
      <SteeringPartners />
      <CollaboratingPartners />
      <MemberOrganizations />
      <Conclusion />
      <Contact />
    </div>
  );
}