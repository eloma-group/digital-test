import { motion } from 'framer-motion'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'

const EASE: [number,number,number,number] = [0.16, 1, 0.3, 1]

function fadeIn(delay = 0) {
  return {
    initial:    { opacity: 0, y: 24 },
    animate:    { opacity: 1, y: 0 },
    transition: { duration: 0.88, ease: EASE, delay },
  }
}

// ─────────────────────────────────────────────
// DEVICE MOCKUP — Project Portal
// ─────────────────────────────────────────────
const PROJECTS = [
  { name: 'TechFlow SaaS Platform', stack: ['React', 'Node.js', 'TypeScript'], status: 'In Dev',  pct: 80,  dot: '#3b82f6', bar: '#3b82f6' },
  { name: 'Nova E-commerce Store',  stack: ['Next.js', 'Shopify', 'AWS'],      status: 'Live ✓', pct: 100, dot: GREEN,     bar: GREEN     },
  { name: 'Luxe Beauty Mobile App', stack: ['React Native', 'Figma'],          status: 'Design',  pct: 32,  dot: '#a78bfa', bar: '#a78bfa' },
]

const STATUS_BG: Record<string, string> = {
  'In Dev':  'rgba(59,130,246,0.1)',
  'Live ✓': `rgba(60,185,140,0.12)`,
  'Design':  'rgba(167,139,250,0.1)',
}
const STATUS_FG: Record<string, string> = {
  'In Dev':  '#3b82f6',
  'Live ✓': GREEN,
  'Design':  '#a78bfa',
}

function DeviceMockup() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 18,
      overflow: 'hidden',
      boxShadow: '0 40px 90px rgba(8,33,60,0.16), 0 8px 28px rgba(8,33,60,0.08)',
      border: '1px solid rgba(8,33,60,0.07)',
      width: '100%',
    }}>
      {/* Browser chrome */}
      <div style={{
        background: '#f0ede8', padding: '11px 16px',
        display: 'flex', alignItems: 'center', gap: 10,
        borderBottom: '1px solid rgba(8,33,60,0.07)',
      }}>
        <div style={{ display: 'flex', gap: 5 }}>
          {['#FF5F57', '#FFBD2E', '#27C840'].map(c => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: '50%', background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: 'rgba(8,33,60,0.07)', borderRadius: 7,
          padding: '5px 12px', fontSize: 11,
          color: 'rgba(8,33,60,0.38)', fontFamily: 'monospace', fontWeight: 500,
        }}>
          app.egdigital.com.au/projects
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN }} />
          <span style={{ fontSize: 9.5, fontWeight: 700, color: GREEN }}>Live</span>
        </div>
      </div>

      {/* Portal body */}
      <div style={{ background: '#f8f6f1', padding: '16px 16px 18px' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <span style={{ fontSize: 13, fontWeight: 800, color: NAVY, letterSpacing: '-0.02em' }}>My Projects</span>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 5,
            background: NAVY, borderRadius: 8, padding: '5px 11px', cursor: 'default',
          }}>
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <path d="M4.5 1v7M1 4.5h7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <span style={{ fontSize: 10, fontWeight: 700, color: '#fff' }}>New Project</span>
          </div>
        </div>

        {/* Filter pills */}
        <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
          {['All', 'Active', 'Delivered', 'Design'].map((f, i) => (
            <div key={f} style={{
              fontSize: 9, fontWeight: 700, padding: '3px 10px', borderRadius: 99,
              background: i === 0 ? NAVY : 'rgba(8,33,60,0.06)',
              color: i === 0 ? '#fff' : 'rgba(8,33,60,0.45)',
              border: i === 0 ? 'none' : '1px solid rgba(8,33,60,0.1)',
              cursor: 'default',
            }}>{f}</div>
          ))}
        </div>

        {/* Project rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {PROJECTS.map(p => (
            <div key={p.name} style={{
              background: '#fff', borderRadius: 12, padding: '11px 13px',
              border: '1px solid rgba(8,33,60,0.06)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <div style={{ width: 7, height: 7, borderRadius: '50%', background: p.dot, flexShrink: 0 }} />
                  <span style={{ fontSize: 11, fontWeight: 700, color: NAVY }}>{p.name}</span>
                </div>
                <span style={{
                  fontSize: 9, fontWeight: 800, padding: '2px 8px', borderRadius: 99,
                  background: STATUS_BG[p.status], color: STATUS_FG[p.status],
                }}>{p.status}</span>
              </div>
              <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                {p.stack.map(t => (
                  <span key={t} style={{
                    fontSize: 8.5, fontWeight: 600, padding: '2px 7px', borderRadius: 6,
                    background: 'rgba(8,33,60,0.05)', color: 'rgba(8,33,60,0.5)',
                    border: '1px solid rgba(8,33,60,0.07)',
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ flex: 1, height: 4, background: 'rgba(8,33,60,0.06)', borderRadius: 99, overflow: 'hidden' }}>
                  <div style={{ width: `${p.pct}%`, height: '100%', background: p.bar, borderRadius: 99 }} />
                </div>
                <span style={{ fontSize: 9, fontWeight: 700, color: 'rgba(8,33,60,0.38)', flexShrink: 0 }}>{p.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// CARD 1 — Projects Live (white pill, top-left)
// mirrors Amzigo "Total Units Sold" card position
// ─────────────────────────────────────────────
function CardProjectsLive() {
  return (
    <div style={{
      background: '#fff', borderRadius: 100,
      padding: '13px 20px',
      display: 'flex', alignItems: 'center', gap: 10,
      boxShadow: '0 8px 32px rgba(8,33,60,0.13)',
      border: '1px solid rgba(8,33,60,0.07)',
      whiteSpace: 'nowrap',
    }}>
      {/* Pulsing dot */}
      <span style={{ position: 'relative', display: 'flex', width: 10, height: 10, flexShrink: 0 }}>
        <span style={{
          position: 'absolute', inset: 0, borderRadius: '50%', background: GREEN,
          animation: 'heroPulse 2s ease-out infinite',
        }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: GREEN, position: 'relative' }} />
      </span>
      <span style={{ fontSize: 13, fontWeight: 700, color: NAVY }}>4 Projects Live</span>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path d="M3.5 11.5L11.5 3.5M11.5 3.5H5.5M11.5 3.5V9.5" stroke={NAVY} strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>
  )
}

