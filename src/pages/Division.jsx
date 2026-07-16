import { ArrowRight } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import Reveal from "../components/Reveal";
import { MotionButton, buttonHover } from "../lib/motion";
import {Link} from "react-router-dom";

const divisions = [
  {
    eyebrow: "Technology & Innovation",
    title: "CoreMatrix",
    desc: "Our enterprise technology arm. CoreMatrix designs, builds and ships AI-powered software and automation platforms used by operators across the group and by external enterprise clients.",
    tags: ["AI Automation", "Software Development", "Chatbots", "CRM System", "Product Lab"],
    image: "/images/divisionpage-corematrix-section1.jpg",
    imageFirst: true,
  },
  {
    eyebrow: "Capital, Assets & Real Estate",
    title: "Global Assets & Capital Sourcing",
    desc: "The capital and asset engine of the group. We source, procure and manage capital assets, treasury and FX operations, importation and premium real estate portfolios.",
    tags: ["Asset Procurement", "Treasury", "FX", "Importation", "Real Estate"],
    image: "/images/divisionpage-global-assets-section2.jpg",
    imageFirst: false,
  },
  {
    eyebrow: "Logistics & Emergency",
    title: "Telematics & Tactical Fleet Operations",
    desc: "Nationwide logistics, verification and emergency operations. From fleet management to asset recovery and dispatch, we deliver the physical layer of the ecosystem.",
    tags: ["Fleet Management", "Vehicle Verification", "Asset Recovery", "Emergency Operation", "Workshop"],
    image: "/images/divisionpage-telematics-section3.jpg",
    imageFirst: true,
  },
];

export default function Division() {
  return (
    <div>
      <HeroBanner
        eyebrow="Business Divisions"
        title="Three Divisions, Unified By Technology."
        subtitle="Each TAVEWO division operates independently with deep sector expertise, while sharing engineering, capital and reach across the group."
      />

      {divisions.map((d) => (
        <section key={d.title} className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal y={30} className={d.imageFirst ? "md:order-1" : "md:order-2"}>
              <img
                src={d.image}
                alt={d.title}
                className="rounded-2xl h-72 md:h-96 w-full object-cover"
              />
            </Reveal>
            <Reveal delay={0.12} className={d.imageFirst ? "md:order-2" : "md:order-1"}>
              <p className="text-brand font-semibold text-2xl mb-3">{d.eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">
                {d.title}
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">{d.desc}</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                {d.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-2 bg-brand-light text-brand-dark text-sm font-medium rounded-lg px-3 py-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
              <MotionButton
                {...buttonHover}
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition-colors"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Talk to this division <ArrowRight size={18} />
                </Link>
              </MotionButton>
            </Reveal>
          </div>
        </section>
      ))}
    </div>
  );
}
