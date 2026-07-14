import { ArrowRight, Zap, PiggyBank, Box, Landmark, Share2, TrendingUp, CheckCircle2 } from "lucide-react";
import Reveal, { StaggerGroup, staggerItem } from "../components/Reveal";
import { MotionLink, MotionDiv, buttonHover, cardHover } from "../lib/motion";

const pillars = [
  { icon: Zap, title: "Growth Strategy", desc: "Vertical integration across technology, capital, logistics and real estate." },
  { icon: PiggyBank, title: "Investment Opportunities", desc: "Structured entries into individual divisions or the parent." },
  { icon: Box, title: "Corporate Governance", desc: "Board oversight, audited controls and transparent reporting." },
  { icon: Landmark, title: "Financial Ecosystem", desc: "Treasury, FX and capital sourcing built into the group." },
  { icon: Share2, title: "Strategic Partnerships", desc: "Long-term partners across banks, insurers and government." },
  { icon: TrendingUp, title: "Compound Advantage", desc: "Shared engineering and shared reach across every operating company." },
];

const whyInvest = [
  { title: "Strong Market", desc: "Operating across high demand industries with massive growth potential" },
  { title: "Proven Execution", desc: "A track record of delivering impactful solutions and measurable results." },
  { title: "Future Focused", desc: "Innovation and technology are at the heart of everything we build." },
];

export default function Investors() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white text-center px-5 md:px-8 py-16 md:py-20">
        <MotionDiv
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-eyebrow font-medium mb-4">Investors</p>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            A Conglomerate Built To Compound.
          </h1>
          <p className="text-slate-200 text-base md:text-lg leading-relaxed mb-10">
            Diversified operating companies, shared engineering, disciplined capital
            allocation — TAVEWO offers investors exposure to Africa's fastest-scaling
            enterprise infrastructure.
          </p>
          <MotionLink
            to="/contact"
            {...buttonHover}
            className="inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 font-semibold hover:bg-brand-dark transition-colors"
          >
            Partner With Us <ArrowRight size={18} />
          </MotionLink>
        </MotionDiv>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <StaggerGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <MotionDiv
              key={p.title}
              variants={staggerItem}
              {...cardHover}
              className="border border-slate-200 rounded-2xl p-7 bg-white"
            >
              <div className="w-10 h-10 rounded-lg bg-brand flex items-center justify-center mb-5">
                <p.icon size={18} className="text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.desc}</p>
            </MotionDiv>
          ))}
        </StaggerGroup>
      </section>

      {/* Why Invest */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="text-brand font-semibold text-2xlmb-3">Why Invest With TAVEWO</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Real Assets. Real Technology. Real Revenue.
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Unlike single-product companies, TAVEWO offers diversified exposure; mobility,
              real estate, capital and enterprise software. Each division has its own P&amp;L,
              its own team and its own moat, while sharing the group's infrastructure.
            </p>
          </Reveal>
          <StaggerGroup className="divide-y divide-slate-200">
            {whyInvest.map((item) => (
              <MotionDiv key={item.title} variants={staggerItem} className="flex gap-4 py-5 first:pt-0">
                <CheckCircle2 className="text-brand shrink-0 mt-0.5" size={22} />
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              </MotionDiv>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Investor pack CTA */}
      <section className="px-5 md:px-8 pb-16 md:pb-20">
        <Reveal className="max-w-6xl mx-auto">
          <div className="bg-brand rounded-2xl text-center text-white px-6 md:px-16 py-12 md:py-16">
            <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-5">
              Request The Investor Packs
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed">
              Detailed corporate structure, division economics and growth strategy,
              available under NDA.
            </p>
            <MotionLink
              to="/contact"
              {...buttonHover}
              className="inline-flex rounded-lg bg-white text-navy px-6 py-3 font-semibold hover:bg-slate-100 transition-colors"
            >
              Contact Investor Relations
            </MotionLink>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
