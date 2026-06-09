import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import type { ReactNode } from 'react'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'
const CREAM = '#F3F0EA'

const EASE: [number,number,number,number] = [0.16, 1, 0.3, 1]

function fadeUp(delay = 0) {
  return {
    initial:    { opacity: 0, y: 32 },
    whileInView:{ opacity: 1, y: 0 },
    viewport:   { once: true, margin: '-60px' },
    transition: { duration: 0.8, ease: EASE, delay },
  }
}

// ── Shared card primitives ────────────────────
function MockCard({ children, style }: { children: ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid rgba(8,33,60,0.07)',
      borderRadius: 18,
      padding: '18px 20px',
      boxShadow: '0 4px 20px rgba(8,33,60,0.06)',
      ...style,
    }}>
      {children}
    </div>
  )
}

function MockLabel({ children }: { children: ReactNode }) {
  return (
    <div style={{
      fontSize: 10, fontWeight: 700, letterSpacing: '1.5px',
      textTransform: 'uppercase', color: 'rgba(8,33,60,0.38)',
      marginBottom: 8,
    }}>
      {children}
    </div>
  )
}

function MockVal({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <div style={{ fontSize: 26, fontWeight: 900, color: color ?? NAVY, letterSpacing: '-0.04em' }}>
      {children}
    </div>
  )
}

