import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HeroBanner from "../components/HeroBanner";
import Reveal, { StaggerGroup, staggerItem } from "../components/Reveal";
import { MotionLink, MotionDiv, buttonHover, cardHover } from "../lib/motion";
import articles, { getArticlesByCategory } from "../data/articles";

const TABS = ["All", "Company news", "Technology news", "Logistics news", "Real Estate news"];

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function News() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = useMemo(() => getArticlesByCategory(activeTab), [activeTab]);
  const featured = useMemo(
    () => filtered.find((a) => a.featured) || filtered[0],
    [filtered]
  );
  const rest = filtered.filter((a) => a.slug !== featured?.slug);

  return (
    <div>
      <HeroBanner
        eyebrow="News & Insight"
        title="What We're Building, Shipping And Learning."
        subtitle="Stay updated with the latest news, insight and industry trends from across TAVEWO ecosystem."
      />

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-10">
        {/* Filter tabs */}
        <Reveal className="flex flex-wrap gap-3 mb-10">
          {TABS.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-5 py-2 rounded-full text-sm font-medium border transition-colors ${
                activeTab === tab
                  ? "bg-brand text-white border-brand"
                  : "border-slate-300 text-slate-700 hover:border-brand"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.length === 0 && (
              <p className="text-slate-500 text-center py-16">
                No articles in this category yet.
              </p>
            )}

            {featured && (
              <div className="grid md:grid-cols-2 gap-8 items-center border border-slate-200 rounded-2xl overflow-hidden mb-10">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="h-64 md:h-80 w-full rounded-2xl ml-2 object-cover hover:scale-102 transition-transform duration-500"
                />
                <div className="p-6 md:pr-10">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="border border-brand text-brand text-xs font-semibold rounded-full px-3 py-1">
                      {featured.category}
                    </span>
                    <span className="text-sm text-slate-500">{formatDate(featured.publishedAt)}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight">
                    {featured.title}
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">{featured.excerpt}</p>
                  <MotionLink
                    to={`/news/${featured.slug}`}
                    {...buttonHover}
                    className="inline-flex rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition-colors"
                  >
                    Read More
                  </MotionLink>
                </div>
              </div>
            )}

            {rest.length > 0 && (
              <StaggerGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {rest.map((a) => (
                  <MotionDiv
                    key={a.slug}
                    variants={staggerItem}
                    {...cardHover}
                    className="border border-slate-200 rounded-2xl overflow-hidden flex flex-col bg-white"
                  >
                    <img src={a.image} alt={a.title} className="h-44 w-full object-cover" />
                    <div className="p-5 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="border border-brand text-brand text-xs font-semibold rounded-full px-3 py-1">
                          {a.category}
                        </span>
                        <span className="text-xs text-slate-500">{formatDate(a.publishedAt)}</span>
                      </div>
                      <h3 className="font-bold mb-2 leading-snug">{a.title}</h3>
                      <p className="text-sm text-slate-600 mb-4 flex-1">{a.excerpt}</p>
                      <MotionLink
                        to={`/news/${a.slug}`}
                        {...buttonHover}
                        className="inline-flex rounded-lg bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
                      >
                        Read More
                      </MotionLink>
                    </div>
                  </MotionDiv>
                ))}
              </StaggerGroup>
            )}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
