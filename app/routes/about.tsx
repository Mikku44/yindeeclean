import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {  FaAward, FaLeaf, FaShieldHeart } from "react-icons/fa6";
import { NavLink } from "react-router";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

export default function About() {
  const { t } = useTranslation();

  const VALUES = [
    {
      icon: <FaShieldHeart className="text-2xl" />,
      title: t("about.values.trust_title", "Unwavering Trust"),
      desc: t("about.values.trust_desc", "Every cleaner is strictly vetted and trained to treat your home with the utmost respect.")
    },
    {
      icon: <FaLeaf className="text-2xl" />,
      title: t("about.values.eco_title", "Eco-Conscious"),
      desc: t("about.values.eco_desc", "We prioritize non-toxic, sustainable products that are safe for your family and pets.")
    },
    {
      icon: <FaAward className="text-2xl" />,
      title: t("about.values.quality_title", "Premium Quality"),
      desc: t("about.values.quality_desc", "We don't just clean; we restore your space to a state of clinical-grade hygiene.")
    }
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      
      {/* ── HERO SECTION ────────────────────────────────────────────────── */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/maid.jpg" 
            className="w-full h-full object-cover" 
            alt="Yindee Clean Team" 
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-x relative z-10 text-center text-white px-6">
          <motion.span 
            {...fadeInUp}
            className="text-[11px] uppercase tracking-[0.4em] text-white/70 block mb-4"
          >
            {t("about.hero_subtitle", "Our Story")}
          </motion.span>
          <motion.h1 
            {...fadeInUp}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-light leading-tight"
          >
            {t("about.hero_title_1", "Bringing Happiness")} <br />
            <span className="italic font-extralight text-white/80">
              {t("about.hero_title_2", "To Every Home")}
            </span>
          </motion.h1>
        </div>
      </section>

      {/* ── MISSION SECTION ─────────────────────────────────────────────── */}
      <section className="py-24 border-b border-zinc-100">
        <div className="container-x mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-light mb-8 leading-snug">
                {t("about.mission_title", "We believe a clean space is a clear mind.")}
              </h2>
              <div className="space-y-6 text-neutral-500 font-light leading-relaxed">
                <p>
                  {t("about.mission_p1", "Founded in 2026, Yindee Clean started with a simple observation: modern life is busy, and the home should be a sanctuary, not a chore.")}
                </p>
                <p>
                  {t("about.mission_p2", "The name 'Yindee' (ยินดี) reflects our core philosophy—we are genuinely happy to serve. We combined traditional Thai hospitality with professional-grade cleaning technology to create a service that is reliable, thorough, and heart-centered.")}
                </p>
              </div>
            </motion.div>

            <motion.div 
              {...fadeInUp}
              className="relative aspect-square rounded-[3rem] overflow-hidden"
            >
              <img src="/kitchen_cleaing.jpg" className="w-full h-full object-cover" alt="Cleaning detail" />
            
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container-x mx-auto px-6 text-center mb-20">
          <motion.span {...fadeInUp} className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-4 block">
            {t("about.values_label", "Why Choose Us")}
          </motion.span>
          <motion.h2 {...fadeInUp} className="text-4xl font-light">
            {t("about.values_title", "The Yindee Standard")}
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="container-x mx-auto px-6 grid md:grid-cols-3 gap-12"
        >
          {VALUES.map((val, i) => (
            <motion.div 
              key={i}
              variants={fadeInUp}
              className="p-10 rounded-3xl border border-zinc-100 bg-[#FDFCFB] hover:border-(--primary-color)/20 hover:shadow-lg transition-all duration-500"
            >
              <div className="w-14 h-14 bg-(--primary-color)/5 rounded-2xl flex items-center justify-center text-(--primary-color) mb-8">
                {val.icon}
              </div>
              <h3 className="text-xl font-medium mb-4">{val.title}</h3>
              <p className="text-sm text-neutral-500 font-light leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────────────────── */}
      <section className="py-32">
        <div className="container-x mx-auto px-6">
          <motion.div 
            {...fadeInUp}
            className="bg-(--primary-color) rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
          >
            {/* Decorative background circle */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            
            <h2 className="text-4xl md:text-6xl font-light mb-8 max-w-2xl mx-auto">
              {t("about.cta_title", "Experience the joy of a spotless home.")}
            </h2>
            <NavLink to="/booking" className="px-10 py-4 bg-white text-(--primary-color) rounded-full font-medium text-sm hover:bg-neutral-100 transition-colors shadow-xl">
              {t("about.cta_btn", "Book Your Cleaning")}
            </NavLink>
          </motion.div>
        </div>
      </section>
    </main>
  );
}