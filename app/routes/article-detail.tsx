import { useMemo } from "react";
import { useParams, useNavigate, useLocation, useLoaderData } from "react-router";
import { useTranslation } from "react-i18next";
import { FaArrowLeftLong, FaRegClock, FaRegCalendar } from "react-icons/fa6";
import { NavLink } from "react-router";
import { FaChevronRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm"; // Essential for Tables/GFM
import { ARTICLES } from "../repositories/articles";

// --- SSR LOADER ---
// This runs only on the server in SSR mode
export async function loader({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);
  
  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }

  // Find related articles on the server
  const related = ARTICLES.filter((a) => a.slug !== params.slug).slice(0, 2);

  return { article, related };
}

export default function ArticleDetail() {
  // 1. Get data from the SSR Loader
  const { article, related } = useLoaderData<typeof loader>();
  
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();

  const currentLang = (i18n.language || "en") as "en" | "th";

  // 2. Performance: Memoize localized data based on the current i18n state
  const data = useMemo(() => {
    return article.translations[currentLang] || article.translations.en;
  }, [article, currentLang]);

  const breadcrumbs = useMemo(
    () => pathname.split("/").filter(Boolean),
    [pathname]
  );

  return (
    <main className="min-h-screen bg-[#FDFCFB] pb-24 pt-10 antialiased">
      {/* Navigation */}
      <nav className="sticky top-6 z-40 container-x mx-auto px-6 flex gap-2 pointer-events-none">
        <button
          onClick={() => navigate(-1)}
          className="pointer-events-auto flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-zinc-200 rounded-full text-xs font-medium hover:border-zinc-400 transition-colors shadow-sm"
        >
          <FaArrowLeftLong />
          {t("articles.back", "Back")}
        </button>

        <div className="pointer-events-auto flex items-center gap-2 px-5 py-2.5 bg-white/70 backdrop-blur-sm border border-zinc-100 rounded-full text-[10px] uppercase tracking-wider shadow-sm overflow-hidden">
          <NavLink to="/" className="text-neutral-400 hover:text-black transition-colors whitespace-nowrap">
            {t("nav.home", "Home")}
          </NavLink>

          {breadcrumbs.map((value, index) => {
            const isLast = index === breadcrumbs.length - 1;
            const to = `/${breadcrumbs.slice(0, index + 1).join("/")}`;
            return (
              <div key={to} className="flex items-center gap-2">
                <FaChevronRight className="text-[8px] text-neutral-300 shrink-0" />
                {isLast ? (
                  <span className="text-black font-medium truncate max-w-[100px] md:max-w-none">
                    {data.title}
                  </span>
                ) : (
                  <NavLink to={to} className="text-neutral-400 hover:text-black transition-colors whitespace-nowrap">
                    {t(`nav.${value}`, value.replace(/-/g, " "))}
                  </NavLink>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Header */}
      <header className="pt-12 pb-16 text-center container-x mx-auto px-6 max-w-4xl">
        <span className="inline-block px-3 py-1 bg-zinc-100 text-zinc-600 text-[10px] uppercase tracking-widest rounded-full mb-6">
          {t(`articles.category.${article.category}`, article.category)}
        </span>
        <h1 className="text-4xl md:text-6xl font-light text-zinc-900 leading-tight mb-8">
          {data.title}
        </h1>
        <div className="flex items-center justify-center gap-6 text-xs text-neutral-400">
          <span className="flex items-center gap-2">
            <FaRegCalendar />
            {new Date(article.date).toLocaleDateString(currentLang === "th" ? "th-TH" : "en-US")}
          </span>
          <span className="flex items-center gap-2">
            <FaRegClock />
            {article.readTime} {t("articles.min_read", "min read")}
          </span>
        </div>
      </header>

      {/* Featured Image */}
      <section className="container-x mx-auto px-6 mb-16">
        <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-zinc-100">
          <img
            src={article.image}
            alt={data.title}
            loading="eager" // Important for LCP
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="container-x mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_300px] gap-16 max-w-6xl mx-auto">
          <article className="prose prose-neutral max-w-none lg:prose-lg prose-headings:font-light">
            <p className="text-xl italic border-l-2 border-black pl-6 mb-10 leading-relaxed text-zinc-700">
              {data.excerpt}
            </p>

            <div className={`prose-content antialiased ${currentLang === 'th' ? 'leading-loose' : ''}`}>
               <ReactMarkdown 
                 remarkPlugins={[remarkGfm]} 
                 rehypePlugins={[rehypeRaw]}
               >
                 {data.content}
               </ReactMarkdown>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block space-y-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 mb-6 font-semibold">
                {t("articles.related", "Related Reading")}
              </h4>
              <div className="space-y-10">
                {related.map((item) => {
                  const relatedData = item.translations[currentLang] || item.translations.en;
                  return (
                    <NavLink key={item.id} to={`/articles/${item.slug}`} className="group block space-y-3">
                      <div className="aspect-video rounded-2xl overflow-hidden bg-zinc-100">
                        <img
                          src={item.image}
                          alt={relatedData.title}
                          loading="lazy"
                          className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <h5 className="text-sm font-medium leading-snug group-hover:underline transition-all">
                        {relatedData.title}
                      </h5>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}