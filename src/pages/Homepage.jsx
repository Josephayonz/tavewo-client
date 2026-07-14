import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Globe2,
  Truck,
  ShieldCheck,
  Cog,
  MapPin as MapPinIcon,
  Building2,
  Lock,
} from "lucide-react";
import CtaBanner from "../components/CtaBanner";
import Reveal, { StaggerGroup, staggerItem } from "../components/Reveal";
import { MotionLink, buttonHover, cardHover } from "../lib/motion";

const divisions = [
  {
    icon: Cpu,
    name: "CoreMatrix",
    tagline: "AI, automation and enterprise software built for scale.",
    bullets: ["AI Automation", "Chatbots", "CRM Systems", "Software Development"],
    image: "/images/homepage-division-card1.jpg",
  },
  {
    icon: Globe2,
    name: "Global Assets & Capital",
    tagline: "Asset procurement, treasury, FX and real estate.",
    bullets: ["Treasury & FX", "Importation", "Real Estate", "Asset Procurement"],
    image: "/images/homepage-division-card2.jpg",
  },
  {
    icon: Truck,
    name: "Fleet Telematics",
    tagline: "Fleet management, verification and emergency operations.",
    bullets: ["Asset Recovery", "Emergency Ops", "Vehicle Verification", "Fleet Management"],
    image: "/images/homepage-division-card3.jpg",
  },
];

const products = [
  {
    label: "Mobility Marketplace",
    name: "Verscar",
    desc: "Work-and-own vehicles, verified drivers, escrow and asset protection.",
    cta: "Learn more",
    to: "/products",
  },
  {
    label: "Emergency Operations",
    name: "RespondrNG",
    desc: "Dispatch, GPS tracking, routing, incident management and open APIs.",
    cta: "Request Demo",
    to: "/products",
  },
  {
    label: "Real Estate & Investments",
    name: "TAVEWO Capital",
    desc: "Land banking, commercial real estate, infrastructure and investments.",
    cta: "Explore Portfolio",
    to: "/products",
  },
];

const whyUs = [
  { icon: ShieldCheck, title: "Secure Operations", desc: "Enterprise-grade security across every touchpoint." },
  { icon: Cog, title: "Automated Systems", desc: "AI and automation reduce cost, error and time-to-value." },
  { icon: MapPinIcon, title: "Nationwide Reach", desc: "Enterprise-grade security across every touchpoint." },
  { icon: Building2, title: "Technology Driven", desc: "In-house engineering and product craftsmanship." },
  { icon: Lock, title: "Asset Protection", desc: "AI and automation reduce cost, error and time-to-value." },
  { icon: ShieldCheck, title: "Secure Operations", desc: "Enterprise-grade security across every touchpoint." },
];

export default function Homepage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy text-white overflow-hidden">
        <img
          src="/images/homepage-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-200"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/80 to-navy" />
        <motion.div
          className="relative max-w-5xl mx-auto text-center px-5 md:px-8 pt-20 pb-24"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-xs font-medium mb-6"
          >
            Tavewo Ventures Limited
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6"
          >
            Where Capital, Technology &amp; Infrastructure Converge
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="text-slate-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-10"
          >
            TAVEWO Ventures Ltd is a diversified enterprise group operating across tech
            innovation, asset management, and fleet logistics, engineering the infrastructure
            that powers the next generation of Nigerian enterprise.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.44 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <MotionLink to="/division" {...buttonHover} className="rounded-lg bg-brand px-6 py-3 font-semibold">
              Explore Ecosystem
            </MotionLink>
            <MotionLink to="/contact" {...buttonHover} className="rounded-lg bg-white text-navy px-6 py-3 font-semibold">
              Contact Us
            </MotionLink>
          </motion.div>
        </motion.div>
      </section>

      {/* About */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <p className="text-brand font-semibold text-2xl mb-3">About Tavewo</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
              A Conglomerate Engineered For Enterprise
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              TAVEWO Ventures unites specialised operating companies under one
              technology-driven parent. From AI-powered software to nationwide fleet
              operations, capital sourcing and real estate we build, operate and scale the
              infrastructure enterprises depend on.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-brand-light rounded-xl p-5">
                <h4 className="font-bold mb-1">Mission</h4>
                <p className="text-sm text-slate-600">
                  Build trusted, technology-enabled infrastructure that powers African
                  enterprise.
                </p>
              </div>
              <div className="bg-brand-light rounded-xl p-5">
                <h4 className="font-bold mb-1">Vision</h4>
                <p className="text-sm text-slate-600">
                  Africa's most trusted technology-enabled corporate ecosystem.
                </p>
              </div>
            </div>
            <Link to="/about" className="inline-flex items-center gap-2 font-semibold text-brand hover:gap-3 transition-all">
              Learn more about us <ArrowRight size={18} />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <img
              src="/images/homepage-aboutus.jpg"
              alt="TAVEWO conglomerate technology infrastructure"
              className="rounded-2xl h-72 md:h-96 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* Division */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 w-full">
            <div>
              <p className="text-brand font-semibold text-2xl mb-3">Division</p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                Three Divisions. One Ecosystem.
              </h2>
              <div className="h-1 w-16 bg-brand mt-4 rounded-full" />
            </div>
            <p className="text-slate-600 max-w-md">
              Purpose-built operating companies that share technology, capital and reach
              creating compounding advantages our partners rely on.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid md:grid-cols-3 gap-6">
          {divisions.map((d) => (
            <motion.div
              key={d.name}
              variants={staggerItem}
              {...cardHover}
              className="rounded-2xl border border-slate-200 overflow-hidden bg-white"
            >
              <div className="h-40 relative overflow-hidden">
                <img src={d.image} alt={d.name} className="w-full h-full object-cover " />
                <div className="absolute inset-0 bg-navy/30 flex items-center justify-center">
                  <d.icon size={44} className="text-white drop-shadow" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{d.name}</h3>
                <p className="text-sm text-slate-600 mb-4">{d.tagline}</p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700 mb-5">
                  {d.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand" /> {b}
                    </li>
                  ))}
                </ul>
                <Link to="/division" className="inline-flex items-center gap-2 hover:gap-3 transition-all font-semibold text-brand text-sm">
                  Explore Division <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </section>

      {/* Products */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-brand font-semibold text-2xl mb-3">Product Ecosystem</p>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Flagship Products Powering The Group
            </h2>
            <div className="h-1 w-16 bg-brand mb-12 rounded-full" />
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <motion.div
                key={p.name}
                variants={staggerItem}
                {...cardHover}
                className="bg-white rounded-2xl border border-slate-200 p-6"
              >
                <p className="text-amber-600 text-sm font-semibold mb-1">{p.label}</p>
                <h3 className="text-2xl font-extrabold mb-3">{p.name}</h3>
                <p className="text-sm text-slate-600 mb-5">{p.desc}</p>
                <Link to={p.to} className="inline-flex items-center gap-2 font-semibold text-brand text-sm hover:gap-3 transition-all">
                  {p.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Why Tavewo */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-brand font-semibold text-2xl mb-3">Why Tavewo</p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Trusted By Enterprises. Built For Scale.
          </h2>
          <div className="h-1 w-16 bg-brand mb-12 rounded-full" />
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {whyUs.map((f, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              {...cardHover}
              className="border border-slate-200 rounded-xl p-6 bg-white"
            >
              <f.icon className="text-brand mb-4" size={26} />
              <h4 className="font-bold mb-1.5">{f.title}</h4>
              <p className="text-sm text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </StaggerGroup>
      </section>

      <CtaBanner />
    </div>
  );
}
