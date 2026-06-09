import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const NAVY  = '#08213C'
const GREEN = '#3CB98C'

const EASE: [number,number,number,number] = [0.16, 1, 0.3, 1]

const PLANS = [
  {
    name: 'Starter',
    volume: 'Up to 200 orders/mo',
    price: '$15.99',
    desc: 'Perfect for new sellers just getting started.',
    features: ['Review request automation','Basic email templates','Order tracking','Email support','1 marketplace'],
    popular: false,
  },
  {
    name: 'Growth',
    volume: 'Up to 1,000 orders/mo',
    price: '$29.99',
    desc: 'The most popular plan for growing brands.',
    features: ['Everything in Starter','Advanced analytics','Response Centre','Priority support','3 marketplaces','A/B testing'],
    popular: true,
  },
  {
    name: 'Pro',
    volume: 'Up to 5,000 orders/mo',
    price: '$59.99',
    desc: 'For established sellers scaling fast.',
    features: ['Everything in Growth','Custom email branding','Unlimited templates','Dedicated account rep','10 marketplaces','API access'],
    popular: false,
  },
  {
    name: 'Enterprise',
    volume: 'Unlimited orders',
    price: '$119.99',
    desc: 'Full-service solution for large operations.',
    features: ['Everything in Pro','Custom integrations','SLA guarantee','White-label options','Unlimited marketplaces','24/7 phone support'],
    popular: false,
  },
]

export function Pricing() {
  return (
    <>
      <style>{`
        .pricing-section {
          background: ${NAVY};
          padding: clamp(80px,10vw,140px) clamp(24px,4vw,64px);
        }
        .pricing-inner {
          max-width: min(calc(100vw - 48px), 1760px);
          margin: 0 auto;
        }
        .pricing-header { text-align: center; margin-bottom: clamp(48px,5vw,72px); }
        .pricing-eyebrow {
          font-size: clamp(10px,0.75vw,12px); font-weight: 800;
          letter-spacing: 2.5px; text-transform: uppercase; color: ${GREEN};
          margin-bottom: 14px;
        }
        .pricing-h2 {
          font-size: clamp(40px,5vw,72px); font-weight: 900;
          color: #fff; text-transform: uppercase;
          letter-spacing: -0.04em; line-height: 0.94; margin-bottom: 14px;
        }
        .pricing-sub {
          font-size: clamp(15px,1.1vw,17px);
          color: rgba(255,255,255,0.48);
          max-width: 460px; margin: 0 auto;
        }
        .pricing-grid {
          display: grid; grid-template-columns: repeat(4,1fr);
          gap: clamp(14px,1.6vw,22px);
        }
        .plan-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 24px; padding: 32px 26px;
          display: flex; flex-direction: column;
          transition: transform 0.25s, box-shadow 0.25s;
          will-change: transform; position: relative; overflow: hidden;
          cursor: default;
        }
        .plan-card:hover { transform: translateY(-4px); box-shadow: 0 20px 56px rgba(0,0,0,0.28); }
        .plan-card.popular {
          background: rgba(60,185,140,0.07);
          border-color: ${GREEN};
          box-shadow: 0 0 0 1px ${GREEN}, 0 8px 40px rgba(60,185,140,0.2);
        }
        .plan-badge {
          position: absolute; top: 0; left: 50%; transform: translateX(-50%);
          background: ${GREEN}; color: #fff;
          font-size: 10px; font-weight: 800; letter-spacing: 2px;
          text-transform: uppercase; padding: 5px 18px;
          border-radius: 0 0 12px 12px;
        }
        .plan-name {
          font-size: clamp(16px,1.3vw,20px); font-weight: 900; color: #fff;
          text-transform: uppercase; letter-spacing: -0.02em;
          margin-top: 16px; margin-bottom: 4px;
        }
        .plan-volume { font-size: 12px; color: rgba(255,255,255,0.42); font-weight: 600; margin-bottom: 14px; }
        .plan-desc   { font-size: 13px; color: rgba(255,255,255,0.52); line-height: 1.6; margin-bottom: 18px; min-height: 52px; }
        .plan-price  { font-size: clamp(32px,2.8vw,46px); font-weight: 900; color: #fff; letter-spacing: -0.04em; margin-bottom: 4px; }
        .plan-price span { font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.4); }
        .plan-divider { height: 1px; background: rgba(255,255,255,0.07); margin: 18px 0; }
        .plan-features { display: flex; flex-direction: column; gap: 10px; flex: 1; }
        .plan-feature { display: flex; align-items: flex-start; gap: 9px; font-size: 13px; color: rgba(255,255,255,0.65); }
        .plan-check { color: ${GREEN}; flex-shrink: 0; margin-top: 1px; }
        .plan-cta {
          margin-top: 26px; width: 100%; padding: 13px;
          border-radius: 100px; font-size: 14px; font-weight: 700;
          cursor: pointer; transition: all 0.22s; min-height: 48px;
          font-family: inherit;
        }
        .plan-cta.default {
          background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.8);
          border: 1px solid rgba(255,255,255,0.12);
        }
        .plan-cta.default:hover { background: rgba(255,255,255,0.12); }
        .plan-cta.filled { background: ${GREEN}; color: #fff; border: none; }
        .plan-cta.filled:hover { background: #2da87b; transform: translateY(-1px); }
        @media (max-width: 1100px) { .pricing-grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 600px)  { .pricing-grid { grid-template-columns: 1fr; } }
      `}</style>

      <section className="pricing-section" id="pricing">
        <div className="pricing-inner">
          <motion.div
            className="pricing-header"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="pricing-eyebrow">Pricing</div>
            <h2 className="pricing-h2">Simple, Transparent Plans</h2>
            <p className="pricing-sub">Find the perfect plan based on your monthly order volume.</p>
          </motion.div>

          <div className="pricing-grid">
            {PLANS.map((plan, i) => (
              <motion.div
                key={plan.name}
                className={`plan-card${plan.popular ? ' popular' : ''}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: EASE, delay: i * 0.08 }}
              >
                {plan.popular && <div className="plan-badge">Most Popular</div>}
                <div className="plan-name">{plan.name}</div>
                <div className="plan-volume">{plan.volume}</div>
                <div className="plan-desc">{plan.desc}</div>
                <div className="plan-price">{plan.price}<span>/mo</span></div>
                <div className="plan-divider" />
                <div className="plan-features">
                  {plan.features.map(f => (
                    <div key={f} className="plan-feature">
                      <span className="plan-check"><Check size={13} strokeWidth={3} /></span>
                      {f}
                    </div>
                  ))}
                </div>
                <button className={`plan-cta${plan.popular ? ' filled' : ' default'}`}>
                  Start Free Trial
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
