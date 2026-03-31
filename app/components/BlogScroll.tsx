import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, useMotionValue } from "framer-motion";
import { useNavigate } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

// ─── Mock Data ──────────────────────────────────────────────────────────────
const ARTICLES = [
  { id: 1, slug: "deep-clean-kitchen-guide", category: "kitchen", readTime: 5, date: "2024-11-12", image: "/kitchen_cleaing.jpg" },
  { id: 2, slug: "bathroom-mold-prevention", category: "bathroom", readTime: 4, date: "2024-11-05", image: "/maid.jpg" },
  { id: 3, slug: "eco-friendly-cleaning-products", category: "tips", readTime: 6, date: "2024-10-28", image: "/kitchen_cleaing.jpg" },
  { id: 4, slug: "weekly-cleaning-schedule", category: "tips", readTime: 3, date: "2024-10-20", image: "/maid.jpg" },
  { id: 5, slug: "carpet-stain-removal", category: "general", readTime: 5, date: "2024-10-14", image: "/kitchen_cleaing.jpg" },
];

// ─── Sub-Component: Individual Card ────────────────────────────────────────
const ArticleCard = ({ article, index, t }: any) => {
  const navigate = useNavigate();
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    const dragDistanceX = Math.abs(e.clientX - dragStart.x);
    const dragDistanceY = Math.abs(e.clientY - dragStart.y);

    // If the mouse moved less than 6 pixels, treat it as a click
    if (dragDistanceX < 6 && dragDistanceY < 6) {
      navigate(`/articles/${article.slug}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-[300px] md:w-[400px] shrink-0 select-none"
    >
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="group block bg-white rounded-2xl border border-zinc-100 overflow-hidden hover:border-(--primary-color)/30 hover:shadow-xl transition-all duration-500 cursor-pointer"
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden h-64 pointer-events-none">
          <img
          loading="lazy"
            src={article.image}
            alt={article.slug}
            draggable="false"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-widest text-neutral-600 rounded-full border border-zinc-200">
            {t(`articles.category.${article.category}`, article.category)}
          </span>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="flex items-center gap-2 text-[11px] text-neutral-400 mb-4">
            <span>{new Date(article.date).toLocaleDateString()}</span>
            <span>•</span>
            <span>{article.readTime} {t("articles.min_read", "min read")}</span>
          </div>

          <h3 className="text-xl font-medium leading-snug mb-4 group-hover:text-(--primary-color) transition-colors">
            {t(`articles.${article.slug}.title`, article.slug.replace(/-/g, " "))}
          </h3>

          <p className="text-sm text-neutral-500 font-light leading-relaxed line-clamp-2 mb-8">
            {t(`articles.${article.slug}.excerpt`, "Expert cleaning advice for your home.")}
          </p>

          <div className="flex items-center gap-2 text-xs text-(--primary-color) font-semibold uppercase tracking-wider">
            {t("articles.read_more", "Read Article")}
            <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Component ─────────────────────────────────────────────────────────
export default function ArticlesCarousel() {
  const { t } = useTranslation();
  const [constraints, setConstraints] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      setConstraints(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 bg-[#FDFCFB] overflow-hidden">
      <div className="container-x mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="inline-block text-xs uppercase tracking-[0.3em] text-gray-500 mb-4">
              {t("blog.subtitle", "Journal")}
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 tracking-tight">
              {t("blog.title", "Insights & Care")}
            </h2>
          </div>
        </div>

        {/* Carousel Container */}
        <motion.div 
          ref={carouselRef}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            drag="x"
            style={{ x }}
            dragConstraints={{ right: 0, left: -constraints }}
            dragElastic={0.1}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-8 w-max pb-8"
          >
            {ARTICLES.map((article, idx) => (
              <ArticleCard key={article.id} article={article} index={idx} t={t} />
            ))}
          </motion.div>
        </motion.div>

        {/* Progress Bar (Visual Indicator) */}
        <div className="max-w-xs mx-auto mt-4 bg-zinc-100 h-1 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-(--primary-color)"
            style={{
              width: "100%",
              scaleX: useMotionValue(0), // You can bind this to the 'x' value for a real scroll bar
              transformOrigin: "left"
            }}
          />
        </div>
      </div>
    </section>
  );
}