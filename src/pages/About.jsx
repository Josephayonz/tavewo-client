import { ShieldCheck } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import CtaBanner from "../components/CtaBanner";
import Reveal, { StaggerGroup, staggerItem } from "../components/Reveal";
import { MotionDiv, cardHover } from "../lib/motion";

const whyChoose = [
  {
    title: "Our Vision",
    desc: "To become Africa's most trusted technology-enabled corporate ecosystem.",
  },
  {
    title: "Our Mission",
    desc: "Build innovation, trust and scale across every sector we operate in.",
  },
  {
    title: "Our Promise",
    desc: "Enterprise-grade delivery, transparent partnerships and long-term value.",
  },
];

const stats = [
  { value: "12+", label: "Technology Solutions" },
  { value: "500+", label: "Fleet Operations" },
  { value: "60+", label: "Strategic Partnerships" },
  { value: "$40M", label: "Real Estate Assets" },
];

const leadership = [
  { role: "Executive Chairman", dept: "Group Strategy", image: "/images/aboutpage-leadership-avatar1.jpg" },
  { role: "Group CEO", dept: "Operations", image: "/images/aboutpage-leadership-avatar2.jpg" },
  { role: "CTO", dept: "CoreMatrix", image: "/images/aboutpage-leadership-avatar3.jpg" },
  { role: "CIO", dept: "Capital Holdings", image: "/images/aboutpage-leadership-avatar4.jpg" },
];

export default function About() {
  return (
    <div>
      <HeroBanner
        eyebrow="About TAVEWO"
        title="Building The Infrastructure African Enterprise Depends On."
        subtitle="TAVEWO Ventures Ltd unites specialised operating companies across technology, capital, logistics and real estate under one trusted parent."
      />

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-brand font-semibold mb-3 tracking-wide">OUR STORY</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Built To Last. Engineered To Scale.
            </h2>
            <p className="text-slate-600 leading-relaxed mb-5">
              TAVEWO began as a technology practice building systems for logistics
              operators and grew into a diversified conglomerate. Today our operating
              companies serve investors, government agencies, fleet operators, property
              owners and enterprise clients across Nigeria and West Africa.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our operating model is simple: build once, scale everywhere. Shared
              engineering, shared capital, shared trust deployed across specialized
              divisions with deep sector expertise.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src="/images/aboutpage-our-story-section.jpg"
              alt="TAVEWO - built to last, engineered to scale"
              className="rounded-2xl h-72 md:h-96 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Why Choose Tavewo */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
              Why Choose Tavewo
            </h2>
          </Reveal>
          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <MotionDiv
                key={item.title}
                variants={staggerItem}
                {...cardHover}
                className="bg-white rounded-2xl border border-slate-200 p-8 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mx-auto mb-5">
                  <ShieldCheck className="text-brand" size={22} />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </MotionDiv>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy text-white">
        <StaggerGroup className="max-w-7xl mx-auto px-5 md:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <MotionDiv
              key={s.label}
              variants={staggerItem}
              className={`${i > 0 ? "md:border-l md:border-white/15 md:pl-8" : ""}`}
            >
              <p className="text-3xl md:text-4xl font-extrabold mb-1">{s.value}</p>
              <p className="text-slate-300 text-sm">{s.label}</p>
            </MotionDiv>
          ))}
        </StaggerGroup>
      </section>

      {/* Leadership */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-brand font-semibold mb-3">Leadership</p>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12 leading-tight">
            A Team Of Operators, Engineers And Financiers
          </h2>
        </Reveal>
        <StaggerGroup className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {leadership.map((p) => (
            <MotionDiv
              key={p.role}
              variants={staggerItem}
              {...cardHover}
              className="border border-slate-200 rounded-2xl p-6 text-center bg-white"
            >
              <img
                src={p.image}
                alt={p.role}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h4 className="font-bold">{p.role}</h4>
              <p className="text-sm text-slate-600">{p.dept}</p>
            </MotionDiv>
          ))}
        </StaggerGroup>
      </section>

      <CtaBanner />
    </div>
  );
}
