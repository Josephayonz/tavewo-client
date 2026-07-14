// Static news content. Previously backed by MongoDB — now hardcoded here so the
// News pages don't depend on the backend. To add a new article, add an object
// to this array; both the listing page and the detail page read from it.

const articles = [
  {
    slug: "strategic-partnership-fleet-security",
    title: "Tavewo Ventures Announces Strategic Partnership To Enhance Fleet Security Across Nigeria",
    category: "Company news",
    image: "/images/news1.jpg",
    publishedAt: "2025-03-06",
    featured: true,
    excerpt: "This partnership will strengthen our operational capacity and deliver greater value to our clients across the globe.",
    content: [
      "TAVEWO Ventures Ltd today announced a strategic partnership aimed at enhancing fleet security operations across Nigeria, marking another step in the group's mission to build enterprise-grade infrastructure for African businesses.",
      "The partnership will integrate advanced tracking, verification and asset protection capabilities into TAVEWO's existing fleet network, strengthening operational capacity across the Verscar and RespondrNG platforms.",
      "\"This is about giving our clients confidence that their assets are protected end-to-end,\" said a TAVEWO spokesperson. \"Fleet security isn't an add-on for us — it's core infrastructure.\"",
      "The rollout begins in Lagos and will expand to other major logistics corridors over the coming quarters, with the group's engineering teams building the integration on top of CoreMatrix's existing automation platform.",
    ],
  },
  {
    slug: "integrated-ecosystem-strategy",
    title: "TAVEWO Ventures Unveils Integrated Ecosystem Strategy.",
    category: "Company news",
    image: "/images/news2.jpg",
    publishedAt: "2025-03-06",
    excerpt: "Our new operating model unifies four business divisions under a shared engineering platform.",
    content: [
      "TAVEWO Ventures has unveiled a new integrated ecosystem strategy that unifies its four business divisions — CoreMatrix, Global Assets & Capital, Fleet Telematics, and its product portfolio — under a single shared engineering platform.",
      "The move is designed to reduce duplication across divisions, allowing each operating company to draw on the same core infrastructure while maintaining its own P&L, team and sector expertise.",
      "Leadership described the strategy as the natural next step after several years of building out individual divisions independently. \"We were already sharing capital and reach — now we're formalising the shared engineering layer that makes the whole group compound faster,\" the Group CEO noted.",
    ],
  },
  {
    slug: "corematrix-ai-dispatch-engine",
    title: "CoreMatrix Launches AI-Powered Dispatch Engine.",
    category: "Technology news",
    image: "/images/news3.jpg",
    publishedAt: "2025-04-06",
    excerpt: "Machine-learning routing that reduces response times across partner fleets.",
    content: [
      "CoreMatrix, TAVEWO's enterprise technology arm, has launched a new AI-powered dispatch engine designed to reduce response times across partner fleets nationwide.",
      "The engine uses machine-learning routing models trained on historical dispatch data to predict the fastest, most reliable paths in real time — accounting for traffic patterns, vehicle availability and incident type.",
      "Early testing across RespondrNG's emergency response network showed measurable improvements in average response time, with the system continuing to learn and improve as more dispatch data flows through the platform.",
      "The dispatch engine is now being integrated into CoreMatrix's broader automation suite, which also powers CRM systems and chatbots used across the group's operating companies.",
    ],
  },
  {
    slug: "nationwide-fleet-milestone",
    title: "Nationwide Fleet Operations Reach New Milestone.",
    category: "Logistics news",
    image: "/images/news4.jpg",
    publishedAt: "2025-06-08",
    excerpt: "500+ vehicles now onboarded to the Verscar work-and-own marketplace.",
    content: [
      "Verscar, TAVEWO's work-and-own mobility marketplace, has surpassed 500 vehicles onboarded across its verified driver and operator network — a milestone that reflects growing demand for structured, escrow-backed vehicle arrangements in Nigeria's mobility sector.",
      "The marketplace connects vehicle owners with vetted drivers and operators, using escrow-backed payments and asset protection to reduce the risk traditionally associated with informal work-and-own arrangements.",
      "\"Every vehicle on the platform goes through the same verification pipeline, whether it's the first or the five-hundredth,\" said a Verscar operations lead. \"That consistency is what builds trust with both owners and drivers.\"",
    ],
  },
  {
    slug: "capital-closes-land-acquisition",
    title: "TAVEWO Capital Closes Commercial Land Acquisition.",
    category: "Real Estate news",
    image: "/images/news5.jpg",
    publishedAt: "2025-07-03",
    excerpt: "Expanding the group's real estate portfolio in high-growth corridors.",
    content: [
      "TAVEWO Capital Holdings has closed a new commercial land acquisition, expanding the group's real estate portfolio in one of Nigeria's high-growth development corridors.",
      "The acquisition forms part of TAVEWO Capital's broader land banking strategy, which pairs long-term asset appreciation with near-term infrastructure development opportunities for enterprise clients.",
      "The site is expected to support future commercial real estate and infrastructure projects, with planning already underway in coordination with the group's asset procurement and structured investments teams.",
    ],
  },
  {
    slug: "state-of-enterprise-mobility",
    title: "State Of Enterprise Mobility In West Africa.",
    category: "Logistics news",
    image: "/images/news6.jpg",
    publishedAt: "2025-08-09",
    excerpt: "Our annual report on connected vehicles, telematics and asset protection.",
    content: [
      "TAVEWO's annual State of Enterprise Mobility report examines the growing role of connected vehicles, telematics and asset protection technology across West Africa's logistics and fleet sectors.",
      "Drawing on data from Verscar and RespondrNG's combined fleet network, the report highlights rising adoption of GPS-based tracking, automated dispatch and escrow-backed transactions as enterprise fleets look to reduce risk and improve utilisation.",
      "The report also flags nationwide reach and asset protection as the two areas enterprise clients care most about when evaluating mobility partners — a trend the group expects to shape its product roadmap through the next year.",
    ],
  },
  {
    slug: "respondrng-partners-emergency",
    title: "RespondrNG Partners With Emergency Response Agencies.",
    category: "Technology news",
    image: "/images/news7.jpg",
    publishedAt: "2025-12-02",
    excerpt: "New APIs enable real-time incident coordination across jurisdictions.",
    content: [
      "RespondrNG, TAVEWO's emergency operations platform, has partnered with several emergency response agencies to enable real-time incident coordination across jurisdictions.",
      "The partnership introduces new open APIs that let agencies plug directly into RespondrNG's dispatch console, GPS tracking and incident management tools — reducing the friction of coordinating a response across multiple teams and geographies.",
      "\"Emergency response shouldn't be slowed down by systems that don't talk to each other,\" said a RespondrNG product lead. \"These APIs mean an incident reported in one jurisdiction can be routed to the nearest available unit, regardless of which agency owns that unit.\"",
    ],
  },
];

export default articles;

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category) {
  if (!category || category === "All") return articles;
  return articles.filter((a) => a.category === category);
}
