import { useParams, useNavigate, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { motion, useScroll, useSpring } from "framer-motion";
import { FaArrowLeftLong, FaRegClock, FaRegCalendar } from "react-icons/fa6";
import { NavLink } from "react-router";
import { FaChevronRight } from "react-icons/fa";

// Reuse the same mock data or import from a shared file
const ARTICLES = [
  { id: 1, slug: "deep-clean-kitchen-guide", category: "kitchen", readTime: 5, date: "2024-11-12", image: "/kitchen_cleaing.jpg" },
  { id: 2, slug: "bathroom-mold-prevention", category: "bathroom", readTime: 4, date: "2024-11-05", image: "/maid.jpg" },
  { id: 3, slug: "eco-friendly-cleaning-products", category: "tips", readTime: 6, date: "2024-10-28", image: "/kitchen_cleaing.jpg" },
  // ... rest of your articles
];

export default function ArticleDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const location = useLocation();

  // Split path and filter out empty strings: "/articles/slug" -> ["articles", "slug"]
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Progress bar logic
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-neutral-400">Article not found.</p>
      </div>
    );
  }

  // Find 2 related articles (same category or just others)
  const related = ARTICLES.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <main className="min-h-screen bg-[#FDFCFB] pb-24 pt-10">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-(--primary-color) origin-left z-50"
        style={{ scaleX }}
      />

      {/* Floating Back Button */}
      <nav className="sticky flex gap-2 items-center top-6 z-40 container-x mx-auto px-6 pointer-events-none">
        <button
          onClick={() => navigate(-1)}
          className="pointer-events-auto group flex items-center gap-3 px-5 py-2.5 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full text-xs font-medium hover:border-(--primary-color)/40 transition-all shadow-sm"
        >
          <FaArrowLeftLong className="transition-transform group-hover:-translate-x-1" />
          {t("articles.back", "Back to Articles")}
        </button>

        {/* Breadcrumbs */}
        <div className="pointer-events-auto flex items-center gap-2 px-5 py-2.5 bg-white/60 backdrop-blur-md border border-zinc-100 rounded-full text-[10px] uppercase tracking-wider shadow-sm">
          <NavLink to="/" className="text-neutral-400 hover:text-(--primary-color) transition-colors">
            {t("nav.home", "Home")}
          </NavLink>

          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return (
              <div key={to} className="flex items-center gap-2">
                <FaChevronRight className="text-[8px] text-neutral-300" />
                {last ? (
                  <span className="text-(--primary-color) font-medium truncate max-w-[120px] md:max-w-none">
                    {/* Optionally use t() for the slug or a helper to prettify it */}
                    {value.replace(/-/g, " ")}
                  </span>
                ) : (
                  <NavLink
                    to={to}
                    className="text-neutral-400 hover:text-(--primary-color) transition-colors"
                  >
                    {t(`nav.${value}`, value.replace(/-/g, " "))}
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>

      </nav>


      {/* Hero Header */}
      <header className="pt-12 pb-20">
        <div className="container-x mx-auto px-6 max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-(--primary-color)/5 text-(--primary-color) text-[10px] uppercase tracking-widest rounded-full mb-6"
          >
            {t(`articles.category.${article.category}`, article.category)}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light leading-[1.1] mb-8"
          >
            {t(`articles.${article.slug}.title`)}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 text-xs text-neutral-400"
          >
            <span className="flex items-center gap-2">
              <FaRegCalendar />
              {new Date(article.date).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-2">
              <FaRegClock />
              {article.readTime} {t("articles.min_read")}
            </span>
          </motion.div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="container-x mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <img
            src={article.image}
            alt="article cover"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* Content Area */}
      <section className="container-x mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16 max-w-6xl mx-auto">

          {/* Main Content (Rich Text) */}
          <article className="prose prose-neutral max-w-none prose-headings:font-light prose-p:text-neutral-600 prose-p:leading-relaxed">
            {/* In a real app, you'd use a markdown renderer or dangerouslySetInnerHTML. 
                For now, let's pull from i18n keys.
            */}
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p className="font-medium text-neutral-800 text-xl italic border-l-4 border-(--primary-color) pl-6 py-2">
                {t(`articles.${article.slug}.excerpt`)}
              </p>

              {/* Dummy body text - you'd replace this with your actual content */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h2 className="text-3xl text-neutral-900 pt-8">Preparation is Key</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Professional grade microfiber cloths</li>
                <li>pH neutral cleaning solutions</li>
                <li>Strategic room-by-room approach</li>
              </ul>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mb-6">
                Related Reading
              </h4>
              <div className="space-y-8">
                {related.map((item) => (
                  <NavLink
                    key={item.id}
                    to={`/articles/${item.slug}`}
                    className="group block space-y-3"
                  >
                    <div className="aspect-video rounded-xl overflow-hidden bg-zinc-100">
                      <img src={item.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h5 className="text-sm font-medium leading-snug group-hover:text-(--primary-color) transition-colors">
                      {t(`articles.${item.slug}.title`)}
                    </h5>
                  </NavLink>
                ))}
              </div>
            </div>


          </aside>

        </div>
      </section>
    </main>
  );
}