// ─────────────────────────────────────────────
// CARD 2 — Deployment (dark NAVY, bottom-left)
// mirrors Amzigo "Sales Performance" card position
// ─────────────────────────────────────────────
function CardDeployment() {
  const lines = [
    { sym: '$', text: 'git push origin main',          dim: false },
    { sym: '→', text: 'Building nova-store-v3.2…',     dim: true  },
    { sym: '✓', text: 'Build successful  (2.4s)',       dim: false },
    { sym: '✓', text: 'Tests: 47 passed',               dim: false },
    { sym: '✓', text: 'Deployed → novastore.com.au',    dim: false },
  ]
  return (
    <div style={{
      background: NAVY, borderRadius: 20,
      padding: '20px 22px', width: 230,
      boxShadow: '0 20px 56px rgba(8,33,60,0.32)',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.65)' }}>
          Recent Deployment
        </span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          background: 'rgba(60,185,140,0.15)', borderRadius: 99, padding: '3px 9px',
        }}>
          <div style={{ width: 5, height: 5, borderRadius: '50%', background: GREEN }} />
          <span style={{ fontSize: 9, fontWeight: 700, color: GREEN }}>Success</span>
        </div>
      </div>

      {/* Terminal block */}
      <div style={{
        background: 'rgba(0,0,0,0.3)', borderRadius: 10,
        padding: '12px 14px', fontFamily: 'monospace',
        display: 'flex', flexDirection: 'column', gap: 6,
      }}>
        {lines.map((l, i) => (
          <div key={i} style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
            <span style={{
              fontSize: 10, fontWeight: 700, flexShrink: 0,
              color: i >= 2 ? GREEN : 'rgba(255,255,255,0.5)',
            }}>{l.sym}</span>
            <span style={{
              fontSize: 9.5, lineHeight: 1.4,
              color: l.dim ? 'rgba(255,255,255,0.3)' : (i >= 2 ? GREEN : 'rgba(255,255,255,0.6)'),
            }}>{l.text}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 14 }}>
        <div>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>Stack</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>Next.js · Shopify</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>Deploy time</div>
          <div style={{ fontSize: 11, fontWeight: 700, color: GREEN, marginTop: 2 }}>2m 41s</div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// CARD 3 — Satisfaction (green, bottom-right)
// mirrors Amzigo "Review Growth" card position
// ─────────────────────────────────────────────
function CardSatisfaction() {
  return (
    <div style={{
      background: GREEN, borderRadius: 20,
      padding: '18px 20px', width: 175,
      boxShadow: '0 16px 48px rgba(60,185,140,0.4)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.72)' }}>
          Client Satisfaction
        </span>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M2.5 11.5L11.5 2.5M11.5 2.5H4.5M11.5 2.5V9.5" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      <div style={{
        fontSize: 54, fontWeight: 900, color: '#fff',
        letterSpacing: '-0.05em', lineHeight: 1, margin: '6px 0 6px',
      }}>
        98%
      </div>

      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.65)', marginBottom: 8 }}>
        Since 2021
      </div>

      <div style={{
        fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.88)',
        background: 'rgba(255,255,255,0.17)', borderRadius: 8, padding: '5px 10px',
      }}>
        42 projects delivered
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────
export function Hero() {
  return (
    <>
      <style>{`
        @keyframes heroPulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(2.4); opacity: 0;   }
          100% { transform: scale(2.4); opacity: 0;   }
        }
        @keyframes heroFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-11px); }
        }

        .hero-section {
          background: #ffffff;
          min-height: 100svh;
          padding: clamp(104px,14vh,160px) clamp(24px,4vw,64px) clamp(72px,10vh,120px);
          display: flex; align-items: center;
          position: relative; overflow: hidden;
        }

        /* Soft green tint top-right — very subtle, Amzigo-style */
        .hero-section::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background:
            radial-gradient(ellipse 700px 500px at 85% 10%, rgba(60,185,140,0.06) 0%, transparent 70%),
            radial-gradient(ellipse 400px 300px at 5%  90%, rgba(8,33,60,0.03)    0%, transparent 60%);
        }

        .hero-inner {
          max-width: min(calc(100vw - 48px), 1760px);
          margin: 0 auto; width: 100%;
          display: grid; grid-template-columns: 1fr 1.12fr;
          align-items: center; gap: clamp(48px,5vw,84px);
          position: relative;
        }

        /* ── Left copy ── */
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: clamp(10px,0.72vw,12px); font-weight: 800;
          letter-spacing: 2.5px; text-transform: uppercase; color: ${GREEN};
          margin-bottom: clamp(18px,2vw,26px);
        }
        .hero-eyebrow-line {
          width: 28px; height: 2px; background: ${GREEN}; flex-shrink: 0;
        }

        .hero-h1 {
          font-size: clamp(52px,7vw,104px);
          font-weight: 900; letter-spacing: -0.04em; line-height: 0.97;
          margin-bottom: clamp(18px,2vw,26px);
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .hero-h1-navy  { color: ${NAVY}; }
        .hero-h1-green { color: ${GREEN}; }

        .hero-sub {
          font-size: clamp(15px,1.1vw,18px);
          color: rgba(8,33,60,0.55); line-height: 1.75;
          max-width: 430px;
          margin-bottom: clamp(14px,1.6vw,22px);
        }

        /* Capability tags */
        .hero-tags {
          display: flex; flex-wrap: wrap; gap: 8px;
          margin-bottom: clamp(28px,3vw,44px);
        }
        .hero-tag {
          display: flex; align-items: center; gap: 7px;
          border: 1px solid rgba(8,33,60,0.1);
          border-radius: 100px; padding: 6px 14px;
          font-size: clamp(11px,0.78vw,13px); font-weight: 600;
          color: rgba(8,33,60,0.55);
        }
        .hero-tag-dot { width: 6px; height: 6px; border-radius: 50%; background: ${GREEN}; flex-shrink: 0; }

        /* CTA */
        .hero-cta {
          display: inline-flex; align-items: center; gap: 10px;
          background: ${GREEN}; color: #fff;
          font-size: clamp(14px,1vw,16px); font-weight: 700;
          padding: 16px 30px; border-radius: 100px; border: none;
          cursor: pointer; transition: all 0.22s; will-change: transform;
          min-height: 52px; font-family: inherit;
        }
        .hero-cta:hover {
          background: #2da87b; transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(60,185,140,0.42);
        }
        .hero-cta-arrow {
          width: 22px; height: 22px; border: 1.5px solid rgba(255,255,255,0.5);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* Trust row */
        .hero-trust {
          display: flex; align-items: center; gap: 12px;
          margin-top: clamp(20px,2.5vw,32px);
        }
        .hero-avatars { display: flex; }
        .hero-avatar {
          width: 32px; height: 32px; border-radius: 50%;
          border: 2px solid #fff; margin-left: -8px;
          font-size: 11px; font-weight: 900; color: #fff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .hero-trust-label {
          font-size: 13px; font-weight: 600; color: rgba(8,33,60,0.45);
        }
        .hero-trust-label strong { color: rgba(8,33,60,0.72); font-weight: 700; }

        /* ── Right visual ── */
        .hero-right {
          position: relative;
          padding: 44px 36px 100px 44px;
        }
        .hero-card-live {
          position: absolute; top: 14px; left: 0; z-index: 3;
          animation: heroFloat 4s ease-in-out infinite; will-change: transform;
        }
        .hero-card-deploy {
          position: absolute; bottom: 4px; left: -12px; z-index: 3;
          animation: heroFloat 5s ease-in-out infinite;
          animation-delay: -1.8s; will-change: transform;
        }
        .hero-card-sat {
          position: absolute; bottom: 40px; right: -12px; z-index: 3;
          animation: heroFloat 4.5s ease-in-out infinite;
          animation-delay: -2.8s; will-change: transform;
        }

        /* Responsive */
        @media (max-width: 1100px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-right  { display: none; }
          .hero-h1     { font-size: clamp(44px,9vw,80px); }
        }
        @media (max-width: 540px) {
          .hero-h1  { font-size: clamp(40px,11vw,60px); }
          .hero-sub { font-size: 15px; }
        }
        @media (min-width: 1920px) {
          .hero-h1 { font-size: clamp(80px,6.5vw,120px); }
        }
      `}</style>

      <section className="hero-section" id="home">
        <div className="hero-inner">

          {/* ── Left copy ── */}
          <div>
            <motion.div {...fadeIn(0.06)}>
              <div className="hero-eyebrow">
                <div className="hero-eyebrow-line" />
                Digital Agency · Est. 2021
              </div>
            </motion.div>

            <motion.h1 className="hero-h1" {...fadeIn(0.14)}>
              <span className="hero-h1-navy">We Build</span><br />
              <span className="hero-h1-green">Digital</span><br />
              <span className="hero-h1-navy">Excellence.</span>
            </motion.h1>

            <motion.p className="hero-sub" {...fadeIn(0.22)}>
              Custom websites, mobile apps and SaaS platforms built for ambitious brands —
              delivered on time, every time.
            </motion.p>

            <motion.div className="hero-tags" {...fadeIn(0.28)}>
              {['Web Development', 'Mobile Apps', 'SaaS Platforms', 'UI/UX Design'].map(t => (
                <div key={t} className="hero-tag">
                  <div className="hero-tag-dot" />
                  {t}
                </div>
              ))}
            </motion.div>

            <motion.div {...fadeIn(0.34)}>
              <button
                className="hero-cta"
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start a Project
                <span className="hero-cta-arrow">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path d="M1.5 7.5L7.5 1.5M7.5 1.5H2.5M7.5 1.5V6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
            </motion.div>

            <motion.div className="hero-trust" {...fadeIn(0.4)}>
              <div className="hero-avatars">
                {[
                  { bg: '#6366f1', l: 'S' },
                  { bg: GREEN,     l: 'J' },
                  { bg: '#f59e0b', l: 'M' },
                  { bg: '#ef4444', l: 'A' },
                ].map((a, i) => (
                  <div key={i} className="hero-avatar" style={{ background: a.bg, zIndex: 4 - i }}>{a.l}</div>
                ))}
              </div>
              <span className="hero-trust-label">
                <strong>40+ brands</strong> trust EG Digital
              </span>
            </motion.div>
          </div>

          {/* ── Right: device + cards ── */}
          <motion.div
            className="hero-right"
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.22 }}
          >
            <DeviceMockup />

            <div className="hero-card-live">
              <CardProjectsLive />
            </div>

            <div className="hero-card-deploy">
              <CardDeployment />
            </div>

            <div className="hero-card-sat">
              <CardSatisfaction />
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
