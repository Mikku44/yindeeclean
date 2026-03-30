import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { useState } from "react";
import { ARTICLES } from "~/const/posts";
import { FaArrowRightLong } from "react-icons/fa6";



const CATEGORIES = ["all", "general", "kitchen", "bathroom", "tips"];

// ─── Helpers ─────────────────────────────────────────────────────────────────
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const stagger = (i) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
});

// ─── Component ────────────────────────────────────────────────────────────────
export default function Articles() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === activeCategory);

  const featured = ARTICLES.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured || activeCategory !== "all");

  return (
    <main className="min-h-screen bg-[#FDFCFB]">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[440px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/kitchen_cleaing.jpg"
            className="w-full h-full object-cover"
            alt="Articles hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-(--primary-color)/10 mix-blend-multiply" />
        </div>

        <div className="container-x w-full mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="text-white space-y-5 max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.35em] text-white/60">
              {t("articles.subtitle", "Cleaning Knowledge")}
            </span>

            <h1 className="text-4xl md:text-6xl leading-[1.05]">
              <span className="block">
                {t("articles.title_line_1", "Tips &")}
              </span>
              <span className="block italic font-light ml-6 text-white/70">
                {t("articles.title_line_2", "Guides")}
              </span>
            </h1>

            <p className="text-sm text-white/70 max-w-sm">
              {t(
                "articles.description",
                "Expert advice, step-by-step guides, and professional secrets to keep every corner of your home spotless."
              )}
            </p>

            <div className="flex gap-2 text-xs text-white/50">
              {["Pro Tips", "•", "How-To Guides", "•", "Eco-Friendly"].map(
                (tag, i) => (
                  <span key={i}>{tag}</span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED ARTICLE ─────────────────────────────────────────────── */}
      {activeCategory === "all" && featured && (
        <section className="py-20 bg-white">
          <div className="container-x mx-auto px-6">
            <motion.div {...fadeInUp} className="mb-10">
              <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase">
                {t("articles.featured_label", "Featured Article")}
              </span>
            </motion.div>

            <motion.div {...fadeInUp}>
              <NavLink
                to={`/articles/${featured.slug}`}
                className="group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-zinc-100 hover:border-(--primary-color)/30 transition-all duration-500 shadow-sm hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-72 lg:h-auto">
                  <img
                    src={featured.image}
                    alt="featured"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute top-5 left-5 px-3 py-1 bg-(--primary-color) text-white text-[10px] uppercase tracking-widest rounded-full">
                    {t(`articles.category.${featured.category}`, featured.category)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-14 flex flex-col justify-center bg-white">
                  <p className="text-xs text-neutral-400 mb-4">
                    {new Date(featured.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {featured.readTime} {t("articles.min_read", "min read")}
                  </p>

                  <h2 className="text-3xl font-light leading-snug mb-5 group-hover:text-(--primary-color) transition-colors duration-300">
                    {t(
                      `articles.${featured.slug}.title`,
                      "The Complete Guide to Deep Cleaning Your Kitchen"
                    )}
                  </h2>

                  <p className="text-sm text-neutral-500 leading-relaxed mb-8">
                    {t(
                      `articles.${featured.slug}.excerpt`,
                      "From degreasing the stovetop to sanitising inside the fridge — a professional cleaner's room-by-room walkthrough that leaves nothing behind."
                    )}
                  </p>

                  <span className="flex items-center gap-2 text-sm text-(--primary-color) font-medium">
                    {t("articles.read_more", "Read Article")}
                    <FaArrowRightLong className="text-xs transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </NavLink>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── ARTICLE GRID ─────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container-x mx-auto px-6">

          {/* Header + Filter */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-[10px] tracking-[0.4em] text-neutral-400 uppercase">
                {t("articles.grid_label", "All Articles")}
              </span>
              <h2 className="text-4xl font-light mt-2">
                {t("articles.grid_title", "Browse by Topic")}
              </h2>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs border transition-all duration-200 capitalize ${
                    activeCategory === cat
                      ? "bg-(--primary-color) text-white border-(--primary-color)"
                      : "border-zinc-200 text-neutral-500 hover:border-(--primary-color)/50"
                  }`}
                >
                  {t(`articles.category.${cat}`, cat)}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article, idx) => (
              <motion.div key={article.id} {...stagger(idx)}>
                <NavLink
                  to={`/articles/${article.slug}`}
                  className="group block bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:border-(--primary-color)/30 hover:shadow-md transition-all duration-400"
                >
                  {/* Thumbnail */}
                  <div className="relative overflow-hidden h-52">
                    <img
                      src={article.image}
                      alt={article.slug}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest text-neutral-600 rounded-full border border-zinc-200">
                      {t(`articles.category.${article.category}`, article.category)}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-7">
                    <p className="text-[11px] text-neutral-400 mb-3">
                      {new Date(article.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      · {article.readTime}{" "}
                      {t("articles.min_read", "min read")}
                    </p>

                    <h3 className="text-lg font-medium leading-snug mb-3 group-hover:text-(--primary-color) transition-colors duration-300">
                      {t(
                        `articles.${article.slug}.title`,
                        article.slug
                          .replace(/-/g, " ")
                          .replace(/\b\w/g, (c) => c.toUpperCase())
                      )}
                    </h3>

                    <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2 mb-6">
                      {t(
                        `articles.${article.slug}.excerpt`,
                        "Practical, expert-backed advice to tackle this cleaning challenge efficiently and safely."
                      )}
                    </p>

                    <span className="flex items-center gap-2 text-xs text-(--primary-color) font-medium">
                      {t("articles.read_more", "Read Article")}
                      <FaArrowRightLong className="text-[10px] transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {rest.length === 0 && (
            <div className="text-center py-24 text-neutral-400 text-sm">
              {t("articles.empty", "No articles found in this category yet.")}
            </div>
          )}

        </div>
      </section>

      {/* ── NEWSLETTER / CTA BAND ────────────────────────────────────────── */}
      <section className="py-24 bg-(--primary-color) text-white">
        <div className="container-x mx-auto px-6 text-center">
          <span className="text-[10px] tracking-[0.4em] text-white/50 uppercase">
            {t("articles.cta_label", "Stay Updated")}
          </span>

          <h2 className="text-4xl font-light mt-4 mb-5">
            {t("articles.cta_title", "Get Cleaning Tips Delivered")}
          </h2>

          <p className="text-white/70 text-sm max-w-md mx-auto mb-10">
            {t(
              "articles.cta_desc",
              "Join thousands of homeowners who receive our weekly guides, seasonal checklists, and pro-cleaner secrets straight to their inbox."
            )}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
            <input
              type="email"
              placeholder={t("articles.cta_placeholder", "Your email address")}
              className="flex-1 px-5 py-2.5 rounded-full text-sm text-black outline-none placeholder-neutral-400"
            />
            <button className="px-6 py-2.5 bg-white text-(--primary-color) rounded-full text-sm font-medium shrink-0 hover:bg-white/90 transition">
              {t("articles.cta_btn", "Subscribe")}
            </button>
          </div>

          <p className="text-xs text-white/40 mt-5">
            {t("articles.cta_trust", "No spam. Unsubscribe anytime.")}
          </p>
        </div>
      </section>

    </main>
  );
}