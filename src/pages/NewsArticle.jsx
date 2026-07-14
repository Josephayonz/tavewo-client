import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../components/Reveal";
import { MotionLink, buttonHover } from "../lib/motion";
import articles, { getArticleBySlug } from "../data/articles";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function NewsArticle() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);

  return (
    <div>
      <section className="bg-navy text-white">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-64 md:h-96 object-cover opacity-40"
        />
      </section>

      <article className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <Reveal>
          <Link
            to="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand hover:gap-3 transition-all mb-6"
          >
            <ArrowLeft size={16} /> Back to News & Insight
          </Link>

          <div className="flex items-center gap-4 mb-5">
            <span className="border border-brand text-brand text-xs font-semibold rounded-full px-3 py-1">
              {article.category}
            </span>
            <span className="text-sm text-slate-500">{formatDate(article.publishedAt)}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-8">
            {article.title}
          </h1>

          <div className="space-y-5">
            {article.content.map((para, i) => (
              <p key={i} className="text-slate-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </Reveal>
      </article>

      {related.length > 0 && (
        <section className="bg-slate-50 py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <h2 className="text-2xl font-extrabold mb-8">More in {article.category}</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {related.map((a) => (
                <Reveal key={a.slug} y={16}>
                  <Link
                    to={`/news/${a.slug}`}
                    className="block border border-slate-200 rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow"
                  >
                    <img src={a.image} alt={a.title} className="h-36 w-full object-cover" />
                    <div className="p-4">
                      <p className="text-xs text-slate-500 mb-1">{formatDate(a.publishedAt)}</p>
                      <h3 className="font-bold text-sm leading-snug">{a.title}</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-5 md:px-8 py-14 text-center">
        <MotionLink
          to="/news"
          {...buttonHover}
          className="inline-flex rounded-lg bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-dark transition-colors"
        >
          View All Articles
        </MotionLink>
      </section>
    </div>
  );
}
