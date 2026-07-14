import { ArrowRight, Check } from "lucide-react";
import HeroBanner from "../components/HeroBanner";
import Reveal from "../components/Reveal";
import { MotionButton, MotionDiv, buttonHover, cardHover } from "../lib/motion";

const gallery = [
  { src: "/images/productpage-image-gallery1.jpg", alt: "Vescar mobility fleet" },
  { src: "/images/productpage-image-gallery2.jpg", alt: "RespondrNG emergency operations" },
  { src: "/images/productpage-image-gallery3.jpg", alt: "TAVEWO Capital real estate" },
];

const products = [
  {
    eyebrow: "Mobility Marketplace",
    title: "Vescar",
    desc: "The work-and-own mobility marketplace. Vescar connects vehicle owners, drivers and operators through verified onboarding, escrow-backed transactions and asset protection.",
    features: [
      "Work-and-Own Marketplace",
      "Vehicle Rentals",
      "Escrow Backed-Payment",
      "Driver Verifications",
      "Asset Protection",
    ],
    cta: "Talk to this Division",
  },
  {
    eyebrow: "Emergency Operations Platform",
    title: "RespondrNG",
    desc: "A dispatch and incident management platform for emergency and response teams with GPS tracking, intelligent routing and open APIs for integration.",
    features: [
      "Dispatch Console",
      "Vehicle Rentals",
      "Real-time GPS Tracking",
      "Intelligent Routing",
      "Incident Management",
    ],
    cta: "Request Demo",
  },
  {
    eyebrow: "Real Estate & Investments",
    title: "TAVEWO Capital Holdings",
    desc: "Our real estate and investment portfolio arm — spanning land banking, commercial real estate, infrastructure projects and structured investments.",
    features: [
      "Land Banking",
      "Commercial Real Estate",
      "Infrastructure Projects",
      "Structured Investments",
    ],
    cta: "Explore Portfolio",
  },
];

export default function Products() {
  return (
    <div>
      <HeroBanner
        eyebrow="Product Ecosystem"
        title="Flagship Products Powering The Group."
        subtitle="Every TAVEWO product is built on shared infrastructure with same engineering rigor, same trust standards, and same enterprise-grade delivery."
      />

      {/* Image gallery */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-10 md:pt-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-1.5">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={i * 0.1} y={16}>
              <img src={g.src} alt={g.alt} className="h-56 sm:h-72 w-full object-cover hover:scale-90 transition-transform duration-500" />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Product cards */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 space-y-8">
        {products.map((p) => (
          <MotionDiv
            key={p.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            {...cardHover}
            className="border border-slate-200 rounded-2xl p-6 md:p-10 grid md:grid-cols-[1fr_1.4fr] gap-8 items-start bg-white"
          >
            <div>
              <p className="text-brand font-semibold mb-2">{p.eyebrow}</p>
              <h2 className="text-3xl font-extrabold mb-6">{p.title}</h2>
              <MotionButton
                {...buttonHover}
                className="inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition-colors"
              >
                {p.cta} <ArrowRight size={18} />
              </MotionButton>
            </div>
            <div>
              <p className="text-slate-600 leading-relaxed mb-6">{p.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Check size={16} className="text-brand shrink-0 bg-brand/10 rounded-full" />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </MotionDiv>
        ))}
      </section>
    </div>
  );
}