// ── Mockup A: Reviews & Feedback ─────────────
function MockupReviews() {
  const bars = [30,50,38,65,52,75,62,88,70,100,84,92]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <MockCard>
          <MockLabel>Total Emails Sent</MockLabel>
          <MockVal>48,231</MockVal>
          <div style={{ fontSize: 12, color: GREEN, fontWeight: 700, marginTop: 6 }}>↑ 22% this month</div>
          <div style={{ marginTop: 12, height: 5, background: 'rgba(8,33,60,0.05)', borderRadius: 99, overflow: 'hidden' }}>
            <div style={{ width: '78%', height: '100%', background: GREEN, borderRadius: 99 }} />
          </div>
        </MockCard>
        <MockCard>
          <MockLabel>Review Count</MockLabel>
          <MockVal color={GREEN}>3,847</MockVal>
          <div style={{ display: 'flex', gap: 3, marginTop: 8 }}>
            {[1,2,3,4,5].map(i => <Star key={i} size={13} fill={GREEN} color={GREEN} />)}
          </div>
          <div style={{ fontSize: 11, color: 'rgba(8,33,60,0.45)', marginTop: 5 }}>Avg 4.9 stars</div>
        </MockCard>
      </div>
      <MockCard>
        <MockLabel>Review Centre Activity</MockLabel>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 56 }}>
          {bars.map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`, borderRadius: '3px 3px 0 0',
              background: i >= 9 ? GREEN : `rgba(60,185,140,${0.12 + h * 0.005})`,
            }} />
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
          {['Jan','Feb','Mar','Apr','May','Jun'].map(m => (
            <span key={m} style={{ fontSize: 9, color: 'rgba(8,33,60,0.35)', fontWeight: 600 }}>{m}</span>
          ))}
        </div>
      </MockCard>
    </div>
  )
}

// ── Mockup B: Sales Analysis ──────────────────
function MockupSales() {
  const vals = [38,52,44,68,58,82,74,90,76,95,84,100]
  const months = ['J','F','M','A','M','J','J','A','S','O','N','D']
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <MockCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
          <div>
            <MockLabel>Units Sold</MockLabel>
            <MockVal>24,580</MockVal>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 10, color: 'rgba(8,33,60,0.4)', fontWeight: 600 }}>vs last month</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: GREEN, letterSpacing: '-0.03em' }}>+34%</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 64 }}>
          {vals.map((h, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
              <div style={{
                width: '100%', height: `${h}%`,
                borderRadius: '3px 3px 0 0',
                background: i === 11 ? GREEN : `rgba(60,185,140,${0.12 + h * 0.006})`,
              }} />
              <span style={{ fontSize: 8, color: 'rgba(8,33,60,0.35)', fontWeight: 600 }}>{months[i]}</span>
            </div>
          ))}
        </div>
      </MockCard>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <MockCard>
          <MockLabel>Revenue</MockLabel>
          <MockVal>$128K</MockVal>
          <div style={{ fontSize: 12, color: GREEN, fontWeight: 700, marginTop: 5 }}>↑ 28% YoY</div>
        </MockCard>
        <MockCard>
          <MockLabel>Inventory Status</MockLabel>
          {[{ name: 'SKU-A001', pct: 82 }, { name: 'SKU-B042', pct: 55 }, { name: 'SKU-C017', pct: 24 }].map(row => (
            <div key={row.name} style={{ marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, fontWeight: 600, color: NAVY, marginBottom: 3 }}>
                <span>{row.name}</span><span>{row.pct}%</span>
              </div>
              <div style={{ height: 4, background: 'rgba(8,33,60,0.06)', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{
                  width: `${row.pct}%`, height: '100%', borderRadius: 99,
                  background: row.pct > 60 ? GREEN : row.pct > 30 ? '#f59e0b' : '#ef4444',
                }} />
              </div>
            </div>
          ))}
        </MockCard>
      </div>
    </div>
  )
}

// ── Mockup C: Dashboard ───────────────────────
function MockupDashboard() {
  const orders = [
    { id: '#4821', product: 'Wireless Earbuds', status: 'Shipped',   amount: '$89' },
    { id: '#4820', product: 'Phone Case',        status: 'Pending',   amount: '$24' },
    { id: '#4819', product: 'USB-C Hub',          status: 'Delivered', amount: '$59' },
  ]
  const statusColor: Record<string,string> = {
    Shipped: '#3b82f6', Pending: '#f59e0b', Delivered: GREEN,
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <MockCard>
        <MockLabel>Recent Orders</MockLabel>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <tbody>
            {orders.map(o => (
              <tr key={o.id} style={{ borderBottom: '1px solid rgba(8,33,60,0.05)' }}>
                <td style={{ padding: '8px 0', fontSize: 12, fontWeight: 700, color: NAVY }}>{o.id}</td>
                <td style={{ padding: '8px 4px', fontSize: 12, color: 'rgba(8,33,60,0.6)' }}>{o.product}</td>
                <td style={{ padding: '8px 0' }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700,
                    color: statusColor[o.status],
                    background: `${statusColor[o.status]}18`,
                    borderRadius: 99, padding: '3px 8px',
                  }}>{o.status}</span>
                </td>
                <td style={{ padding: '8px 0', fontSize: 12, fontWeight: 700, color: NAVY, textAlign: 'right' }}>{o.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </MockCard>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <MockCard>
          <MockLabel>Email Open Rate</MockLabel>
          <MockVal>68.4%</MockVal>
          <div style={{ fontSize: 12, color: GREEN, fontWeight: 700, marginTop: 5 }}>↑ 5.2% vs avg</div>
        </MockCard>
        <MockCard style={{ background: NAVY }}>
          <MockLabel><span style={{ color: 'rgba(255,255,255,0.45)' }}>Flexible Plans</span></MockLabel>
          <div style={{ fontSize: 24, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', marginBottom: 4 }}>From $15</div>
          <div style={{ fontSize: 11, color: GREEN, fontWeight: 700 }}>No credit card</div>
          <div style={{
            marginTop: 12, background: GREEN, borderRadius: 99,
            padding: '8px', textAlign: 'center', fontSize: 12,
            fontWeight: 700, color: '#fff', cursor: 'pointer',
          }}>Start Free</div>
        </MockCard>
      </div>
    </div>
  )
}

// ── Mockup D: Response Centre ─────────────────
function MockupResponse() {
  const messages = [
    { from: 'customer', text: "Hi, my order hasn't arrived yet — order #4819." },
    { from: 'agent',    text: "Hi Sarah! Your order is out for delivery today — arriving by 6 PM. 😊" },
    { from: 'customer', text: "Thank you so much!" },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <MockCard>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <MockLabel>Response Centre</MockLabel>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN }} />
            <span style={{ fontSize: 10, fontWeight: 700, color: GREEN }}>3 Active</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
          {messages.map((m, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: m.from === 'agent' ? 'flex-end' : 'flex-start' }}>
              <div style={{
                maxWidth: '82%', padding: '9px 14px',
                borderRadius: m.from === 'agent' ? '16px 4px 16px 16px' : '4px 16px 16px 16px',
                background: m.from === 'agent' ? GREEN : 'rgba(8,33,60,0.05)',
                color: m.from === 'agent' ? '#fff' : NAVY,
                fontSize: 12, fontWeight: 500, lineHeight: 1.5,
              }}>
                {m.text}
              </div>
            </div>
          ))}
        </div>
      </MockCard>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {[
          { label: 'Messages Today', val: '247' },
          { label: 'Avg Response',   val: '< 2min' },
        ].map(s => (
          <MockCard key={s.label}>
            <MockLabel>{s.label}</MockLabel>
            <MockVal>{s.val}</MockVal>
          </MockCard>
        ))}
      </div>
    </div>
  )
}

// ── Generic FeatureBlock ──────────────────────
type FeatureBlockProps = {
  id?: string
  eyebrow: string
  headline: string
  body: string
  cta: string
  flip?: boolean
  bg?: string
  mockup: ReactNode
}

function FeatureBlock({ id, eyebrow, headline, body, cta, flip, bg = '#fff', mockup }: FeatureBlockProps) {
  return (
    <section
      id={id}
      style={{ background: bg, padding: 'clamp(80px,10vw,140px) clamp(24px,4vw,64px)' }}
    >
      <style>{`
        .fb-inner {
          max-width: min(calc(100vw - 48px), 1760px);
          margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr;
          align-items: center; gap: clamp(48px,6vw,96px);
        }
        .fb-inner.flip { direction: rtl; }
        .fb-inner.flip > * { direction: ltr; }
        .fb-eyebrow {
          font-size: clamp(10px,0.75vw,12px); font-weight: 800;
          letter-spacing: 2.5px; text-transform: uppercase; color: ${GREEN};
          margin-bottom: 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .fb-eyebrow::before {
          content: ''; display: block; width: 28px; height: 2px;
          background: ${GREEN}; flex-shrink: 0;
        }
        .fb-h2 {
          font-size: clamp(32px,4vw,58px); font-weight: 900; color: ${NAVY};
          text-transform: uppercase; letter-spacing: -0.04em; line-height: 0.94;
          margin-bottom: clamp(14px,1.6vw,24px);
        }
        .fb-body {
          font-size: clamp(15px,1.1vw,17px); color: rgba(8,33,60,0.58);
          line-height: 1.78; margin-bottom: clamp(22px,2.2vw,32px); max-width: 480px;
        }
        .fb-cta {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: clamp(13px,0.88vw,15px); font-weight: 700;
          color: ${GREEN}; border-bottom: 2px solid ${GREEN};
          padding-bottom: 2px; cursor: pointer; transition: gap 0.2s;
          background: none; border-top: none; border-left: none; border-right: none;
          font-family: inherit;
        }
        .fb-cta:hover { gap: 14px; }
        @media (max-width: 900px) {
          .fb-inner, .fb-inner.flip { grid-template-columns: 1fr; direction: ltr; }
        }
        @media (max-width: 540px) {
          .fb-h2 { font-size: clamp(28px,8vw,44px); }
        }
      `}</style>
      <div className={`fb-inner${flip ? ' flip' : ''}`}>
        <div>
          <motion.div className="fb-eyebrow" {...fadeUp(0)}>{eyebrow}</motion.div>
          <motion.h2 className="fb-h2" {...fadeUp(0.08)}>{headline}</motion.h2>
          <motion.p className="fb-body" {...fadeUp(0.16)}>{body}</motion.p>
          <motion.div {...fadeUp(0.22)}>
            <button className="fb-cta">{cta} <ArrowRight size={15} /></button>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
        >
          {mockup}
        </motion.div>
      </div>
    </section>
  )
}

// ── All four feature sections ─────────────────
export function Features() {
  return (
    <>
      <FeatureBlock
        id="services"
        eyebrow="Review Automation"
        headline="Automate Your Review & Feedback Requests"
        body="Send perfectly-timed, personalised review requests after every order. Watch your star rating climb while you focus on growing your business — not chasing reviews."
        cta="Explore Review Tools"
        bg="#fff"
        mockup={<MockupReviews />}
      />
      <FeatureBlock
        eyebrow="Sales Intelligence"
        headline="Maximize Sales with Real-Time Product Analysis"
        body="Track units sold, revenue trends, and inventory health across every SKU. Spot opportunities before competitors do with instant, actionable insights."
        cta="See Analytics in Action"
        flip
        bg={CREAM}
        mockup={<MockupSales />}
      />
      <FeatureBlock
        eyebrow="Central Dashboard"
        headline="Stay Ahead with a Comprehensive Dashboard"
        body="One unified view of orders, email metrics, pricing performance, and customer health. Everything your team needs — no spreadsheets required."
        cta="Explore the Dashboard"
        bg="#fff"
        mockup={<MockupDashboard />}
      />
      <FeatureBlock
        id="case-studies"
        eyebrow="Response Centre"
        headline="Streamline Communications with the Response Centre"
        body="Manage every customer message from a single inbox. Smart templates and AI-assisted replies mean faster responses, higher satisfaction scores, and less team burnout."
        cta="See Response Centre"
        flip
        bg={CREAM}
        mockup={<MockupResponse />}
      />
    </>
  )
}
