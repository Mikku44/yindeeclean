import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";
import FAQSection from "~/components/FAQSection";

export default function UpholsteryCleaning() {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const services = [
    { key: "sofa", icon: "🛋️" },
    { key: "mattress", icon: "🛏️" },
    { key: "car", icon: "🚗" },
    { key: "stain", icon: "✨" }
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB]">
      <section id="hero" className="relative min-h-[520px] flex items-center overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/sofa.jpg"
            className="w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-(--primary-color)/10 mix-blend-multiply" />
        </div>

        <div className="container-x mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">

          {/* Content */}
          <div className="lg:col-span-7 space-y-6 text-white">

            <motion.div {...fadeInUp}>
              <span className="inline-block text-[11px] uppercase tracking-[0.35em] text-white/70 mb-3">
                {t("upholstery.subtitle")}
              </span>

              <h1 className="text-4xl md:text-6xl leading-[1.05] tracking-tight">
                <span className="block">{t("upholstery.title_line_1")}</span>
                <span className="block italic font-light ml-6 text-white/70">
                  {t("upholstery.title_line_2")}
                </span>
              </h1>
            </motion.div>

            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="max-w-md text-sm md:text-base text-white/70 leading-relaxed"
            >
              {t("upholstery.description")}
            </motion.p>

            {/* Tags */}
            <div className="flex gap-2 text-xs text-white/60">
              {t("upholstery.tags", { returnObjects: true }).map((tag, i) => (
                <span key={i} className="flex items-center gap-2">
                  {tag}
                  {i < 2 && <span>•</span>}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-3 pt-2 items-center">

              <motion.div {...fadeInUp} transition={{ delay: 0.3 }}>
                <NavLink to={"/booking"} className="px-6 py-2.5  bg-(--primary-color) rounded-full text-white text-sm font-medium shadow hover:shadow-md transition">
                  {t("upholstery.cta_primary")}
                </NavLink>
              </motion.div>

              <motion.div {...fadeInUp} transition={{ delay: 0.35 }}>
                <NavLink
                  to="/services"
                  className="px-5 py-2.5 rounded-full border border-white/30 text-white/80 text-sm flex items-center gap-2 hover:bg-white/10 transition"
                >
                  {t("upholstery.cta_secondary")}
                  <FaArrowRightLong className="text-xs" />
                </NavLink>
              </motion.div>

            </div>

            {/* Trust line */}
            <p className="text-xs text-white/50 pt-2">
              {t("upholstery.trust")}
            </p>

          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5"
          >
            <div className="relative w-[520px] max-w-full ml-auto mt-10 lg:mt-16">
              <img
                src="/sofa-cleaning.png"
                className="w-full h-auto object-cover drop-shadow-xl"
                alt=""
              />
            </div>
          </motion.div>

        </div>

      </section>

      {/* Modern Grid - No Borders, Clean Spacing */}
      <section className="py-24 bg-[#FDFCFB]">
        <div className="container-x mx-auto px-6">

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div {...fadeInUp} className="max-w-xl">
              <span className="inline-block text-[10px] uppercase tracking-[0.4em] text-neutral-400 mb-4">
                {t("upholstery.features_subtitle")}
              </span>
              <h2 className="text-5xl md:text-6xl font-light text-neutral-900 tracking-tight">
                {t("upholstery.features_title")}
              </h2>
            </motion.div>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2 }}
              className="max-w-xs text-neutral-500 font-light leading-relaxed border-l border-neutral-200 pl-8"
            >
              {t("upholstery.features_main_desc")}
            </motion.p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, idx) => (
              <motion.div
                key={idx}
                {...fadeInUp}
                transition={{ delay: 0.1 * idx }}
                className="group relative bg-white rounded-2xl p-8 transition-all duration-500 
                shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-neutral-200 cursor-default "
              >
                {/* Number Circle with Primary Color */}
                <div className="bg-(--primary-color) size-10 flex items-center justify-center
            rounded-full mb-8 text-white font-medium text-sm shadow-lg shadow-(--primary-color)/20
            transition-transform duration-500 group-hover:scale-110">
                  {idx + 1}
                </div>

                <h3 className="text-2xl font-light text-neutral-900 mb-4 transition-colors">
                  {t(`upholstery.features.${item.key}`)}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed font-light">
                  {t(`upholstery.features.${item.key}_desc`)}
                </p>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section - Split Layout */}
      <section className="py-24 bg-white border-y border-neutral-100">
        <div className="container-x mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1470&auto=format&fit=crop"
                className="w-full h-full object-cover transition-all duration-1000"
                alt="Deep Clean Process"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-10 -right-10 bg-(--primary-color) text-white p-10 rounded-full w-40 h-40 flex items-center justify-center text-center leading-tight uppercase tracking-widest text-[10px] font-bold shadow-xl">
              Certified <br /> Hygiene
            </div>
          </motion.div>

          <div className="space-y-10">
            <motion.div {...fadeInUp}>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-4">
                {t("upholstery.process.label")}
              </span>
              <h2 className="text-5xl font-light text-neutral-900 tracking-tight">
                {t("upholstery.process.title")}
              </h2>
            </motion.div>

            <p className="text-lg text-neutral-500 font-light leading-relaxed">
              {t("upholstery.process.desc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {["Fiber-safe", "Eco-friendly", "Odorless", "Fast-drying"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-neutral-600 font-light">
                  <div className="w-1.5 h-1.5 rounded-full bg-(--primary-color)" />
                  {item}
                </div>
              ))}
            </div>

            <NavLink to="/contact" className="flex items-center gap-4 text-neutral-900 group font-medium uppercase tracking-[0.2em] text-xs pt-8">
              {t("upholstery.cta")}
              <div className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </div>
            </NavLink >
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <FAQSection namespace="upholstery_faq" />
    </main>
  );
}