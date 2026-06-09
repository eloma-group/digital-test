import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'

const LINKS = [
  { label: 'Home',         id: 'home'       },
  { label: 'Services',     id: 'services'   },
  { label: 'Case Studies', id: 'case-studies'},
  { label: 'Pricing',      id: 'pricing'    },
  { label: 'Blog',         id: 'blog'       },
]

export function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const cb = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', cb, { passive: true })
    return () => window.removeEventListener('scroll', cb)
  }, [])

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <style>{`
        .nav-wrap {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 300;
          width: min(calc(100vw - 32px), 1100px);
          transition: top 0.3s;
        }
        .nav-pill {
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-radius: 100px;
          border: 1px solid rgba(8,33,60,0.08);
          box-shadow: 0 4px 28px rgba(8,33,60,0.10);
          padding: 10px 16px 10px 20px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 12px;
          transition: box-shadow 0.3s;
        }
        .nav-pill.scrolled {
          box-shadow: 0 8px 40px rgba(8,33,60,0.16);
        }
        .nav-logo {
          display: flex; align-items: center; gap: 8px;
          flex-shrink: 0;
        }
        .nav-logo img { height: 32px; width: auto; }
        .nav-links {
          display: flex; align-items: center;
          gap: clamp(14px, 2vw, 30px); list-style: none;
        }
        .nav-links button {
          background: none; border: none; cursor: pointer;
          font-size: clamp(13px, 0.88vw, 14px); font-weight: 600;
          color: rgba(8,33,60,0.65);
          transition: color 0.2s;
          padding: 6px 2px; min-height: 44px;
          font-family: inherit;
        }
        .nav-links button:hover { color: ${NAVY}; }
        .nav-actions { display: flex; align-items: center; gap: 8px; flex-shrink: 0; }
        .nav-btn-ghost {
          display: flex; align-items: center; gap: 6px;
          padding: 10px 18px; border-radius: 100px; min-height: 44px;
          border: 1.5px solid rgba(8,33,60,0.15);
          background: transparent;
          font-size: clamp(12px, 0.85vw, 14px); font-weight: 700;
          color: ${NAVY}; cursor: pointer; transition: all 0.2s;
          font-family: inherit; white-space: nowrap;
        }
        .nav-btn-ghost:hover { border-color: ${GREEN}; color: ${GREEN}; }
        .nav-btn-primary {
          display: flex; align-items: center; gap: 6px;
          padding: 10px 18px; border-radius: 100px; min-height: 44px;
          background: ${NAVY}; border: none;
          font-size: clamp(12px, 0.85vw, 14px); font-weight: 700;
          color: #fff; cursor: pointer; transition: all 0.22s;
          font-family: inherit; white-space: nowrap;
        }
        .nav-btn-primary:hover { background: ${GREEN}; transform: translateY(-1px); }
        /* Arrow icon */
        .nav-arrow {
          width: 18px; height: 18px;
          border: 1.5px solid currentColor;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        /* Hamburger */
        .nav-hamburger {
          display: none; background: none; border: none;
          cursor: pointer; color: ${NAVY}; padding: 8px;
          min-width: 44px; min-height: 44px;
          align-items: center; justify-content: center;
          border-radius: 100px;
          border: 1px solid rgba(8,33,60,0.12);
        }
        /* Mobile overlay */
        .nav-mobile {
          position: fixed; inset: 0; z-index: 299;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(16px);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          gap: 24px;
        }
        .nav-mobile-close {
          position: absolute; top: 20px; right: 20px;
          background: none; border: none; cursor: pointer;
          padding: 8px; min-width: 44px; min-height: 44px;
          display: flex; align-items: center; justify-content: center;
          color: ${NAVY}; border-radius: 100px; border: 1px solid rgba(8,33,60,0.12);
        }
        .nav-mobile button {
          background: none; border: none; cursor: pointer;
          font-size: 22px; font-weight: 800; color: rgba(8,33,60,0.8);
          font-family: inherit; transition: color 0.2s;
        }
        .nav-mobile button:hover { color: ${GREEN}; }

        @media (max-width: 900px) { .nav-links { display: none; } }
        @media (max-width: 640px) {
          .nav-actions { display: none; }
          .nav-hamburger { display: flex; }
        }
        @media (max-width: 480px) {
          .nav-wrap { top: 12px; }
        }
      `}</style>

      <div className="nav-wrap">
        <div className={`nav-pill${scrolled ? ' scrolled' : ''}`}>
          {/* Logo */}
          <div className="nav-logo">
            <img src="/images/EG Digital Logo White-01.png" alt="EG Digital"
              style={{ filter: 'invert(1) sepia(1) saturate(2) hue-rotate(175deg) brightness(0.15)' }}
            />
          </div>

          {/* Links */}
          <ul className="nav-links">
            {LINKS.map(l => (
              <li key={l.id}>
                <button onClick={() => scrollTo(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="nav-actions">
            <button className="nav-btn-ghost" onClick={() => scrollTo('pricing')}>
              Try For Free
              <span className="nav-arrow">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
            </button>
            <button className="nav-btn-primary">
              Login
              <span className="nav-arrow" style={{ borderColor: 'rgba(255,255,255,0.4)' }}>
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 6.5L6.5 1.5M6.5 1.5H2.5M6.5 1.5V5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              </span>
            </button>
          </div>

          {/* Hamburger */}
          <button className="nav-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <Menu size={20} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button className="nav-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close">
              <X size={22} />
            </button>
            {LINKS.map(l => (
              <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>
            ))}
            <button className="nav-btn-primary" style={{ marginTop: 8 }}>Login</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
